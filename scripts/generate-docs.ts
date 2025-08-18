import { promises as fs } from 'fs';
import path from 'path';
import registry from '../registry.json' assert { type: 'json' };

const URL = 'https://react-authui.vercel.app';

const blocksOutputDir = path.join(__dirname, '../content/docs/blocks');
const uiOutputDir = path.join(__dirname, '../content/docs/components');

async function generateDocs(output: string, type: string) {
  await fs.mkdir(output, { recursive: true });
  const generatedDocs: string[] = [];
  console.log('Generating docs for type:', type);

  for (const item of registry.items) {
    if (item.type !== `registry:${type}`) continue;

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

<AutoTypeTable path="registry/auth/lib/types.ts" name="LoginProps" />
`;

    const filePath = path.join(output, `${item.name}.mdx`);
    await fs.writeFile(filePath, content, 'utf8');
    generatedDocs.push(`${type}s/${item.name}`);
    console.log(`✅  Generated ${filePath}`);
  }

  return generatedDocs;
}

async function generateAllDocs() {
  const blocks = await generateDocs(blocksOutputDir, 'block');
  const components = await generateDocs(uiOutputDir, 'component');
  return [...blocks, '---Components---', ...components];
}

export { generateAllDocs };
