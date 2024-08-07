import { useEffect } from 'react';

export const useOnKeyDown = (
  key: string,
  callback: (event: KeyboardEvent) => void,
) => {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === key) {
        callback(event);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [key, callback]);
};
