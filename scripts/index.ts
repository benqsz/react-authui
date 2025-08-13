import { generateDocs } from './generate-docs';
import { updateMeta } from './update-meta';
import { generateExamples } from './generate-examples';

async function buildDocs() {
  console.log('Building documentation...');

  const docs = await generateDocs();
  await updateMeta(docs);
  await generateExamples();
}

buildDocs().catch(console.error);
