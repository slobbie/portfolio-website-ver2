import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react';

import { labs, type LabProject } from '@/entities/portfolio';
import { useMagnetic, usePress, useViewportFocus } from '@/shared/lib/interaction';
import { useMotionEnabled } from '@/shared/lib/motion';
import { SectionHeading, TagList } from '@/shared/ui';

import {
  LabCard,
  LabCopy,
  LabImageWrap,
  LabIndex,
  LabLink,
  LabLinks,
  LabsFallbackTrack,
  LabsList,
  LabsProgress,
  LabsProgressTrack,
  LabsScroller,
  LabsSectionRoot,
  LabsStage,
  LabsTrack,
  LabsViewport,
} from '@/widgets/portfolio/ui/LabsSection.styles';

/**
 * 가로 이동이 시작되기 전에 고정 상태로 머무는 구간(px).
 *
 * 이 여유가 없으면 가로가 0으로 돌아온 지점이 곧 고정 해제 지점이라, 첫 카드를
 * 보려고 올리는 순간 세로 스크롤로 넘어가 위로 빠져나갑니다.
 */
const LEAD_IN = 320;

/**
 * 스크롤 값을 그대로 쓰면 휠 한 칸에 카드가 크게 움직이고 경계에서 뚝 끊깁니다.
 * 감쇠를 크게 둬 흔들림 없이 따라오게만 합니다.
 */
const SCROLL_SPRING = { stiffness: 120, damping: 32, mass: 0.6 } as const;

/** 자석 효과는 링크마다 자기 위치를 재야 해서 항목을 분리합니다. */
function LabLinkItem({ href, label }: { href: string; label: string }) {
  const magnetic = useMagnetic();
  const press = usePress({ lift: 'none' });

  return (
    <LabLink href={href} target="_blank" rel="noreferrer" {...magnetic} {...press}>
      {label}
    </LabLink>
  );
}

function LabCardBody({ lab }: { lab: LabProject }) {
  return (
    <>
      <LabImageWrap className="lab-image-wrap">
        <img src={lab.image} alt={`${lab.title} 프로젝트 화면`} loading="lazy" />
      </LabImageWrap>
      <LabCopy className="lab-copy">
        <LabIndex className="chapter-index">{lab.index} / Lab</LabIndex>
        <h3>{lab.title}</h3>
        <strong>{lab.description}</strong>
        <p>{lab.detail}</p>
        <TagList items={lab.tech} />
        {lab.links.length > 0 && (
          <LabLinks className="lab-links">
            {lab.links.map((link) => (
              <LabLinkItem href={link.href} label={link.label} key={link.href} />
            ))}
          </LabLinks>
        )}
      </LabCopy>
    </>
  );
}

/** 활성 판정은 카드마다 자기 위치를 재야 해서 항목을 컴포넌트로 분리합니다. */
function LabCardItem({ lab }: { lab: LabProject }) {
  const { ref, focused } = useViewportFocus('x');

  return (
    <LabCard className="lab-card" ref={ref} data-focused={focused}>
      <LabCardBody lab={lab} />
    </LabCard>
  );
}

const cards = labs.map((lab) => <LabCardItem lab={lab} key={lab.title} />);

/**
 * 가로로 이동해야 하는 거리를 잽니다.
 *
 * 카드 폭이 화면 폭에 따라 달라지므로 고정값으로 계산할 수 없습니다.
 * 실제 렌더된 크기에서 화면 밖으로 넘치는 만큼을 이동 거리로 씁니다.
 */
