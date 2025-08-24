import { toast } from 'sonner';
import { AuthContainer } from '@/registry/auth/components/auth-container';
import { RegisterForm } from '@/registry/auth/components/register-form';

export default function RegisterFormDemo() {
  return (
    <AuthContainer title="Create an account">
      <RegisterForm
        onSubmitAction={async () => {
          return await new Promise(resolve =>
            setTimeout(() => resolve(true), 3 * 1000),
          );
        }}
        onSuccess={() => {
          toast.success('Register successfull');
        }}
      />
    </AuthContainer>
  );
}
