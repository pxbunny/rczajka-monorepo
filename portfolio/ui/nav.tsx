import React from 'react';
import { NavItem, NavItemProps } from './nav-item';

export type NavProps = {
  items: NavItemProps[];
  className?: string;
};

export const Nav = ({ items, className }: NavProps) => (
  <nav className={`nav ${className}`}>
    <ul className="font-bold text-2xl text-secondary">
      {items.map(item => <NavItem key={item.section} {...item} />)}
    </ul>
  </nav>
);
