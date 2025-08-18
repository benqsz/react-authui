'use client';
import { ForgotForm } from 'registry/auth/components/forgot-form/forgot-form';
import { AuthContainer } from 'registry/auth/components/auth-container/auth-container';

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
