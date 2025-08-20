'use client';
import { z } from 'zod';
import { FormWrapper, type FieldConfig } from '../form-wrapper';

// Existing login schema from login-form.tsx
const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(32),
});

type Props = {
  onSubmitAction: (
    values: z.infer<typeof loginSchema>,
  ) => Promise<true | string>;
  onSuccess: () => void;
};

// Field configuration for login form
const loginFields: FieldConfig[] = [
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
];

function LoginFormWrapper({ onSubmitAction, onSuccess }: Props) {
  return (
    <FormWrapper
      schema={loginSchema}
      defaultValues={{
        email: '',
        password: '',
      }}
      fields={loginFields}
      submitButtonText="Login"
      onSubmitAction={onSubmitAction}
      onSuccess={onSuccess}
    />
  );
}

export { LoginFormWrapper };