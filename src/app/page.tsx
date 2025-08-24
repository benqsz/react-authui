import Link from 'next/link';
import { UserDropdown } from '@/registry/auth/components/user-dropdown';

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="flex flex-1 flex-col items-center justify-center gap-4 text-center">
        <h1 className="text-2xl font-bold">React Auth UI</h1>
        <p className="text-fd-muted-foreground">
          Headless authentication components for react-based applications.
        </p>
        <Link href="/docs">docs</Link>
      </main>
    </div>
  );
}
