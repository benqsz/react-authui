import { Tab, Tabs } from 'fumadocs-ui/components/tabs';
import { examples } from '@/lib/examples';
import { CodeBlock, Pre } from 'fumadocs-ui/components/codeblock';

type Props = {
  name: string;
};

async function PreviewComponent({ name }: Props) {
  // @ts-ignore
  const { component: Component, code } = examples[name] || {
    component: () => <>Component not found</>,
    code: '',
  };

  return (
    <Tabs items={['Preview', 'Code']}>
      <Tab
        value="Preview"
        className="not-prose flex min-h-[500px] w-full items-center justify-center rounded-md border"
      >
        <Component />
      </Tab>
      <Tab
        value="Code"
        className="flex h-[500px] w-full items-center justify-center rounded-md border"
      >
        <CodeBlock title={`${name}.tsx`}>
          <Pre>{code}</Pre>
        </CodeBlock>
      </Tab>
    </Tabs>
  );
}

export { PreviewComponent };
