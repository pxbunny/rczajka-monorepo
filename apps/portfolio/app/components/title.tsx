import classNames from 'classnames';
import Link from 'next/link';

export type TitleProps = {
  className?: string;
};

export const Title = ({ className }: TitleProps) => (
  <Link href="/" className={classNames('zen', className)}>
    <div className="leading-none font-bold text-[2.8rem] sm:text-5xl xl:text-6xl">Rafał Czajka</div>
    <div className="leading-none text-lg sm:text-xl xl:text-2xl mt-2 font-semibold">Full-Stack Software Developer</div>
  </Link>
);
