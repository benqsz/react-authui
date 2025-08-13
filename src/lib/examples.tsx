import dynamic from 'next/dynamic';

export const examples = {
  'auth-container': dynamic(() => import('../../examples/auth-container/auth-container')),
  'forgot-form': dynamic(() => import('../../examples/forgot-form/forgot-form'))
};
