'use client';
import { ReactNode } from 'react';
import { Loader2 } from 'lucide-react';
import { output, z, ZodObject } from 'zod';
import {
  DefaultValues,
  Resolver,
  useForm,
  UseFormReturn,
} from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form } from '@/components/ui/form';
import { FormRootError } from '@/components/ui/form-root-error';
import { Button } from '@/components/ui/button';

type Props<T extends ZodObject<any>> = {
  schema: T;
  submitAction: (values: z.infer<T>) => Promise<true | string>;
  successAction: () => void;
  defaultValues: DefaultValues<z.infer<T>>;
  submitText: string;
  children: (form: UseFormReturn<output<T>, any, output<T>>) => ReactNode;
};

function FormWrapper<T extends ZodObject<any>>(props: Props<T>) {
  const {
    schema,
    submitAction,
    successAction,
    defaultValues,
    submitText,
    children,
  } = props;

  const form = useForm<z.infer<T>>({
    resolver: zodResolver(schema) as Resolver<output<T>, any, output<T>>,
    defaultValues,
  });

  async function onSubmit(values: z.infer<typeof schema>) {
    const response = await submitAction(values);
    if (response === typeof 'string') {
      form.setError('root', {
        type: 'manual',
        message: response,
      });
    }
    successAction();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {children(form)}
        <FormRootError />
        <Button disabled={form.formState.isSubmitting} className="w-full">
          {form.formState.isSubmitting ? (
            <Loader2 className="animate-spin" />
          ) : (
            submitText
          )}
        </Button>
      </form>
    </Form>
  );
}

export { FormWrapper };
