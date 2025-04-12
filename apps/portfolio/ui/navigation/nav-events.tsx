'use client';

import { useEffect } from 'react';

const HIGHLIGHTED_ATTRIBUTE = 'data-highlighted';
const SECTION_NAME_ATTRIBUTE = 'data-section';

const clearHighlights = () => {
  const elements = document.querySelectorAll(`[${HIGHLIGHTED_ATTRIBUTE}]`);
  elements.forEach(el => el.removeAttribute(HIGHLIGHTED_ATTRIBUTE));
};

const handleHover: EventListener = (e: Event) => {
  clearHighlights();
  const section = (e.currentTarget! as Element).getAttribute(SECTION_NAME_ATTRIBUTE);
  const elements = document.querySelectorAll(`[${SECTION_NAME_ATTRIBUTE}="${section}"]`);
  elements.forEach(el => el.setAttribute(HIGHLIGHTED_ATTRIBUTE, ''));
};

export const NavEvents = () => {
  useEffect(() => {
    const navItems = document.querySelectorAll('.nav a');

    navItems.forEach(e => {
      e.addEventListener('mouseenter', handleHover);
      e.addEventListener('mouseleave', clearHighlights);
    });

    return () => navItems.forEach(e => {
      e.removeEventListener('mouseenter', handleHover);
      e.removeEventListener('mouseleave', clearHighlights);
    });
  }, []);

  return false;
};
