import { motion } from 'framer-motion';

import { useReveal, useRevealGroup } from '@/shared/lib/motion';
import { FlowLine, Panel } from '@/shared/ui/FlowPanel.styles';

type FlowPanelProps = {
  label: string;
  children: string;
};

export function FlowPanel({ label, children }: FlowPanelProps) {
  /** 구조 다이어그램은 읽고 넘어가는 지점이라 조금 느리게 등장시킵니다. */
  const panelReveal = useReveal('md', { duration: 'slow' });
  /** 모노스페이스 도식이라 줄 단위로 찍히듯 이어집니다. */
  const { group, item } = useRevealGroup('sm', { stagger: 'line' });

  return (
    <Panel className="flow-panel" {...panelReveal}>
      <p>{label}</p>
      <motion.pre {...group}>
        {children.split('\n').map((line, index) => (
          <FlowLine key={`${index}-${line}`} {...item}>
            {line}
          </FlowLine>
        ))}
      </motion.pre>
    </Panel>
  );
}
