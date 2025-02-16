import { ReactNode } from 'react';

export type CardProps = {
  header: ReactNode;
  children?: ReactNode;
};

export const Card = ({ header, children }: CardProps) => (
  <div className="rounded-md bg-bgsecondary border border-white/10">
    <div className="px-5 sm:px-8 py-4 sm:py-6 space-y-4">
      {header}
      {children}
    </div>
  </div>
);
