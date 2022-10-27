import { RoomType } from '../../types';

interface SelectProps {
  options: RoomType[];
  placeholder?: string;
}

export const Select = ({ options, placeholder }: SelectProps) => {
  return (
    <select defaultValue={-1}>
      {placeholder && (
        <option value={-1} disabled>
          {placeholder}
        </option>
      )}
      {options.map(({ id, name }) => (
        <option key={id} value={id}>
          {name}
        </option>
      ))}
    </select>
  );
};
