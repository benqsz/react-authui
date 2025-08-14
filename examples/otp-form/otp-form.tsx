'use client';
import { AuthContainer } from '../../registry/auth/components/auth-container/auth-container';
import { OtpForm } from 'registry/auth/components/otp-form/otp-form';

export default function OtpFormDemo() {
  return (
    <AuthContainer
      title="We sended to you one time password on phone number"
      description="Enter it below"
    >
      <OtpForm
        onSubmitAction={async values => {
          await new Promise(resolve => setTimeout(resolve, 3000));
          console.log('Password correct values:', values);
          return true;
        }}
        onSuccess={async () => {
          console.log('Success');
        }}
      />
    </AuthContainer>
  );
}
