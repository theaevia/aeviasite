/*
  Reorders import declarations across TS/TSX files with the following grouping:
  1) Side-effect imports (kept at top in original order)
  2) Node built-ins (fs, path, url, etc.)
  3) External packages (e.g., react, express)
  4) Aliases starting with "@" (e.g., @/, @shared, @assets)
  5) Relative parent (../*)
  6) Relative same-dir (./*)

  Within each group: sort by module path alphabetically. Named specifiers are sorted alphabetically.
  Duplicate imports from the same module are merged when safe (no merging across type-only or namespace imports).
*/
import fs from 'fs';
import path from 'path';
import ts from 'typescript';

const projectRoot = process.cwd();
const includeDirs = [
  path.join(projectRoot, 'client', 'src'),
  path.join(projectRoot, 'server'),
  path.join(projectRoot, 'shared'),
];

const builtinModules = new Set([
  'assert','buffer','child_process','cluster','console','constants','crypto','dgram','dns','domain','events',
  'fs','fs/promises','http','http2','https','inspector','module','net','os','path','perf_hooks','process','punycode',
  'querystring','readline','repl','stream','stream/promises','string_decoder','sys','timers','timers/promises','tls','tty','url','util','v8','vm','worker_threads','zlib',
]);

function isTsFile(file: string): boolean {
  return /(\.tsx?|\.mts|\.cts)$/i.test(file);
}

function walk(dir: string, out: string[] = []) {
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir)) {
    const p = path.join(dir, entry);
    const stat = fs.statSync(p);
    if (stat.isDirectory()) {
      walk(p, out);
    } else if (isTsFile(p)) {
      out.push(p);
    }
  }
  return out;
}

type ImportInfo = {
  node: ts.ImportDeclaration;
  module: string;
  isTypeOnly: boolean;
  hasDefault: boolean;
  defaultName?: string;
  hasNamespace: boolean;
  namespaceName?: string;
  named: { name: string; alias?: string }[];
  sideEffectOnly: boolean;
};

function classifyModule(spec: string): 'builtin' | 'external' | 'alias' | 'relParent' | 'relSame' {
  if (spec.startsWith('./')) return 'relSame';
  if (spec.startsWith('../')) return 'relParent';
  if (spec.startsWith('@')) return 'alias';
  if (builtinModules.has(spec)) return 'builtin';
  return 'external';
}

function extractImports(sf: ts.SourceFile): ImportInfo[] {
  const infos: ImportInfo[] = [];
  for (const stmt of sf.statements) {
    if (!ts.isImportDeclaration(stmt)) continue;
    const moduleText = (stmt.moduleSpecifier as ts.StringLiteral).text;
    const clause = stmt.importClause;
    const sideEffectOnly = !clause;
    const isTypeOnly = !!clause?.isTypeOnly;
    let hasDefault = false;
    let defaultName: string | undefined;
    let hasNamespace = false;
    let namespaceName: string | undefined;
    const named: { name: string; alias?: string }[] = [];
    if (clause) {
      if (clause.name) {
        hasDefault = true;
        defaultName = clause.name.getText(sf);
      }
      const bindings = clause.namedBindings;
      if (bindings) {
        if (ts.isNamespaceImport(bindings)) {
          hasNamespace = true;
          namespaceName = bindings.name.getText(sf);
        } else if (ts.isNamedImports(bindings)) {
          for (const el of bindings.elements) {
            const name = el.propertyName ? el.propertyName.getText(sf) : el.name.getText(sf);
            const alias = el.propertyName ? el.name.getText(sf) : undefined;
            named.push({ name, alias });
          }
        }
      }
    }
    infos.push({ node: stmt, module: moduleText, isTypeOnly, hasDefault, defaultName, hasNamespace, namespaceName, named, sideEffectOnly });
  }
  return infos;
}

