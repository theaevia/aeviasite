export default function ShareBar({ title }) {
  if (typeof window === 'undefined') return null;
  const url = window.location.href;
  const e = encodeURIComponent;
  const links = [
    { label: 'LinkedIn', href: `https://www.linkedin.com/sharing/share-offsite/?url=${e(url)}` },
    { label: 'X', href: `https://twitter.com/intent/tweet?url=${e(url)}&text=${e(title)}` },
    { label: 'WhatsApp', href: `https://api.whatsapp.com/send?text=${e(title)}%20${e(url)}` },
  ];
  return (
    <div style={{ position: 'sticky', top: 96, display: 'flex', gap: 12 }}>
      {links.map((l) => (
        <a key={l.label} href={l.href} target="_blank" rel="noreferrer">{l.label}</a>
      ))}
      <button onClick={() => navigator.clipboard.writeText(url)}>Copy</button>
    </div>
  );
}

