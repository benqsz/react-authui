'use client';
import { z } from 'zod';
import { FormWrapper, type FieldConfig } from '../form-wrapper';

// Existing forgot schema from forgot-form.tsx
const forgotSchema = z.object({
  email: z.string().email(),
});

type Props = {
  onSubmitAction: (
    values: z.infer<typeof forgotSchema>,
  ) => Promise<true | string>;
  onSuccess: () => void;
};

// Field configuration for forgot form
const forgotFields: FieldConfig[] = [
  {
    name: 'email',
    label: 'E-mail',
    type: 'email',
    placeholder: 'username@domain.com',
    autoComplete: 'email',
  },
];

function ForgotFormWrapper({ onSubmitAction, onSuccess }: Props) {
  return (
    <FormWrapper
      schema={forgotSchema}
      defaultValues={{
        email: '',
      }}
      fields={forgotFields}
      submitButtonText="Send reset link"
      onSubmitAction={onSubmitAction}
      onSuccess={onSuccess}
    />
  );
}

export { ForgotFormWrapper };