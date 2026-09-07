export const SITE_URL = 'https://madebyhuman.org';
export const SITE_NAME = 'Made by Human';
export const DEFAULT_DESCRIPTION =
  'Zertifizierung für physische Produkte mit nachweisbar menschlicher Herstellung – mit Vor-Ort-Audit, Zertifizierungszeichen, QR-Verifizierung und öffentlichem Register.';

export function canonical(path = '/') {
  if (path === '/') return SITE_URL + '/';

  const clean = path.replace(/^\/+|\/+$/g, '');
  const isFile = /\.[a-z0-9]{2,6}$/i.test(clean);

  return SITE_URL + '/' + clean + (isFile ? '' : '/');
}
