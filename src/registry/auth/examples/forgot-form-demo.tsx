import { toast } from 'sonner';
import { AuthContainer } from '@/components/auth/auth-container';
import { ForgotForm } from '../components/forgot-form/forgot-form';

export default function ForgotFormDemo() {
  return (
    <AuthContainer
      title="Forgot password?"
      description="Enter your email and we will send you reset link"
    >
      <ForgotForm
        onSubmitAction={async () => {
          return await new Promise(resolve =>
            setTimeout(() => resolve(true), 3 * 1000),
          );
        }}
        onSuccess={() => {
          toast.success('Login successfull');
        }}
      />
    </AuthContainer>
  );
}
