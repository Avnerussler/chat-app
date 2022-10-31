import { useQuery } from '@apollo/client';
import { GET_ROOMS } from '../queries/getRooms';
import { TimeLine } from './TimeLine';
import { FloatButton } from './utils/FluatButton';
import { BsPlusLg } from 'react-icons/bs';
import * as dayjs from 'dayjs';
import { useState } from 'react';
import { Modal } from './utils/Modal/Modal';
import { useToggle } from '../hooks/useToggle';
export const WelcomePage = () => {
  const { loading, error, data } = useQuery(GET_ROOMS);
  const [timesEvents, setTimesEvents] = useState<string[]>([]);
  const { toggle, isOpen } = useToggle();
  if (loading) {
    return <div>loading...</div>;
  }

  if (error) {
    return <div>error!</div>;
  }

  const handleClick = () => {
    setTimesEvents([...timesEvents, dayjs().format('HH:mm')]);
  };
  console.log(timesEvents);

  return (
    <div className="">
      <button onClick={toggle}>open</button>
      <Modal className="" isOpen={isOpen} handleClose={toggle}>
        This is Modal Content!
      </Modal>
      <TimeLine timesEvents={timesEvents} />
      <FloatButton
        onClick={handleClick}
        className="text-black"
        icon={<BsPlusLg className="w-8" />}
      />
    </div>
  );
};
