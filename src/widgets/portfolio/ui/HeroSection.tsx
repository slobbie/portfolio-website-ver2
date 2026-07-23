import { useReducedMotion, type Variants } from 'framer-motion';

import {
  Hero,
  HeroCopy,
  HeroIntro,
  HeroKicker,
  HeroLinks,
  HeroName,
  HeroRole,
  HeroTitle,
} from '@/widgets/portfolio/ui/HeroSection.styles';

const EMAIL = 'haeru9410@gmail.com';

const createRevealVariants = (reduceMotion: boolean): {
  group: Variants;
  item: Variants;
} => ({
  group: {
    hidden: {},
    visible: {
      transition: {
        delayChildren: reduceMotion ? 0 : 0.08,
        staggerChildren: reduceMotion ? 0 : 0.11,
      },
    },
  },
  item: {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 24,
      filter: reduceMotion ? 'none' : 'blur(6px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: reduceMotion ? 0 : 0.68,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  },
});

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion() ?? false;
  const reveal = createRevealVariants(shouldReduceMotion);

  return (
    <Hero className="hero" id="profile">
      <HeroCopy
        className="hero-copy"
        initial={shouldReduceMotion ? false : 'hidden'}
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        variants={reveal.group}
      >
        <HeroTitle className="hero-title" variants={reveal.group}>
          <HeroRole className="hero-role" variants={reveal.item}>
            Frontend Developer
          </HeroRole>
          <HeroName className="hero-name" variants={reveal.item}>
            정해석
          </HeroName>
        </HeroTitle>
        <HeroKicker className="hero-kicker" variants={reveal.item}>
          클라이언트와 서버 사이의 흐름을 설계합니다.
        </HeroKicker>
        <HeroIntro className="hero-intro" variants={reveal.item}>
          클라이언트와 실시간 통신 경험을 바탕으로 Node.js 백엔드까지 구현 범위를 확장해 온
          개발자입니다.
        </HeroIntro>
        <HeroLinks
          className="hero-links"
          aria-label="연락처 및 외부 링크"
          variants={reveal.item}
        >
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          <a href="tel:+821066122297">010-6612-1297</a>
          <a href="https://github.com/slobbie" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </HeroLinks>
      </HeroCopy>
    </Hero>
  );
}
