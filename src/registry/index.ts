import { type Registry } from 'shadcn/registry';
import { ui } from './registry-ui';
import { components } from './registry-components';
import { examples } from './registry-examples';

export const registry = {
  name: 'react-authui',
  homepage: 'https://react-authui.vercel.app',
  items: [...ui, ...components, ...examples],
} satisfies Registry;
