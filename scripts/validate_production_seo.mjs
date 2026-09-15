import fs from 'node:fs';
import path from 'node:path';

const OUT_DIR = path.resolve('out');
const PRODUCTION_ORIGIN = 'https://madebyhuman.org';
const FORBIDDEN_HOST_MARKERS = [
  'dennis-glaser-coder.github.io/human-certification-web',
  'github.io/human-certification-web',
];

function fail(message) {
  console.error(`SEO guard failed: ${message}`);
  process.exitCode = 1;
}

function readRequired(filePath) {
  if (!fs.existsSync(filePath)) {
    fail(`missing build output: ${path.relative(process.cwd(), filePath)}`);
    return '';
  }
  return fs.readFileSync(filePath, 'utf8');
}

function canonicalFromHtml(html) {
  const tags = html.match(/<link\b[^>]*>/gi) || [];
  for (const tag of tags) {
    if (!/\brel=["']canonical["']/i.test(tag)) continue;
    const href = tag.match(/\bhref=["']([^"']+)["']/i);
    if (href) return href[1];
  }
  return null;
}

function robotsMetaContent(html) {
  const tags = html.match(/<meta\b[^>]*>/gi) || [];
  const values = [];
  for (const tag of tags) {
    if (!/\bname=["'](?:robots|googlebot)["']/i.test(tag)) continue;
    const content = tag.match(/\bcontent=["']([^"']*)["']/i);
    if (content) values.push(content[1]);
  }
  return values.join(',');
}

function htmlPathForUrl(urlString) {
  const url = new URL(urlString);
  const clean = url.pathname.replace(/^\/+|\/+$/g, '');
  return clean
    ? path.join(OUT_DIR, clean, 'index.html')
    : path.join(OUT_DIR, 'index.html');
}

if (!fs.existsSync(OUT_DIR)) {
  fail('out directory does not exist; run the production build first');
  process.exit(1);
}

const robots = readRequired(path.join(OUT_DIR, 'robots.txt'));
if (robots) {
  if (/Disallow:\s*\/\s*$/im.test(robots)) {
    fail('robots.txt blocks the entire site');
  }
  if (!robots.includes(`${PRODUCTION_ORIGIN}/sitemap.xml`)) {
    fail('robots.txt does not reference the production sitemap');
  }
}

const sitemap = readRequired(path.join(OUT_DIR, 'sitemap.xml'));
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/gi)].map((match) => match[1].trim());

if (urls.length === 0) {
  fail('sitemap.xml contains no URLs');
}

for (const urlString of urls) {
  if (!urlString.startsWith(`${PRODUCTION_ORIGIN}/`)) {
    fail(`sitemap contains a non-production URL: ${urlString}`);
    continue;
  }

  const htmlPath = htmlPathForUrl(urlString);
  const html = readRequired(htmlPath);
  if (!html) continue;

  const robotsContent = robotsMetaContent(html);
  if (/noindex/i.test(robotsContent)) {
    fail(`${urlString} is noindex in the production build`);
  }

  const canonical = canonicalFromHtml(html);
  if (!canonical) {
    fail(`${urlString} has no canonical URL`);
  } else if (canonical !== urlString) {
    fail(`${urlString} canonical mismatch: ${canonical}`);
  }

  for (const marker of FORBIDDEN_HOST_MARKERS) {
    if (html.includes(marker)) {
      fail(`${urlString} still contains staging host marker: ${marker}`);
    }
  }
}

const rootHtml = readRequired(path.join(OUT_DIR, 'index.html'));
if (rootHtml) {
  const malformedAssetUrl = /https:\/\/madebyhuman\.org\/[^"'\s>]+\?[^"'\s>]+\//i;
  if (malformedAssetUrl.test(rootHtml)) {
    fail('homepage contains a malformed versioned asset URL with a slash inside the query string');
  }
}

if (!process.exitCode) {
  console.log(`SEO guard passed for ${urls.length} sitemap URLs on ${PRODUCTION_ORIGIN}.`);
}
