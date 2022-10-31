import { ReactNode, useEffect } from 'react';
import { ReactPortal } from './ReaactPortal';

interface ModalProps {
  children: ReactNode;
  handleClose: () => void;
  isOpen: boolean;
  className?: string;
}

export const Modal = ({ className, children, handleClose, isOpen }: ModalProps) => {
  useEffect(() => {
    const closeOnEscapeKey = (e: KeyboardEvent) => {
      e.key === 'Escape' ? handleClose() : null;
    };
    document.body.addEventListener('keydown', closeOnEscapeKey);
    return () => {
      document.body.removeEventListener('keydown', closeOnEscapeKey);
    };
  }, [handleClose]);

  if (!isOpen) return null;
  return (
    <ReactPortal
      className={`${className} ${!isOpen ? '-z-0' : ''}`}
      wrapperId="react-portal-modal-container">
      <div className="top-1/2 left-1/2 backdrop-blur w-full h-full  z-50">
        <div>{children}</div>
        <button onClick={handleClose}>Close</button>
      </div>
    </ReactPortal>
  );
};
