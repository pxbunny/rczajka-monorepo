import Link from 'next/link';

export type LogoProps = {
  className?: string;
};

export const Logo = ({ className }: LogoProps) => (
  <Link href="/" className={`zen ${className}`}>
    <div className="leading-none font-bold">Rafał Czajka</div>
    <div className="text-[0.475em] font-medium text-accent mt-[-0.2em]">Software Developer</div>
  </Link>
);
