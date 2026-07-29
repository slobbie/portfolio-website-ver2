import { useCountUp } from '@/shared/lib/interaction';
import { Counter } from '@/shared/ui/CountingText.styles';

type CountingTextProps = {
  children: string;
};

/** 문장에 섞인 숫자를 화면에 들어올 때 0부터 올려 보여 줍니다. */
export function CountingText({ children }: CountingTextProps) {
  const { ref, text } = useCountUp(children);

  return <Counter ref={ref}>{text}</Counter>;
}
