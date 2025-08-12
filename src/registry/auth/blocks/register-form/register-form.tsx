'use client';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Loader2 } from 'lucide-react';
import { FormRootError } from '@/registry/auth/ui/form-root-error';
import { PasswordInput } from '@/registry/auth/ui/password-input';

const registerSchema = z
  .object({
    username: z.string().min(2).max(32),
    email: z.email(),
    password: z.string().min(8).max(32),
    re_password: z.string().min(8).max(32),
  })
  .refine(data => data.password === data.re_password, {
    message: 'Passwords do not match',
  });

type Props = {
  onSubmitAction: (
    values: z.infer<typeof registerSchema>,
  ) => Promise<{ success: boolean; message?: string }>;
  onSuccess: () => void;
};

function RegisterForm({ onSubmitAction, onSuccess }: Props) {
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: '',
      email: '',
      password: '',
      re_password: '',
    },
  });

  async function onSubmit(values: z.infer<typeof registerSchema>) {
    const { success, message } = await onSubmitAction(values);
    if (success) {
      onSuccess();
    } else {
      form.setError('root', {
        type: 'manual',
        message: message || 'An error occurred during login',
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="admin" autoComplete="username" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
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
            'Register'
          )}
        </Button>
      </form>
    </Form>
  );
}

export { RegisterForm };
