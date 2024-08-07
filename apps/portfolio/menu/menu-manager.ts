const ATTRIBUTE_NAME = 'data-menu';

export type MenuState = 'main' | 'theme' | 'none';

export function setMenuState(state: MenuState) {
  document.body.setAttribute(ATTRIBUTE_NAME, state);
}

export function observeMenuState(setLocalState: (state: MenuState) => void) {
  const body = document.body;
  body.setAttribute(ATTRIBUTE_NAME, 'none');

  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.attributeName === ATTRIBUTE_NAME) {
        const menu = body.getAttribute(ATTRIBUTE_NAME);
        setLocalState(menu as MenuState);
      }
    });
  });

  observer.observe(
    document.body,
    { attributes: true, attributeFilter: [ATTRIBUTE_NAME] }
  );
  return observer;
}
