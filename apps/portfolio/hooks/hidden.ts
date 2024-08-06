import { useEffect } from 'react';

const hideElement = (element: Element) => {
  element.setAttribute('aria-hidden', 'true');
  element.setAttribute('inert', '');
};

const activateElement = (element: Element) => {
  element.removeAttribute('aria-hidden');
  element.removeAttribute('inert');
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
