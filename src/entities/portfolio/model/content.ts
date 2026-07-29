import type {
  CareerProject,
  ExperienceOverviewItem,
  GiggyContent,
  LabProject,
  ProfessionalSummaryItem,
  TechGroup,
} from '@/entities/portfolio/model/types';

const assetPath = (path: string) => `${import.meta.env.BASE_URL}${path}`;

export const professionalSummary = [
  {
    label: '01 / Harness',
    title: '하네스 시스템 구축',
    description:
      '문서 컨텍스트, 공유 ESLint와 Git·CI 검증을 연결해 AI와 개발자가 동일한 아키텍처와 작업 규칙을 따르는 하네스 시스템을 구축했습니다.',
  },
  {
    label: '02 / Localization',
    title: '다국어 반영 자동화',
    description:
      '실무자가 관리하는 번역 원본을 앱의 언어별 리소스로 동기화하고, 코드에 남은 한글 탐지와 다국어 함수 적용을 자동화했습니다.',
  },
  {
    label: '03 / Automation',
    title: 'API 조회 구성 자동화',
    description:
      'API 정의를 기준으로 React Query의 Query Key와 호출 함수를 생성해, 조회 API를 추가하거나 변경할 때 반복되는 구성을 줄였습니다.',
  },
  {
    label: '04 / Backend',
    title: 'Node.js 기반 백엔드',
    description:
      '공용 웨어러블 기기의 등록·지급·반납·이력 관리 시스템과 공공 기상 데이터 수집 스케줄 서버를 개발했습니다.',
  },
  {
    label: '05 / Native Integration',
    title: '외부 장치 연동',
    description:
      '차량 진단 SDK의 BLE·VIN·OBD-II 기능을 React Native Native Module로 연결했습니다.',
  },
  {
    label: '06 / Reusable Structure',
    title: '재사용 가능한 구조',
    description:
      '고객·점주 앱이 함께 사용하는 채팅 모듈과 React Native·React 디자인 시스템을 구성했습니다.',
  },
] satisfies readonly ProfessionalSummaryItem[];

export const techGroups = [
  {
    label: 'Frontend',
    items: ['React Native', 'React', 'Zustand', 'React Query'],
  },
  {
    label: 'Realtime / Integration',
    items: ['WebSocket', 'Socket.IO', 'STOMP', 'FCM', 'Native Module'],
  },
  {
    label: 'Backend Experience',
    items: ['Node.js', 'NestJS', 'Express', 'TypeScript', 'PostgreSQL', 'MikroORM', 'REST API'],
  },
  {
    label: 'Infrastructure / Tools',
    items: ['AWS S3', 'Docker', 'GitHub Actions', 'AWS ECR', 'AWS EC2', 'Git'],
  },
  {
    label: 'Convention / Quality',
    items: ['ESLint', 'Husky', 'lint-staged', 'commitlint', 'Turborepo', 'pnpm', 'Storybook'],
  },
] satisfies readonly TechGroup[];

export const experienceOverview = [
  {
    company: '에스제이소프트텍',
    role: '개발팀',
    duration: '2026.04 — 현재',
    highlights: [
      '문서 컨텍스트·공유 ESLint·Git Hook·CI를 연결한 AI 협업 하네스 시스템을 구축했습니다.',
      '고객용·점주용 앱이 함께 사용하는 STOMP 채팅 모듈을 설계하고 구현했습니다.',
      '공통 UI를 웹·모바일 디자인 시스템으로 구성하고 기능별 패키지로 분리했습니다.',
    ],
    tech: [
      'TypeScript',
      'React Native',
      'React',
      'STOMP',
      'WebSocket',
      'Zustand',
      'React Query',
      'ESLint',
      'Husky',
      'Turborepo',
      'GitHub Actions',
      'Storybook',
    ],
  },
  {
    company: '미니레코드',
    role: '개발팀 매니저',
    duration: '2024.07 — 2025.06',
    highlights: [
      'WebSocket 응답 수신부터 모바일 PCM 오디오 재생까지의 처리 흐름을 구현했습니다.',
      '번역 데이터 반영과 코드의 다국어 적용을 자동화하는 스크립트를 구현했습니다.',
      'API 정의를 기준으로 React Query 조회 구성을 생성하는 공통 모듈을 구현했습니다.',
    ],
    tech: ['React Native', 'TypeScript', 'WebSocket', 'PCM', 'Google Sheets API', 'Babel AST', 'React Query', 'Axios'],
  },
  {
    company: '이로운소프트',
    role: '개발팀 주임',
    duration: '2022.08 — 2024.04',
    highlights: [
      '차트별 WebSocket 연결을 단일 연결과 식별자 기반 데이터 분배 구조로 정리했습니다.',
      '공용 웨어러블 기기의 등록·지급·반납·이력 관리와 공공데이터 수집 서버를 구현했습니다.',
      'Android·iOS 차량 진단 SDK의 BLE, VIN, OBD-II 기능을 React Native Native Module로 연결했습니다.',
    ],
    tech: ['Node.js', 'Express', 'TypeScript', 'PostgreSQL', 'React Native', 'React', 'WebSocket', 'Highcharts', 'Native Module'],
  },
] satisfies readonly ExperienceOverviewItem[];

