'use client';
import { ResetForm } from 'registry/auth/components/reset-form/reset-form';
import { AuthContainer } from '../../registry/auth/components/auth-container/auth-container';

export default function RegisterFormDemo() {
  return (
    <AuthContainer
      title="Reset your password"
      description="Create new password for your account"
    >
      <ResetForm
        onSubmitAction={async values => {
          console.log('Reset form submitted, values:', values);
          return true;
        }}
        onSuccess={async () => {
          console.log('Reset form success');
        }}
      />
    </AuthContainer>
  );
}
