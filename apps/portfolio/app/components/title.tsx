import classNames from 'classnames';
import Link from 'next/link';

export type TitleProps = {
  className?: string;
};

export const Title = ({ className }: TitleProps) => (
  <Link href="/" className={classNames('zen select-none', className)}>
    <div className="leading-none font-bold text-4xl sm:text-5xl md:text-6xl">Rafał Czajka</div>
    <div className="text-lg sm:text-xl md:text-2xl mt-3 font-semibold">Full-Stack Software Engineer</div>
  </Link>
);
