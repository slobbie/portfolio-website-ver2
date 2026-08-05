import type { ReactNode } from 'react';

import { useMagnetic, usePress } from '@/shared/lib/interaction';
import { useRevealGroup } from '@/shared/lib/motion';
import { SplitText } from '@/shared/ui';

import {
  Hero,
  HeroCopy,
  HeroKicker,
  HeroLink,
  HeroLinks,
  HeroName,
  HeroRole,
  HeroTitle,
} from '@/widgets/portfolio/ui/HeroSection.styles';

const EMAIL = 'haeru9410@gmail.com';

type HeroContactProps = {
  href: string;
  external?: boolean;
  children: ReactNode;
};

/** 자석 효과는 요소마다 위치를 재야 해서 링크 단위로 분리합니다. */
function HeroContact({ href, external = false, children }: HeroContactProps) {
  const magnetic = useMagnetic();
  /* 위치는 자석이 맡으므로 여기서는 눌림만 더합니다. 둘 다 잡으면 서로 값을 덮습니다. */
  const press = usePress({ lift: 'none' });

  return (
    <HeroLink
      href={href}
      {...(external ? { target: '_blank', rel: 'noreferrer' } : null)}
      {...magnetic}
      {...press}
    >
      {children}
    </HeroLink>
  );
}

export function HeroSection() {
  const { group, nested, item } = useRevealGroup('lg', {
    stagger: 'hero',
    delayChildren: 0.08,
    blur: true,
  });

  return (
    <Hero className="hero" id="profile">
      <HeroCopy className="hero-copy" {...group}>
        <HeroTitle className="hero-title" {...nested}>
          <HeroRole className="hero-role" {...item}>
            Frontend Developer
          </HeroRole>
          <HeroName className="hero-name">
            <SplitText text="정해석" delayChildren={0.19} />
          </HeroName>
        </HeroTitle>
        <HeroKicker className="hero-kicker" {...item}>
          반복되는 문제를 자동화하고 재사용 가능한 구조를 만드는 개발자
        </HeroKicker>
        <HeroLinks className="hero-links" aria-label="연락처 및 외부 링크" {...item}>
          <HeroContact href={`mailto:${EMAIL}`}>{EMAIL}</HeroContact>
          <HeroContact href="tel:+821066121297">010-6612-1297</HeroContact>
          <HeroContact href="https://github.com/slobbie" external>
            GitHub
          </HeroContact>
          <HeroContact href="https://slobbie.github.io/portfolio-web/" external>
            Portfolio
          </HeroContact>
        </HeroLinks>
      </HeroCopy>
    </Hero>
  );
}
