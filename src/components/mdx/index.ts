import defaultMdxComponents from 'fumadocs-ui/mdx';
import { Steps, Step } from 'fumadocs-ui/components/steps';
import type { MDXComponents } from 'mdx/types';

import { ComponentPreview } from './component-preview';
import { ComponentSource } from './component-source';
import { Tabs, TabsList, TabsContent, TabsTrigger } from '../ui/tabs';

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    ComponentPreview,
    ComponentSource,
    Tabs,
    TabsList,
    TabsContent,
    TabsTrigger,
    Steps,
    Step,
    ...components,
  };
}
