import { DynamicIcon, IconProps } from '@ui';
import classNames from 'classnames';

export type DescriptionProps = {
  className?: string;
};

type TextBlockProps = {
  highlight?: boolean;
  noWrap?: boolean;
  children?: React.ReactNode;
};

const TextBlock = ({ children, highlight = false, noWrap = false }: TextBlockProps) => (
  <span className={classNames({ 'text-primary': highlight }, { 'whitespace-nowrap': noWrap })}>
    { children }
  </span>
);

const InlineIcon = (props: Omit<IconProps, 'className'>) => (
  <DynamicIcon className="inline-block align-baseline" {...props} />
);

export const Description = ({ className }: DescriptionProps) => (
  <div className={classNames('zen text-secondary text-sm leading-loose space-y-2', className)}>
    <p>
      I'm a <TextBlock highlight>Software Developer</TextBlock> based in <TextBlock highlight noWrap><InlineIcon set="io5" name="IoLocationSharp" />Poland</TextBlock>.
      I enjoy solving complex problems and creating intuitive digital experiences.
    </p>
    <p>
      <q className="italic">Inspired by the past, acting in the present to shape the future</q> <TextBlock noWrap>(Me, 2025).</TextBlock>
    </p>
  </div>
);
