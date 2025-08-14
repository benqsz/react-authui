import { promises as fs } from 'fs';
import path from 'path';
import registry from '../registry.json' assert { type: 'json' };

const outputDir = path.join(__dirname, '../content/docs/components');
const generatedPages: string[] = [];

async function generateDocs() {
  await fs.mkdir(outputDir, { recursive: true });

  for (const item of registry.items) {
    if (item.type !== 'registry:component') continue;
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
        npx shadcn@latest add https://react-authui.vercel.app/r/${item.name}.json
        \`\`\`
      </TabsContent>
      <TabsContent value="Manual">
        TODO
      </TabsContent>
</Tabs>

## Props

<AutoTypeTable type="{ prop1: string }" />
`;

    const filePath = path.join(outputDir, `${item.name}.mdx`);
    await fs.writeFile(filePath, content, 'utf8');
    generatedPages.push(`components/${item.name}`);
    console.log(`✅  Generated ${filePath}`);
  }

  return generatedPages;
}

export { generateDocs };
