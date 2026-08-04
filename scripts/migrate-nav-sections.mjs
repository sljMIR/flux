import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));

function contentPrefixFromNavFile(navFileName) {
  return navFileName === 'maintenance_nav.json' ? 'maintenance' : 'manual';
}

function stripContentPrefix(contentPath, contentPrefix) {
  return contentPath.replace(new RegExp(`^${contentPrefix}/`), '');
}

function navItemsToSections(items, contentPrefix) {
  return items.map((item) => [
    stripContentPrefix(item.path, contentPrefix),
    (item.children ?? []).map((child) => stripContentPrefix(child.path, contentPrefix)),
  ]);
}

function migrate(filePath) {
  const raw = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  if (Array.isArray(raw.sections)) {
    return false;
  }

  if (!Array.isArray(raw.items)) {
    throw new Error(`${filePath}: missing items array`);
  }

  const prefix = contentPrefixFromNavFile(path.basename(filePath));
  const next = {
    root: raw.root,
    sections: navItemsToSections(raw.items, prefix),
  };

  fs.writeFileSync(filePath, `${JSON.stringify(next, null, 2)}\n`, 'utf8');
  return true;
}

const targets = [
  path.join(root, 'EXAMPLES/products/mir250/_base_robot/manual_nav.json'),
  path.join(root, 'EXAMPLES/products/mir250/_hook/manual_nav.json'),
  path.join(root, 'EXAMPLES/products/mir250/_shelf_carrier/manual_nav.json'),
];

for (const filePath of targets) {
  if (migrate(filePath)) {
    console.log('migrated', path.relative(root, filePath));
  }
}
