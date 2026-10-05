import fs from 'node:fs';
import path from 'node:path';

const outDir = path.resolve('out');
const englishDir = path.join(outDir, 'en');

function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  });
}

if (!fs.existsSync(outDir)) {
  throw new Error('Missing out directory. Run the static export first.');
}

let changed = 0;
for (const file of walk(englishDir)) {
  if (!file.endsWith('.html')) continue;
  const html = fs.readFileSync(file, 'utf8');
  const next = html.replace(/<html\s+lang=["']de["']/i, '<html lang="en"');
  if (next !== html) {
    fs.writeFileSync(file, next);
    changed += 1;
  }
}

console.log(`Static language postprocess updated ${changed} English HTML files.`);
