import classNames from 'classnames';
import Link from 'next/link';

export type LogoProps = {
  className?: string;
};

export const Logo = ({ className }: LogoProps) => (
  <Link href="/" className={classNames('zen select-none', className)}>
    <div className="leading-none font-bold">Rafał Czajka</div>
    {/* <div className="text-[0.475em] font-medium text-[#5b5f67] mt-[-0.2em]">Software Developer</div> */}
    {/* <div className="text-[0.5em] font-medium text-[#5b5f67] mt-[-0.2em]">Software Engineer</div> */}
    <div className="text-2xl mt-2 font-semibold">Full-Stack Software Engineer</div>
  </Link>
);
