import 'dotenv/config';
const DEFAULT_PORT = Number(process.env.PORT ?? 3000);
import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, log } from "./vite";
import helmet from "helmet";
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";
import fs from "fs";
import net from "net";


const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();
const isProd = process.env.NODE_ENV === 'production';
const BASE_URL = isProd ? 'https://www.theaevia.co.uk' : `http://localhost:${DEFAULT_PORT}`;
const VALID_ROUTES = [
  '/',
  '/skin',
  '/mind',
  '/team',
  '/journal',
  '/consultations',
  '/consultations/skin',
  '/consultations/mind',
  '/treatments',
  '/gallery',
  '/cancellation',
  // Bio and quiz routes
  '/bio',
  '/tiktok',
  '/quiz',
  // Category routes
  '/categories/anti-wrinkle',
  '/categories/skin-boosters',
  '/categories/microneedling-peels',
  '/categories/polynucleotides',
  '/categories/bio-voluminisation',
  '/categories/consultation',
];

// Security middleware (non-CSP headers)
app.use(helmet({ contentSecurityPolicy: false }));

// CSP policies as single header to avoid multi-CSP intersection issues
type CspDirectives = Record<string, Array<string> | null>;
const cspGlobal: CspDirectives = {
  "default-src": ["'self'"],
  "img-src": ["'self'", "data:", "https:", "blob:"],
  "frame-src": [
    "'self'",
    "https://calendly.com",
    "https://www.calendly.com",
    "https://assets.calendly.com",
    "https://cal.com",
    "https://app.cal.com",
    "https://*.cal.com",
    "https://app.squareup.com",
    "https://book.squareup.com",
    "https://www.googletagmanager.com",
    "https://www.google.com",
    "https://*.google.com",
  ],
  "connect-src": [
    "'self'",
    "https://calendly.com",
    "https://www.calendly.com",
    "https://assets.calendly.com",
    "https://api.calendly.com",
    "https://cal.com",
    "https://app.cal.com",
    "https://api.cal.com",
    "https://*.cal.com",
    "https://app.squareup.com",
    "https://book.squareup.com",
    "https://www.googletagmanager.com",
    "https://www.google-analytics.com",
    "https://region1.google-analytics.com",
    "https://api.github.com",
    "https://github.com",
  ],
  "script-src": [
    "'self'",
    "'unsafe-inline'",
    "https://www.googletagmanager.com",
    "https://assets.calendly.com",
    "https://app.cal.com",
    "https://cal.com",
    "https://*.cal.com",
    "https://app.squareup.com",
    "https://unpkg.com",
  ],
  "script-src-elem": [
    "'self'",
    "'unsafe-inline'",
    "https://www.googletagmanager.com",
    "https://assets.calendly.com",
    "https://app.cal.com",
    "https://cal.com",
    "https://*.cal.com",
    "https://app.squareup.com",
    "https://unpkg.com",
  ],
  "script-src-attr": ["'unsafe-inline'"],
  "style-src": [
    "'self'",
    "'unsafe-inline'",
    "https://assets.calendly.com",
    "https://app.cal.com",
    "https://fonts.googleapis.com",
    "https://unpkg.com",
  ],
  "style-src-elem": [
    "'self'",
    "'unsafe-inline'",
    "https://assets.calendly.com",
    "https://app.cal.com",
    "https://fonts.googleapis.com",
    "https://unpkg.com",
  ],
  "font-src": ["'self'", "https://fonts.gstatic.com"],
  "frame-ancestors": ["'none'"],
  "form-action": ["'self'"],
  "base-uri": ["'self'"],
  "object-src": ["'none'"],
  "upgrade-insecure-requests": null,
  "report-uri": isProd ? ["https://www.theaevia.co.uk/api/csp-report"] : [],
};

