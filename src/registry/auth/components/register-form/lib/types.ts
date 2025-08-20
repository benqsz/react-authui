import { z } from 'zod';
import { registerSchema } from './schemas';

type FormProps<T> = {
  onSubmitAction: (values: T) => Promise<true | string>;
  onSuccess: () => void;
};

type RegisterProps = FormProps<z.infer<typeof registerSchema>>;

export type { RegisterProps };
