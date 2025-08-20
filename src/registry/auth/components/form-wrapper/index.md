# FormWrapper - Generic Form Component

A powerful, reusable form component that eliminates code duplication and provides a consistent interface for creating authentication forms with Zod validation and react-hook-form.

## Overview

The FormWrapper component was created to address code duplication across the form components in `src/registry/components/`. All authentication forms (login, register, forgot password) follow the same patterns but require significant boilerplate code.

## Key Benefits

- **🔥 74% Less Code**: Reduces form implementation from ~90 lines to ~23 lines
- **🐛 Bug Fixes**: Fixes error handling bugs found in original forms
- **🔒 Type Safety**: Full TypeScript support with Zod schema inference
- **🎯 Consistency**: All forms use identical patterns and error handling
- **🛠️ Maintainable**: Declarative field configuration instead of imperative JSX

## Quick Start

```tsx
import { FormWrapper } from './form-wrapper';

const fields = [
  { name: 'email', label: 'Email', type: 'email' },
  { name: 'password', label: 'Password', type: 'password' },
];

<FormWrapper
  schema={mySchema}
  defaultValues={{ email: '', password: '' }}
  fields={fields}
  submitButtonText="Sign In"
  onSubmitAction={handleSubmit}
  onSuccess={handleSuccess}
/>
```

## Documentation

- **[README.md](./README.md)** - Complete API documentation and usage examples
- **[COMPARISON.md](./COMPARISON.md)** - Before/after code comparison showing the benefits
- **[demo-login-form.tsx](./demo-login-form.tsx)** - Production-ready example

## Example Implementations

The `form-wrapper` directory contains example implementations for all existing forms:

- `login-form-example.tsx` - Login form using FormWrapper
- `register-form-example.tsx` - Registration form with field descriptions
- `forgot-form-example.tsx` - Password reset form

## Supported Field Types

- **text** - Standard text input
- **email** - Email input with validation
- **password** - Password input with hidden text

Each field supports:
- Custom labels and placeholders
- AutoComplete attributes
- Optional descriptions
- Full Zod validation integration

## Migration

Replace existing form implementations by:

1. Define your field configuration array
2. Replace the form component with FormWrapper
3. Pass the same props (onSubmitAction, onSuccess)

The API is identical to existing forms, so no changes are needed in parent components.

## Built With

- **React Hook Form** - Form state management
- **Zod** - Schema validation
- **TypeScript** - Type safety
- **Existing UI Components** - Maintains design consistency

---

*This component demonstrates how to create reusable, generic components that eliminate code duplication while maintaining full type safety and functionality.*