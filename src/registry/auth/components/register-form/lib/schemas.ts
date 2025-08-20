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

export { registerSchema };
