import { MenuState, setMenuState } from '@menu';
import { useEffect, useState } from 'react';
import { observeMenuState } from '../menu/menu-manager';

export const useMenuState = (): [MenuState, typeof setMenuState] => {
  const [state, setState] = useState<MenuState>('none');

  useEffect(() => {
    const observer = observeMenuState(setState);
    return () => observer.disconnect();
  }, []);

  return [state, setMenuState]
};
