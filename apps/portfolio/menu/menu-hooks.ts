import { useEffect, useState } from 'react';
import { MenuState, observeMenuState, setMenuState } from './menu-manager';

export const useMenuState = (): [MenuState, typeof setMenuState] => {
  const [state, setState] = useState<MenuState>('none');

  useEffect(() => {
    const observer = observeMenuState(setState);
    return () => observer.disconnect();
  }, []);

  return [state, setMenuState]
};

export const useScrollbarWidth = () => {
  useEffect(() => {
    const documentWidth = document.documentElement.clientWidth;
    const scrollbarWidth = Math.abs(window.innerWidth - documentWidth);
    document.documentElement.style.setProperty('--scrollbar-width', `${scrollbarWidth}px`);
  }, []);
};
