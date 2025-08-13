import { ComponentProps, ReactNode } from 'react';
import { cn } from '@/lib/utils';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

type Props = {
  header: string;
  description: string;
  footer?: ReactNode;
  children: ReactNode;
} & ComponentProps<'section'>;

function AuthContainer(props: Props) {
  const { className, header, description, footer, children, ...rest } = props;

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
            <h1>{header}</h1>
          </CardTitle>
          <CardDescription>
            <p>{description}</p>
          </CardDescription>
        </CardHeader>
        <CardContent>{children}</CardContent>
        {footer && (
          <CardFooter>
            <p>{footer}</p>
          </CardFooter>
        )}
      </Card>
    </section>
  );
}

export { AuthContainer };
