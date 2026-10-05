export const SITE_URL = 'https://madebyhuman.org';
export const SITE_INDEXABLE = true;
export const SITE_NAME = 'Made by Human';
export const DEFAULT_DESCRIPTION =
  'Made by Human zertifiziert physische Produkte mit nachweisbar menschlicher Herstellung. Vor-Ort-Prüfung, klare Kriterien und öffentliches Register.';

export function canonical(path = '/') {
  const value = path.startsWith('/') ? path : `/${path}`;
  const url = new URL(value, `${SITE_URL}/`);

  if (url.pathname !== '/') {
    const lastSegment = url.pathname.split('/').filter(Boolean).at(-1) || '';
    const isFile = /\.[a-z0-9]{2,8}$/i.test(lastSegment);

    if (!isFile && !url.pathname.endsWith('/')) {
      url.pathname += '/';
    }
  }

  return url.toString();
}

export const SOCIAL_IMAGE = canonical('/brand/made-by-human-social.png?v=20260912-spacing');
export const LOGO_IMAGE = canonical('/brand/made-by-human-logo.png?v=20260912-spacing');
export const FAVICON_IMAGE = canonical('/brand/made-by-human-favicon.png?v=20260912-spacing');
