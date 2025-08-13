import fs from 'fs';
import path from 'path';

const examplesDir = path.join(__dirname, '../examples'); // Adjust the path as necessary
const examples: { [key: string]: any } = {};

// Read the directories and generate dynamic imports
fs.readdirSync(examplesDir).forEach(folder => {
  const folderPath = path.join(examplesDir, folder);

  if (fs.statSync(folderPath).isDirectory()) {
    // Construct the relative path for the import
    const componentPath = path.join(folderPath, `${folder}`);
    const relativePath = path
      .relative(__dirname, componentPath)
      .replace(/\\/g, '/'); // Normalize path for import
    examples[folder] = `dynamic(() => import('../${relativePath}'))`;
  }
});

// Prepare the content for examples.tsx
const examplesContent = `import dynamic from 'next/dynamic';

export const examples = {
  ${Object.entries(examples)
    .map(([key, value]) => `'${key}': ${value}`)
    .join(',\n  ')}
};
`;

// Define the output path for src/lib/examples.tsx
const outputPath = path.join(__dirname, '../src/lib/examples.tsx');

// Check if the file exists, and create it if it doesn't
if (!fs.existsSync(outputPath)) {
  fs.writeFileSync(outputPath, examplesContent, 'utf8');
  console.log(`examples.tsx has been created at ${outputPath}`);
} else {
  // If the file exists, you can choose to overwrite it or log a message
  fs.writeFileSync(outputPath, examplesContent, 'utf8');
  console.log(`examples.tsx has been updated at ${outputPath}`);
}
