import { z } from 'zod';

const loginSchema = z.object({
  email: z.email(),
  password: z.string().min(8).max(32),
});

export { loginSchema };
