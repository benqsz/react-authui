import { toast } from 'sonner';
import { UserDropdown } from '@/registry/auth/components/user-dropdown';

export default function UserDropdownDemo() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-center gap-4">
        Logged in
        <UserDropdown
          isLogged
          username="benqsz"
          logOutAction={async () => {
            await new Promise(resolve =>
              setTimeout(() => resolve(true), 3 * 1000),
            );
            toast.success('Sucessfully logged out');
          }}
          accountHref="#"
        />
      </div>
      <div className="flex items-center justify-center gap-4">
        Not logged in
        <UserDropdown isLogged={false} loginHref="#" />
      </div>
    </div>
  );
}
