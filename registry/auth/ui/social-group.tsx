import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  display: 'grid' | 'list';
};

function SocialGroup({ children, display = 'grid' }: Props) {
  return (
    <div className="mt-2 space-y-2">
      <div className="grid auto-cols-max grid-cols-[1fr_max-content_1fr] items-center gap-1">
        <Separator />
        <span>OR</span>
        <Separator />
      </div>
      <div
        className={cn(
          'w-full gap-1',
          display == 'grid' && 'grid grid-cols-2',
          display == 'list' && 'flex flex-col',
        )}
      >
        {children}
      </div>
    </div>
  );
}

export { SocialGroup };
