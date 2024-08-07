import { useEffect } from 'react';

export const useScrollbarWidth = (cssStyleProperty: string) => {
  useEffect(() => {
    const documentWidth = document.documentElement.clientWidth;
    const scrollbarWidth = Math.abs(window.innerWidth - documentWidth);
    document.documentElement.style.setProperty(cssStyleProperty, `${scrollbarWidth}px`);
  }, [cssStyleProperty]);
};
