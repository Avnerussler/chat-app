interface InputProps {
  type?: string;
  disabled?: boolean;
  placeholder?: string;
  label?: string;
}

export const Input = ({ type, disabled, placeholder, label }: InputProps) => {
  return (
    <div>
      {label && <label>{label}</label>}
      <input
        className="border rounded-md px-2 py-1"
        placeholder={placeholder}
        type={type}
        disabled={disabled}
      />
    </div>
  );
};