function directivesToHeader(d: CspDirectives): string {
  return Object.entries(d)
    .map(([k, v]) => {
      if (v === null) return k;
      if (Array.isArray(v)) return `${k} ${v.join(' ')}`;
      return `${k} ${String(v)}`;
    })
    .join('; ');
}

app.use((req, res, next) => {
  const header = directivesToHeader(cspGlobal);
  res.setHeader('Content-Security-Policy', header);
  next();
});
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: false, limit: '1mb' }));

// Auto-UTM redirect for bio/tiktok when arriving from TikTok or Instagram
app.use((req, res, next) => {
  const pathname = req.path.toLowerCase();
  if ((pathname === '/bio' || pathname === '/tiktok') && !('utm_source' in req.query)) {
    const referer = String(req.headers.referer || '').toLowerCase();
    const ua = String(req.headers['user-agent'] || '').toLowerCase();
    const fromTiktok = referer.includes('tiktok') || ua.includes('tiktok');
    const fromInstagram = referer.includes('instagram') || ua.includes('instagram');
    const url = new URL(req.originalUrl, BASE_URL);

    if (fromTiktok) {
      url.searchParams.set('utm_source', 'tiktok');
      url.searchParams.set('utm_medium', 'bio');
      url.searchParams.set('utm_campaign', 'profile');
      return res.redirect(302, url.pathname + url.search);
    }
    if (fromInstagram) {
      url.searchParams.set('utm_source', 'instagram');
      url.searchParams.set('utm_medium', 'bio');
      url.searchParams.set('utm_campaign', 'profile');
      // For Instagram, make Consult primary
      url.searchParams.set('intent', 'consult');
      return res.redirect(302, url.pathname + url.search);
    }
  }
  next();
});

