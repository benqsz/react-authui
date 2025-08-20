import { toast } from 'sonner';
import { AuthContainer } from '@/components/auth/auth-container';
import { LoginForm } from '@/components/auth/login-form';

export default function LoginFormDemo() {
  return (
    <AuthContainer title="Sign in">
      <LoginForm
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
