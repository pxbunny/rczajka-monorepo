import classNames from 'classnames';
import Link from 'next/link';

export type TitleProps = {
  className?: string;
};

export const Title = ({ className }: TitleProps) => (
  <Link href="/" className={classNames('zen', className)}>
    <div className="leading-none font-bold text-[2.5rem] sm:text-5xl md:text-6xl">Rafał Czajka</div>
    <div className="text-lg sm:text-xl md:text-2xl mt-1 font-semibold">Full-Stack Software Developer</div>
  </Link>
);
