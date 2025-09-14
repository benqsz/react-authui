import type { Registry } from 'shadcn/schema';

export const ui: Registry['items'] = [
  {
    dependencies: ['react-hook-form'],
    description: 'Show errors from root with use-form-hook',
    files: [
      {
        path: 'auth/ui/form-root-error.tsx',
        type: 'registry:ui',
      },
    ],
    name: 'form-root-error',
    registryDependencies: ['form'],
    title: 'Form Root Error',
    type: 'registry:ui',
  },
  {
    dependencies: ['lucide-react'],
    description: 'Input with visibility toggle',
    files: [
      {
        path: 'auth/ui/password-input.tsx',
        type: 'registry:ui',
      },
    ],
    name: 'password-input',
    registryDependencies: ['input', 'button'],
    title: 'Password Input',
    type: 'registry:ui',
  },
];
