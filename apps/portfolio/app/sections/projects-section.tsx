import { Section } from '@ui';
import { FiExternalLink } from 'react-icons/fi';

export type ProjectsSectionProps = {
  className?: string;
};

export const ProjectsSection = ({ className }: ProjectsSectionProps) => (
  <Section name="projects" className={className}>

    <div className="rounded-md bg-background2 border border-white/10">
      <div className="px-5 sm:px-8 py-4 sm:py-6 space-y-4">
        <div className="flex justify-between align-middle">
          <p className="text-secondary text-sm">
            <span>April 1, 2021</span>
            <span className="inline-block px-2">·</span>
            <span>3 min read</span>
          </p>
          <FiExternalLink className="text-md text-secondary" />
        </div>
        <h2 className="font-medium leading-none text-2xl">
          YouTube browser extension
        </h2>
        <p className="text-secondary text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec blandit mauris.
          Etiam vestibulum lectus nec erat lobortis commodo.
        </p>
      </div>
    </div>

    <div className="rounded-md bg-background2 border border-white/10">
      <div className="px-5 sm:px-8 py-4 sm:py-6 space-y-4">
        <div className="flex justify-between align-middle">
          <p className="text-secondary text-sm">
            <span>April 1, 2021</span>
            <span className="inline-block px-2">·</span>
            <span>3 min read</span>
          </p>
          <FiExternalLink className="text-md text-secondary" />
        </div>
        <h2 className="font-medium leading-none text-2xl">
          YouTube browser extension
        </h2>
        <p className="text-secondary text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec blandit mauris.
          Etiam vestibulum lectus nec erat lobortis commodo.
        </p>
      </div>
    </div>

  </Section>
);
