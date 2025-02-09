import classNames from 'classnames';

export type DescriptionProps = {
  className?: string;
};

export const Description = ({ className }: DescriptionProps) => (
  <p className={classNames('zen md:max-w-96 text-secondary text-sm leading-loose', className)}>
    Pellentesque laoreet sit amet odio in consequat. Praesent magna risus.
    Pellentesque laoreet sit amet odio in consequat. Praesent magna risus.
  </p>
);
