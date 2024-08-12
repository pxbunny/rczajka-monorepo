import { NavItem, NavItemProps } from '@ui';
import { NavState } from './nav-state';

export type NavProps = {
  items: NavItemProps[];
  className?: string;
};

export const Nav = ({ items, className }: NavProps) => (
  <nav className={`nav block-focus ${className}`}>
    <ul className="text-xs uppercase tracking-widest font-bold text-secondary">
      {items.map(item => <NavItem key={item.section} {...item} />)}
    </ul>
    <NavState />
  </nav>
);
