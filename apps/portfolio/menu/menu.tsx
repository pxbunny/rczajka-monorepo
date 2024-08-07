'use client';

import { useScrollbarWidth } from '@me/hooks';
import { Modal } from '@ui';
import { MenuState, observeMenuState, setMenuState } from './menu-manager';
import { useEffect, useState } from 'react';

const useMenuState = () => {
  const [state, setState] = useState<MenuState>('none');

  useEffect(() => {
    const observer = observeMenuState(setState);
    return () => observer.disconnect();
  }, []);

  return state
};

export const Menu = () => {
  const state = useMenuState();
  useScrollbarWidth('--scrollbar-width');

  return (
    <>
      <Modal
        id="menu"
        title="Settings"
        visible={state === 'theme'}
        hiddenElementId="page-content"
        close={() => setMenuState('none')}
      >
        <div>
          <h2>Theme</h2>
          <h2>Language</h2>
        </div>
      </Modal>
    </>
  );
};
