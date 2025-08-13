type Props = {
  name: string;
};

function PreviewComponent({ name }: Props) {
  return <div>{name}</div>;
}

export { PreviewComponent };
