'use client';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Loader2 } from 'lucide-react';
import { FormRootError } from '@/registry/auth/ui/form-root-error';
import { PasswordInput } from '@/registry/auth/ui/password-input';

const resetSchema = z
  .object({
    password: z.string().min(8).max(32),
    re_password: z.string().min(8).max(32),
  })
  .refine(data => data.password === data.re_password, {
    message: 'Passwords do not match',
  });

type Props = {
  onSubmitAction: (
    values: z.infer<typeof resetSchema>,
  ) => Promise<{ success: boolean; message?: string }>;
  onSuccess: () => void;
};

function ResetForm({ onSubmitAction, onSuccess }: Props) {
  const form = useForm<z.infer<typeof resetSchema>>({
    resolver: zodResolver(resetSchema),
    defaultValues: {
      password: '',
      re_password: '',
    },
  });

  async function onSubmit(values: z.infer<typeof resetSchema>) {
    const { success, message } = await onSubmitAction(values);
    if (success) {
      onSuccess();
    } else {
      form.setError('root', {
        type: 'manual',
        message: message || 'An error unknown error occured',
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <PasswordInput {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="re_password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm password</FormLabel>
              <FormControl>
                <PasswordInput {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormRootError />
        <Button
          type="submit"
          className="w-full"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting ? (
            <Loader2 className="animate-spin" />
          ) : (
            'Reset password'
          )}
        </Button>
      </form>
    </Form>
  );
}

export { ResetForm };
