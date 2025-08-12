'use client';
import { Input } from '@/components/ui/input';
import { ComponentProps, useState } from 'react';
import { Button } from '@/components/ui/button';
import { EyeIcon, EyeOffIcon } from 'lucide-react';

function PasswordInput(props: Omit<ComponentProps<typeof Input>, 'type'>) {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div className="relative">
      <Input type={isVisible ? 'text' : 'password'} {...props} />
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-1/2 right-1 size-7 -translate-y-1/2"
        onClick={toggleVisibility}
        type="button"
        aria-label={`${isVisible ? 'Hide' : 'Show'} password`}
      >
        {isVisible ? <EyeOffIcon /> : <EyeIcon />}
      </Button>
    </div>
  );
}

export { PasswordInput };
