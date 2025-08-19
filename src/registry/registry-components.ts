import type { Registry } from 'shadcn/registry';

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
      },
      {
        path: 'auth/components/login-form/lib/schemas.ts',
        type: 'registry:lib',
      },
      {
        path: 'auth/components/login-form/lib/types.ts',
        type: 'registry:lib',
      },
    ],
    registryDependencies: [
      'form',
      'https://react-authui.vercel.app/r/form-root-error.json',
      'https://react-authui.vercel.app/r/password-input.json',
    ],
  },
];
