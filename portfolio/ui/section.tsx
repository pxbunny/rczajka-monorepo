import React from 'react';

export type SectionProps = {
  name: string;
  children: React.ReactNode;
  className?: string;
};

export const Section = ({ name, children, className }: SectionProps) => (
  <section className={`blurrable ${className}`} data-section={name}>
    <h1 className="font-bold text-xl mb-6 lg:hidden uppercase">{name}</h1>
    {children}
  </section>
);
