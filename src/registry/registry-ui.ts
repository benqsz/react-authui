import type { Registry } from 'shadcn/registry';

export const ui: Registry['items'] = [
  {
    name: 'form-root-error',
    type: 'registry:ui',
    title: 'Form Root Error',
    description: 'Show errors from root with use-form-hook',
    files: [
      {
        path: 'auth/ui/form-root-error.tsx',
        type: 'registry:ui',
      },
    ],
    dependencies: ['react-hook-form'],
    registryDependencies: ['form'],
  },
  {
    name: 'password-input',
    type: 'registry:ui',
    title: 'Password Input',
    description: 'Input with visibility toggle',
    files: [
      {
        path: 'auth/ui/password-input.tsx',
        type: 'registry:ui',
      },
    ],
    dependencies: ['lucide-react'],
    registryDependencies: ['input', 'button'],
  },
];
