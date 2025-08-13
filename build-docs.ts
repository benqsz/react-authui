import { promises as fs } from 'fs';
import path from 'path';
import registry from './registry.json' assert { type: 'json' };

const outputDir = './content/docs/components';
const generatedPages: string[] = [];

async function generateComponentsDocs() {
  await fs.mkdir(outputDir, { recursive: true });

  for (const item of registry.items) {
    const mdxContent = `---
title: ${item.title}
description: ${item.description}
---

<PreviewComponent name="${item.name}" />

## Installation

<Tabs items={['CLI', 'Manual']}>
  <Tab value="CLI">
    \`\`\`npm
    npx shadcn@latest add https://react-authui.vercel.app/r/${item.name}.json
    \`\`\`
  </Tab>
  <Tab value="Manual">TODO</Tab>
</Tabs>

## Props

<AutoTypeTable type="{ prop1: string }" />
`;

    const filePath = path.join(outputDir, `${item.name}.mdx`);
    await fs.writeFile(filePath, mdxContent, 'utf8');
    generatedPages.push(`components/${item.name}`);
    console.log(`✅ Generated ${filePath}`);
  }
}

async function updateMeta() {
  const rootMetaPath = './content/docs/meta.json';

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
    ...generatedPages,
    ...meta.pages.slice(nextSectionIndex),
  ];

  const updatedMeta = {
    ...meta,
    pages: newPages,
  };

  await fs.writeFile(rootMetaPath, JSON.stringify(updatedMeta), 'utf8');
  console.log(`✅ Updated root meta.json: ${generatedPages.length} components`);
}

generateComponentsDocs()
  .catch(err => {
    console.error('❌Failed to generate docs:', err);
    process.exit(1);
  })
  .finally(() => {
    updateMeta().catch(err => {
      console.error('❌Failed to update meta:', err);
      process.exit(1);
    });
  });
