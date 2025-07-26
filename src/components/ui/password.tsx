import * as React from 'react';
import { cn } from '@/lib/utils';
import { Input, InputProps } from './input';
import { Button } from './button';
import { EyeIcon } from 'lucide-react';
import { useState } from 'react';

const Password = React.forwardRef<
  HTMLInputElement,
  InputProps & { containerClassName?: string }
>(({ className, containerClassName, ...props }, ref) => {
  const [show, setShow] = useState(false);
  return (
    <div
      className={cn(
        'flex border overflow-hidden',
        containerClassName
      )}
    >
      <Input
        type={show ? 'text' : 'password'}
        className={cn(
          'h-14 text-base px-4 py-2 text-xl border-none focus-visible:ring-0',
          className
        )}
        ref={ref}
        {...props}
        placeholder="•••••••••••••"
      />
      <Button
        tabIndex={-1}
        size="sm"
        variant="ghost"
        className="h-12 px-3 rounded-none"
        type="button"
        onClick={() => setShow((prev) => !prev)}
      >
        <EyeIcon className="h-5 w-5" />
      </Button>
    </div>
  );
});
Password.displayName = 'Password';

export { Password };
