import type { Registry } from 'shadcn/schema';

export const components: Registry['items'] = [
  {
    description: 'Card container for all auth components',
    files: [
      {
        path: 'auth/components/auth-container.tsx',
        target: 'components/auth/auth-container.tsx',
        type: 'registry:component',
      },
    ],
    name: 'auth-container',
    registryDependencies: ['card'],
    title: 'Auth container',
    type: 'registry:component',
  },
  {
    dependencies: [
      'zod',
      'react-hook-form',
      '@hookform/resolvers',
      'lucide-react',
    ],
    description: 'Wrapper for forms in react auth ui',
    files: [
      {
        path: 'auth/components/form-wrapper.tsx',
        target: 'components/auth/form-wrapper.tsx',
        type: 'registry:component',
      },
    ],
    name: 'form-wrapper',
    registryDependencies: [
      'form',
      'button',
      `https://react-authui.vercel.app/r/form-root-error.json`,
    ],
    title: 'Form Wrapper',
    type: 'registry:component',
  },
  {
    dependencies: ['lucide-react'],
    description: 'User avatar with dropdown menu for account and logout',
    files: [
      {
        path: 'auth/components/user-dropdown.tsx',
        target: 'components/auth/user-dropdown.tsx',
        type: 'registry:component',
      },
    ],
    name: 'user-dropdown',
    registryDependencies: ['dropdown-menu', 'avatar', 'button'],
    title: 'User Dropdown',
    type: 'registry:component',
  },
];
