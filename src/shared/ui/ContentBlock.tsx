import { useLineReveal } from '@/shared/lib/motion';
import { Block } from '@/shared/ui/ContentBlock.styles';
import { CountingText } from '@/shared/ui/CountingText';

type ContentBlockProps = {
  title: string;
  paragraphs?: readonly string[];
  items?: readonly string[];
  tone?: 'default' | 'accent';
  variant?: 'default' | 'card';
  /** 항목에 섞인 숫자를 0부터 올립니다. 수치가 결과인 블록에만 씁니다. */
  count?: boolean;
};

export function ContentBlock({
  title,
  paragraphs = [],
  items = [],
  tone = 'default',
  variant = 'default',
  count = false,
}: ContentBlockProps) {
  const lineReveal = useLineReveal();

  if (paragraphs.length === 0 && items.length === 0) {
    return null;
  }

  return (
    <Block
      className={`detail-block detail-block--${tone}`}
      tone={tone}
      variant={variant}
      {...lineReveal}
    >
      <h4>{title}</h4>
      {paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
      {items.length > 0 && (
        <ul>
          {items.map((item) => (
            <li key={item}>{count ? <CountingText>{item}</CountingText> : item}</li>
          ))}
        </ul>
      )}
    </Block>
  );
}
