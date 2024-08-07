import { useEffect } from 'react';

const hideElement = (el: Element) => {
  el.setAttribute('aria-hidden', 'true');
  el.setAttribute('inert', '');
};

const activateElement = (el: Element) => {
  el.removeAttribute('aria-hidden');
  el.removeAttribute('inert');
};

export const useHidden = (id: string, hidden: boolean) => {
  useEffect(() => {
    const element = document.body.querySelector(`#${id}`);
    if (hidden && element) {
      hideElement(element);
    }
    if (!hidden && element) {
      activateElement(element);
    }
    return () => {
      element && activateElement(element);
    };
  }, [id, hidden]);
};
