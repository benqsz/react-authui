import { Step, Steps } from 'fumadocs-ui/components/steps';
import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import { CLI, ComponentInstall, Manual } from './component-install';
import { ComponentPreview } from './component-preview';
import { ComponentSource } from './component-source';

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    CLI,
    ComponentInstall,
    ComponentPreview,
    ComponentSource,
    Manual,
    Step,
    Steps,
    ...components,
  };
}
