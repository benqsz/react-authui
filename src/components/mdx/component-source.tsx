import { DynamicCodeBlock } from 'fumadocs-ui/components/dynamic-codeblock';
import { Index } from '@/__registry__';

function ComponentSource({ name }: { name: string }) {
  const value = Index[name]?.files[0].content;
  if (!value) {
    return null;
  }

  return <DynamicCodeBlock lang="tsx" code={value} />;
}

export { ComponentSource };
