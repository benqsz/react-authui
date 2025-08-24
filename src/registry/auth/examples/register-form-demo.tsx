import { toast } from 'sonner';
import { AuthContainer } from '@/components/auth/auth-container';
import { RegisterForm } from '@/components/auth/register-form';

export default function RegisterFormDemo() {
  return (
    <AuthContainer title="Create an account">
      <RegisterForm
        submitAction={async () => {
          return await new Promise(resolve =>
            setTimeout(() => resolve(true), 3 * 1000),
          );
        }}
        successAction={() => {
          toast.success('Register successfull');
        }}
      />
    </AuthContainer>
  );
}
