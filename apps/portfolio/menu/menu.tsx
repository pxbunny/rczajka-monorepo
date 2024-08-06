'use client';

import { Modal } from '@ui';
import { useMenuState, useScrollbarWidth } from './menu-hooks';

export const Menu = () => {
  const [state, setState] = useMenuState();
  useScrollbarWidth();

  return (
    <>
      <Modal
        id="menu"
        title="Settings"
        visible={state === 'theme'}
        hiddenElementId="page-content"
        close={() => setState('none')}
      >
        <div>
          <h2>Theme</h2>
          <h2>Language</h2>
        </div>
      </Modal>
    </>
  );
};
