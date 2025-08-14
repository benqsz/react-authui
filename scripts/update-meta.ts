import { promises as fs } from 'fs';
import path from 'path';

const rootMetaPath = path.join(__dirname, '../content/docs/meta.json');

async function updateMeta(generatedDocs: string[]) {
  const metaRaw = await fs.readFile(rootMetaPath, 'utf8');
  const meta: { pages: string[] } = JSON.parse(metaRaw);

  const componentsIndex = meta.pages.findIndex(p => p === '---Components---');
  if (componentsIndex === -1) {
    throw new Error('Not found "---Components---" in meta.json');
  }

  let nextSectionIndex = meta.pages.findIndex(
    (p, i) => i > componentsIndex && p.startsWith('---'),
  );
  if (nextSectionIndex === -1) nextSectionIndex = meta.pages.length;

  const newPages = [
    ...meta.pages.slice(0, componentsIndex + 1),
    ...generatedDocs,
    ...meta.pages.slice(nextSectionIndex),
  ];

  const updatedMeta = {
    ...meta,
    pages: newPages,
  };

  await fs.writeFile(rootMetaPath, JSON.stringify(updatedMeta), 'utf8');
  console.log(`✅  Updated root meta.json: ${generatedDocs.length} components`);
}

export { updateMeta };
