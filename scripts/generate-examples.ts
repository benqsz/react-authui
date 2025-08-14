import fs from 'fs/promises';
import path from 'path';

const examplesDir = path.join(__dirname, '../examples');
const examples: { [key: string]: any } = {};
const outputPath = path.join(__dirname, '../src/lib/examples.tsx');

const generateExamples = async () => {
  const folders = await fs.readdir(examplesDir);

  for (const folder of folders) {
    const folderPath = path.join(examplesDir, folder);

    if ((await fs.stat(folderPath)).isDirectory()) {
      const componentPath = path.join(folderPath, `${folder}`);
      const relativePath = path
        .relative(__dirname, componentPath)
        .replace(/\\/g, '/');

      const exampleFilePath = path.join(folderPath, `${folder}.tsx`);
      let code = '';

      if (await fs.stat(exampleFilePath).catch(() => false)) {
        code = await fs.readFile(exampleFilePath, 'utf8');

        code = code
          .split('\n')
          .filter(line => !line.trim().startsWith('import'))
          .join('\n');
      }

      examples[folder] = {
        component: `dynamic(() => import('../${relativePath}'))`,
        code: `\`${code}\``,
      };
    }
  }

  const examplesContent = `import dynamic from 'next/dynamic';

export const examples = {
  ${Object.entries(examples)
    .map(
      ([key, value]) => `'${key}': {
    component: ${value.component},
    code: ${value.code}
  }`,
    )
    .join(',\n  ')}
};
`;

  await fs.writeFile(outputPath, examplesContent, 'utf8');
  console.log('✅  Updated examples.tsx');
};

export { generateExamples };
