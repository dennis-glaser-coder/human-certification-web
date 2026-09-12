export const dynamic = 'force-static';

import { canonical } from '../lib/seo';

export default function robots() {
  return {
    rules: [
      {
        userAgent: 'OAI-SearchBot',
        allow: '/',
      },
      {
        userAgent: 'ChatGPT-User',
        allow: '/',
      },
      {
        userAgent: 'PerplexityBot',
        allow: '/',
      },
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: canonical('/sitemap.xml'),
  };
}
