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
  {
    name: 'auth-container-demo',
    type: 'registry:example',
    title: '',
    description: '',
    files: [
      {
        path: 'auth/examples/auth-container-demo.tsx',
        type: 'registry:example',
      },
    ],
    registryDependencies: [`${URL}/r/auth-container.json`],
  },
  {
    name: 'login-form-demo',
    type: 'registry:example',
    title: '',
    description: '',
    files: [
      {
        path: 'auth/examples/login-form-demo.tsx',
        type: 'registry:example',
      },
    ],
    registryDependencies: [`${URL}/r/login-form.json`],
  },
  {
    name: 'register-form-demo',
    type: 'registry:example',
    title: '',
    description: '',
    files: [
      {
        path: 'auth/examples/register-form-demo.tsx',
        type: 'registry:example',
      },
    ],
    registryDependencies: [`${URL}/r/register-form.json`],
  },
];