// Health check endpoint
app.get('/api/health', (_req: Request, res: Response) => {
  res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

// Add CSP report endpoint
app.post('/api/csp-report', express.json({ type: 'application/csp-report' }), (req, res) => {
  const report = req.body;
  log(`CSP Violation: ${JSON.stringify(report)}`, "warn");
  res.status(204).end();
});

async function findAvailablePort(startPort: number, maxTries = 20): Promise<number> {
  function check(port: number): Promise<boolean> {
    return new Promise((resolve) => {
      const tester = net.createServer()
        .once('error', () => resolve(false))
        .once('listening', () => tester.close(() => resolve(true)))
        .listen({ port, host: '0.0.0.0' });
    });
  }

  let port = startPort;
  for (let i = 0; i < maxTries; i++) {
    // eslint-disable-next-line no-await-in-loop
    const ok = await check(port);
    if (ok) return port;
    port += 1;
  }
  return startPort; // fallback to requested if none free
}

(async () => {
  try {
    const server = await registerRoutes(app);

    app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
      const status = err.status || err.statusCode || 500;
      const message = err.message || "Internal Server Error";

      res.status(status).json({ message });
      log(`Error: ${message}`, "error");
    });

    if (!isProd) {
      await setupVite(app, server);
    } else {
      // Mount Astro journal SSR handler instead of serving static files
      const journalDist = path.join(__dirname, 'journal');
      const journalEntry = path.join(journalDist, 'server', 'entry.mjs');

      if (fs.existsSync(journalEntry)) {
        try {
          const entryUrl = pathToFileURL(journalEntry).href;
          const { handler: journalHandler } = await import(entryUrl);

          const journalClientDir = path.join(journalDist, 'client');
          if (fs.existsSync(journalClientDir)) {
            app.use('/journal', express.static(journalClientDir, {
              maxAge: '1y',
              immutable: true,
            }));
          }

          app.use('/api/keystatic', (req, res, next) => {
            req.url = `/journal${req.url}`;
            return journalHandler(req, res, next);
          });

          app.use('/journal', (req, res, next) => journalHandler(req, res, next));
        } catch (error) {
          log(`Failed to load journal SSR handler: ${error instanceof Error ? error.message : String(error)}`, 'warn');
        }
      } else {
        log('Journal build artifacts missing; skipping SSR mount', 'warn');
      }
      // Handle case sensitivity and index.html variations
      app.use((req, res, next) => {
        const { pathname, search } = new URL(req.originalUrl, 'http://dummy');
        const lowerPath = pathname.toLowerCase();

        // Redirect index.html requests to their directory
        if (lowerPath.endsWith('/index.html')) {
          return res.redirect(301, lowerPath.replace(/\/index\.html$/, ''));
        }

        // Only lowercase paths that don't point to a file
        if (pathname !== lowerPath && path.extname(pathname) === '') {
          return res.redirect(301, lowerPath + search);
        }

        next();
      });

      // Serve static files from the public directory but let the SPA handler
      // return index.html so we can inject canonical tags
      app.use(express.static(path.join(__dirname, 'public'), {
        index: false,
        setHeaders: (res, filePath) => {
          if (filePath.endsWith('.html')) {
            res.setHeader('Cache-Control', 'no-cache');
          } else {
            res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
          }
        }
      }));
      
      // Serve assets from the assets directory
      app.use('/assets', express.static(path.join(__dirname, 'public/assets'), {
        maxAge: '1y'
      }));

      // Handle trailing slashes outside the journal app
      app.use((req, res, next) => {
        const url = req.url;
        const lowerUrl = url.toLowerCase();

        if (lowerUrl === '/journal' || lowerUrl.startsWith('/journal/')) {
          return next();
        }

        if (url.length > 1 && url.endsWith('/')) {
          return res.redirect(308, url.slice(0, -1));
        }
        if (url === '') {
          return res.redirect(308, '/');
        }
        next();
      });

      // Fallback to index.html for client-side routing
      app.get('*', (req, res) => {
        const canonicalUrl = `${BASE_URL}${req.path === '/' ? '' : req.path}`;

        const isFileRequest = path.extname(req.path) !== '';
        const isKnownRoute = VALID_ROUTES.includes(req.path.toLowerCase());

        res.status(isFileRequest || !isKnownRoute ? 404 : 200);

        // Set both header and HTML for canonical URL
        res.setHeader('Link', `<${canonicalUrl}>; rel="canonical"`);
        
        // Read the index.html file
        const indexPath = path.join(__dirname, 'public', 'index.html');
        fs.readFile(indexPath, 'utf8', (err, data) => {
          if (err) {
            return res.status(500).send('Error loading page');
          }
          // Insert canonical link tag
          const canonicalTag = `<link rel="canonical" href="${canonicalUrl}" />`;
          const modifiedHtml = data.replace('</head>', `${canonicalTag}\n</head>`);
          res.send(modifiedHtml);
        });
      });
    }

    // Determine port (auto-shift in dev if taken)
    const desiredPort = DEFAULT_PORT;
    const port = !isProd ? await findAvailablePort(desiredPort) : desiredPort;
    if (!isProd && port !== desiredPort) {
      log(`Port ${desiredPort} in use. Using ${port} instead.`);
    }

    // Helpful listener error handling
    server.on('error', (err: any) => {
      if (err && (err.code === 'EADDRINUSE' || err.errno === -48)) {
        log(`Port ${port} is already in use. Did a previous dev server not exit?`, "error");
        process.exit(1);
      }
      throw err;
    });

    server.listen({
      port,
      host: "0.0.0.0",
    }, () => {
      log(`Server running on port ${port}`);
    });

    // Graceful shutdown to free the port on exit
    const shutdown = (signal: string) => {
      log(`Received ${signal}. Shutting down…`);
      server.close(() => {
        log('HTTP server closed');
        process.exit(0);
      });
    };

    process.on('SIGINT', () => shutdown('SIGINT'));
    process.on('SIGTERM', () => shutdown('SIGTERM'));

  } catch (error) {
    log(`Failed to start server: ${error}`, "error");
    process.exit(1);
  }
})();
