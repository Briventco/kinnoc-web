// Checks the package is internally consistent. No dependencies. Run: npm run verify
import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const root = new URL('..', import.meta.url).pathname;
const errors = [];
const read = (p) => readFileSync(join(root, p), 'utf8');
const exists = (p) => existsSync(join(root, p));

// 1. Every file listed in the manifest exists
const manifest = read('ASSET_MANIFEST.md');
const listed = [...manifest.matchAll(/^\| `([^`]+)` \|/gm)].map((m) => m[1]);
for (const p of listed) if (!exists(p)) errors.push(`manifest lists a missing file: ${p}`);

// 2. Every shipped asset is in the manifest (no orphans)
const walk = (dir) => readdirSync(join(root, dir)).flatMap((f) => {
  const p = join(dir, f);
  return statSync(join(root, p)).isDirectory() ? walk(p) : [p];
});
for (const p of walk('assets')) if (!listed.includes(p)) errors.push(`asset not in manifest: ${p}`);

// 3. Every path in asset-map.json exists
const amap = JSON.parse(read('components/asset-map.json'));
const visit = (v, where) => {
  if (typeof v === 'string' && /^assets\//.test(v)) { if (!exists(v)) errors.push(`asset-map ${where} -> missing ${v}`); }
  else if (Array.isArray(v)) v.forEach((x, i) => visit(x, `${where}[${i}]`));
  else if (v && typeof v === 'object') for (const [k, x] of Object.entries(v)) visit(x, `${where}.${k}`);
};
visit(amap, 'root');

// 4. icon-map files exist, usages point at known icons, Icon.tsx matches the SVG files
const imap = JSON.parse(read('components/icon-map.json'));
const tsx = read('components/Icon.tsx');
for (const [name, def] of Object.entries(imap.icons)) {
  if (!exists(def.file)) { errors.push(`icon-map file missing: ${def.file}`); continue; }
  const svg = read(def.file).trim();
  if (!svg.startsWith('<svg xmlns="http://www.w3.org/2000/svg"') || !svg.endsWith('</svg>')) errors.push(`malformed svg: ${def.file}`);
  const open = (svg.match(/<(path|circle|rect|g)\b/g) || []).length;
  const closed = (svg.match(/\/>|<\/(path|circle|rect|g)>/g) || []).length;
  if (open !== closed) errors.push(`unbalanced svg elements: ${def.file}`);
  const body = svg.replace(/^<svg[^>]*>/, '').replace(/<\/svg>$/, '');
  if (!tsx.includes(JSON.stringify(body))) errors.push(`Icon.tsx out of sync with ${def.file}`);
}
for (const [use, u] of Object.entries(imap.usage)) if (!imap.icons[u.icon]) errors.push(`icon usage ${use} -> unknown icon ${u.icon}`);

// 5. Tokens: JSON parses and every colour reaches tokens.css
const tokens = JSON.parse(read('design-tokens.json'));
const css = read('styles/tokens.css');
for (const [k, v] of Object.entries(tokens.color)) if (!css.includes(`--kn-color-${k}: ${v.$value};`)) errors.push(`tokens.css missing colour ${k}`);
if (/#(e5|ef|dc|ff0000|f00\b)/i.test(JSON.stringify(tokens.color))) errors.push('a red-looking colour crept into the palette');

// 6. Fonts referenced by fonts.css exist
for (const m of read('styles/fonts.css').matchAll(/url\('\.\.\/([^']+)'\)/g)) if (!exists(m[1])) errors.push(`fonts.css -> missing ${m[1]}`);

// 7. The blob map in the design-source readme points at real files
for (const m of read('references/design-source/README.md').matchAll(/\| `[0-9a-f]{32}` \| `([^`]+)` \|/g)) if (!exists(m[1])) errors.push(`design-source map -> missing ${m[1]}`);

if (errors.length) { console.error(`FAILED (${errors.length})\n- ` + errors.join('\n- ')); process.exit(1); }
console.log(`OK: ${listed.length} manifest files, ${Object.keys(imap.icons).length} icons, ${Object.keys(imap.usage).length} icon usages, asset-map paths and tokens all consistent.`);
