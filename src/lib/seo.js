export const SITE_URL = 'https://dennis-glaser-coder.github.io/human-certification-web';
export const SITE_NAME = 'Made by Humans';
export const DEFAULT_DESCRIPTION =
  'Standard und öffentliches Register für physische Produkte, deren wesentliche Herstellungsschritte nachweislich durch Menschen ausgeführt werden.';

export function canonical(path = '/') {
  if (path === '/') return SITE_URL + '/';

  const clean = path.replace(/^\/+|\/+$/g, '');
  const isFile = /\.[a-z0-9]{2,6}$/i.test(clean);

  return SITE_URL + '/' + clean + (isFile ? '' : '/');
}
