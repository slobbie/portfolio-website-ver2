import { motion } from 'framer-motion';

import { useCharReveal, type CharRevealOptions } from '@/shared/lib/motion';

type SplitTextProps = CharRevealOptions & {
  text: string;
  className?: string;
};

/**
 * 글자를 하나씩 등장시킵니다.
 *
 * 분할된 글자는 보조 기술에서 한 글자씩 읽히므로, 원문은 `aria-label`로 남기고
 * 조각은 모두 숨깁니다.
 */
export function SplitText({ text, className, ...options }: SplitTextProps) {
  const { group, char } = useCharReveal(options);

  return (
    <motion.span
      className={className}
      aria-label={text}
      style={{ display: 'inline-block' }}
      {...group}
    >
      {Array.from(text).map((character, index) => (
        <motion.span
          key={`${character}-${index}`}
          aria-hidden="true"
          style={{ display: 'inline-block', whiteSpace: 'pre' }}
          {...char}
        >
          {character}
        </motion.span>
      ))}
    </motion.span>
  );
}
