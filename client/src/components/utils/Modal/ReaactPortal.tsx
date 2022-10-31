import { FC, useLayoutEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import cx from 'classnames';
interface ReactPortalProps {
  children: JSX.Element;
  wrapperId: string;
  className?: string;
}

export const ReactPortal: FC<ReactPortalProps> = ({
  children,
  wrapperId = 'react-portal-wrapper',
  className,
}) => {
  const [wrapperElement, setWrapperElement] = useState<HTMLElement | null>(null);

  const createWrapperAndAppendToBody = (wrapperId: string) => {
    const wrapperElement = document.createElement('div');
    wrapperElement.setAttribute('id', wrapperId);
    document.body.appendChild(wrapperElement);
    return wrapperElement;
  };

  useLayoutEffect(() => {
    let element = document.getElementById(wrapperId);
    // if element is not found with wrapperId or wrapperId is not provided,
    // create and append to body

    if (!element) {
      element = createWrapperAndAppendToBody(wrapperId);
    } else {
      element.className = cx('fixed h-full w-full top-0 	 z-50', className && className);
    }
    setWrapperElement(element);
  }, [wrapperId]);

  // wrapperElement state will be null on the very first render.
  if (wrapperElement === null) return null;

  return createPortal(children, wrapperElement!);
};

<div className="blur z-50"></div>;
