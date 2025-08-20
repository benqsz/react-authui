'use client';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitButton } from '@/components/ui/submit-button';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { FormRootError } from '@/components/ui/form-root-error';

const forgotSchema = z.object({
  email: z.email(),
});

type Props = {
  onSubmitAction: (
    values: z.infer<typeof forgotSchema>,
  ) => Promise<true | string>;
  onSuccess: () => void;
};

function ForgotForm({ onSubmitAction, onSuccess }: Props) {
  const form = useForm<z.infer<typeof forgotSchema>>({
    resolver: zodResolver(forgotSchema),
    defaultValues: {
      email: '',
    },
  });

  async function onSubmit(values: z.infer<typeof forgotSchema>) {
    const response = await onSubmitAction(values);
    if (response === typeof 'string') {
      form.setError('root', {
        type: 'manual',
        message: response,
      });
    }

    onSuccess();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>E-mail</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="username@domain.com"
                  autoComplete="email"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormRootError />
        <SubmitButton loading={form.formState.isSubmitting}>
          Send reset link
        </SubmitButton>
      </form>
    </Form>
  );
}

export { ForgotForm };
