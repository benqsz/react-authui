'use client';
import { z } from 'zod';
import { FormWrapper, type FieldConfig } from '../form-wrapper';

// Existing register schema from register-form.tsx
const registerSchema = z
  .object({
    username: z.string().min(2).max(32),
    email: z.string().email(),
    password: z.string().min(8).max(32),
    re_password: z.string().min(8).max(32),
  })
  .refine(data => data.password === data.re_password, {
    message: 'Passwords do not match',
    path: ['re_password'],
  });

type Props = {
  onSubmitAction: (
    values: z.infer<typeof registerSchema>,
  ) => Promise<true | string>;
  onSuccess: () => void;
};

// Field configuration for register form
const registerFields: FieldConfig[] = [
  {
    name: 'username',
    label: 'Username',
    type: 'text',
    placeholder: 'admin',
    autoComplete: 'username',
    description: 'This is your public display name.',
  },
  {
    name: 'email',
    label: 'E-mail',
    type: 'email',
    placeholder: 'username@domain.com',
    autoComplete: 'email',
  },
  {
    name: 'password',
    label: 'Password',
    type: 'password',
  },
  {
    name: 're_password',
    label: 'Confirm password',
    type: 'password',
  },
];

function RegisterFormWrapper({ onSubmitAction, onSuccess }: Props) {
  return (
    <FormWrapper
      schema={registerSchema}
      defaultValues={{
        username: '',
        email: '',
        password: '',
        re_password: '',
      }}
      fields={registerFields}
      submitButtonText="Register"
      onSubmitAction={onSubmitAction}
      onSuccess={onSuccess}
    />
  );
}

export { RegisterFormWrapper };