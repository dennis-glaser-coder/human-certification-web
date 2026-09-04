export const dynamic = 'force-static';

import { canonical } from '../lib/seo';

export default function sitemap() {
  return [
    { url: canonical('/') },
    { url: canonical('/standard') },
    { url: canonical('/fuer-hersteller') },
    { url: canonical('/register') },
    { url: canonical('/pruefen') },
    { url: canonical('/transparenz') },
  ];
}
