import { Section } from '@ui';
import classNames from 'classnames';

export type ContactSectionProps = {
  className?: string;
};

export const ContactSection = ({ className }: ContactSectionProps) => (
  <Section name="contact" className={classNames('text-secondary leading-relaxed', className)}>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec blandit mauris.
      Etiam vestibulum lectus nec erat lobortis commodo. Maecenas sit amet ultrices mauris.
      Suspendisse id ornare ligula. Suspendisse congue, risus eget suscipit feugiat,
      lacus mauris ullamcorper purus, id semper tellus sem id nunc. Quisque molestie quam id nulla venenatis,
      eu facilisis dui gravida. Aenean eget fermentum turpis, a laoreet sapien. Quisque vitae mi sagittis,
      lacinia libero et, semper magna.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec blandit mauris.
      Etiam vestibulum lectus nec erat lobortis commodo. Maecenas sit amet ultrices mauris.
      Suspendisse id ornare ligula. Suspendisse congue, risus eget suscipit feugiat,
      lacus mauris ullamcorper purus, id semper tellus sem id nunc. Quisque molestie quam id nulla venenatis,
      eu facilisis dui gravida. Aenean eget fermentum turpis, a laoreet sapien. Quisque vitae mi sagittis,
      lacinia libero et, semper magna.
    </p>
  </Section>
);
