import { ReactNode } from 'react';
import { Toaster } from '@/components/ui/sonner';
import { RootProvider } from 'fumadocs-ui/provider';

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
