/**
 * Integration test for FormWrapper component
 * 
 * This file demonstrates that FormWrapper can be used as a drop-in replacement
 * for the existing form components while providing the same functionality.
 */

import { z } from 'zod';
import { FormWrapper, type FieldConfig } from './form-wrapper';

// Test 1: Login Form Replacement
const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(32),
});

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

// Test 2: Register Form Replacement
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

// Test 3: Forgot Password Form Replacement
const forgotSchema = z.object({
  email: z.string().email(),
});

const forgotFields: FieldConfig[] = [
  {
    name: 'email',
    label: 'E-mail',
    type: 'email',
    placeholder: 'username@domain.com',
    autoComplete: 'email',
  },
];

// Mock functions for testing
const mockSubmitAction = async (values: any) => {
  console.log('Form submitted with values:', values);
  // Simulate API call
  return Math.random() > 0.5 ? true : 'An error occurred';
};

const mockSuccess = () => {
  console.log('Form submission successful!');
};

/**
 * Test component demonstrating all three form types
 */
export function FormWrapperIntegrationTest() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h2 className="text-xl font-bold mb-4">Login Form</h2>
        <FormWrapper
          schema={loginSchema}
          defaultValues={{ email: '', password: '' }}
          fields={loginFields}
          submitButtonText="Login"
          onSubmitAction={mockSubmitAction}
          onSuccess={mockSuccess}
        />
      </div>

      <div>
        <h2 className="text-xl font-bold mb-4">Register Form</h2>
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
          onSubmitAction={mockSubmitAction}
          onSuccess={mockSuccess}
        />
      </div>

      <div>
        <h2 className="text-xl font-bold mb-4">Forgot Password Form</h2>
        <FormWrapper
          schema={forgotSchema}
          defaultValues={{ email: '' }}
          fields={forgotFields}
          submitButtonText="Send reset link"
          onSubmitAction={mockSubmitAction}
          onSuccess={mockSuccess}
        />
      </div>
    </div>
  );
}

// Type-only tests to ensure the API matches existing forms
type LoginFormProps = {
  onSubmitAction: (values: z.infer<typeof loginSchema>) => Promise<true | string>;
  onSuccess: () => void;
};

type RegisterFormProps = {
  onSubmitAction: (values: z.infer<typeof registerSchema>) => Promise<true | string>;
  onSuccess: () => void;
};

type ForgotFormProps = {
  onSubmitAction: (values: z.infer<typeof forgotSchema>) => Promise<true | string>;
  onSuccess: () => void;
};

// These function signatures should match exactly what the original forms expected
const testLoginForm = (props: LoginFormProps) => (
  <FormWrapper
    schema={loginSchema}
    defaultValues={{ email: '', password: '' }}
    fields={loginFields}
    submitButtonText="Login"
    {...props}
  />
);

const testRegisterForm = (props: RegisterFormProps) => (
  <FormWrapper
    schema={registerSchema}
    defaultValues={{ username: '', email: '', password: '', re_password: '' }}
    fields={registerFields}
    submitButtonText="Register"
    {...props}
  />
);

const testForgotForm = (props: ForgotFormProps) => (
  <FormWrapper
    schema={forgotSchema}
    defaultValues={{ email: '' }}
    fields={forgotFields}
    submitButtonText="Send reset link"
    {...props}
  />
);

export {
  testLoginForm as LoginForm,
  testRegisterForm as RegisterForm,
  testForgotForm as ForgotForm,
};