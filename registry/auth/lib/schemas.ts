import { z } from 'zod';

const registerSchema = z
  .object({
    username: z.string().min(2).max(32),
    email: z.email(),
    password: z.string().min(8).max(32),
    re_password: z.string().min(8).max(32),
  })
  .refine(data => data.password === data.re_password, {
    message: 'Passwords do not match',
  });

const loginSchema = z.object({
  email: z.email(),
  password: z.string().min(8).max(32),
});

const forgotSchema = z.object({
  email: z.email(),
});

const resetSchema = z
  .object({
    password: z.string().min(8).max(32),
    re_password: z.string().min(8).max(32),
  })
  .refine(data => data.password === data.re_password, {
    message: 'Passwords do not match',
  });

const otpSchema = z.object({
  pin: z
    .string()
    .min(6, {
      message: 'Your one-time password must be 6 characters.',
    })
    .max(6),
});

export { registerSchema, loginSchema, forgotSchema, resetSchema, otpSchema };
