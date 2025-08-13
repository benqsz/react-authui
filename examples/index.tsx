import dynamic from 'next/dynamic';

export const examples = {
  'auth-container': dynamic(() => import('./auth-container/auth-container')),
};
