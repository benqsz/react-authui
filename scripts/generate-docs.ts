import { promises as fs } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';
import registry from '../registry.json' assert { type: 'json' };

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const outputDir = path.join(__dirname, '../content/docs/components');
const generatedPages: string[] = [];

async function generateDocs() {
  await fs.mkdir(outputDir, { recursive: true });

  for (const item of registry.items) {
    if (item.type !== 'registry:component') continue;
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
    console.log(`✅  Generated ${filePath}`);
  }

  return generatedPages;
}

export { generateDocs };
