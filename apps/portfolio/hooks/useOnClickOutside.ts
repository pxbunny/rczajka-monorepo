import { RefObject, useEffect } from 'react';

export const useOnClickOutside = <T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  callback: (event: MouseEvent | TouchEvent) => void
) => {
  useEffect(() => {
    const handle = (event: MouseEvent | TouchEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback(event);
      }
    };

    document.addEventListener('click', handle);
    document.addEventListener('touchstart', handle);

    return () => {
      document.removeEventListener('click', handle);
      document.removeEventListener('touchstart', handle);
    };
  }, [ref, callback]);
};
