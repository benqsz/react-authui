import dynamic from 'next/dynamic';

export const examples = {
  'auth-container': {
    component: dynamic(
      () => import('../../examples/auth-container/auth-container'),
    ),
    code: `
export default function AuthContainerDemo() {
  return (
    <AuthContainer
      title="Auth Container"
      description="Card wrapper around auth forms"
    >
      form
    </AuthContainer>
  );
}

export { AuthContainerDemo };
`,
  },
  'forgot-form': {
    component: dynamic(() => import('../../examples/forgot-form/forgot-form')),
    code: `'use client';

export default function ForgotFormDemo() {
  return (
    <AuthContainer
      title="Forgot password?"
      description="Enter your email address to reset your password."
    >
      <ForgotForm
        onSubmitAction={async values => {
          console.log('Forgot form submitted, values:', values);
          return true;
        }}
        onSuccess={async () => {
          console.log('Forgot form success');
        }}
      />
    </AuthContainer>
  );
}
`,
  },
};
