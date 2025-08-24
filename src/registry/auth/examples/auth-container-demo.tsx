import { AuthContainer } from '@/registry/auth/components/auth-container';

export default function AuthContainerDemo() {
  return (
    <AuthContainer
      title="Welcome to Acme"
      description="This is very important component"
      footer={
        <>
          Already have an account?{' '}
          <a href="#" className="underline">
            Sign in
          </a>
        </>
      }
    >
      auth component
    </AuthContainer>
  );
}
