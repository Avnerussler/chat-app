import { useCallback, useState } from 'react';

export const useToggle = (initialState: boolean = false) => {
  const [isOpen, setIsOpen] = useState<boolean>(initialState);

  const toggle = useCallback((): void => {
    setIsOpen(isOpen => !isOpen);
  }, []);

  return { toggle, isOpen };
};
