import type { ReactNode } from 'react';
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/layout.config';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <HomeLayout
      {...baseOptions}
      links={[
        {
          text: 'Documentation',
          url: '/docs',
          secondary: false,
        },
        {
          text: 'GitHub',
          label: 'See project on GitHub',
          url: 'https://github.com/benqSzaw/react-auth-ui',
          secondary: true,
          external: true,
        },
      ]}
    >
      {children}
    </HomeLayout>
  );
}
