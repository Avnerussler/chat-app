import cx from 'classnames';
interface LineProps {
  time: string;
}

export const Line = ({ time }: LineProps) => (
  <span
    className={cx(
      'h-px bg-zinc-300 w-full absolute top-1/2 left-0 ',
      time.slice(3, 6) === '00' && 'bg-yellow-300'
    )}></span>
);
