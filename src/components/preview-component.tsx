import { Tab, Tabs } from 'fumadocs-ui/components/tabs';
import { examples } from '../../examples';
import { ReactNode } from 'react';

type Props = {
  name: string;
};

async function PreviewComponent({ name }: Props) {
  const Component = examples[name] || (() => <>Component not found</>);

  return (
    <Tabs items={['Preview', 'Code']}>
      <Tab
        value="Preview"
        className="not-prose flex h-[500px] w-full items-center justify-center rounded-md border"
      >
        <Component />
      </Tab>
      <Tab
        value="Code"
        className="flex h-[500px] w-full items-center justify-center rounded-md border"
      >
        code
      </Tab>
    </Tabs>
  );
}

export { PreviewComponent };
