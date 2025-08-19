import './global.css';
import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { RootProvider } from 'fumadocs-ui/provider';

export const metadata: Metadata = {
  title: 'React Auth UI',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
