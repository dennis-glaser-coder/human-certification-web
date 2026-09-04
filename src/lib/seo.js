export const SITE_URL = 'https://dennis-glaser-coder.github.io/human-certification-web';
export const SITE_NAME = 'Made by Humans';
export const DEFAULT_DESCRIPTION =
  'Standard und öffentliches Register für physische Produkte, deren wesentliche Herstellungsschritte nachweislich durch Menschen ausgeführt werden.';

export function canonical(path = '/') {
  const clean = path === '/' ? '/' : '/' + path.replace(/^\/+|\/+$/g, '') + '/';
  return SITE_URL + clean;
}
