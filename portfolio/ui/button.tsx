'use client';

import { MenuState, setMenuState } from '@menu';
import React from 'react';

export type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export type StateButtonProps = ButtonProps & {
  state: MenuState;
};

export const Button = ({ children, className, onClick }: ButtonProps) => (
  <button className={`button ${className}`} onClick={onClick}>
    {children}
  </button>
);

export const StateButton = ({ children, className, onClick, state }: StateButtonProps) => {
  const handleClick = () => {
    setMenuState(state);
    onClick && onClick();
  };
  return (
    <Button className={className} onClick={handleClick}>
      {children}
    </Button>
  );
};
