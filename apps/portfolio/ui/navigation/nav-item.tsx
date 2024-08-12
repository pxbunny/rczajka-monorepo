'use client';

import classNames from 'classnames';

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
};

const handleHover = (e: React.MouseEvent<HTMLElement>) => {
  clearHighlights();
  const section = e.currentTarget.getAttribute(SECTION_NAME_ATTRIBUTE);
  const elements = document.querySelectorAll(`[${SECTION_NAME_ATTRIBUTE}="${section}"]`);
  elements.forEach(el => el.setAttribute(HIGHLIGHTED_ATTRIBUTE, ''));
};

export const NavItem = ({ section, className, scrollToTop = false }: NavItemProps) => (
  <li
    className={classNames('zen my-4 hover:text-primary', className)}
    onMouseEnter={handleHover}
    onMouseLeave={clearHighlights}
    data-section={section}
  >
    <a href={scrollToTop ? '#hello' : `#${section}`}>
      <span>
        {section}
      </span>
    </a>
  </li>
);
