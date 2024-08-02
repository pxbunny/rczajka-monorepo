'use client';

import Link from 'next/link';
import React from 'react';

const HIGHLIGHTED_ATTRIBUTE = 'data-highlighted';
const SECTION_NAME_ATTRIBUTE = 'data-section';

export type NavItemProps = {
  section: string;
  className?: string;
  scrollToTop?: boolean;
};

const clearHighlights = () => {
  const elements = document.querySelectorAll(`[${HIGHLIGHTED_ATTRIBUTE}]`);
  elements.forEach(el => el.removeAttribute(HIGHLIGHTED_ATTRIBUTE));
}

const handleHover = (e: React.MouseEvent<HTMLElement>) => {
  clearHighlights();
  const section = e.currentTarget.getAttribute(SECTION_NAME_ATTRIBUTE);
  const elements = document.querySelectorAll(`[${SECTION_NAME_ATTRIBUTE}="${section}"]`);
  elements.forEach(el => el.setAttribute(HIGHLIGHTED_ATTRIBUTE, ''));
}

export const NavItem = ({ section, className, scrollToTop = false }: NavItemProps) => (
  <li
    className={`blurrable py-2 uppercase ${className}`}
    onMouseEnter={handleHover}
    onMouseLeave={clearHighlights}
    data-section={section}
  >
    <Link href={scrollToTop ? '#top' : `#${section}`}>
      {section}
    </Link>
  </li>
);
