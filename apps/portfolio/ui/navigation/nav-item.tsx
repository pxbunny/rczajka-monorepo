import classNames from 'classnames';

export type NavItemProps = {
  section: string;
  className?: string;
  scrollToTop?: boolean;
};

export const NavItem = ({ section, className, scrollToTop = false }: NavItemProps) => (
  <a
    href={scrollToTop ? '#top' : `#${section}`}
    className={classNames('flex items-center py-3 zen hover:text-primary', className)}
    data-section={section}
  >
    <span className="flex items-center">
      {section}
    </span>
  </a>
);
