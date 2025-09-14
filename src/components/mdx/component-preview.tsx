'use client';
import { DynamicCodeBlock } from 'fumadocs-ui/components/dynamic-codeblock';
import { Loader2 } from 'lucide-react';
import { Suspense, useMemo } from 'react';
import { Index } from '@/__registry__';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';

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
              <Loader2 className="animate-spin" />
              <span className="sr-only">Loading</span>
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
