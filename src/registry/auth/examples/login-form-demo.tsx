import { toast } from 'sonner';
import { LoginForm } from '@/components/auth/login-form';

export default function LoginFormDemo() {
  return (
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
  );
}
