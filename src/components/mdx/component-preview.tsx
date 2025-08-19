'use client';
import { Suspense, useMemo } from 'react';
import { Index } from '@/__registry__';
import { DynamicCodeBlock } from 'fumadocs-ui/components/dynamic-codeblock';
import { Tabs, TabsList, TabsContent, TabsTrigger } from '../ui/tabs';

function ComponentPreview({ name }: { name: string }) {
  const Preview = useMemo(() => {
    const Component = Index[name]?.component;
    return <Component />;
  }, [name]);

  const code = Index[name]?.files[0].content;

  return (
    <Tabs defaultValue="Preview" className="min-h-[500px] w-full">
      <TabsList>
        <TabsTrigger value="Preview">Preview</TabsTrigger>
        <TabsTrigger value="Code">Code</TabsTrigger>
      </TabsList>
      <TabsContent
        value="Preview"
        className="not-prose flex items-center justify-center rounded-md border"
      >
        <Suspense
          fallback={
            <div className="text-muted-foreground flex items-center justify-center text-sm">
              Loading...
            </div>
          }
        >
          {Preview}
        </Suspense>
      </TabsContent>
      <TabsContent value="Code">
        <DynamicCodeBlock lang="tsx" code={code} />
      </TabsContent>
    </Tabs>
  );
}

export { ComponentPreview };
