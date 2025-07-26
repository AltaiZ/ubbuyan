import * as React from 'react';

import { cn } from '@/lib/utils';
import { Input, InputProps } from './input';
import { Button } from './button';
import { EyeIcon, Key } from 'lucide-react';
import { useState } from 'react';
import { Separator } from '@radix-ui/react-separator';
import { Eye } from 'lucide-react';
import Image from 'next/image';
import KeyImage from '@/zurag/view.png';

const Password = React.forwardRef<
  HTMLInputElement,
  InputProps & { containerClassName?: string }
>(({ className, containerClassName, ...props }, ref) => {
  const [show, setShow] = useState(false);
  return (
    <div
      className={cn(
        'flex border overflow-hidden ',
        containerClassName
      )}
    >
      <Input
        type={show ? 'text' : 'password'}
        className={cn(
          'border-none focus-visible:ring-none',
          className
        )}
        ref={ref}
        {...props}
        placeholder="•••••••••••••"
      />

      <Separator orientation="vertical" className="border-l h-15" />

      <Eye className="h-4 w-4 text-black" />
      <Button
        tabIndex={-1}
        size="sm"
        variant={'ghost'}
        className="h-15 rounded-none"
        type="button"
        onClick={() => setShow((prev) => !prev)}
      >
      <Image src={KeyImage} alt="key icon" width={20} height={20} />

      </Button>
    </div>
  );
});
Password.displayName = 'Password';

export { Password };
