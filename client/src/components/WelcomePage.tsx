import { rooms } from '../data';
import { Input } from './utils/Input';
import { Select } from './utils/Select';

export const WelcomePage = () => {
  return (
    <div>
      <Input />
      <Select options={rooms} placeholder="Select Room" />
    </div>
  );
};
