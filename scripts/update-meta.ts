import { promises as fs } from 'fs';
import path from 'path';

const rootMetaPath = path.join(__dirname, '../content/docs/meta.json');
const firstSection = '---Blocks---';

async function updateMeta(generatedDocs: string[]) {
  const metaRaw = await fs.readFile(rootMetaPath, 'utf8');
  const meta: { pages: string[] } = JSON.parse(metaRaw);

  const componentsIndex = meta.pages.findIndex(p => p === firstSection);
  if (componentsIndex === -1)
    throw new Error(`Not found ${firstSection} in meta.json`);

  const pages = [...meta.pages.slice(0, componentsIndex + 1), ...generatedDocs];

  const updatedMeta = {
    ...meta,
    pages,
  };

  await fs.writeFile(rootMetaPath, JSON.stringify(updatedMeta), 'utf8');
  console.log(`✅  Updated root meta.json: ${generatedDocs.length} docs added`);
}

export { updateMeta };
