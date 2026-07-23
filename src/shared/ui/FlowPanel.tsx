import type { ReactNode } from 'react';

import { Panel } from '@/shared/ui/FlowPanel.styles';

type FlowPanelProps = {
  label: string;
  children: ReactNode;
};

export function FlowPanel({ label, children }: FlowPanelProps) {
  return (
    <Panel className="flow-panel">
      <p>{label}</p>
      <pre>{children}</pre>
    </Panel>
  );
}
