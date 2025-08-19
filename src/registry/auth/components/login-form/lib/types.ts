import { z } from 'zod';
import { loginSchema } from './schemas';

type FormProps<T> = {
  onSubmitAction: (values: T) => Promise<true | string>;
  onSuccess: () => void;
};

type LoginProps = FormProps<z.infer<typeof loginSchema>>;

export type { LoginProps };
