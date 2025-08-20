'use client';
import { z } from 'zod';
import { FormWrapper } from '../src/registry/auth/components/form-wrapper';

const testSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

const testFields = [
  {
    name: 'email',
    label: 'Email',
    type: 'email' as const,
    placeholder: 'test@example.com',
  },
  {
    name: 'password',
    label: 'Password',
    type: 'password' as const,
  },
];

export default function TestPage() {
  const handleSubmit = async (values: z.infer<typeof testSchema>) => {
    console.log('Form submitted:', values);
    return true;
  };

  const handleSuccess = () => {
    console.log('Form submission successful');
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">FormWrapper Test</h1>
      <FormWrapper
        schema={testSchema}
        defaultValues={{
          email: '',
          password: '',
        }}
        fields={testFields}
        submitButtonText="Test Submit"
        onSubmitAction={handleSubmit}
        onSuccess={handleSuccess}
      />
    </div>
  );
}