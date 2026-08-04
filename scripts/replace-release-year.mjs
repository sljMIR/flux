import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), '../EXAMPLES');

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const entryPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(entryPath);
      continue;
    }

    if (!entry.name.endsWith('.md')) {
      continue;
    }

    const source = fs.readFileSync(entryPath, 'utf8');
    const next = source.replace(
      /^releaseYear: "(\d{4})"/gm,
      (_, year) => `firstReleaseDate: "${year}-01-01"`
    );

    if (next !== source) {
      fs.writeFileSync(entryPath, next, 'utf8');
      console.log(path.relative(root, entryPath));
    }
  }
}

walk(root);
