'use client';
import { LoginForm } from 'registry/auth/components/login-form/login-form';
import { AuthContainer } from 'registry/auth/components/auth-container/auth-container';

export default function LoginFormDemo() {
  return (
    <AuthContainer
      title="Login into your account"
      description="Welcome to react-authui"
      footer={
        <>
          Already have an account?{' '}
          <a href="#" className="text-foreground underline">
            Sign in
          </a>
        </>
      }
    >
      <LoginForm
        onSubmitAction={async values => {
          console.log('Login form submitted, values:', values);
          return true;
        }}
        onSuccess={async () => {
          console.log('Login form success');
        }}
      />
    </AuthContainer>
  );
}
