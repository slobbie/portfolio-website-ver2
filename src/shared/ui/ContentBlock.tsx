import { Block } from '@/shared/ui/ContentBlock.styles';

type ContentBlockProps = {
  title: string;
  paragraphs?: readonly string[];
  items?: readonly string[];
  tone?: 'default' | 'accent';
  variant?: 'default' | 'card';
};

export function ContentBlock({
  title,
  paragraphs = [],
  items = [],
  tone = 'default',
  variant = 'default',
}: ContentBlockProps) {
  if (paragraphs.length === 0 && items.length === 0) {
    return null;
  }

  return (
    <Block
      className={`detail-block detail-block--${tone}`}
      tone={tone}
      variant={variant}
    >
      <h4>{title}</h4>
      {paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
      {items.length > 0 && (
        <ul>
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </Block>
  );
}
