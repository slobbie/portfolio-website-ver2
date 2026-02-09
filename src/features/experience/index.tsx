import { useRef, useState, useEffect } from 'react';
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
  AnimatePresence,
} from 'framer-motion';
import styled from '@emotion/styled';
import PageButtons from '@/features/experience/components/PageButtons';
import ExperienceCanvas from '@/features/experience/components/Experience';
import TypingText from '@/features/experience/components/TypingText';
import { usePageStore } from '@/shared/store/usePageStore';
import TransitionOverlay from '@/features/experience/components/TransitionOverlay';

// 프로젝트 데이터 (이미지는 pages store에서 가져옴)
const projectData = [
  {
    title: 'Cover',
    description: '',
    tech: [],
    detailDescription: [],
    images: [],
  },
  {
    title: 'Mind log',
    description: '감정을 기록하고 풍경으로 시각화하는 감정 케어 앱 개발',
    tech: [
      'React native cli',
      'TypeScript',
      'React native Reanimated',
      'React native skia',
    ],
    images: ['mind-log-main', 'mind-log-sub'],
    detailDescription: [
      {
        subtitle: 'Skia 기반 감정 풍경 시스템 구현',
        items: [
          '@shopify/react-native-skia를 활용한 Canvas 기반 풍경 렌더링 시스템 구축',
          '시간대별(새벽/아침/낮/석양/저녁/밤) 하늘 그라데이션 자동 전환 개발',
          '태양, 달, 구름, 별, 나비, 반딧불이 등 시간대 연동 천체 및 자연 요소 구현',
          '나비 날갯짓 + 비행, 반딧불이 깜빡임 + 부유, 구름 이동 등 복합 애니메이션 구현',
        ],
      },
      {
        subtitle: '감정 파쇄 시스템 구현',
        items: [
          'Skia 기반 파쇄 애니메이션 개발',
          '파쇄 진행률에 따른 실시간 이펙트 렌더링 구현',
          'AsyncStorage 기반 파쇄 기록 영구 저장 및 통계 관리',
        ],
      },
      {
        subtitle: '아키텍처 및 설계',
        items: [
          '반응형 유틸리티를 활용한 디바이스 대응 스타일링',
          '도메인별 Feature-based 모듈 구조 분리',
        ],
      },
    ],
  },
  {
    title: 'Shared React Native UI Kit',
    description:
      '크로스 플랫폼 모바일 앱. 클라우드 서비스와 연동된 실시간 데이터 동기화.',
    tech: ['React Native', 'Storybook'],
    images: ['ui-kit-main', 'ui-kit-sub'],
    detailDescription: [
      {
        subtitle:
          'Atomic Design Architecture: Atoms, Molecules, Layout으로 구조화된 컴포넌트 계층',
        items: [
          '완전한 TypeScript 지원: 모든 컴포넌트가 타입 안전성을 보장',
          '테마 시스템: 일관된 디자인 토큰 기반의 스타일링',
          'Storybook 문서화: 인터랙티브 컴포넌트 탐색 및 개발 환경',
          '자동 배포: GitHub Pages를 통한 실시간 문서 업데이트',
        ],
      },
      {
        subtitle: 'Storybook 기반 문서화',
        items: [
          '인터랙티브 컴포넌트 탐색 및 실시간 개발 환경 구축',
          '디자인 토큰 기반의 중앙 관리형 스타일링 시스템 구현',
          '테마 토큰의 동적 병합 및 재정의를 통한 유연한 디자인 커스터마이징 개발',
        ],
      },
    ],
  },
  {
    title: '3D Interactive Portal',
    description:
      'Three.js 기반 인터랙티브 3D 포털. 실시간 물리 시뮬레이션과 최적화된 렌더링 시스템.',
    tech: ['Three.js', 'React Three Fiber', 'Rapier', 'TypeScript'],
    images: ['portal-main', 'portal-sub'],
    detailDescription: [
      {
        subtitle: '3D 그래픽스 핵심 기술 구현',
        items: [
          'React Three Fiber를 활용한 선언적 3D 렌더링 시스템 구축',
          'Suspense와 lazy loading을 통한 대용량 3D 모델의 효율적 로딩 개발',
          '카메라 컨트롤러를 활용한 인터랙티브한 뷰 개발',
        ],
      },
      {
        subtitle: '물리 시뮬레이션',
        items: [
          '@react-three/rapier를 활용한 실시간 물리 엔진 개발',
          '오브젝트 간의 충돌 감지 및 물리적 상호작용 개발',
        ],
      },
      {
        subtitle: '사용자 인터랙션',
        items: [
          '사용자 입력에 반응하는 인터랙티브 3D 요소 구현',
          '마우스 드래그를 통한 오브젝트 조작 및 물리 시뮬레이션 개발',
        ],
      },
      {
        subtitle: '성능 최적화',
        items: [
          'React의 메모이제이션을 활용한 불필요한 재렌더링 방지',
          'Three.js 객체의 재사용을 통한 메모리 사용량 최적화',
          '컴포넌트 기반 아키텍처를 통한 효율적인 리소스 관리',
        ],
      },
    ],
  },
  {
    title: 'Pokemon CardVault',
    description: '인터랙티브한 포켓몬 도감 웹 애플리케이션 개발',
    tech: ['Next.js 15', 'Zustand', 'Framer Motion', 'TypeScript'],
    images: ['pokemon-main', 'pokemon-sub'],
    detailDescription: [
      {
        subtitle: 'Next.js 15 기반 현대적 웹 시스템',
        items: [
          'App Router와 Server Components를 활용한 최적화된 렌더링 시스템 구축',
          'Static Site Generation(SSG)과 동적 라우팅을 통한 빠른 페이지 로딩 개발',
          'GitHub Pages 배포를 위한 자동화된 CI/CD 파이프라인',
        ],
      },

      {
        subtitle: '상태 관리 및 데이터 페칭',
        items: [
          'Zustand를 활용한 클라이언트 상태 관리 시스템 개발',
          'TanStack Query v5를 활용한 서버 상태 관리 및 캐싱 전략 구현',
          '무한 스크롤과 필터링을 위한 최적화된 데이터 로딩 개발',
        ],
      },

      {
        subtitle: '사용자 인터랙션 및 시각화',
        items: [
          'Tailwind CSS와 Framer Motion을 활용한 반응형 UI 및 애니메이션 구현',
          '마우스 드래그를 통한 오브젝트 조작 및 물리 시뮬레이션 개발',
          '다국어 지원(한국어/영어) 및 실시간 언어 전환 기능 구현',
        ],
      },

      {
        subtitle: '성능 최적화 및 아키텍처',
        items: [
          'Atomic Design 패턴을 통한 컴포넌트 재사용성 및 유지보수성 향상',
          '이미지 최적화 및 코드 분할을 통한 로딩 속도 개선',
        ],
      },

      {
        subtitle: '성능 최적화 및 아키텍처',
        items: [
          'Atomic Design 패턴을 통한 컴포넌트 재사용성 및 유지보수성 향상',
          '이미지 최적화 및 코드 분할을 통한 로딩 속도 개선',
          'TypeScript를 활용한 타입 안정성 확보 및 개발 생산성 향상',
        ],
      },
    ],
  },
];

