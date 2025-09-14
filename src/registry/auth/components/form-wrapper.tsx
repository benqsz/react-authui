/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import { ReactNode } from 'react';
import { DefaultValues, Resolver, useForm } from 'react-hook-form';
import { output, z, ZodObject } from 'zod';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import { FormRootError } from '@/registry/auth/ui/form-root-error';

type Props<T extends ZodObject<any>> = {
  schema: T;
  submitAction: (values: z.infer<T>) => Promise<true | string>;
  successAction: () => void;
  defaultValues: DefaultValues<z.infer<T>>;
  submitText: string;
  children: (form: ReturnType<typeof useForm<z.infer<T>>>) => ReactNode;
};

function FormWrapper<T extends ZodObject<any>>(props: Props<T>) {
  const {
    children,
    defaultValues,
    schema,
    submitAction,
    submitText,
    successAction,
  } = props;

  const form = useForm<z.infer<T>>({
    defaultValues,
    resolver: zodResolver(schema) as Resolver<output<T>, any, output<T>>,
  });

  async function onSubmit(values: z.infer<typeof schema>) {
    const response = await submitAction(values);
    if (response === typeof 'string') {
      form.setError('root', {
        message: response,
        type: 'manual',
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
