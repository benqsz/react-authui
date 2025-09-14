import { ComponentProps, ReactNode } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';

type Props = {
  title: string;
  description?: string;
  footer?: ReactNode;
  children: ReactNode;
} & ComponentProps<'section'>;

function AuthContainer(props: Props) {
  const { children, className, description, footer, title, ...rest } = props;

  return (
    <section
      className={cn(
        'mx-auto flex size-full max-w-lg items-center justify-center p-4',
        className,
      )}
      {...rest}
    >
      <Card className="w-full">
        <CardHeader>
          <CardTitle>
            <h1>{title}</h1>
          </CardTitle>
          {description && (
            <CardDescription>
              <p>{description}</p>
            </CardDescription>
          )}
        </CardHeader>
        <CardContent>{children}</CardContent>
        {footer && (
          <CardFooter className="text-muted-foreground justify-center text-center text-sm">
            <p>{footer}</p>
          </CardFooter>
        )}
      </Card>
    </section>
  );
}

export { AuthContainer };
