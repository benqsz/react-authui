import type { MDXComponents } from 'mdx/types';
import defaultMdxComponents from 'fumadocs-ui/mdx';
import * as TabsComponents from '@/components/ui/tabs';
import { createGenerator } from 'fumadocs-typescript';
import { AutoTypeTable } from 'fumadocs-typescript/ui';
import { PreviewComponent } from '@/components/preview-component';

const generator = createGenerator();

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    ...TabsComponents,
    AutoTypeTable: props => <AutoTypeTable {...props} generator={generator} />,
    PreviewComponent: props => <PreviewComponent {...props} />,
    ...components,
  };
}
