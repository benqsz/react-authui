'use client';
import { SubmitButton } from '@/components/ui/submit-button';
import { useState } from 'react';

export default function PasswordInputDemo() {
  const [loading, setLoading] = useState(false);
  return (
    <SubmitButton
      loading={loading}
      onClick={async () => {
        setLoading(true);
        await new Promise(resolve => setTimeout(resolve, 3000));
        setLoading(false);
      }}
    >
      Submit
    </SubmitButton>
  );
}
