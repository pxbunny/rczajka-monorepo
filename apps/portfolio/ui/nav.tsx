import { NavItem, NavItemProps } from '@ui';

export type NavProps = {
  items: NavItemProps[];
  className?: string;
};

export const Nav = ({ items, className }: NavProps) => (
  <nav className={`nav ${className}`}>
    <ul className="text-sm tracking-widest font-semibold text-secondary">
      {items.map(item => <NavItem key={item.section} {...item} />)}
    </ul>
  </nav>
);
