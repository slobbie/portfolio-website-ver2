import { useEffect } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { motion, useScroll, useTransform } from 'framer-motion';

import { usePageStore } from '@/shared/store/usePageStore';
import { usePages } from '@/features/experience/hooks/usePages';

const PageButtons = () => {
  const { page } = usePageStore();
  // const { setPage } = usePageStore();
  const pages = usePages();
  const { scrollYProgress } = useScroll();

  // IntroduceSection이 끝나는 시점(스크롤 끝)에서 나타남
  const buttonsOpacity = useTransform(scrollYProgress, [0.82, 0.9], [0, 1]);

  useEffect(() => {
    const audio = new Audio('/audios/page-flip-01a.mp3');
    audio.volume = 0.1;
    audio.play();
  }, [page]);

  return (
    <>
      <Container style={{ opacity: buttonsOpacity }}>
        <TopSpace></TopSpace>
        <PaginationContainer>
          <PaginationInner>
            {[...pages].map((_, index) => (
              <PageButton
                key={index}
                isActive={index === page}
                // onClick={() => setPage(index)}
              >
                {index === 0 ? 'Cover' : `Page ${index}`}
              </PageButton>
            ))}
          </PaginationInner>
        </PaginationContainer>
      </Container>
    </>
  );
};

export default PageButtons;

const Container = styled(motion.main)`
  pointer-events: none;
  user-select: none;
  z-index: 10;
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const TopSpace = styled.div`
  pointer-events: auto;
  margin-top: 2.5rem;
  margin-left: 2.5rem;
  display: inline-block;
`;

const PaginationContainer = styled.div`
  width: 100%;
  overflow: auto;
  pointer-events: auto;
  display: flex;
  justify-content: center;
`;

const PaginationInner = styled.div`
  overflow: auto;
  display: flex;
  align-items: center;
  gap: 1rem;
  max-width: 100%;
  padding: 2.5rem;
`;

const PageButton = styled.button<{ isActive: boolean }>`
  border: 1px solid transparent;
  transition: all 0.3s;
  padding: 0.75rem 1rem;
  border-radius: 9999px;
  text-transform: uppercase;
  flex-shrink: 0;
  font-size: 1.125rem;
  line-height: 1.75rem;
  ${({ isActive }) =>
    isActive
      ? css`
          background-color: rgba(255, 255, 255, 0.9);
          color: black;
        `
      : css`
          background-color: rgba(0, 0, 0, 0.3);
          color: white;
          &:hover {
            border-color: white;
          }
        `}
`;
