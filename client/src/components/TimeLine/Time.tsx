import cx from 'classnames';

interface TimeProps {
  time: string;
}
export const Time = ({ time }: TimeProps) => (
  <div
    className={cx(
      'z-10 relative w-16 text-center bg-red-400 ',
      time.slice(3, 6) === '00' && 'font-bold'
    )}>
    {time}
  </div>
);
