import { NavEvents } from './nav-events';
import { NavItem, NavItemProps } from './nav-item';
import { NavState } from './nav-state';

export type NavProps = {
  items: NavItemProps[];
  className?: string;
};

export const Nav = ({ items, className }: NavProps) => (
  <nav className={`nav ${className}`}>
    <ul className="text-xs uppercase tracking-widest font-bold text-secondary">
      {items.map(item => <li key={item.section}><NavItem {...item} /></li>)}
    </ul>
    <NavState />
    <NavEvents />
  </nav>
);
