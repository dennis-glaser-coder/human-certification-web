'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const routePairs = [
  ['/', '/en'],
  ['/warum-made-by-human', '/en/why-made-by-human'],
  ['/fuer-hersteller', '/en/for-manufacturers'],
  ['/fuer-kaeufer', '/en/for-buyers'],
  ['/register', '/en/register'],
  ['/pruefen', '/en/verify'],
  ['/standard', '/en/standard'],
  ['/ueber-uns', '/en/about'],
];

function counterpart(pathname, targetLanguage) {
  const normalized = pathname?.replace(/\/$/, '') || '/';
  for (const [de, en] of routePairs) {
    const dePath = de === '/' ? '/' : de;
    if (normalized === dePath || normalized === en) {
      return targetLanguage === 'en' ? en : dePath;
    }
  }
  return targetLanguage === 'en' ? '/en' : '/';
}

export default function LanguageSwitch({ lang = 'de' }) {
  const pathname = usePathname();
  const deHref = counterpart(pathname, 'de');
  const enHref = counterpart(pathname, 'en');

  const linkStyle = {
    fontSize: '11px',
    letterSpacing: '.08em',
    fontWeight: 600,
    textDecoration: 'none',
    opacity: .72,
    whiteSpace: 'nowrap',
  };

  const activeStyle = { ...linkStyle, opacity: 1, fontWeight: 700 };

  return (
    <div aria-label="Language" style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', whiteSpace: 'nowrap' }}>
      {lang === 'de' ? <span style={activeStyle} aria-current="page">DE</span> : <Link style={linkStyle} href={deHref} hrefLang="de">DE</Link>}
      <span aria-hidden="true" style={{ opacity: .35 }}>|</span>
      {lang === 'en' ? <span style={activeStyle} aria-current="page">EN</span> : <Link style={linkStyle} href={enHref} hrefLang="en">EN</Link>}
    </div>
  );
}
