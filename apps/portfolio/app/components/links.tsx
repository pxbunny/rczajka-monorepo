import { Button, DynamicIcon, IconSets } from '@ui';
import classNames from 'classnames';
import { FiExternalLink } from 'react-icons/fi';

type DataType = {
  text: string,
  href: string,
  logoSet: IconSets,
  logoName: string
};

const data: DataType[] = [
  {
    text: 'GitHub',
    href: 'https://www.github.com/dae-ne/',
    logoSet: 'io5',
    logoName: 'IoLogoGithub'
  },
  {
    text: 'LinkedIn',
    href: 'https://www.github.com/dae-ne/',
    logoSet: 'io5',
    logoName: 'IoLogoLinkedin'
  }
];

export type LinksProps = {
  className?: string;
};

export const Links = ({ className }: LinksProps) => (
  <div className={classNames('flex flex-wrap gap-2', className)}>
    {data.map(({ text, href, logoSet, logoName }) => (
      <Button
        key={text}
        component="link"
        href={href}
        leftIcon={<DynamicIcon set={logoSet} name={logoName} />}
        rightIcon={<FiExternalLink />}
        target="_blank"
      >
        {text}
      </Button>
    ))}
  </div>
);
