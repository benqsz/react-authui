import type { Registry } from 'shadcn/registry';

const URL = process.env.NEXT_PUBLIC_BASE_URL as string;

export const examples: Registry['items'] = [
  {
    name: 'password-input-demo',
    type: 'registry:example',
    title: '',
    description: '',
    files: [
      {
        path: 'auth/examples/password-input-demo.tsx',
        type: 'registry:example',
      },
    ],
    registryDependencies: [`${URL}/r/password-input.json`],
  },
];
