'use client';

import { Modal } from '@ui';
import { useMenuState, useScrollbarWidth } from './menu-hooks';

export const Menu = () => {
  const state = useMenuState();
  useScrollbarWidth();

  return (
    <>
      <Modal id="menu" visible={state === 'theme'}>asdf</Modal>
    </>
  );
};
