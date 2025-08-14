'use client';
import { SocialButton } from 'registry/auth/ui/social-button';
import { AuthContainer } from '../../registry/auth/components/auth-container/auth-container';
import { RegisterForm } from 'registry/auth/components/register-form/register-form';
import { SocialGroup } from 'registry/auth/ui/social-group';

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
      <SocialGroup display="list">
        <SocialButton name="FaGoogle" />
        <SocialButton name="FaFacebook" />
      </SocialGroup>
    </AuthContainer>
  );
}
