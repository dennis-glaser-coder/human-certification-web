export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://madebyhuman.org').replace(/\/+$/, '');
export const SITE_INDEXABLE = process.env.NEXT_PUBLIC_SITE_INDEXABLE === 'true';
export const SITE_NAME = 'Made by Human';
export const DEFAULT_DESCRIPTION =
  'Made by Human ist ein Siegel für physische Produkte mit nachweisbar menschlicher Herstellung. Wir prüfen vor Ort und machen die Zertifizierung öffentlich prüfbar.';

export function canonical(path = '/') {
  if (path === '/') return SITE_URL + '/';

  const clean = path.replace(/^\/+|\/+$/g, '');
  const isFile = /\.[a-z0-9]{2,6}$/i.test(clean);

  return SITE_URL + '/' + clean + (isFile ? '' : '/');
}

export const SOCIAL_IMAGE = canonical('/brand/made-by-human-social.png?v=20260912-spacing');
export const LOGO_IMAGE = canonical('/brand/made-by-human-logo.png?v=20260912-spacing');
export const FAVICON_IMAGE = canonical('/brand/made-by-human-favicon.png?v=20260912-spacing');
