const DEFAULT_HREF_VALUE = '#content';
const DEFAULT_TEXT = 'Skip to content';

export type SkipToContentProps = {
  href?: string;
  text?: string
};

export const SkipToContent = ({
  href = DEFAULT_HREF_VALUE,
  text = DEFAULT_TEXT
}: SkipToContentProps) => (
  <a href={href} className="absolute top-0 left-0 transition px-4 py-2 m-2 rounded-full -translate-y-16 focus:translate-y-0">
    {text}
  </a>
);
