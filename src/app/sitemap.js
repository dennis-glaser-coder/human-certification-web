export const dynamic = 'force-static';

import { canonical } from '../lib/seo';

const lastModified = new Date();

export default function sitemap() {
  return [
    { url: canonical('/'), lastModified, changeFrequency: 'weekly', priority: 1 },
    { url: canonical('/standard'), lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: canonical('/warum-made-by-humans'), lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: canonical('/fuer-hersteller'), lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: canonical('/fuer-kaeufer'), lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: canonical('/register'), lastModified, changeFrequency: 'daily', priority: 0.9 },
    { url: canonical('/pruefen'), lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: canonical('/transparenz'), lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: canonical('/ueber-uns'), lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: canonical('/dokumente'), lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: canonical('/dokumente/standard-0-1'), lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: canonical('/dokumente/certification-scheme-0-1'), lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: canonical('/markennutzung'), lastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: canonical('/leitfaden/nachweise'), lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: canonical('/leitfaden/zertifizierungsumfang'), lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: canonical('/verfahren'), lastModified, changeFrequency: 'monthly', priority: 0.6 },
  ];
}
