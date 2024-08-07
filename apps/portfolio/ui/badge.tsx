import classNames from 'classnames';

export type BadgeProps = {
  label: string;
  className?: string;
};

export const Badge = ({ label, className }: BadgeProps) => (
  <div className={classNames('rounded-full text-[#0ba1e7] text-xs leading-none px-[1em] py-[0.5em] bg-[#0ba1e7]/15', className)}>
    {label}
  </div>
);
