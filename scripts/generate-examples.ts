import fs from 'fs/promises';
import path from 'path';

const generateExamples = async () => {
  const examplesDir = path.join(__dirname, '../examples'); // Adjust the path as necessary
  const examples: { [key: string]: any } = {};

  // Read the directories and generate dynamic imports
  const folders = await fs.readdir(examplesDir);

  for (const folder of folders) {
    const folderPath = path.join(examplesDir, folder);

    if ((await fs.stat(folderPath)).isDirectory()) {
      // Construct the relative path for the import
      const componentPath = path.join(folderPath, `${folder}`);
      const relativePath = path
        .relative(__dirname, componentPath)
        .replace(/\\/g, '/'); // Normalize path for import

      // Read the content of the file
      const exampleFilePath = path.join(folderPath, `${folder}.tsx`); // Assuming each folder contains a file named folder.tsx
      let code = '';

      if (await fs.stat(exampleFilePath).catch(() => false)) {
        code = await fs.readFile(exampleFilePath, 'utf8');

        // Remove all import statements
        code = code
          .split('\n')
          .filter(line => !line.trim().startsWith('import'))
          .join('\n');
      }

      // Add dynamic import and code to the examples object
      examples[folder] = {
        component: `dynamic(() => import('../${relativePath}'))`,
        code: `\`${code}\``, // Wrap the code in backticks
      };
    }
  }

  // Prepare the content for examples.tsx
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

  // Define the output path for src/lib/examples.tsx
  const outputPath = path.join(__dirname, '../src/lib/examples.tsx');

  await fs.writeFile(outputPath, examplesContent, 'utf8');
  console.log('✅  Updated examples.tsx');
};

export { generateExamples };
