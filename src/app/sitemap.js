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
    { url: canonical('/ueber-uns') },
    { url: canonical('/dokumente') },
    { url: canonical('/dokumente/standard-0-1') },
  ];
}
