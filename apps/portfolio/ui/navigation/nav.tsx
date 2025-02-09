import { NavItem, NavItemProps } from '@ui';
import { NavState } from './nav-state';

export type NavProps = {
  items: NavItemProps[];
  className?: string;
};

export const Nav = ({ items, className }: NavProps) => (
  <nav className={`nav ${className}`}>
    <ul className="text-xs uppercase tracking-widest font-bold text-secondary">
      <li>{items.map(item => <NavItem key={item.section} {...item} />)}</li>
    </ul>
    <NavState />
  </nav>
);
