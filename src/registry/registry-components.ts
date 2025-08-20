import type { Registry } from 'shadcn/registry';

const URL = process.env.NEXT_PUBLIC_BASE_URL as string;

export const components: Registry['items'] = [
  {
    name: 'auth-container',
    type: 'registry:component',
    title: 'Auth container',
    description: 'Card container for all auth components',
    files: [
      {
        path: 'auth/components/auth-container/auth-container.tsx',
        type: 'registry:component',
        target: 'components/auth/auth-container.tsx',
      },
    ],
    registryDependencies: ['card'],
  },
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
      `${URL}/r/submit-button.json`,
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
      `${URL}/r/submit-button.json`,
    ],
  },
  {
    name: 'forgot-form',
    type: 'registry:component',
    title: 'Forgot Form',
    description: 'Forgot form with validation and loading/error states',
    files: [
      {
        path: 'auth/components/forgot-form/forgot-form.tsx',
        type: 'registry:component',
        target: 'components/auth/forgot-form.tsx',
      },
    ],
    registryDependencies: [
      'form',
      `${URL}/r/form-root-error.json`,
      `${URL}/r/submit-button.json`,
    ],
  },
];
