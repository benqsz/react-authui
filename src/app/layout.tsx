import './global.css';
import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Providers } from '@/components/providers';

export const metadata: Metadata = {
  title: 'React Auth UI',
  icons: {
    icon: [
      { url: '/icon.svg' },
      new URL(
        '/icon.svg',
        process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000',
      ),
      { url: '/icon-white.svg', media: '(prefers-color-scheme: dark)' },
    ],
  },
  openGraph: {
    title: 'React Auth UI',
    url: process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000',
    images: [
      {
        url: `${
          process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'
        }/icon.svg`,
        width: 64,
        height: 64,
        alt: 'React Auth UI',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
