import { Logo } from '@/components/logo';
import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';

export default function Layout({ children }: LayoutProps<'/docs'>) {
  return (
    <DocsLayout
      tree={source.pageTree}
      nav={{
        title: (
          <>
            <Logo />
            React Auth UI
          </>
        ),
      }}
      githubUrl={process.env.NEXT_PUBLIC_GITHUB_URL}
    >
      {children}
    </DocsLayout>
  );
}
