'use client';
import { z } from 'zod';
import { Input } from '@/components/ui/input';
import { PasswordInput } from '@/components/ui/password-input';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { FormWrapper } from '@/components/auth/form-wrapper';

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
  ) => Promise<true | string>;
  onSuccess: () => void;
};

function RegisterForm({ onSubmitAction, onSuccess }: Props) {
  return (
    <FormWrapper
      schema={registerSchema}
      onSubmitAction={onSubmitAction}
      onSuccess={onSuccess}
      submitText="Create account"
      defaultValues={{
        username: '',
        email: '',
        password: '',
        re_password: '',
      }}
    >
      {form => (
        <>
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input
                    placeholder="admin"
                    autoComplete="username"
                    {...field}
                  />
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
        </>
      )}
    </FormWrapper>
  );
}

export { RegisterForm };
