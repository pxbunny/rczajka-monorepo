import classNames from 'classnames';

export type NavItemProps = {
  section: string;
  className?: string;
};

export const NavItem = ({ section, className }: NavItemProps) => (
  <a
    href={`#${section}`}
    className={classNames('flex items-center py-3 zen hover:text-primary', className)}
    data-section={section}
  >
    <span className="flex items-center">
      {section}
    </span>
  </a>
);