function useHorizontalTravel() {
  const [list, setList] = useState<HTMLElement | null>(null);
  const [travel, setTravel] = useState(0);
  /** 변환 함수가 최신 값을 읽도록 렌더와 무관한 저장소에도 담아 둡니다. */
  const travelRef = useRef(0);

  const measure = useCallback((element: HTMLElement) => {
    const available = element.parentElement?.clientWidth ?? 0;

    /*
     * 레이아웃이 잡히기 전 값으로 계산하면 이동 거리가 과도하게 나오고,
     * 뒤늦게 보정되면서 문서 높이가 크게 바뀌어 스크롤이 튑니다.
     */
    if (available === 0) {
      return;
    }

    const next = Math.max(element.scrollWidth - available, 0);
    travelRef.current = next;
    setTravel(next);
  }, []);

  /* 관찰자 콜백을 기다리지 않도록 요소가 붙는 즉시 한 번 잽니다. */
  const ref = useCallback(
    (element: HTMLElement | null) => {
      setList(element);

      if (element) {
        measure(element);
      }
    },
    [measure],
  );

  useEffect(() => {
    if (!list) {
      return;
    }

    const observer = new ResizeObserver(() => measure(list));
    observer.observe(list);

    if (list.parentElement) {
      observer.observe(list.parentElement);
    }

    return () => observer.disconnect();
  }, [list, measure]);

  return { ref, travel, travelRef };
}

type ProgressProps = {
  current: number;
  total: number;
  bar: ReactNode;
};

function LabsProgressBar({ current, total, bar }: ProgressProps) {
  return (
    <LabsProgress className="labs-progress" aria-hidden="true">
      {String(current).padStart(2, '0')}
      <LabsProgressTrack>{bar}</LabsProgressTrack>
      {String(total).padStart(2, '0')}
    </LabsProgress>
  );
}

export function LabsSection() {
  const motionEnabled = useMotionEnabled();
  const trackRef = useRef<HTMLDivElement>(null);
  const { ref: attachList, travel, travelRef } = useHorizontalTravel();
  const [current, setCurrent] = useState(1);

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ['start start', 'end end'],
  });
  const smoothProgress = useSpring(scrollYProgress, SCROLL_SPRING);

  /*
   * 이동 거리는 첫 렌더 이후에 측정됩니다. 범위 배열로 넘기면 첫 렌더의 0이 그대로
   * 굳어 가로 이동이 걸리지 않을 수 있어, 변환 안에서 최신 값을 읽습니다.
   */
  const toRatio = useCallback((progress: number) => {
    const distance = travelRef.current;

    if (distance <= 0) {
      return 0;
    }

    /* 앞쪽 머무는 구간을 뺀 나머지에 가로 이동을 배분합니다. */
    const lead = LEAD_IN / (distance + LEAD_IN);

    return progress <= lead ? 0 : (progress - lead) / (1 - lead);
  }, [travelRef]);

  const x = useTransform(smoothProgress, (progress) => -toRatio(progress) * travelRef.current);
  const barScale = useTransform(smoothProgress, toRatio);

  useMotionValueEvent(barScale, 'change', (ratio) => {
    const index = Math.round(ratio * (labs.length - 1)) + 1;
    setCurrent(Math.min(Math.max(index, 1), labs.length));
  });

  const heading = <SectionHeading title="Labs" />;

  if (!motionEnabled) {
    return (
      <LabsSectionRoot
        className="page-section labs-section"
        id="labs"
        data-nav-section="labs"
      >
        {heading}
        <LabsFallbackTrack>
          <LabsScroller
            className="labs-list"
            tabIndex={0}
            role="region"
            aria-label="실험 작업 목록, 가로로 스크롤"
          >
            {cards}
          </LabsScroller>
        </LabsFallbackTrack>
      </LabsSectionRoot>
    );
  }

  return (
    <LabsSectionRoot
      className="page-section labs-section"
      id="labs"
      data-nav-section="labs"
    >
      {/* 세로 스크롤 길이를 가로 이동 거리에 맞춰 확보합니다. */}
      <LabsTrack ref={trackRef} style={{ height: `calc(100vh + ${travel + LEAD_IN}px)` }}>
        {/* 제목과 진행 표시까지 함께 고정해 어느 시점에도 화면을 넘지 않게 합니다. */}
        <LabsStage className="labs-stage">
          {heading}
          <LabsViewport className="labs-viewport">
            <LabsList className="labs-list" ref={attachList} style={{ x }}>
              {cards}
            </LabsList>
          </LabsViewport>
          <LabsProgressBar
            current={current}
            total={labs.length}
            bar={<motion.span style={{ scaleX: barScale }} />}
          />
        </LabsStage>
      </LabsTrack>
    </LabsSectionRoot>
  );
}
