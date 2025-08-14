import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { examples } from '@/lib/examples';
import { DynamicCodeBlock } from 'fumadocs-ui/components/dynamic-codeblock';

type Props = {
  name: string;
};

async function PreviewComponent({ name }: Props) {
  // @ts-ignore
  if (!examples[name]) return null;
  // @ts-ignore
  const { component: Component, code } = examples[name];

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
        <Component />
      </TabsContent>
      <TabsContent value="Code">
        <DynamicCodeBlock lang="tsx" code={code} />
      </TabsContent>
    </Tabs>
  );
}

export { PreviewComponent };
