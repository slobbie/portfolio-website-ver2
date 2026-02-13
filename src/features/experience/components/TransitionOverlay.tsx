import { useRef, useEffect, useCallback } from 'react';

import styled from '@emotion/styled';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';

interface ITransitionOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

// SVG path 상태
const PATH_START = 'M 0 100 V 100 Q 50 100 100 100 V 100 z';
const PATH_CURVE = 'M 0 100 V 50 Q 50 0 100 50 V 100 z';
const PATH_END = 'M 0 100 V 0 Q 50 0 100 0 V 100 z';

const TransitionOverlay = ({
  isOpen,
  onClose,
  children,
}: ITransitionOverlayProps) => {
  const pathRef = useRef<SVGPathElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Timeline 초기화
  useEffect(() => {
    if (!pathRef.current) return;

    const path = pathRef.current;

    // Timeline 생성 (열림: 0.8초, 닫힘: 0.3초)
    timelineRef.current = gsap
      .timeline({ paused: true })
      .set(path, { attr: { d: PATH_START } })
      .to(path, {
        attr: { d: PATH_CURVE },
        duration: 0.4,
        ease: 'power2.in',
      })
      .to(path, {
        attr: { d: PATH_END },
        duration: 0.4,
        ease: 'power2.out',
      });

    // 닫힘 속도 2배 빠르게
    timelineRef.current.timeScale(1);

    return () => {
      timelineRef.current?.kill();
    };
  }, []);

  // isOpen 변경 시 애니메이션 실행
  useEffect(() => {
    if (!timelineRef.current) return;

    if (isOpen) {
      timelineRef.current.timeScale(1); // 열림: 정상 속도
      timelineRef.current.play();
    } else {
      timelineRef.current.timeScale(2.5); // 닫힘: 2.5배 빠르게
      timelineRef.current.reverse();
    }
  }, [isOpen]);

  // 콘텐츠 애니메이션 (SVG 애니메이션 후 표시)
  const handleContentAnimation = useCallback(() => {
    if (!contentRef.current || !isOpen) return;

    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.4, delay: 0.5, ease: 'power2.out' },
    );
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      handleContentAnimation();
    }
  }, [isOpen, handleContentAnimation]);

  return (
    <Wrapper style={{ pointerEvents: isOpen ? 'auto' : 'none' }}>
      <SVGContainer viewBox='0 0 100 100' preserveAspectRatio='none'>
        <defs>
          <linearGradient
            id='overlay-grad'
            x1='0'
            y1='0'
            x2='100'
            y2='100'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0.2' stopColor='rgb(20, 20, 20)' />
            <stop offset='0.8' stopColor='rgb(30, 30, 30)' />
          </linearGradient>
        </defs>
        <path ref={pathRef} fill='url(#overlay-grad)' d={PATH_START} />
      </SVGContainer>

      <AnimatePresence mode='wait'>
        {isOpen && (
          <ContentWrapper
            ref={contentRef}
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.5, duration: 0.4 },
            }}
            exit={{ opacity: 0, y: -20, transition: { duration: 0.1 } }}
          >
            <CloseButton onClick={onClose}>✕</CloseButton>
            <ScrollArea>{children}</ScrollArea>
          </ContentWrapper>
        )}
      </AnimatePresence>
    </Wrapper>
  );
};

export default TransitionOverlay;

const Wrapper = styled.div`
  position: fixed;
  inset: 0;
  z-index: 100;
`;

const SVGContainer = styled.svg`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
`;

const ContentWrapper = styled(motion.div)`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  padding: 60px 80px;
  overflow: hidden;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 24px;
  right: 24px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #fff;
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  transition: background 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

const ScrollArea = styled.div`
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-top: 20px;
`;
