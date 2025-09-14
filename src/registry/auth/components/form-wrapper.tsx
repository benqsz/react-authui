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
  submitText: string;
  children: (form: ReturnType<typeof useForm<z.infer<T>>>) => ReactNode;
};

function generateDefaultValues<T extends ZodObject<any>>(
  schema: T,
): DefaultValues<z.infer<T>> {
  const defaults: any = {};

  const shape = schema.shape;
  for (const key in shape) {
    const fieldType: string = shape[key].def.type;

    switch (fieldType) {
      case 'string':
        defaults[key] = '';
        break;
      case 'number':
        defaults[key] = 0;
        break;
      case 'boolean':
        defaults[key] = false;
        break;
      case 'array':
        defaults[key] = [];
        break;
      default:
        defaults[key] = '';
    }
  }

  return defaults;
}

function FormWrapper<T extends ZodObject<any>>(props: Props<T>) {
  const { children, schema, submitAction, submitText, successAction } = props;

  const form = useForm<z.infer<T>>({
    defaultValues: generateDefaultValues(schema),
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