export const careerProjects = [
  {
    company: '에스제이소프트텍',
    companyId: 'sjsofttech',
    title: 'AI 협업 하네스 시스템 구축',
    duration: '2026.04 — 현재',
    background: [
      '기존에도 AI 작업 규칙이 있었지만 문서 중심의 느슨한 구조라 아키텍처와 코드 규칙을 벗어나는 사례가 반복됐습니다. 위반 사항이 코드 리뷰에서 뒤늦게 발견되고 같은 지적이 반복되는 문제를 작업 단계에서 줄이고자 했습니다.',
    ],
    problems: [],
    roleHeading: '역할',
    roles: ['모노레포의 AI·개발자 공통 작업 규칙과 검증 시스템 설계·구축'],
    approach: [],
    keyWork: [
      'CLAUDE.md를 규칙의 진입점으로 두고, 아키텍처·모바일·웹·테스트·인프라 규칙 20여 종을 작업 맥락별로 분리해 참조하도록 구성했습니다. 각 규칙에는 허용·금지 기준과 참고 구현을 함께 제공했습니다.',
      '공유 ESLint 설정에 모듈별 허용 참조 범위와 네이밍 패턴을 정의했습니다. 상위 기능을 잘못 참조하거나 정해진 진입점 대신 내부 파일을 직접 가져오는 코드, 네이밍 위반은 pre-commit과 CI에서 오류로 처리했습니다.',
      'Husky로 보호 브랜치 직접 커밋, 시크릿, 충돌 마커와 커밋 메시지를 검사하고 push 전에 타입 검사를 실행했습니다.',
    ],
    results: [
      '코드 리뷰에서 규칙 위반을 사후 발견하던 방식에서 문서·ESLint·Git Hook·CI가 작업 단계별로 검증하는 구조로 전환해, 같은 규칙 위반과 리뷰 지적이 반복되는 비용을 줄였습니다.',
    ],
    tech: [
      'TypeScript',
      'ESLint',
      'eslint-plugin-boundaries',
      'Husky',
      'lint-staged',
      'commitlint',
      'pnpm',
      'Turborepo',
      'GitHub Actions',
    ],
  },
  {
    company: '에스제이소프트텍',
    companyId: 'sjsofttech',
    title: '고객용·점주용 앱 공통 실시간 채팅',
    background: [
      '고객용 앱과 점주용 앱을 동시에 개발하면서 공통 채팅 기능을 하나의 모듈로 구성했습니다. 글로벌 서비스의 불안정한 모바일 네트워크 환경을 고려해 재연결 간격과 중단 기준을 일관되게 관리해야 했습니다.',
    ],
    problems: [],
    roleHeading: '역할',
    roles: ['메시지 처리와 연결 관리를 재사용 가능한 실시간 채팅 모듈로 설계·구현'],
    approach: [],
    keyWork: [
      '메시지 전송·읽음·이벤트 구독을 공통 인터페이스로 구성했습니다.',
      '앱별 설정은 외부에서 주입하고 연결·구독 처리는 공통 모듈로 분리했습니다.',
      '재연결 정책을 중앙화해 고객·점주 앱이 동일한 기준을 사용하도록 했습니다.',
    ],
    results: [],
    tech: ['React Native', 'React', 'TypeScript', 'STOMP', 'WebSocket', 'Zustand', 'React Query'],
  },
  {
    company: '에스제이소프트텍',
    companyId: 'sjsofttech',
    title: 'React Native·React 디자인 시스템 개발',
    background: [
      '동일한 UI가 사용하는 컴포넌트마다 하드코딩되어 중복 구현되고 있었습니다. 공통 UI를 디자인 시스템으로 만들고 기능별 패키지로 분리해 재사용할 수 있도록 구성했습니다.',
    ],
    problems: [],
    roleHeading: '역할',
    roles: ['웹·모바일 디자인 시스템 설계·개발'],
    approach: [],
    keyWork: [
      '공통 컴포넌트의 이름과 인터페이스를 통일하고, 웹·네이티브 구현을 분리했습니다.',
      '컴포넌트·Hooks·Motion을 패키지로 분리해 의존성과 변경 범위를 독립적으로 관리했습니다.',
    ],
    results: [
      '웹과 모바일에서 같은 인터페이스를 사용하면서 플랫폼별 변경이 다른 영역으로 전파되지 않도록 구성했습니다.',
    ],
    tech: ['React Native', 'React', 'TypeScript', 'Storybook'],
  },
  {
    company: '미니레코드',
    companyId: 'minirecord',
    title: 'AI 음성 대화 서비스 실시간 오디오 재생',
    duration: '2024.07 — 2025.06',
    background: [
      'WebSocket으로 받은 WAV 조각을 개별 오디오처럼 재생하면 오디오를 열고 닫는 사이에 팝핑 노이즈가 발생했습니다. 바이너리 조각에서 PCM 데이터를 추출해 하나의 재생 흐름에 연속으로 전달할 필요가 있었습니다.',
    ],
    problems: [],
    roleHeading: '역할',
    roles: ['WebSocket 응답 수신부터 모바일 오디오 재생까지의 처리 흐름 구현'],
    approach: [],
    keyWork: [
      'WebSocket 패킷에서 제어 정보와 오디오 데이터를 분리했습니다.',
      'WAV 헤더를 제거하고 PCM 조각을 하나의 재생 흐름에 연속으로 전달했습니다.',
      '연결·수신·재생 처리를 공통 Hook으로 분리했습니다.',
    ],
    results: [
      '오디오 파일을 반복해서 열고 닫지 않고 WebSocket으로 수신한 PCM 조각을 즉시 이어서 재생했습니다.',
    ],
    tech: ['React Native', 'TypeScript', 'WebSocket', 'PCM'],
  },
  {
    company: '미니레코드',
    companyId: 'minirecord',
    title: '번역 데이터 동기화와 다국어 적용 자동화',
    background: [
      '실무자의 번역 수정 시점과 앱 반영 시점이 달라 번역 누락과 오래된 문구가 남을 수 있었습니다.',
    ],
    problems: [],
    roleHeading: '역할',
    roles: ['번역 데이터 반영과 코드의 다국어 적용을 자동화하는 스크립트 구현'],
    approach: [],
    keyWork: [
      'Google Sheets 번역 데이터를 언어별 앱 번역 리소스로 변환했습니다.',
      '코드에 남은 한글 문자열을 탐지하고 다국어 함수 적용을 자동화했습니다.',
      '번역 파일 수동 반영을 원본 데이터와 코드 적용 상태를 함께 점검하는 흐름으로 바꿨습니다.',
    ],
    results: [],
    tech: ['TypeScript', 'Google Sheets API', 'Babel AST', 'react-i18next'],
  },
  {
    company: '미니레코드',
    companyId: 'minirecord',
    title: 'API 정의 기반 React Query 조회 구성 자동화',
    background: [
      '조회 API를 추가할 때마다 API 함수와 별도로 Query Key와 호출 함수를 반복해서 정의해야 했습니다. API 이름이나 파라미터가 변경되면 여러 위치를 함께 수정해야 해 변경 범위가 커지고 연결 누락이 발생하기 쉬웠습니다.',
    ],
    problems: [],
    roleHeading: '역할',
    roles: ['API 정의와 React Query 사용 흐름을 연결하는 공통 모듈 구현'],
    approach: [],
    keyWork: [
      'API 정의의 메서드와 식별자를 기준으로 Query Key와 호출 함수를 생성했습니다.',
      '조회 API만 생성 대상으로 분리하고 요청·응답 타입을 사용 지점까지 연결했습니다.',
    ],
    results: [
      '조회 API의 추가와 변경에 반복되던 React Query 구성을 API 정의 한 곳에서 관리하도록 단순화했습니다.',
    ],
    tech: ['TypeScript', 'React Query', 'Axios'],
  },
  {
    company: '이로운소프트',
    companyId: 'erounsoft',
    title: '예천양수발전소 실시간 모니터링',
    duration: '2023.10 — 2024.03',
    background: [
      '차트마다 연결과 재연결 상태를 관리해 화면이 커질수록 관리 지점도 함께 늘어났습니다.',
    ],
    problems: [],
    roleHeading: '역할',
    roles: ['WebSocket 수신 구조 개선과 설비 모니터링 화면 구현'],
    approach: [],
    keyWork: [
      '차트별 WebSocket을 하나의 연결로 통합했습니다.',
      '수신 데이터를 식별자에 따라 필요한 차트로 분배했습니다.',
      '연결·재연결 관리 지점을 단일화했습니다.',
    ],
    results: ['차트별 연결 구조를 단일 연결·식별자 기반 분배 구조로 변경했습니다.'],
    tech: ['React', 'TypeScript', 'Redux Toolkit', 'WebSocket', 'Highcharts'],
  },
  {
    company: '이로운소프트',
    companyId: 'erounsoft',
    title: 'SafeWing 산업안전 백엔드 개발',
    duration: '2023.08 — 2023.09',
    background: [
      '심박수·체온을 측정하는 공용 웨어러블 기기의 지급·반납을 수기로 관리해, 근무일마다 달라지는 사용자와 상태 이력을 추적하기 어려웠습니다. 공공데이터 API 응답 지연이 어드민 조회에 직접 영향을 주는 구조도 분리해야 했습니다.',
    ],
    problems: [],
    roleHeading: '역할',
    roles: ['기기 관리 API·관리 화면과 공공데이터 수집 서버 구현'],
    approach: [],
    keyWork: [
      '기기 등록·조회·지급·반납과 상태 이력 흐름을 구현했습니다.',
      '관리자 권한에 따라 조회와 실행 기능을 구분했습니다.',
      '기상 데이터 갱신 시간에 맞춰 별도 스케줄 서버가 데이터를 수집해 DB에 적재하고, 어드민은 내부 DB를 조회하도록 구성했습니다.',
    ],
    results: [
      '수기로 처리하던 공용 기기의 지급·반납을 시스템화하고, 외부 데이터 수집과 어드민 조회 흐름을 분리했습니다.',
    ],
    tech: ['Node.js', 'Express', 'TypeScript', 'PostgreSQL', 'REST API', 'Open API', 'React'],
  },
  {
    company: '이로운소프트',
    companyId: 'erounsoft',
    title: 'Z-CAR 차량 진단 SDK 연동',
    duration: '2022.08 — 2023.07',
    background: [
      '차량 진단 SDK에서 제공하는 BLE 연결, VIN 조회와 OBD-II 데이터를 React Native 앱에서 사용해야 했습니다.',
    ],
    problems: [],
    roleHeading: '역할',
    roles: ['Android·iOS 차량 진단 SDK와 React Native 앱 연동'],
    approach: [],
    keyWork: [
      'SDK 초기화, BLE 연결, VIN 조회와 OBD-II 기능을 Native Module로 연결했습니다.',
      '플랫폼별 호출 차이를 공통 TypeScript 인터페이스로 정리했습니다.',
      '장치 연결 상태와 진단 결과를 차량 등록·진단 화면에 반영했습니다.',
    ],
    results: [],
    tech: ['React Native', 'TypeScript', 'Java', 'Objective-C', 'BLE', 'OBD-II', 'Native Module'],
  },
] satisfies readonly CareerProject[];

