# Portfolio Website Ver.2

[배포 링크](https://slobbie.github.io/portfolio-website-ver2/)

## 사용 스택

`TypeScript` `React 19` `Emotion` `Zustand` `React Three Fiber` `Three.js` `Framer Motion` `GSAP` `Vite`

## 소개

React Three Fiber와 Framer Motion을 활용하여 인터랙티브한 3D 그래픽과 스크롤 기반 애니메이션을 포함한 포트폴리오 웹사이트를 개발했습니다. 사용자에게 몰입감 있는 경험을 제공하는 데 중점을 두었습니다.

## 주요 기능

### IntroduceSection — 스크롤 인터랙션 인트로

1. 배경 이미지 분할/마스킹 애니메이션과 스크롤 연동 패럴랙스 효과 구현
2. GSAP 기반 SandText 효과 — 글자가 개별적으로 초록색으로 변하며 중력에 의해 떨어지는 애니메이션
3. Framer Motion `useScroll` + `useTransform` + `useSpring` 조합으로 텍스트 스택 등장/퇴장 시퀀스 구현
4. "I'm Frontend Developer" 두근두근 바운스 후 트리거 확대 사라짐 연출
5. WebGL 커스텀 셰이더 기반 Wave 배경 포인트 애니메이션

### ExperienceSection — 3D 인터랙티브 북

1. React Three Fiber + SkinnedMesh를 활용한 3D 책 오브젝트 구현
2. Bone 기반 스켈레톤 애니메이션으로 사실적인 페이지 넘김 효과 구현
3. 페이지별 텍스쳐 로딩 및 프리로딩 시스템으로 사용자 경험 최적화
4. GSAP Timeline 기반 SVG path 모핑 트랜지션 오버레이 (프로젝트 상세 모달)
5. 타이핑 텍스트 애니메이션 + 기술 스택 배지 순차 등장 효과
6. Zustand 기반 전역 페이지 상태 관리

### 아키텍처

1. Feature-based 모듈 구조로 도메인별 관심사 분리
2. 3D 로직을 Texture / Mesh / Animation 훅으로 세분화하여 단일 책임 원칙 적용
3. `shared/` 디렉토리를 통한 전역 공통 모듈 관리
4. GitHub Actions를 활용한 자동 빌드/배포 파이프라인

## 프로젝트 구조

```
src/
├── app/                        # 앱 진입점
│   └── App.tsx
├── features/                   # 도메인 단위 모듈
│   ├── introduce/              # 인트로 섹션
│   │   ├── components/         # SandText, ParallaxText, WaveBackground
│   │   ├── shaders/            # WebGL 커스텀 셰이더
│   │   └── index.tsx
│   └── experience/             # 프로젝트 경험 섹션
│       ├── components/         # Book, BookPage, Experience, PageButtons, TransitionOverlay
│       ├── constants/          # 3D 설정 상수
│       ├── hooks/              # useBookPageMesh, useBookPageAnimation 등
│       └── index.tsx
├── shared/                     # 전역 공통 모듈
│   └── store/                  # Zustand 글로벌 스토어
└── main.tsx
```

## Getting Started

1. 프로젝트 의존성 설치

```
$ yarn
```

2. 개발 서버 시작

```
$ yarn dev
```

3. 프로덕션 빌드

```
$ yarn build
```

### <br/>

###
