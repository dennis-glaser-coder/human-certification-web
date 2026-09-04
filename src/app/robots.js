export const dynamic = 'force-static';

import { canonical } from '../lib/seo';

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: canonical('/sitemap.xml'),
  };
}
