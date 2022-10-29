import { useQuery } from '@apollo/client';
import { GET_ROOMS } from '../queries/getRooms';
import { FloatButtonPosition } from '../types';
import { TimeLine } from './TimeLine';
import { FloatButton } from './utils/FluatButton';
import { Input } from './utils/Input';
import { Select } from './utils/Select';
import { BsPlusLg } from 'react-icons/bs';
import * as dayjs from 'dayjs';
import { useState } from 'react';
export const WelcomePage = () => {
  const { loading, error, data } = useQuery(GET_ROOMS);
  const [timesEvents, setTimesEvents] = useState<string[]>([]);

  if (loading) {
    return <div>loading...</div>;
  }

  if (error) {
    return <div>error!</div>;
  }

  const handleClick = () => {
    setTimesEvents([...timesEvents, dayjs().format('HH:MM')]);
  };
  console.log(timesEvents);

  return (
    <div className="">
      {/* <Input /> */}
      <TimeLine timesEvents={timesEvents} />
      <FloatButton
        onClick={handleClick}
        className="text-black"
        icon={<BsPlusLg className="w-8" />}
      />
      {/* <Select options={data.rooms} placeholder="Select Room" /> */}
    </div>
  );
};
