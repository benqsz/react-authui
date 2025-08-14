'use client';
import { AuthContainer } from '../../registry/auth/components/auth-container/auth-container';
import { RegisterForm } from 'registry/auth/components/register-form/register-form';

export default function RegisterFormDemo() {
  return (
    <AuthContainer
      title="Register"
      description="Create new account in Acme.inc"
    >
      <RegisterForm
        onSubmitAction={async values => {
          console.log('Register form submitted, values:', values);
          return true;
        }}
        onSuccess={async () => {
          console.log('Register form success');
        }}
      />
    </AuthContainer>
  );
}
