'use client';
import { useEffect } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Loader, Loader2 } from 'lucide-react';
import { FormRootError } from '@/../registry/auth/ui/form-root-error';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '@/components/ui/input-otp';
import { REGEXP_ONLY_DIGITS_AND_CHARS } from 'input-otp';
import { FormProps } from '../../lib/types';

const otpSchema = z.object({
  pin: z
    .string()
    .min(6, {
      message: 'Your one-time password must be 6 characters.',
    })
    .max(6),
});

function OtpForm({
  onSubmitAction,
  onSuccess,
}: FormProps<z.infer<typeof otpSchema>>) {
  const form = useForm<z.infer<typeof otpSchema>>({
    resolver: zodResolver(otpSchema),
    defaultValues: {
      pin: '',
    },
  });

  const pinValue = form.watch('pin');

  useEffect(() => {
    if (pinValue.length === 6 && !form.formState.isSubmitting)
      form.handleSubmit(onSubmit)();
  }, [pinValue, form]);

  async function onSubmit(values: z.infer<typeof otpSchema>) {
    const response = await onSubmitAction(values);
    if (response === typeof 'string') {
      form.setError('root', {
        type: 'manual',
        message: response,
      });
    }

    onSuccess();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="relative">
        {form.formState.isSubmitting && (
          <Loader2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-spin" />
        )}
        <FormField
          control={form.control}
          name="pin"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="sr-only">One-Time Password</FormLabel>
              <FormControl>
                <InputOTP
                  maxLength={6}
                  pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
                  disabled={form.formState.isSubmitting}
                  {...field}
                >
                  <InputOTPGroup className="mx-auto">
                    {[...Array(6)].map((_, i) => (
                      <InputOTPSlot key={i} index={i} />
                    ))}
                  </InputOTPGroup>
                </InputOTP>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormRootError />
      </form>
    </Form>
  );
}

export { OtpForm };
