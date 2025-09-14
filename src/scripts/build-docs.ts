/* eslint-disable @typescript-eslint/no-explicit-any */
import fs from 'fs';
import path from 'path';
import { Index } from '@/__registry__';
import { capitalize } from '@/lib/utils';

type Meta = {
  root: boolean;
  pages: string[];
};

const OUTPUT_DIR = path.join(process.cwd(), 'src/content/docs');

const META_PATH = path.join(process.cwd(), 'src/content/docs/meta.json');
const AFTER_KEY = 'index';

const generateMDXContent = (item: any): string => {
  const dependencies = item.dependencies
    ? `
      <Step>
        Install the following dependencies
        \`\`\`npm
        npm install ${item.dependencies.join(' ')}
        \`\`\`
      </Step>
      `
    : '';

  return `---
title: ${item.title}
description: ${item.description}
---

<ComponentPreview name='${item.name}-demo'/>

## Installation

<ComponentInstall>
  <CLI>
    \`\`\`npm 
    npx shadcn@latest add https://react-authui.vercel.app/r/${item.name}.json 
    \`\`\`
  </CLI>
  <Manual>
    <Steps>
      ${dependencies}
      <Step>
        Copy and paste the following code into your project
        <ComponentSource name='${item.name}' />
      </Step>
      <Step>
        Update the import paths to match your project setup
      </Step>
    </Steps>
  </Manual>
</ComponentInstall>
`;
};

type NewDoc = {
  type: string;
  item: string;
};

const newDocs: NewDoc[] = [];

console.log('💽 Building docs...');

Object.entries(Index).forEach(([key, item]) => {
  if (item.type == 'registry:example') return;
  // Omit items without demo
  if (!Index[key + '-demo']) return;

  const mdxContent = generateMDXContent(item);
  const type =
    item.type.replace(/^registry:/, '') == 'component'
      ? 'components'
      : item.type.replace(/^registry:/, '');
  const filePath = path.join(`${OUTPUT_DIR}/${type}`, `${item.name}.mdx`);

  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, mdxContent, 'utf8');
  newDocs.push({
    item: item.name,
    type,
  });
  console.log(`Adding: ${item.name}.mdx`);
});

const meta: Meta = JSON.parse(fs.readFileSync(META_PATH, 'utf-8'));

function groupDocsByType(docs: NewDoc[]) {
  const grouped = docs.reduce(
    (acc, { item, type }) => {
      (acc[type] ||= []).push(`${type}/${item}`);
      return acc;
    },
    {} as Record<string, string[]>,
  );

  return Object.entries(grouped).flatMap(([type, items]) => [
    `---${capitalize(type)}---`,
    ...items,
  ]);
}

const index = meta.pages.indexOf(AFTER_KEY);
meta.pages = [...meta.pages.slice(0, index + 1), ...groupDocsByType(newDocs)];

fs.writeFileSync(META_PATH, JSON.stringify(meta), 'utf8');

console.log('Updated meta.json');

console.log('✅ Done!');
