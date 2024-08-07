'use client';

import { useMenuState, useScrollbarWidth } from '@hooks';
import { Modal } from '@ui';

export const Menu = () => {
  const [state, setState] = useMenuState();
  useScrollbarWidth('--scrollbar-width');

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
