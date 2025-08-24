import defaultMdxComponents from 'fumadocs-ui/mdx';
import { Steps, Step } from 'fumadocs-ui/components/steps';
import type { MDXComponents } from 'mdx/types';

import { ComponentPreview } from './component-preview';
import { ComponentSource } from './component-source';
import { ComponentInstall, CLI, Manual } from './component-install';

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    ComponentPreview,
    ComponentSource,
    ComponentInstall,
    CLI,
    Manual,
    Steps,
    Step,
    ...components,
  };
}
