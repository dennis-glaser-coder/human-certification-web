export const dynamic = 'force-static';

import { canonical, SITE_INDEXABLE } from '../lib/seo';

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    ...(SITE_INDEXABLE ? { sitemap: canonical('/sitemap.xml') } : {}),
  };
}