const ExperienceSection = () => {
  const { scrollYProgress } = useScroll();
  const { page, setPage } = usePageStore();
  const hasAutoOpened = useRef(false);

  // 스크롤 끝에서 부드럽게 올라오는 효과
  const rawY = useTransform(scrollYProgress, [0.68, 0.85], [200, 0]);
  const y = useSpring(rawY, { stiffness: 60, damping: 20 });
  const opacity = useTransform(scrollYProgress, [0.68, 0.78], [0, 1]);

  // 타이틀 애니메이션 - 패럴랙스가 상단에 있을 때 보이기 시작
  const rawTitleY = useTransform(scrollYProgress, [0.68, 0.78], [50, 0]);
  const titleY = useSpring(rawTitleY, { stiffness: 100, damping: 20 });
  const titleOpacity = useTransform(scrollYProgress, [0.68, 0.75], [0, 1]);

  // My Project 보이고 곧바로 책 펼치기
  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (latest >= 0.78 && !hasAutoOpened.current) {
      hasAutoOpened.current = true;
      setPage(1);
    }
    // 위로 스크롤해서 책 섹션이 사라지면 책 닫기
    if (latest < 0.68 && hasAutoOpened.current) {
      hasAutoOpened.current = false;
      setPage(0);
    }
  });

  // 현재 페이지에 해당하는 프로젝트 데이터
  const currentProject = projectData[Math.min(page, projectData.length - 1)];
  const [isExpanded, setIsExpanded] = useState(false);
  const [typingCompleteKey, setTypingCompleteKey] = useState<number | null>(
    null,
  );

  // 현재 페이지의 타이핑이 완료되었는지 확인
  const isTypingComplete = typingCompleteKey === page;

  // 확대 시 body 스크롤 막기
  useEffect(() => {
    if (isExpanded) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isExpanded]);

  const handleCardClick = () => {
    if (currentProject.detailDescription.length > 0) {
      setIsExpanded(true);
    }
  };

  return (
    <Container style={{ y, opacity }}>
      <TitleWrapper
        style={{ y: titleY, opacity: titleOpacity, textAlign: 'center' }}
      >
        <Title>My Project</Title>
      </TitleWrapper>

      {/* 프로젝트 설명 - 기존 디자인 */}
      <ProjectInfoWrapper>
        <AnimatePresence mode='wait'>
          {page > 0 && currentProject.description && (
            <ProjectInfo
              key={page}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectTitle>{currentProject.title}</ProjectTitle>
              <ProjectDescription>
                <TypingText
                  text={currentProject.description}
                  speed={20}
                  onComplete={() => setTypingCompleteKey(page)}
                />
              </ProjectDescription>

              {/* 공간 고정 - opacity로만 제어 */}
              <TechStack
                initial={{ opacity: 0 }}
                animate={{ opacity: isTypingComplete ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {currentProject.tech.map((tech, index) => (
                  <TechBadge
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity: isTypingComplete ? 1 : 0,
                      scale: isTypingComplete ? 1 : 0.8,
                    }}
                    transition={{
                      delay: isTypingComplete ? index * 0.08 : 0,
                      type: 'spring',
                      stiffness: 300,
                      damping: 20,
                    }}
                  >
                    {tech}
                  </TechBadge>
                ))}
              </TechStack>

              {/* More 버튼 - 공간 고정, opacity로만 제어 */}
              {currentProject.detailDescription.length > 0 && (
                <MoreButton
                  onClick={handleCardClick}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isTypingComplete ? 1 : 0 }}
                  transition={{
                    delay: isTypingComplete
                      ? currentProject.tech.length * 0.08 + 0.15
                      : 0,
                  }}
                  whileHover={{
                    scale: 1.02,
                    backgroundColor: 'rgba(255, 255, 255, 0.12)',
                  }}
                  whileTap={{ scale: 0.98 }}
                  style={{ pointerEvents: isTypingComplete ? 'auto' : 'none' }}
                >
                  More
                </MoreButton>
              )}
            </ProjectInfo>
          )}
        </AnimatePresence>
      </ProjectInfoWrapper>

      {/* SVG 트랜지션 오버레이 */}
      <TransitionOverlay
        isOpen={isExpanded}
        onClose={() => setIsExpanded(false)}
      >
        {/* 이미지 - 고정 */}
        {currentProject.images && currentProject.images.length > 0 && (
          <ImageSection>
            {currentProject.images.map((img) => (
              <ProjectImage
                key={img}
                src={`/textures/${img}.jpg`}
                alt={currentProject.title}
              />
            ))}
          </ImageSection>
        )}

        {/* 스크롤 영역 - 제목부터 */}
        <ScrollContent>
          <DetailHeader>
            <ProjectTitle>{currentProject.title}</ProjectTitle>
            <ProjectDescription>
              {currentProject.description}
            </ProjectDescription>
            <TechStack>
              {currentProject.tech.map((tech) => (
                <TechBadge key={tech}>{tech}</TechBadge>
              ))}
            </TechStack>
          </DetailHeader>

          <Divider />
          <SectionGrid>
            {currentProject.detailDescription.map((section, index) => (
              <Section
                key={section.subtitle}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.1 }}
              >
                <SectionTitle>{section.subtitle}</SectionTitle>
                <ItemList>
                  {section.items.map((item, itemIndex) => (
                    <Item key={itemIndex}>
                      <Bullet>•</Bullet>
                      <ItemText>{item}</ItemText>
                    </Item>
                  ))}
                </ItemList>
              </Section>
            ))}
          </SectionGrid>
        </ScrollContent>
      </TransitionOverlay>

      <PageButtons />
      <ExperienceCanvas />
    </Container>
  );
};

