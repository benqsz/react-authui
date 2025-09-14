import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const getURL =
  process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function capitalize(str: string) {
  if (str.length == 1) return str.toUpperCase();
  if (str == 'ui') return str.toUpperCase();
  return str[0].toUpperCase() + str.slice(1);
}
