import type { Registry } from 'shadcn/registry';

export const ui: Registry['items'] = [
  {
    name: 'floating-label-input',
    type: 'registry:component',
    title: 'Floating Label Input',
    description: 'Material UI floating label input',
    files: [
      {
        path: 'auth/ui/floating-label-input.tsx',
        type: 'registry:component',
      },
    ],
    dependencies: ['@radix-ui/react-label'],
    registryDependencies: ['input'],
  },
  {
    name: 'form-root-error',
    type: 'registry:ui',
    title: 'Form Root Error',
    description: 'Show errors from root in use form hook',
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
