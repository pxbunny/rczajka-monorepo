import classNames from 'classnames';
import Link from 'next/link';
import { ReactElement, ReactNode } from 'react';
import { IconBaseProps } from 'react-icons';

type ButtonComponentProps = {
  component: 'button';
  onClick?: () => void;
};

type LinkComponentProps = {
  component: 'link' | 'next-link';
  href: string;
  target?: string;
};

export type ButtonProps = (ButtonComponentProps | LinkComponentProps) & {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  leftIcon?: ReactElement<IconBaseProps>;
  rightIcon?: ReactElement<IconBaseProps>;
  className?: string;
};

export const Button = ({
  children,
  leftIcon,
  rightIcon,
  className,
  component,
  variant = 'primary',
  ...rest
}: ButtonProps) => {
  const classes = classNames(
    'px-[.8em] py-[.4em] rounded-full',
    { 'bg-bgsecondary border border-white/10': variant === 'primary' },
    className
  );

  const renderContent = () => (
    <div className="flex space-x-3 items-center font-medium">
      {leftIcon}
      <div className="text-sm">{children}</div>
      {rightIcon}
    </div>
  );

  const button = (
    <button
      className={classes}
      onClick={(rest as ButtonComponentProps).onClick}
    >
      {renderContent()}
    </button>
  );

  const link = (
    <a
      href={(rest as LinkComponentProps).href ?? '#'}
      target={(rest as LinkComponentProps).target}
      className={classes}
    >
      {renderContent()}
    </a>
  );

  const nextLink = (
    <Link
      href={(rest as LinkComponentProps).href ?? '#'}
      target={(rest as LinkComponentProps).target}
      className={classes}
    >
      {renderContent()}
    </Link>
  );

  return ({
    button,
    link,
    'next-link': nextLink
  })[component] ?? button;
}
