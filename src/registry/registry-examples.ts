import type { Registry } from 'shadcn/schema';

export const examples: Registry['items'] = [
  {
    description: '',
    files: [
      {
        path: 'auth/examples/password-input-demo.tsx',
        type: 'registry:example',
      },
    ],
    name: 'password-input-demo',
    registryDependencies: [
      `https://react-authui.vercel.app/r/password-input.json`,
    ],
    title: '',
    type: 'registry:example',
  },
  {
    description: '',
    files: [
      {
        path: 'auth/examples/auth-container-demo.tsx',
        type: 'registry:example',
      },
    ],
    name: 'auth-container-demo',
    registryDependencies: [
      `https://react-authui.vercel.app/r/auth-container.json`,
    ],
    title: '',
    type: 'registry:example',
  },
  {
    description: '',
    files: [
      {
        path: 'auth/examples/user-dropdown-demo.tsx',
        type: 'registry:example',
      },
    ],
    name: 'user-dropdown-demo',
    registryDependencies: [
      `https://react-authui.vercel.app/r/user-dropdown.json`,
    ],
    title: '',
    type: 'registry:example',
  },
];
