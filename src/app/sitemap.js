export const dynamic = 'force-static';

import { canonical, SITE_INDEXABLE } from '../lib/seo';

const pages = [
  ['/', 'weekly', 1],
  ['/standard', 'monthly', 0.9],
  ['/warum-made-by-human', 'monthly', 0.9],
  ['/fuer-hersteller', 'monthly', 0.9],
  ['/fuer-kaeufer', 'monthly', 0.9],
  ['/register', 'daily', 0.9],
  ['/pruefen', 'monthly', 0.8],
  ['/transparenz', 'monthly', 0.8],
  ['/ueber-uns', 'monthly', 0.7],
  ['/dokumente', 'monthly', 0.8],
  ['/dokumente/standard-0-1', 'monthly', 0.7],
  ['/dokumente/certification-scheme-0-1', 'monthly', 0.7],
  ['/markennutzung', 'monthly', 0.6],
  ['/leitfaden/nachweise', 'monthly', 0.7],
  ['/leitfaden/zertifizierungsumfang', 'monthly', 0.7],
  ['/verfahren', 'monthly', 0.6],
  ['/impressum', 'yearly', 0.3],
  ['/datenschutz', 'yearly', 0.3],
];

export default function sitemap() {
  if (!SITE_INDEXABLE) return [];

  return pages.map(([path, changeFrequency, priority]) => ({
    url: canonical(path),
    changeFrequency,
    priority,
  }));
}