function buildImportText(group: ImportInfo[]): string {
  const byModule = new Map<string, ImportInfo[]>();
  for (const info of group) {
    const list = byModule.get(info.module) || [];
    list.push(info);
    byModule.set(info.module, list);
  }
  const lines: string[] = [];
  const modules = Array.from(byModule.keys()).sort((a, b) => a.localeCompare(b));
  for (const mod of modules) {
    const infos = byModule.get(mod)!;
    // Separate by type-only and namespace to avoid changing semantics
    const normals = infos.filter(i => !i.isTypeOnly && !i.hasNamespace && !i.sideEffectOnly);
    const namespaces = infos.filter(i => i.hasNamespace && !i.sideEffectOnly);
    const types = infos.filter(i => i.isTypeOnly && !i.sideEffectOnly);
    const sideEffects = infos.filter(i => i.sideEffectOnly);

    if (sideEffects.length) {
      // Keep as-is for side effects (though side effects should be handled elsewhere)
      for (const _ of sideEffects) {
        lines.push(`import '${mod}';`);
      }
    }

    if (normals.length) {
      const hasDefault = normals.some(i => i.hasDefault);
      const defaultName = normals.find(i => i.hasDefault)?.defaultName;
      const namedAll = normals.flatMap(i => i.named);
      const namedUnique: Record<string, { name: string; alias?: string }> = {};
      for (const n of namedAll) {
        const key = (n.alias ? `${n.name} as ${n.alias}` : n.name);
        namedUnique[key] = n;
      }
      const namedSorted = Object.values(namedUnique).sort((a, b) => (a.alias ?? a.name).localeCompare(b.alias ?? b.name));
      const namedText = namedSorted.length
        ? `{ ${namedSorted.map(n => n.alias ? `${n.name} as ${n.alias}` : n.name).join(', ')} }`
        : '';
      const parts = [
        hasDefault && defaultName ? defaultName : '',
        namedText,
      ].filter(Boolean);
      const clause = parts.join(', ');
      lines.push(`import ${clause ? clause + ' from ' : ''}${clause ? '' : ''}'${mod}'${clause ? '' : ''};`.replace("from ''", `from '${mod}'`));
      if (!clause) {
        // When neither default nor named (shouldn't happen), ensure we have a bare import
        lines[lines.length - 1] = `import '${mod}';`;
      }
    }
    for (const ns of namespaces) {
      lines.push(`import * as ${ns.namespaceName} from '${mod}';`);
    }
    for (const ty of types) {
      const namedSorted = ty.named.sort((a, b) => (a.alias ?? a.name).localeCompare(b.alias ?? b.name));
      const namedText = namedSorted.length
        ? `{ ${namedSorted.map(n => n.alias ? `${n.name} as ${n.alias}` : n.name).join(', ')} }`
        : '';
      const parts = [
        ty.hasDefault && ty.defaultName ? ty.defaultName : '',
        namedText,
      ].filter(Boolean);
      const clause = parts.join(', ');
      lines.push(clause ? `import type ${clause} from '${mod}';`.replace("from ''", `from '${mod}'`) : `import type '${mod}';`);
    }
  }
  return lines.join('\n');
}

function processFile(filePath: string) {
  const original = fs.readFileSync(filePath, 'utf8');
  const scriptKind = filePath.endsWith('.tsx') ? ts.ScriptKind.TSX : ts.ScriptKind.TS;
  const sf = ts.createSourceFile(filePath, original, ts.ScriptTarget.Latest, true, scriptKind);
  const imports = extractImports(sf);
  if (imports.length === 0) return; // nothing to do

  // Gather side-effect imports separately and preserve original order
  const sideEffectImports = imports.filter(i => i.sideEffectOnly);
  const nonSideEffect = imports.filter(i => !i.sideEffectOnly);

  // Classify non-side-effect imports into groups
  const groups: Record<string, ImportInfo[]> = { builtin: [], external: [], alias: [], relParent: [], relSame: [] } as any;
  for (const info of nonSideEffect) {
    const grp = classifyModule(info.module);
    (groups as any)[grp].push(info);
  }

  const order: (keyof typeof groups)[] = ['builtin', 'external', 'alias', 'relParent', 'relSame'];
  const parts: string[] = [];
  // Keep side-effect imports at the top in original order
  for (const s of sideEffectImports) {
    parts.push(`import '${s.module}';`);
  }
  for (const key of order) {
    const grp = groups[key];
    if (!grp || grp.length === 0) continue;
    const text = buildImportText(grp);
    if (text.trim()) {
      if (parts.length > 0) parts.push('');
      parts.push(text);
    }
  }

  // Compute span to replace: from first import start to last import end
  const firstImport = imports[0].node;
  const lastImport = imports[imports.length - 1].node;
  const start = firstImport.getFullStart();
  const end = lastImport.getEnd();
  const before = original.slice(0, start);
  const after = original.slice(end);

  const needsLeadingNl = before.endsWith('\n') || before.length === 0 ? '' : '\n';
  const newContent = before + needsLeadingNl + parts.join('\n') + '\n' + after;
  if (newContent !== original) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Reordered imports in: ${path.relative(projectRoot, filePath)}`);
  }
}

function main() {
  const files: string[] = [];
  for (const dir of includeDirs) {
    walk(dir, files);
  }
  files.forEach(processFile);
}

main();
