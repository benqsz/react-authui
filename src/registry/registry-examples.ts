import type { Registry } from 'shadcn/registry';

export const examples: Registry['items'] = [
  {
    name: 'password-input-demo',
    type: 'registry:example',
    title: 'Password Input',
    description: '',
    files: [
      {
        path: 'auth/examples/password-input-demo.tsx',
        type: 'registry:example',
      },
    ],
    registryDependencies: [
      'https://react-authui.vercel.app/r/password-input.json',
    ],
  },
];
