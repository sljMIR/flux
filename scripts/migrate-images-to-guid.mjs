import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const fluxRoot = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const examplesRoot = path.join(fluxRoot, 'EXAMPLES');
const catalogPath =
  process.env.CATALOG_PATH ??
  path.join(fluxRoot, '..', 'SupportDocumentation', 'assets', 'catalog.json');

function normalizeFilename(value) {
  return path.basename(value).replace(/\.(webp|png|jpg|jpeg|svg)$/i, '').toLowerCase();
}

function loadCatalog() {
  const catalog = JSON.parse(fs.readFileSync(catalogPath, 'utf8'));
  const byFilename = new Map();

  for (const asset of catalog.assets) {
    const key = normalizeFilename(asset.filename ?? '');
    if (!byFilename.has(key)) {
      byFilename.set(key, []);
    }
    byFilename.get(key).push(asset);
  }

  return byFilename;
}

function scoreAsset(asset, imagePath) {
  const segments = imagePath
    .replace(/^\/images\//, '')
    .replace(/\.(webp|png|jpg|jpeg|svg)$/i, '')
    .split('/')
    .flatMap((part) => part.split(/[_\s-]+/))
    .map((part) => part.toLowerCase())
    .filter(Boolean);

  const keywords = (asset.keywords ?? []).map((keyword) => keyword.toLowerCase());
  let score = 0;

  for (const segment of segments) {
    if (keywords.includes(segment)) {
      score += 2;
    }

    if (keywords.some((keyword) => keyword.includes(segment) || segment.includes(keyword))) {
      score += 1;
    }
  }

  return score;
}

function resolveAssetId(byFilename, src) {
  const cleanSrc = src.replace(/^\/+/, '/');
  const basename = normalizeFilename(cleanSrc);
  const candidates = byFilename.get(basename) ?? [];

  if (candidates.length === 0) {
    return null;
  }

  if (candidates.length === 1) {
    return candidates[0].id;
  }

  const ranked = candidates
    .map((asset) => ({ asset, score: scoreAsset(asset, cleanSrc) }))
    .sort((a, b) => b.score - a.score);

  return ranked[0]?.asset.id ?? null;
}

function migrateImageTags(source, byFilename) {
  const imageTagPattern =
    /\{%\s*image\s+([^%]*?\bsrc=(?:"([^"]+)"|'([^']+)')[^%]*?)\s*\/\s*%\}/g;

  let unmatched = 0;

  const next = source.replace(imageTagPattern, (fullMatch, attrs, srcDouble, srcSingle) => {
    const src = srcDouble ?? srcSingle;
    const assetId = resolveAssetId(byFilename, src);

    if (!assetId) {
      unmatched += 1;
      return fullMatch;
    }

    const withoutSrc = attrs
      .replace(/\bsrc=(?:"[^"]+"|'[^']+')\s*/g, '')
      .trim();

    const suffix = withoutSrc ? ` ${withoutSrc}` : '';
    return `{% image id="${assetId}"${suffix} /%}`;
  });

  return { next, unmatched };
}

function walk(dir, byFilename, report) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const entryPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(entryPath, byFilename, report);
      continue;
    }

    if (!entry.name.endsWith('.md')) {
      continue;
    }

    const source = fs.readFileSync(entryPath, 'utf8');
    const { next, unmatched } = migrateImageTags(source, byFilename);

    if (next !== source) {
      fs.writeFileSync(entryPath, next, 'utf8');
      report.updated.push(path.relative(examplesRoot, entryPath));
    }

    if (unmatched > 0) {
      report.unmatched.push({ file: path.relative(examplesRoot, entryPath), count: unmatched });
    }
  }
}

if (!fs.existsSync(catalogPath)) {
  console.error(`Catalog not found: ${catalogPath}`);
  process.exit(1);
}

const byFilename = loadCatalog();
const report = { updated: [], unmatched: [] };
walk(examplesRoot, byFilename, report);

console.log(`Updated ${report.updated.length} file(s).`);
for (const file of report.updated) {
  console.log(`  ${file}`);
}

if (report.unmatched.length > 0) {
  console.log(`Unmatched image tags remain in ${report.unmatched.length} file(s):`);
  for (const entry of report.unmatched) {
    console.log(`  ${entry.file}: ${entry.count}`);
  }
}
