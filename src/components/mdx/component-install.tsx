import { ReactNode } from 'react';
import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/ui/tabs';

type Props = {
  children: ReactNode;
};

function ComponentInstall({ children }: Props) {
  return (
    <Tabs defaultValue="cli">
      <TabsList>
        <TabsTrigger value="cli">CLI</TabsTrigger>
        <TabsTrigger value="manual">Manual</TabsTrigger>
      </TabsList>
      {children}
    </Tabs>
  );
}

function CLI({ children }: Props) {
  return <TabsContent value="cli">{children}</TabsContent>;
}

function Manual({ children }: Props) {
  return <TabsContent value="manual">{children}</TabsContent>;
}

export { ComponentInstall, CLI, Manual };