export default ExperienceSection;

const Container = styled(motion.div)`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
`;

const TitleWrapper = styled(motion.div)`
  position: absolute;
  top: 40px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  z-index: 20;
  pointer-events: none;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #fff;
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`;

// 기존 텍스트 디자인
const ProjectInfoWrapper = styled.div`
  position: absolute;
  top: 50%;
  right: 80px;
  transform: translateY(-50%);
  width: 400px;
  z-index: 20;
  pointer-events: none;
`;

const ProjectInfo = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  pointer-events: auto;
`;

// 상세 헤더
const DetailHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ImageSection = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
  overflow-x: auto;
  padding-bottom: 8px;
  flex-shrink: 0;
`;

const ProjectImage = styled.img`
  width: 280px;
  height: 180px;
  object-fit: contain;
  border-radius: 12px;
  flex-shrink: 0;
  background-color: #fff;
`;

const ProjectTitle = styled(motion.h2)`
  font-size: 1.75rem;
  font-weight: 700;
  color: #fff;
  margin: 0;
`;

const ProjectDescription = styled.div`
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
`;

const TechStack = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 8px;
`;

const TechBadge = styled(motion.span)`
  padding: 6px 12px;
  background: rgba(74, 222, 128, 0.15);
  border: 1px solid rgba(74, 222, 128, 0.3);
  border-radius: 20px;
  font-size: 0.875rem;
  color: #4ade80;
`;

const MoreButton = styled(motion.button)`
  width: 100%;
  margin-top: 20px;
  padding: 14px 24px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  pointer-events: auto;
  backdrop-filter: blur(10px);
`;

// 스크롤 영역 (제목부터)
const ScrollContent = styled.div`
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-height: 0;
`;

const Divider = styled.div`
  height: 1px;
  background: rgba(255, 255, 255, 0.1);
  margin: 8px 0;
`;

// 2열 그리드 (반응형)
const SectionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Section = styled(motion.div)`
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
  padding: 20px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const SectionTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: #fff;
  margin: 0;
  padding-bottom: 8px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const ItemList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Item = styled(motion.li)`
  display: flex;
  align-items: flex-start;
  gap: 12px;
`;

const Bullet = styled.span`
  color: #4ade80;
  font-size: 1rem;
  line-height: 1.6;
`;

const ItemText = styled.span`
  font-size: 0.95rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.85);
`;
