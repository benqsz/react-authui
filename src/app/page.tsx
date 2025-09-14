import Link from 'next/link';
import { Logo } from '@/components/logo';

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="flex flex-1 flex-col items-center justify-center gap-4 text-center">
        <Logo />
        <h1 className="text-2xl font-bold">React Auth UI</h1>
        <p className="text-muted-foreground">
          Headless authentication components for react-based applications.
        </p>
        <Link
          href="/docs"
          className="decoration-1 underline-offset-4 hover:underline"
        >
          documentation
        </Link>
      </main>
    </div>
  );
}
