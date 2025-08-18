import dynamic from 'next/dynamic';

export const examples = {
  'auth-container': {
    component: dynamic(
      () => import('../registry/examples/auth-container/auth-container'),
    ),
    code: `export default function AuthContainerDemo() {
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
`,
  },
  'forgot-form': {
    component: dynamic(
      () => import('../registry/examples/forgot-form/forgot-form'),
    ),
    code: `export default function ForgotFormDemo() {
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
`,
  },
  'login-form': {
    component: dynamic(
      () => import('../registry/examples/login-form/login-form'),
    ),
    code: `export default function LoginFormDemo() {
  return (
    <AuthContainer
      title="Login into your account"
      description="Welcome to react-authui"
      footer={
        <>
          Already have an account?{' '}
          <a href="#" className="text-foreground underline">
            Sign in
          </a>
        </>
      }
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
`,
  },
  'otp-form': {
    component: dynamic(() => import('../registry/examples/otp-form/otp-form')),
    code: `export default function OtpFormDemo() {
  return (
    <AuthContainer
      title="We sended to you one time password on phone number"
      description="Enter it below"
    >
      <OtpForm
        onSubmitAction={async values => {
          await new Promise(resolve => setTimeout(resolve, 3000));
          console.log('Password correct values:', values);
          return true;
        }}
        onSuccess={async () => {
          console.log('Success');
        }}
      />
    </AuthContainer>
  );
}
`,
  },
  'password-input': {
    component: dynamic(
      () => import('../registry/examples/password-input/password-input'),
    ),
    code: `export default function PasswordInputDemo() {
  return <PasswordInput />;
}
`,
  },
  'register-form': {
    component: dynamic(
      () => import('../registry/examples/register-form/register-form'),
    ),
    code: `export default function RegisterFormDemo() {
  return (
    <AuthContainer
      title="Register"
      description="Create new account in Acme.inc"
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
      <SocialButtonsGroup display="list" withSeparator>
        <SocialButton name="FaGoogle" />
        <SocialButton name="FaFacebook" />
      </SocialButtonsGroup>
    </AuthContainer>
  );
}
`,
  },
  'reset-form': {
    component: dynamic(
      () => import('../registry/examples/reset-form/reset-form'),
    ),
    code: `export default function RegisterFormDemo() {
  return (
    <AuthContainer
      title="Reset your password"
      description="Create new password for your account"
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
`,
  },
  'social-buttons': {
    component: dynamic(
      () => import('../registry/examples/social-buttons/social-buttons'),
    ),
    code: `export default function SocialButtonsDemo() {
  return (
    <div className="space-y-8">
      <SocialButtonsGroup display="list" withSeparator>
        <SocialButton name="FaGoogle" />
        <SocialButton name="FaFacebook" />
      </SocialButtonsGroup>
      <SocialButtonsGroup display="grid">
        <SocialButton name="FaMicrosoft" />
        <SocialButton name="FaInstagram" />
      </SocialButtonsGroup>
    </div>
  );
}
`,
  },
};
