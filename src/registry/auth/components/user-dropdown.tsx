'use client';
import Link from 'next/link';
import { User } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

type LoggedInProps = {
  isLogged: true;
  username: string;
  accountHref: string;
  logOutAction: () => Promise<void>;
};

type LoggedOutProps = {
  isLogged: false;
  loginHref: string;
};

type Props = LoggedInProps | LoggedOutProps;

function UserDropdown(props: Props) {
  const { isLogged } = props;

  if (!isLogged) {
    const { loginHref } = props;
    return (
      <Button variant="outline" size="icon" className="rounded-full" asChild>
        <Link href={loginHref}>
          <User />
        </Link>
      </Button>
    );
  }

  const { username, logOutAction, accountHref } = props;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar>
          <AvatarImage src="https://github.com/benqsz.png" alt="@benqsz" />
          <AvatarFallback>{username.slice(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem asChild>
          <Link href={accountHref}>My Account</Link>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={logOutAction}>Log out</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export { UserDropdown };
