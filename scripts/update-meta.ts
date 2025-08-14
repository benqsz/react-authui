import { promises as fs } from 'fs';
import path from 'path';

const rootMetaPath = path.join(__dirname, '../content/docs/meta.json');

async function updateMeta(generatedDocs: string[]) {
  const metaRaw = await fs.readFile(rootMetaPath, 'utf8');
  const meta: { pages: string[] } = JSON.parse(metaRaw);

  const componentsIndex = meta.pages.findIndex(p => p === '---Blocks---');
  if (componentsIndex === -1) {
    throw new Error('Not found "---Blocks---" in meta.json');
  }

  const newPages = [
    ...meta.pages.slice(0, componentsIndex + 1),
    'blocks/index',
    ...generatedDocs,
  ];

  const updatedMeta = {
    ...meta,
    pages: newPages,
  };

  await fs.writeFile(rootMetaPath, JSON.stringify(updatedMeta), 'utf8');
  console.log(`✅  Updated root meta.json: ${generatedDocs.length} docs added`);
}

export { updateMeta };
