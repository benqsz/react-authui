type ActionReturnType = true | string;

type FormProps<T> = {
  onSubmitAction: (values: T) => Promise<ActionReturnType>;
  onSuccess: () => void;
};

export { type FormProps };
