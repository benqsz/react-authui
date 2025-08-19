import { ReactNode } from 'react';
import { RootProvider } from 'fumadocs-ui/provider';
import { Toaster } from '@/components/ui/sonner';

type Props = {
  children: ReactNode;
};

function Providers({ children }: Props) {
  return (
    <RootProvider>
      <Toaster position="top-center" />
      {children}
    </RootProvider>
  );
}

export { Providers };
