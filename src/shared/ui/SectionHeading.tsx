import { useMaskReveal, useReveal, useWipeReveal } from '@/shared/lib/motion';
import {
  Heading,
  HeadingDescription,
  HeadingEyebrow,
  HeadingMask,
  HeadingTitle,
} from '@/shared/ui/SectionHeading.styles';

type SectionHeadingProps = {
  title: string;
  description?: string;
  /** 제목 위에 놓는 분류 라벨 */
  eyebrow?: string;
};

export function SectionHeading({ title, description, eyebrow }: SectionHeadingProps) {
  const eyebrowWipe = useWipeReveal();
  const { mask, inner } = useMaskReveal();
  const descriptionReveal = useReveal('sm', { delay: 0.12 });

  return (
    <Heading className="section-heading">
      <div>
        {eyebrow && (
          <HeadingEyebrow className="section-eyebrow" {...eyebrowWipe}>
            {eyebrow}
          </HeadingEyebrow>
        )}
        <HeadingMask className="section-title-mask" {...mask}>
          <HeadingTitle {...inner}>{title}</HeadingTitle>
        </HeadingMask>
        {description && (
          <HeadingDescription {...descriptionReveal}>{description}</HeadingDescription>
        )}
      </div>
    </Heading>
  );
}
