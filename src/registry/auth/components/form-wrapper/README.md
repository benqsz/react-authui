# FormWrapper Component

A generic, reusable form component that eliminates code duplication across authentication forms. The FormWrapper component provides a consistent interface for creating forms with Zod validation and react-hook-form.

## Features

- **Generic Form Creation**: Create forms with configurable field definitions
- **TypeScript Support**: Full type safety with Zod schema inference
- **Multiple Field Types**: Support for text, email, and password inputs
- **Validation**: Built-in Zod validation with error handling
- **Consistent API**: Same interface as existing form components
- **Field Descriptions**: Optional descriptions for form fields
- **Loading States**: Built-in loading state management for submit buttons

## Usage

### Basic Example

```tsx
import { z } from 'zod';
import { FormWrapper, type FieldConfig } from '@/components/form-wrapper';

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

const fields: FieldConfig[] = [
  {
    name: 'email',
    label: 'Email',
    type: 'email',
    placeholder: 'user@example.com',
    autoComplete: 'email',
  },
  {
    name: 'password',
    label: 'Password',
    type: 'password',
  },
];

function MyForm({ onSubmitAction, onSuccess }) {
  return (
    <FormWrapper
      schema={schema}
      defaultValues={{ email: '', password: '' }}
      fields={fields}
      submitButtonText="Sign In"
      onSubmitAction={onSubmitAction}
      onSuccess={onSuccess}
    />
  );
}
```

### Advanced Example with Field Descriptions

```tsx
const registerSchema = z
  .object({
    username: z.string().min(2).max(32),
    email: z.string().email(),
    password: z.string().min(8).max(32),
    re_password: z.string().min(8).max(32),
  })
  .refine(data => data.password === data.re_password, {
    message: 'Passwords do not match',
    path: ['re_password'],
  });

const registerFields: FieldConfig[] = [
  {
    name: 'username',
    label: 'Username',
    type: 'text',
    placeholder: 'admin',
    autoComplete: 'username',
    description: 'This is your public display name.',
  },
  {
    name: 'email',
    label: 'E-mail',
    type: 'email',
    placeholder: 'username@domain.com',
    autoComplete: 'email',
  },
  {
    name: 'password',
    label: 'Password',
    type: 'password',
  },
  {
    name: 're_password',
    label: 'Confirm password',
    type: 'password',
  },
];
```

## API Reference

### FormWrapperProps

| Prop | Type | Description |
|------|------|-------------|
| `schema` | `z.ZodType` | Zod schema for form validation |
| `defaultValues` | `z.infer<TSchema>` | Default values for form fields |
| `fields` | `FieldConfig[]` | Array of field configurations |
| `submitButtonText` | `string` | Text for the submit button |
| `onSubmitAction` | `(values) => Promise<true \| string>` | Submit handler function |
| `onSuccess` | `() => void` | Success callback function |
| `className` | `string` | Optional CSS class for form container |

### FieldConfig

| Property | Type | Description |
|----------|------|-------------|
| `name` | `string` | Field name (must match schema key) |
| `label` | `string` | Display label for the field |
| `type` | `'text' \| 'email' \| 'password'` | Input type |
| `placeholder` | `string` | Optional placeholder text |
| `autoComplete` | `string` | Optional autocomplete attribute |
| `description` | `string` | Optional field description |

### Field Types

- **text**: Standard text input
- **email**: Email input with appropriate validation
- **password**: Password input with hidden text

## Error Handling

The component handles errors in two ways:

1. **Validation Errors**: Zod schema validation errors are displayed inline
2. **Submit Errors**: If `onSubmitAction` returns a string, it's displayed as a form root error

```tsx
const handleSubmit = async (values) => {
  try {
    await submitToAPI(values);
    return true; // Success
  } catch (error) {
    return error.message; // Error message
  }
};
```

## Migration from Existing Forms

Replace existing form implementations with FormWrapper:

### Before (Login Form)
```tsx
function LoginForm({ onSubmitAction, onSuccess }) {
  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: '', password: '' },
  });

  // ... form logic and JSX
}
```

### After (Using FormWrapper)
```tsx
function LoginForm({ onSubmitAction, onSuccess }) {
  return (
    <FormWrapper
      schema={loginSchema}
      defaultValues={{ email: '', password: '' }}
      fields={loginFields}
      submitButtonText="Login"
      onSubmitAction={onSubmitAction}
      onSuccess={onSuccess}
    />
  );
}
```

## Benefits

1. **Code Reduction**: Eliminates ~60-80 lines of boilerplate per form
2. **Consistency**: All forms use the same patterns and error handling
3. **Maintainability**: Single source of truth for form logic
4. **Type Safety**: Full TypeScript support with schema inference
5. **Bug Fixes**: Fixes common bugs found in original form implementations