export const giggy = {
  title: 'GIGGY',
  subtitle: '호주 워킹홀리데이 구인·구직 매칭 앱',
  intro: [
    '구인 공고와 사용자 프로필을 기반으로 매칭하고, 수락 이후 채팅과 근무 일정으로 이어지는 모바일 서비스입니다.',
  ],
  scope: [
    'NestJS 백엔드의 도메인 구조, 공통 데이터 접근 구조, 인증, 매칭·채팅·알림과 배포 흐름 설계·구현',
  ],
  stack: [
    'Node.js',
    'NestJS',
    'TypeScript',
    'PostgreSQL',
    'MikroORM',
    'Socket.IO',
    'JWT',
    'Firebase Admin',
    'AWS S3',
    'GitHub Actions',
    'Docker',
    'AWS ECR',
    'AWS EC2',
  ],
  architecture: {
    background:
      '인증, 회원, 구인 공고, 사용자 프로필, 매칭, 채팅과 알림이 연결되면서도 각 기능의 데이터와 책임이 섞이지 않는 구조가 필요했습니다.',
    details: [
      '인증, 회원, 구인 공고, 사용자 프로필, 매칭, 일정, 채팅과 알림을 도메인별로 분리했습니다.',
      '로그인과 HTTP 요청은 REST API, 채팅과 알림 전달은 Socket.IO로 구분했습니다.',
      'Controller와 Gateway는 요청과 연결을 처리하고, 실제 서비스 흐름은 도메인 Service에서 담당하도록 구성했습니다.',
      '데이터 처리는 Repository로 분리하고, 공통 DbRunner를 통해 Entity 조회·변경과 트랜잭션을 처리하도록 구성했습니다.',
      '이미지 저장은 AWS S3, 모바일 푸시는 Firebase FCM으로 분리했습니다.',
      'DB에 저장한 sessionId를 로그인 식별 기준으로 사용해, 동일 계정이 다른 기기에서 로그인하면 기존 로그인 상태가 무효화되도록 구성했습니다.',
    ],
    flow: `                    Mobile Client
                          │
        ┌─────────────────┴─────────────────┐
   REST API                            Socket.IO
   Controller                            Gateway
        └─────────────────┬─────────────────┘
                          ▼
                    Domain Service
    Auth · Member · Job · User Profile
    Match · MatchSchedule · Chat · Notification
                          │
                          ▼
                Repository / External
    DbRunner            AWS S3            Firebase FCM
       DB             이미지 저장             모바일 푸시`,
    note: 'REST API와 Socket.IO는 순서대로 실행되는 인증 과정이 아니라 독립적인 진입 경로입니다. 로그인과 일반 API 요청은 REST API에서 처리하고, 로그인 이후 채팅과 알림을 전달할 때 Socket.IO를 사용합니다.',
  },
  dataAccess: {
    background:
      '도메인별 Repository에서 반복되는 데이터 조회·변경과 트랜잭션 코드를 공통으로 사용할 수 있는 데이터 접근 구조가 필요했습니다.',
    details: [
      'Entity 조회·등록·수정·삭제, 관계 조회와 트랜잭션 기능을 MikroORM 기반의 공통 DbRunner로 구성해 도메인별 Repository에서 재사용했습니다.',
    ],
    flow: `            Repository
                 │
                 ▼
             DbRunner
                 │
   ┌─────────────┼─────────────┐
  조회           변경         트랜잭션
Entity · 관계  등록 · 수정 · 삭제  동일한 DB 컨텍스트
   └─────────────┼─────────────┘
                 ▼
                 DB`,
  },
  realtime: {
    background:
      '구인 공고와 사용자 프로필에서 시작된 매칭이 수락 이후 채팅, 알림과 근무 일정으로 연결되어야 했습니다. 각 기능의 데이터와 역할은 분리하면서 사용자에게는 하나의 서비스 흐름으로 제공하도록 구성했습니다.',
    details: [
      '매칭 수락을 기준으로 채팅, 알림과 근무 일정의 후속 작업을 연결했습니다.',
      '알림 저장과 FCM 푸시, 인앱 알림의 실행 흐름은 NotificationService에서 관리했습니다.',
      'Gateway는 사용자 접속 상태 관리와 채팅·알림 전달을 담당하도록 역할을 분리했습니다.',
      '확정된 근무 조건은 채팅 데이터와 분리해 별도 일정으로 관리했습니다.',
    ],
    flow: `      구인 공고 / 사용자 프로필
                 │
                 ▼
             매칭 요청
                 │
                 ▼
             매칭 수락
                 │
   ┌─────────────┼─────────────┐
  채팅           알림         근무 일정
          FCM 푸시 · 인앱 알림`,
  },
  testing: {
    summary: [
      '인증, 데이터 접근, 매칭·채팅·알림을 포함한 단위 테스트 46개를 작성하고 실행했습니다.',
      '공통 응답 형식을 확인하는 E2E 테스트를 실행했습니다.',
      '실제 DB에서 트랜잭션 도중 오류가 발생했을 때 이전 변경까지 함께 롤백되는지 통합 테스트로 확인했습니다.',
    ],
    stats: [
      { label: '단위 테스트', value: '18개 Suite · 46개 통과' },
      { label: 'E2E 테스트', value: '공통 응답 형식 · 1개 통과' },
      { label: 'DB 통합 테스트', value: '트랜잭션 롤백 · 1개 통과' },
    ],
  },
  deployment: {
    background:
      'Pull Request에서 검증한 코드와 서버에서 실행되는 결과물을 동일하게 유지하고, 실패한 배포가 현재 실행 중인 버전에 영향을 주지 않도록 배포 흐름을 구성했습니다.',
    details: [
      'Pull Request에서 정적 분석, 테스트, 애플리케이션 빌드와 Docker 이미지 생성을 검증했습니다.',
      '검증을 통과해 main에 병합된 커밋만 운영 Docker 이미지로 생성했습니다.',
      'Git commit SHA로 이미지를 태깅해 실행 중인 서버와 소스 커밋을 연결했습니다.',
      '생성한 이미지를 AWS ECR에 저장하고 AWS Systems Manager를 통해 EC2 배포를 요청하도록 구성했습니다.',
      'EC2에서는 신규 이미지를 내려받아 MikroORM Migration을 먼저 적용한 후 신규 컨테이너를 실행했습니다.',
      '신규 컨테이너 실행 후 DB 연결을 포함한 상태 확인을 수행했습니다.',
      'Migration이 실패하면 기존 컨테이너를 유지하고, 신규 컨테이너의 상태 확인이 실패하면 직전 이미지를 다시 실행하도록 구성했습니다.',
    ],
    results: [
      '검증을 통과한 커밋만 동일한 Docker 이미지로 전달하고, 실행 중인 버전을 Git commit SHA로 추적할 수 있도록 구성했습니다. Migration이나 신규 컨테이너의 상태 확인이 실패해도 기존 버전으로 서비스를 유지할 수 있는 배포 흐름을 구성했습니다.',
    ],
    flow: `Pull Request
정적 분석 · 테스트 · 빌드
     │ 검증 통과 커밋
     ▼
main 병합 → Docker 이미지
            Git commit SHA 태그
     │
     ▼
AWS ECR 이미지 저장
     │
     ▼
EC2 배포 · SSM 배포 요청
     │
     ▼
Migration · 상태 확인
  실패 시 기존 컨테이너 유지
  또는 직전 이미지 복구`,
    stack: [
      'GitHub Actions',
      'Docker',
      'AWS ECR',
      'AWS EC2',
      'AWS Systems Manager',
      'MikroORM Migration',
    ],
  },
} satisfies GiggyContent;

