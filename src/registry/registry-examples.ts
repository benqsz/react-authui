import type { Registry } from 'shadcn/registry';

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
    registryDependencies: [
      `https://react-authui.vercel.app/r/password-input.json`,
    ],
  },
  {
    name: 'submit-button-demo',
    type: 'registry:example',
    title: '',
    description: '',
    files: [
      {
        path: 'auth/examples/submit-button-demo.tsx',
        type: 'registry:example',
      },
    ],
    registryDependencies: [
      `https://react-authui.vercel.app/r/submit-button.json`,
    ],
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
    registryDependencies: [
      `https://react-authui.vercel.app/r/auth-container.json`,
    ],
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
    registryDependencies: [`https://react-authui.vercel.app/r/login-form.json`],
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
    registryDependencies: [
      `https://react-authui.vercel.app/r/register-form.json`,
    ],
  },
  {
    name: 'forgot-form-demo',
    type: 'registry:example',
    title: '',
    description: '',
    files: [
      {
        path: 'auth/examples/forgot-form-demo.tsx',
        type: 'registry:example',
      },
    ],
    registryDependencies: [
      `https://react-authui.vercel.app/r/register-form.json`,
    ],
  },
];
