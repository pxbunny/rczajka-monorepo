import { DynamicIcon, IconProps } from '@ui';
import classNames from 'classnames';

export type DescriptionProps = {
  className?: string;
};

const HighlightedText = ({ children }: { children: React.ReactNode }) => (
  <span className="text-primary">{ children }</span>
);

const InlineIcon = (props: Omit<IconProps, 'className'>) => (
  <DynamicIcon className="inline-block align-baseline" {...props} />
);

export const Description = ({ className }: DescriptionProps) => (
  <div className={classNames('zen text-secondary text-sm leading-loose space-y-2', className)}>
    <p>
      I'm a <HighlightedText>Software Developer</HighlightedText> based in <HighlightedText><InlineIcon set="io5" name="IoLocationSharp" />Poland</HighlightedText>.
      I enjoy solving complex problems and creating intuitive digital experiences.
    </p>
    <p>
      <q className="italic">Inspired by the past, acting in the present to shape the future</q> <span className="whitespace-nowrap">(Me, 2025).</span>
    </p>
  </div>
);
