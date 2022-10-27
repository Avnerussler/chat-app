interface InputProps {
  type?: string;
  disabled?: boolean;
}

export const Input = ({ type, disabled }: InputProps) => {
  return <input className="border rounded-md px-2 py-1" type={type} disabled={disabled} />;
};
