import './global.css';
import type { Metadata } from 'next';
import { Providers } from '@/components/providers';
import { getURL } from '@/lib/utils';

export const metadata: Metadata = {
  description:
    'Headless authentication components for react-based applications',
  icons: {
    icon: [
      { url: '/icon.svg' },
      new URL('/icon.svg', getURL),
      { media: '(prefers-color-scheme: dark)', url: '/icon-white.svg' },
    ],
  },
  openGraph: {
    locale: 'en',
    siteName: 'React Auth UI',
    type: 'website',
    url: getURL,
  },
  title: 'React Auth UI',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
