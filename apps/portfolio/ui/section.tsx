export type SectionProps = {
  name: string;
  children: React.ReactNode;
  className?: string;
};

export const Section = ({ name, children, className }: SectionProps) => (
  <section id={name} className={`zen space-y-8 ${className}`} data-section={name}>
    <h1 className="font-bold text-lg sm:text-xl text-primary lg:hidden uppercase">{name}</h1>
    {children}
  </section>
);
