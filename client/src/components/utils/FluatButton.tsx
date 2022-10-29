import cx from 'classnames';
import { ReactNode } from 'react';
import { FloatButtonPosition } from '../../types';

interface FloatButtonProps {
  name?: string;
  onClick?: () => void;
  position?: FloatButtonPosition;
  icon?: ReactNode | string;
  className?: string;
}

export const FloatButton = ({ name, onClick, position, className, icon }: FloatButtonProps) => (
  <button
    id="floatButton"
    onClick={onClick}
    className={cx(
      'cursor-pointer fixed flex items-center justify-center  right-0 bottom-0 z-10 bg-sky-400 m-5 rounded-full w-20 h-20 text-white hover:bg-sky-500 transition ease-in-out shadow-xl',
      className && className,
      position === FloatButtonPosition.BOTTOM_LEFT && 'left-0',
      position === FloatButtonPosition.TOP_LEFT && 'left-0 top-0',
      position === FloatButtonPosition.TOP_RIGHT && 'top-0'
    )}>
    {name && <span>{name}</span>}
    {icon && <span>{icon}</span>}
  </button>
);
