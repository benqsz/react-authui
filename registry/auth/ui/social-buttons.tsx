import { ReactNode } from 'react';
import { ComponentProps } from 'react';
import * as Icons from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

type GroupProps = {
  children: ReactNode;
  display: 'grid' | 'list';
  withSeparator?: boolean;
};

function SocialButtonsGroup({
  children,
  display = 'grid',
  withSeparator = false,
}: GroupProps) {
  return (
    <div className="mt-2 space-y-2">
      {withSeparator && (
        <div className="grid auto-cols-max grid-cols-[1fr_max-content_1fr] items-center gap-1">
          <Separator />
          <span>OR</span>
          <Separator />
        </div>
      )}
      <div
        className={cn(
          'w-full gap-2',
          display == 'grid' && 'grid grid-cols-2',
          display == 'list' && 'flex flex-col',
        )}
      >
        {children}
      </div>
    </div>
  );
}

type ButtonProps = {
  name: keyof typeof Icons;
  text?: string;
} & ComponentProps<typeof Button>;

function SocialButton({
  name,
  text = 'Sign in with',
  size = 'sm',
  variant = 'outline',
  ...rest
}: ButtonProps) {
  const Icon = Icons[name];

  return (
    <Button size={size} variant={variant} {...rest}>
      {Icon && <Icon style={{ marginRight: 8 }} />}
      {text} {name.replace(/^Fa/, '')}
    </Button>
  );
}

export { SocialButtonsGroup, SocialButton };
