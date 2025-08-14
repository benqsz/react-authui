import { Button } from '@/components/ui/button';
import { ComponentProps } from 'react';
import * as Icons from 'react-icons/fa';

type Props = {
  name: keyof typeof Icons;
  text?: string;
} & ComponentProps<typeof Button>;

function SocialButton({
  name,
  text = 'Sign in with',
  size = 'sm',
  variant = 'outline',
  ...rest
}: Props) {
  const Icon = Icons[name];

  return (
    <Button size={size} variant={variant} {...rest}>
      {Icon && <Icon style={{ marginRight: 8 }} />}
      {text} {name.replace(/^Fa/, '')}
    </Button>
  );
}

export { SocialButton };
