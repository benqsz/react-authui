import type { Registry } from 'shadcn/registry';

export const components: Registry['items'] = [
  {
    name: 'auth-container',
    type: 'registry:component',
    title: 'Auth container',
    description: 'Card container for all auth components',
    files: [
      {
        path: 'auth/components/auth-container.tsx',
        type: 'registry:component',
        target: 'components/auth/auth-container.tsx',
      },
    ],
    registryDependencies: ['card'],
  },
  {
    name: 'form-wrapper',
    type: 'registry:component',
    title: 'Form Wrapper',
    description: 'Wrapper for forms in react auth ui',
    files: [
      {
        path: 'auth/components/form-wrapper.tsx',
        type: 'registry:component',
        target: 'components/auth/form-wrapper.tsx',
      },
    ],
    dependencies: [
      'zod',
      'react-hook-form',
      '@hookform/resolvers',
      'lucide-react',
    ],
    registryDependencies: [
      'form',
      'button',
      `https://react-authui.vercel.app/r/form-root-error.json`,
    ],
  },
  {
    name: 'register-form',
    type: 'registry:component',
    title: 'Register Form',
    description: 'Register form with validation and loading/error states',
    files: [
      {
        path: 'auth/components/register-form.tsx',
        type: 'registry:component',
        target: 'components/auth/register-form.tsx',
      },
    ],
    registryDependencies: [
      'form',
      `https://react-authui.vercel.app/r/form-wrapper.json`,
      `https://react-authui.vercel.app/r/password-input.json`,
    ],
  },
];
