import type { Registry } from 'shadcn/registry';

export const examples: Registry['items'] = [
  {
    name: 'floating-label-input-demo',
    type: 'registry:example',
    title: 'Floating Label Input',
    description: 'Material UI floating label input',
    files: [
      {
        path: 'auth/examples/floating-label-input-demo.tsx',
        type: 'registry:example',
      },
    ],
    registryDependencies: [
      'https://react-authui.vercel.app/r/floating-label-input.json',
    ],
  },
];
