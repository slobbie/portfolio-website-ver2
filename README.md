# 정해석 포트폴리오

경력과 프로젝트의 판단·구현 과정을 순서대로 보여주는 프론트엔드 개발자
포트폴리오입니다.

![포트폴리오 메인 화면](docs/design-audit/68-hero-title-gap-24.png)

[배포 사이트](https://slobbie.github.io/portfolio-web/)

## 구성

- 소개 및 핵심 역량
- 기술 스택
- 회사별 업무 경험
- 프로젝트별 Career Details
- 개인 프로젝트 GiGGY
- 학력 및 병역
- Shared RN UIKit을 포함한 Labs


## 기술 스택

- React 19
- TypeScript
- Emotion
- Framer Motion
- Vite

## 프로젝트 구조

Feature-Sliced Design의 레이어 기준으로 화면과 데이터를 분리했습니다.
`src` 내부 import와 re-export는 모두 `@/` 경로 alias를 사용합니다.

```text
src/
├── app/                  # 앱 진입점과 전역 스타일
├── pages/portfolio/      # 포트폴리오 페이지 조합
├── widgets/
│   ├── portfolio/        # 포트폴리오 섹션 UI
│   └── site-header/      # 전역 헤더
├── entities/portfolio/   # 경력·프로젝트 콘텐츠와 타입
├── features/             # 기존 인터랙션 기능 모듈
└── shared/
    ├── store/            # 공통 상태
    └── ui/               # 공통 UI 컴포넌트
```

## 실행

```bash
yarn
yarn dev
```

프로덕션 빌드와 로컬 확인:

```bash
yarn lint
yarn build
yarn preview
```


