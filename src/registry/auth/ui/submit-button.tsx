import { ComponentProps } from 'react';
import { Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

type Props = {
  loading?: boolean;
} & Omit<ComponentProps<typeof Button>, 'type'>;

function SubmitButton({ loading = false, children, disabled, ...rest }: Props) {
  return (
    <Button disabled={loading || disabled} type="submit" {...rest}>
      {loading ? (
        <>
          <Loader2 className="animate-spin" />
          <span className="sr-only">Loading</span>
        </>
      ) : (
        children
      )}
    </Button>
  );
}

export { SubmitButton };
