import dynamic from 'next/dynamic';

export const examples = {
  'auth-container': {
    component: dynamic(() => import('../../examples/auth-container/auth-container')),
    code: `
export default function AuthContainerDemo() {
  return (
    <AuthContainer
      title="Auth Container"
      description="Card wrapper around auth forms"
    >
      form
    </AuthContainer>
  );
}

export { AuthContainerDemo };
`
  },
  'forgot-form': {
    component: dynamic(() => import('../../examples/forgot-form/forgot-form')),
    code: `'use client';

export default function ForgotFormDemo() {
  return (
    <AuthContainer
      title="Forgot password?"
      description="Enter your email address to reset your password."
    >
      <ForgotForm
        onSubmitAction={async values => {
          console.log('Forgot form submitted, values:', values);
          return true;
        }}
        onSuccess={async () => {
          console.log('Forgot form success');
        }}
      />
    </AuthContainer>
  );
}
`
  },
  'login-form': {
    component: dynamic(() => import('../../examples/login-form/login-form')),
    code: `'use client';

export default function LoginFormDemo() {
  return (
    <AuthContainer
      title="Forgot password?"
      description="Enter your email address to reset your password."
    >
      <LoginForm
        onSubmitAction={async values => {
          console.log('Login form submitted, values:', values);
          return true;
        }}
        onSuccess={async () => {
          console.log('Login form success');
        }}
      />
    </AuthContainer>
  );
}
`
  },
  'register-form': {
    component: dynamic(() => import('../../examples/register-form/register-form')),
    code: `'use client';

export default function RegisterFormDemo() {
  return (
    <AuthContainer
      title="Forgot password?"
      description="Enter your email address to reset your password."
    >
      <RegisterForm
        onSubmitAction={async values => {
          console.log('Register form submitted, values:', values);
          return true;
        }}
        onSuccess={async () => {
          console.log('Register form success');
        }}
      />
    </AuthContainer>
  );
}
`
  },
  'reset-form': {
    component: dynamic(() => import('../../examples/reset-form/reset-form')),
    code: `'use client';

export default function RegisterFormDemo() {
  return (
    <AuthContainer
      title="Forgot password?"
      description="Enter your email address to reset your password."
    >
      <ResetForm
        onSubmitAction={async values => {
          console.log('Reset form submitted, values:', values);
          return true;
        }}
        onSuccess={async () => {
          console.log('Reset form success');
        }}
      />
    </AuthContainer>
  );
}
`
  }
};
