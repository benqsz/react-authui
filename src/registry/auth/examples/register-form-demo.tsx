import { toast } from 'sonner';
import { RegisterForm } from '@/components/auth/register-form';

export default function RegisterFormDemo() {
  return (
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
  );
}
