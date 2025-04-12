import { Card } from '@ui';
import { FiExternalLink } from 'react-icons/fi';

export type ProjectCardProps = {
  title: string,
  description: string,
};

const ProjectCardHeader = ({ title }: Omit<ProjectCardProps, 'description'>) => (
  <div className="space-y-4">
    <div className="flex justify-between align-middle">
      <p className="text-secondary text-sm">
        <span>April 1, 2021</span>
        <span className="inline-block px-2">·</span>
        <span>3 min read</span>
      </p>
      <FiExternalLink className="text-md text-secondary" />
    </div>
    <h2 className="font-medium leading-none text-2xl">
      {title}
    </h2>
  </div>
);

export const ProjectCard = ({ title, description }: ProjectCardProps) => (
  <Card header={<ProjectCardHeader title={title} />}>
    <p className="text-secondary text-sm">
      {description}
    </p>
  </Card>
);
