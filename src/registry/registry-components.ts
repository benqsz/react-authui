import type { Registry } from 'shadcn/registry';

const URL = process.env.NEXT_PUBLIC_BASE_URL as string;

export const components: Registry['items'] = [
  {
    name: 'login-form',
    type: 'registry:component',
    title: 'Login Form',
    description: 'Login form with validation and loading/error states',
    files: [
      {
        path: 'auth/components/login-form/login-form.tsx',
        type: 'registry:component',
        target: 'components/auth/login-form.tsx',
      },
    ],
    registryDependencies: [
      'form',
      `${URL}/r/form-root-error.json`,
      `${URL}/r/password-input.json`,
    ],
  },
  {
    name: 'register-form',
    type: 'registry:component',
    title: 'Register Form',
    description: 'Register form with validation and loading/error states',
    files: [
      {
        path: 'auth/components/register-form/register-form.tsx',
        type: 'registry:component',
        target: 'components/auth/register-form.tsx',
      },
    ],
    registryDependencies: [
      'form',
      `${URL}/r/form-root-error.json`,
      `${URL}/r/password-input.json`,
    ],
  },
];
