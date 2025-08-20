'use client';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitButton } from '@/components/ui/submit-button';
import { Input } from '@/components/ui/input';
import { PasswordInput } from '@/components/ui/password-input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from '@/components/ui/form';
import { FormRootError } from '@/components/ui/form-root-error';

export type FieldType = 'text' | 'email' | 'password';

export interface FieldConfig {
  name: string;
  label: string;
  type: FieldType;
  placeholder?: string;
  autoComplete?: string;
  description?: string;
}

export interface FormWrapperProps<TSchema extends z.ZodType> {
  schema: TSchema;
  defaultValues: z.infer<TSchema>;
  fields: FieldConfig[];
  submitButtonText: string;
  onSubmitAction: (values: z.infer<TSchema>) => Promise<true | string>;
  onSuccess: () => void;
  className?: string;
}

function FormWrapper<TSchema extends z.ZodType>({
  schema,
  defaultValues,
  fields,
  submitButtonText,
  onSubmitAction,
  onSuccess,
  className = "space-y-4",
}: FormWrapperProps<TSchema>) {
  const form = useForm<z.infer<TSchema>>({
    resolver: zodResolver(schema),
    defaultValues,
  });

  async function onSubmit(values: z.infer<TSchema>) {
    const response = await onSubmitAction(values);
    if (typeof response === 'string') {
      form.setError('root', {
        type: 'manual',
        message: response,
      });
    }

    onSuccess();
  }

  const renderInput = (field: FieldConfig, formField: any) => {
    switch (field.type) {
      case 'password':
        return <PasswordInput {...formField} />;
      case 'email':
      case 'text':
      default:
        return (
          <Input
            {...formField}
            placeholder={field.placeholder}
            autoComplete={field.autoComplete}
          />
        );
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={className}>
        {fields.map((fieldConfig) => (
          <FormField
            key={fieldConfig.name}
            control={form.control}
            name={fieldConfig.name as any}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{fieldConfig.label}</FormLabel>
                <FormControl>
                  {renderInput(fieldConfig, field)}
                </FormControl>
                {fieldConfig.description && (
                  <FormDescription>{fieldConfig.description}</FormDescription>
                )}
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
        <FormRootError />
        <SubmitButton loading={form.formState.isSubmitting}>
          {submitButtonText}
        </SubmitButton>
      </form>
    </Form>
  );
}

export { FormWrapper };