'use client';

import { useMenuState, useScrollbarWidth } from './menu-hooks';

export const Menu = () => {
  const state = useMenuState();
  useScrollbarWidth();

  if (state === 'none') {
    return false;
  }

  return (
    <div id="menu-outer" className="fixed inset-0 z-20">
      {state === 'theme' && <div>abcd</div>}
    </div>
  );
};
