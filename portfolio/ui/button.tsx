'use client';

import { MenuState, setMenuState } from '@menu';
import classNames from 'classnames';
import Link from 'next/link';
import React from 'react';

type DefaultButtonProps = {
  type: 'button';
  onClick?: () => void;
};

type StateButtonProps = {
  type: 'state';
  state: MenuState;
}

type LinkProps = {
  type: 'link' | 'smart-link';
  href: string;
  target?: string;
};

export type ButtonProps = (DefaultButtonProps | StateButtonProps | LinkProps) & {
  children: React.ReactNode;
  className?: string;
  variant?: 'basic' | 'icon';
};

export const Button = ({
  children,
  className,
  variant,
  type = 'button',
  ...rest
}: ButtonProps) => {

  const isIconType = variant === 'icon';

  const newClassName = classNames(
    className,
    {'text-secondary hover:text-primary': isIconType},
    {'relative before:absolute before:transition-all': isIconType},
    {'before:rounded-full before:z-[-1]': isIconType},
    {'hover:before:bg-primary/10 hover:before:inset-[-0.35em]': isIconType}
  );

  const button = (
    <button
      className={newClassName}
      onClick={(rest as DefaultButtonProps).onClick}
    >
      {children}
    </button>
  );

  const stateButton = (
    <button
      className={newClassName}
      onClick={() => setMenuState((rest as StateButtonProps).state)}
    >
      {children}
    </button>
  );

  const link = (
    <a
      href={(rest as LinkProps).href ?? '#'}
      target={(rest as LinkProps).target}
      className={newClassName}
    >
      {children}
    </a>
  );

  const smartLink = (
    <Link
      href={(rest as LinkProps).href ?? '#'}
      target={(rest as LinkProps).target}
      className={newClassName}
    >
      {children}
    </Link>
  );

  switch (type) {
    case 'state':
      return stateButton;
    case 'link':
      return link;
    case 'smart-link':
      return smartLink;
    case 'button':
    default:
      return button;
  }
};