export const labs = [
  {
    title: 'Shared RN UIKit',
    index: '01',
    description: '웹과 React Native에서 같은 API로 사용하는 크로스플랫폼 디자인 시스템',
    detail: '공통 디자인 토큰과 플랫폼별 구현, Motion·Reanimated 모션 API, Fumadocs 문서와 Vite·Expo 예제를 구성했습니다.',
    image: assetPath('textures/ui-kit-main.png'),
    tech: [
      'React 19.0.0',
      'React Native 0.79.2',
      'Expo 53.0.8',
      'Motion 12.42.2',
      'Reanimated 3.17.4',
      'Storybook 8.6.14',
    ],
    links: [
      { label: 'Live', href: 'https://slobbie.github.io/shared-rn-uikit/' },
      { label: 'GitHub', href: 'https://github.com/slobbie/shared-rn-uikit' },
    ],
  },
  {
    title: '3D Interactive Portal',
    index: '02',
    description: '물리 기반 상호작용을 실험한 3D 웹 인터페이스',
    detail: 'React Three Fiber와 물리 시뮬레이션을 사용해 3D 오브젝트와 사용자의 입력이 연결되는 장면을 구현했습니다.',
    image: assetPath('textures/portal-main.jpg'),
    tech: ['React', 'React Three Fiber', 'Three.js', 'Physics'],
    links: [
      { label: 'Live', href: 'https://slobbie.github.io/portal/' },
      { label: 'GitHub', href: 'https://github.com/slobbie/portal' },
    ],
  },
  {
    title: 'Pokémon CardVault',
    index: '03',
    description: '카드 탐색 경험을 중심으로 만든 인터랙티브 도감',
    detail: 'Next.js 기반 탐색 구조와 카드 중심의 시각적 인터랙션을 구현했습니다.',
    image: assetPath('textures/pokemon-main.jpg'),
    tech: ['Next.js', 'React', 'TypeScript'],
    links: [
      { label: 'Live', href: 'https://slobbie.github.io/PokemonCardBooks/' },
      { label: 'GitHub', href: 'https://github.com/slobbie/PokemonCardBooks' },
    ],
  },
] satisfies readonly LabProject[];
