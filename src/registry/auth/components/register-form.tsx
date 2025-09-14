'use client';
import { z } from 'zod';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { FormWrapper } from '@/registry/auth/components/form-wrapper';
import { PasswordInput } from '@/registry/auth/ui/password-input';

const registerSchema = z
  .object({
    email: z.email(),
    password: z.string().min(8).max(32),
    re_password: z.string().min(8).max(32),
    username: z.string().min(2).max(32),
  })
  .refine(data => data.password === data.re_password, {
    message: 'Passwords do not match',
  });

type Props = {
  submitAction: (
    values: z.infer<typeof registerSchema>,
  ) => Promise<true | string>;
  successAction: () => void;
};

function RegisterForm({ submitAction, successAction }: Props) {
  return (
    <FormWrapper
      schema={registerSchema}
      submitAction={submitAction}
      successAction={successAction}
      submitText="Create account"
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
