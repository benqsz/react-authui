import { promises as fs } from 'fs';
import path from 'path';
import registry from '../registry.json' assert { type: 'json' };

const URL = 'https://react-authui.vercel.app';
const outputDir = path.join(__dirname, '../content/docs/blocks');
const generatedPages: string[] = [];

async function generateDocs() {
  await fs.mkdir(outputDir, { recursive: true });

  for (const item of registry.items) {
    if (item.type !== 'registry:block') continue;

    const files = await Promise.all(
      item.files.map(async file => {
        return await fs.readFile(file.path, 'utf8');
      }),
    );

    const content = `---
title: ${item.title}
description: ${item.description}
---

<PreviewComponent name="${item.name}" />

## Installation
<Tabs defaultValue="CLI">
  <TabsList>
    <TabsTrigger value="CLI">CLI</TabsTrigger>
    <TabsTrigger value="Manual">Manual</TabsTrigger>
  </TabsList>
  <TabsContent value="CLI">
    \`\`\`npm
    npx shadcn@latest add ${URL}/r/${item.name}.json
    \`\`\`
  </TabsContent>
  <TabsContent value="Manual">
    Copy and paste the following code into your project.
${files.map(
  file =>
    `
\`\`\`tsx title="${item.name}.tsx"
${file}
\`\`\`
`,
)}
    Update the import paths to match your project setup.
  </TabsContent>
</Tabs>

## Props

<AutoTypeTable type="{ prop1: string }" />
`;

    const filePath = path.join(outputDir, `${item.name}.mdx`);
    await fs.writeFile(filePath, content, 'utf8');
    generatedPages.push(`blocks/${item.name}`);
    console.log(`✅  Generated ${filePath}`);
  }

  return generatedPages;
}

export { generateDocs };
