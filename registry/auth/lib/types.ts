import { z } from 'zod';
import {
  registerSchema,
  forgotSchema,
  loginSchema,
  resetSchema,
  otpSchema,
} from './schemas';

type FormProps<T> = {
  onSubmitAction: (values: T) => Promise<true | string>;
  onSuccess: () => void;
};

type RegisterProps = FormProps<z.infer<typeof registerSchema>>;
type LoginProps = FormProps<z.infer<typeof loginSchema>>;
type ForgotProps = FormProps<z.infer<typeof forgotSchema>>;
type ResetProps = FormProps<z.infer<typeof resetSchema>>;
type OtpProps = FormProps<z.infer<typeof otpSchema>>;

export type { RegisterProps, LoginProps, ForgotProps, ResetProps, OtpProps };
