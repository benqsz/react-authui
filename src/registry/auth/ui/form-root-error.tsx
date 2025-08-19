import { ComponentProps } from 'react';
import { useFormState } from 'react-hook-form';
import { cn } from '@/lib/utils';

function FormRootError({ className, ...props }: ComponentProps<'p'>) {
  const { errors } = useFormState();
  const rootError = errors.root;
  if (!rootError) return null;

  return (
    <p className={cn('text-destructive text-sm', className)} {...props}>
      {rootError.message}
    </p>
  );
}

export { FormRootError };
