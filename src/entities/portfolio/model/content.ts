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
    label: '01 / Mobile & Web',
    title: '모바일·웹 개발',
    description:
      'React Native와 React를 중심으로 서비스를 개발했으며, WebSocket·STOMP 기반 채팅과 실시간 음성 처리, 설비 모니터링을 경험했습니다.',
  },
  {
    label: '02 / Industrial Safety',
    title: '산업안전 프로젝트',
    description:
      '이로운소프트 재직 중 Node.js·Express·PostgreSQL로 기기 등록·조회·지급·반납 API와 관리 기능을 구현했습니다. 공공데이터 API를 주기적으로 수집하는 스케줄 서버도 구성했습니다.',
  },
  {
    label: '03 / Native Integration',
    title: '외부 장치 연동',
    description:
      '차량 진단 SDK의 초기화, BLE 연결, VIN 조회와 OBD-II 명령을 React Native 앱에서 사용할 수 있도록 Native Module로 연결했습니다.',
  },
  {
    label: '04 / Backend Expansion',
    title: '개인 프로젝트 GiGGY',
    description:
      'NestJS와 PostgreSQL로 인증·매칭·채팅·알림 기능을 구현하고, 데이터 접근 경계와 DB 기반 로그인 세션 구조를 설계했습니다.',
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
] satisfies readonly TechGroup[];

export const experienceOverview = [
  {
    company: '에스제이소프트텍',
    role: '개발팀',
    duration: '2026.04 — 현재',
    highlights: [
      '고객용·점주용 앱에서 함께 사용하는 STOMP 연결, 메시지 전송, 읽음 처리와 이벤트 구독 기능을 공통 모듈로 구성했습니다.',
      'React Native와 React 환경에서 재사용할 수 있는 UI 구성 요소를 정리했습니다.',
    ],
    tech: ['React Native', 'React', 'TypeScript', 'STOMP', 'WebSocket', 'Zustand', 'React Query', 'Storybook'],
  },
  {
    company: '미니레코드',
    role: '개발팀 매니저',
    duration: '2024.07 — 2025.06',
    highlights: [
      'WebSocket 바이너리 프로토콜을 해석하고 WAV → PCM 변환과 실시간 오디오 재생 흐름을 구현했습니다.',
      'Google Sheets 번역 데이터 변환과 Babel AST 기반 한국어 문자열 탐지 도구를 구현했습니다.',
    ],
    tech: ['React Native', 'TypeScript', 'Zustand', 'React Query', 'WebSocket', 'Emotion', 'i18n', 'CodePush'],
  },
  {
    company: '이로운소프트',
    role: '개발팀 주임',
    duration: '2022.08 — 2024.04',
    highlights: [
      '차트별 WebSocket 연결을 단일 연결과 식별자 기반 데이터 분배 구조로 정리했습니다.',
      '기기 등록·조회·지급·반납 API와 관리 기능, 공공데이터 수집 스케줄 서버를 구현했습니다.',
      'Android·iOS 차량 진단 SDK의 BLE, VIN, OBD-II 기능을 React Native Native Module로 연결했습니다.',
    ],
    tech: ['Node.js', 'Express', 'TypeScript', 'PostgreSQL', 'React Native', 'React', 'WebSocket', 'Native Module'],
  },
] satisfies readonly ExperienceOverviewItem[];

export const careerProjects = [
  {
    company: '에스제이소프트텍',
    companyId: 'sjsofttech',
    title: '고객용·점주용 앱 공통 실시간 채팅 모듈',
    duration: '2026.04 — 현재',
    background: [
      '고객용 앱과 점주용 앱은 동일한 채팅 기능을 사용하지만, 화면과 서비스별로 연결 및 구독 로직이 나뉘면 수정 범위가 커질 수 있는 구조였습니다.',
      '두 앱이 같은 방식으로 메시지를 보내고 이벤트를 받을 수 있도록 공통 인터페이스가 필요했습니다.',
    ],
    problems: [
      'STOMP 연결, 인증 정보 갱신, 채널 구독과 해제 처리가 화면 로직과 가까이 결합될 수 있었습니다.',
      '고객용·점주용 앱에서 같은 기능을 서로 다른 방식으로 구현하면 변경 시 동기화가 어려웠습니다.',
      '연결 상태와 채팅 상태가 UI 구현에 직접 노출되면 재사용 범위가 제한될 수 있었습니다.',
    ],
    roles: [
      'STOMP 기반 채팅 연결 및 구독 구조 설계',
      '메시지 전송, 읽음 처리, 이벤트 구독 공통 인터페이스 구성',
      'React Native·React 환경에서 재사용할 수 있는 Provider 및 UI 구조 정리',
    ],
    approach: [
      '연결과 구독의 세부 구현을 화면에서 분리하고, 앱이 필요한 동작만 호출할 수 있는 모듈 경계를 만들었습니다.',
      '인증 헤더 갱신과 구독 처리는 모듈 내부에서 담당하고, 상위 UI는 공통 인터페이스를 통해 상태와 이벤트를 전달받도록 구성했습니다.',
    ],
    keyWork: [
      'STOMP 연결 생성과 종료, 재구독에 필요한 흐름을 공통 모듈로 구성',
      '메시지 전송과 읽음 처리 기능을 동일한 인터페이스로 제공',
      '연결 시점에 필요한 인증 헤더 갱신 로직을 모듈 내부에 배치',
      'Provider 패턴으로 연결 상태와 채팅 이벤트를 상위 화면에 제공',
      'React Native와 React에서 함께 사용할 수 있는 채팅 UI 구성 요소 정리',
    ],
    results: [
      '고객용 앱과 점주용 앱이 동일한 인터페이스로 채팅 기능을 사용할 수 있는 기반을 마련했습니다.',
      '화면은 연결 방식보다 사용자 상태와 메시지 표현에 집중하도록 역할을 분리했습니다.',
    ],
  },
  {
    company: '미니레코드',
    companyId: 'minirecord',
    title: 'AI 음성 대화 서비스의 실시간 오디오 처리',
    duration: '2024.07 — 2025.06',
    background: [
      '서버가 전송하는 실시간 TTS 응답에는 재생을 제어하는 정보와 실제 오디오 데이터가 함께 포함되어 있었습니다.',
      '모바일 환경에서 스트림을 안정적으로 해석하고 연속 재생할 수 있는 처리 흐름이 필요했습니다.',
    ],
    problems: [
      '수신 데이터 안에서 제어 메타데이터와 오디오 구간을 정확히 구분해야 했습니다.',
      'WAV 형식의 데이터를 모바일 재생 흐름에 맞는 PCM 데이터로 변환해야 했습니다.',
      'WebSocket 연결과 바이너리 처리 로직이 화면에 결합되면 다른 대화 화면에서 재사용하기 어려웠습니다.',
    ],
    roles: [
      '고정 길이 바이너리 프로토콜 해석',
      '메타데이터와 오디오 데이터 분리',
      'WAV → PCM 변환 및 순차 재생 흐름 구현',
      'WebSocket 연결과 오디오 처리를 담당하는 공통 Hook 구성',
    ],
    approach: [
      '패킷의 정해진 구간을 기준으로 제어 정보와 오디오 데이터를 분리했습니다.',
      '변환과 재생 상태를 연결 처리와 함께 Hook 내부로 이동해, 화면에서는 대화 상태와 사용자 인터랙션에 집중할 수 있도록 했습니다.',
    ],
    keyWork: [
      '고정 길이 헤더를 기준으로 수신 패킷 해석',
      '제어용 메타데이터와 오디오 바이너리 분리',
      'WAV 헤더를 처리하고 PCM 데이터로 변환',
      'WebSocket 연결 상태, 수신 처리, 재생 상태를 공통 Hook으로 구성',
    ],
    results: [
      '실시간 음성 응답을 수신부터 변환·재생까지 하나의 처리 흐름으로 구성했고, 여러 화면에서 같은 연결 로직을 사용할 수 있도록 분리했습니다.',
    ],
  },
  {
    company: '미니레코드',
    companyId: 'minirecord',
    title: '다국어 리소스 반영 자동화',
    background: [
      '서비스 문구가 늘어나면서 번역 데이터를 코드에 옮기고, 화면에 남아 있는 한국어 문자열을 찾아 다국어 함수로 변경하는 반복 작업이 발생했습니다.',
    ],
    problems: [
      'Google Sheets의 번역 데이터를 locale 파일에 수동으로 반영해야 했습니다.',
      '코드 안의 한국어 문자열을 사람이 찾아 바꾸는 과정에서 누락 가능성이 있었습니다.',
      '이미 등록된 번역 키와 새로 추가할 키를 구분해야 했습니다.',
    ],
    roleHeading: '담당 역할 및 해결 접근 방식',
    roles: [
      '번역 데이터 변환과 소스 코드 탐지를 별도 자동화 흐름으로 구성했습니다.',
      'Google Sheets 데이터를 언어별 JSON으로 변환하고, Babel AST로 문자열 위치와 코드 문맥을 확인해 필요한 위치에 다국어 호출을 적용하도록 했습니다.',
    ],
    approach: [],
    keyWork: [
      'Google Sheets 번역 데이터를 locale JSON 구조로 변환',
      'Babel AST로 JSX와 TypeScript 코드의 한국어 문자열 탐지',
      '코드 문맥에 따라 t() 호출과 useTranslation 사용 위치 반영',
      '기존 번역 키를 확인하고 새로 필요한 키만 추가',
    ],
    results: [
      '반복되던 리소스 변환과 문자열 탐지 과정을 도구로 정리해, 다국어 적용 시 확인해야 할 범위와 누락 지점을 코드 기준으로 검토할 수 있게 했습니다.',
    ],
  },
  {
    company: '이로운소프트',
    companyId: 'erounsoft',
    title: '예천양수발전소 실시간 모니터링',
    duration: '2023.10 — 2024.03',
    background: [
      '발전 설비의 상태를 여러 차트와 지표로 실시간 표시하는 모니터링 화면을 개발했습니다.',
      '각 데이터의 갱신 주기와 표현 방식은 달랐지만, 동일한 화면에서 지속적으로 상태를 받아야 했습니다.',
    ],
    problems: [
      '차트별로 WebSocket 연결을 생성하면 연결 수와 상태 관리 지점이 늘어났습니다.',
      '하나의 화면에서 여러 종류의 실시간 메시지를 올바른 차트에 전달해야 했습니다.',
      '연결 해제와 화면 변경 시 구독 정리를 일관되게 처리할 필요가 있었습니다.',
    ],
    roles: ['WebSocket 연결 구조 정리', '식별자 기반 메시지 분배 로직 구현', 'Highcharts 기반 모니터링 대시보드 구성'],
    approach: [
      '차트마다 존재하던 연결을 하나의 WebSocket 연결로 통합하고, 수신 메시지의 식별자를 기준으로 필요한 차트와 상태에 데이터를 전달하도록 구성했습니다.',
    ],
    keyWork: [
      '다중 WebSocket 연결을 단일 연결 구조로 통합',
      '메시지 식별자를 기준으로 데이터 분배',
      '화면 진입·이탈에 따른 연결 및 구독 생명주기 관리',
      'Highcharts를 사용한 실시간 설비 데이터 시각화',
    ],
    results: [
      '여러 차트가 하나의 연결을 공유하면서도 각자 필요한 메시지를 구분해 받을 수 있는 구조를 만들었습니다.',
      '연결과 화면 표시 책임을 분리해 실시간 데이터 흐름을 한곳에서 관리했습니다.',
    ],
  },
  {
    company: '이로운소프트',
    companyId: 'erounsoft',
    title: 'SafeWing 산업안전 시스템 — 기기 관리와 외부 데이터 수집',
    duration: '2023.08 — 2023.09',
    background: [
      '현장에서 사용하는 안전 기기를 등록하고 지급·반납 상태와 이력을 관리해야 했습니다.',
      '별도 요구사항으로 외부 기상 데이터를 주기적으로 수집해 서비스 화면에 제공하는 기능이 있었습니다.',
    ],
    problems: [
      '기기의 등록 이후 지급과 반납에 따라 현재 상태가 달라지고, 변경 내역을 함께 확인해야 했습니다.',
      '관리자 권한에 따라 조회하거나 실행할 수 있는 기능을 구분해야 했습니다.',
      '외부 기상 API 호출이 사용자 요청 흐름에 직접 연결되면 외부 장애가 서비스 응답에 영향을 줄 수 있었습니다.',
    ],
    roles: [
      'Node.js·Express·PostgreSQL 기반 기기 관리 REST API 구현',
      '기기 등록, 조회, 지급, 반납과 상태 이력 흐름 구성',
      '기기 관리 화면 및 권한별 기능 노출 구현',
      '공공 기상 API 수집 작업을 담당하는 스케줄 서버 구성',
    ],
    approach: [
      '기기를 단순 목록이 아니라 등록부터 지급·반납까지 상태가 변하는 운영 대상으로 정의했습니다.',
      '상태 변경 흐름과 관리 기능을 API로 구성하고, 외부 기상 데이터 수집은 사용자 요청과 분리된 스케줄 작업으로 처리했습니다.',
    ],
    keyWork: [
      '기기 등록 및 목록·상세 조회 REST API 구현',
      '지급·반납에 따른 기기 상태 변경 흐름 구현',
      '상태 변경 내역을 확인할 수 있는 이력 흐름 구성',
      '관리자 권한에 따른 조회 및 기능 노출 구분',
      '공공 기상 API의 주기적 수집 작업을 별도 스케줄 서버로 분리',
      '수집된 데이터를 서비스가 조회할 수 있도록 저장·제공 흐름 구성',
    ],
    results: [
      '현장 기기의 등록부터 지급·반납과 이력 확인까지 이어지는 관리 흐름을 구현했습니다.',
      '외부 기상 데이터 수집은 사용자 요청과 분리해 외부 API 호출과 서비스 기능의 책임을 나눴습니다.',
    ],
    bridge: [
      '단말을 운영 자산으로 보고 등록 → 상태 변경 → 지급·반납 → 이력 확인 → 권한별 관리로 이어지는 흐름을 구현한 경험입니다.',
      '토스플레이스 단말의 실제 물류·운영 정책과 동일하다고 주장하지 않으며, 기기 생애주기를 데이터와 관리 기능으로 다뤄 본 근거로 제시합니다.',
    ],
  },
  {
    company: '이로운소프트',
    companyId: 'erounsoft',
    title: 'Z-CAR 차량 진단 SDK 연동',
    duration: '2022.08 — 2023.07',
    background: [
      'Android와 iOS에서 제공하는 차량 진단 SDK 기능을 React Native 앱에서 공통으로 사용해야 했습니다.',
      '앱 화면과 네이티브 SDK 사이의 데이터 형식과 생명주기를 연결하는 브리지 계층이 필요했습니다.',
    ],
    problems: [
      '플랫폼별 SDK 초기화와 연결 방식이 달랐습니다.',
      'BLE 연결, VIN 조회, OBD-II 명령 실행 결과를 JavaScript 영역에 전달해야 했습니다.',
      '네이티브 연결 상태와 앱의 차량 등록·진단 화면 상태를 함께 관리해야 했습니다.',
    ],
    roleHeading: '담당 역할 및 해결 접근 방식',
    roles: [
      '플랫폼별 SDK 호출을 React Native Native Module로 감싸고, JavaScript 영역에서는 공통 인터페이스로 사용할 수 있도록 구성했습니다.',
      'SDK 초기화, BLE 연결, 차량 정보 조회, 진단 명령의 입력과 결과 전달 경계를 정의했습니다.',
    ],
    approach: [],
    keyWork: [
      'Android·iOS 차량 진단 SDK 초기화 모듈 구현',
      'BLE 장치 연결과 상태 전달',
      'VIN 조회 및 OBD-II 명령 호출 인터페이스 구성',
      '모니터링·대시보드·차량 등록 화면 구현',
      'PASS 본인인증 연동',
    ],
    results: [
      '플랫폼별 차량 진단 SDK 기능을 React Native 앱에서 공통 방식으로 호출할 수 있게 했습니다.',
      '물리 장치의 연결 상태와 진단 결과가 앱 기능으로 이어지는 전체 흐름을 구현했습니다.',
    ],
  },
] satisfies readonly CareerProject[];

export const giggy = {
  title: 'GiGGY',
  subtitle: '호주 워킹홀리데이 사용자를 위한 구인·구직 매칭 앱',
  intro: [
    '구인 공고와 사용자 프로필을 기반으로 매칭하고, 수락 이후 채팅과 근무 일정으로 이어지는 모바일 서비스입니다.',
    'React Native 앱과 NestJS 백엔드를 직접 개발했습니다.',
  ],
  scope: [
    '도메인별 NestJS 모듈과 Controller·Service·Repository 계층 구성',
    'MikroORM과 PostgreSQL을 사용하는 데이터 접근 경계 및 트랜잭션 구조 설계',
    'JWT와 DB 세션을 결합한 로그인·토큰 갱신·중복 로그인 무효화 구현',
    '구인 공고·사용자 프로필 기반 매칭과 채팅·일정 흐름 구현',
    'Socket.IO 실시간 이벤트와 FCM 모바일 푸시 연동',
  ],
  stack: ['Node.js', 'NestJS', 'TypeScript', 'PostgreSQL', 'MikroORM', 'Socket.IO', 'JWT', 'Firebase Admin', 'AWS S3'],
  architecture: {
    background: '인증, 회원, 구인 공고, 사용자 프로필, 매칭, 채팅과 알림이 서로 연결되면서도 각 기능의 데이터와 책임이 섞이지 않는 구조가 필요했습니다.',
    details: [
      '기능을 인증, 회원, 구인 공고, 사용자 프로필, 매칭, 일정, 채팅, 알림 도메인별 모듈로 분리',
      'HTTP 요청은 Controller, 비즈니스 흐름은 Service, 데이터 접근은 Repository로 역할 분리',
      'REST API와 Socket.IO Gateway가 동일한 인증 및 도메인 서비스를 사용하도록 구성',
      '데이터 저장과 외부 전송을 PostgreSQL, AWS S3, Firebase FCM 연동 영역으로 분리',
    ],
    flow: `Mobile Client
  ├─ HTTPS / REST API
  └─ WSS / Socket.IO
            │
            ▼
NestJS Backend
  ├─ Auth Guard / JWT·DB 세션 검증
  ├─ Controller → Service → Repository
  ├─ Domain Modules
  │    ├─ Auth / Member
  │    ├─ Job / User Profile
  │    ├─ Match / MatchSchedule
  │    └─ Chat / Notification
  └─ Storage / External
       ├─ PostgreSQL · MikroORM / DbRunner
       ├─ AWS S3 · 이미지 저장
       └─ Firebase FCM · 모바일 푸시`,
  },
  dataAccess: {
    background:
      'Repository마다 ORM과 raw SQL 사용 방식이 달라지면 데이터 변경 지점과 트랜잭션 범위를 추적하기 어려워집니다. 단순 CRUD와 복잡한 SQL, 트랜잭션이 같은 규칙을 따르도록 데이터 접근 경계를 하나로 통일했습니다.',
    details: [
      'Controller와 Service에서는 DB에 접근하지 않고 Repository만 DbRunner 사용',
      '조회·삽입·수정·삭제는 MikroORM native API를 감싼 공통 인터페이스로 실행',
      '복잡한 쿼리는 DbRunner.raw()를 통해 PostgreSQL SQL로 관리',
      '일반 호출과 트랜잭션에서 동일한 데이터 접근 인터페이스 사용',
      '트랜잭션 콜백에는 해당 트랜잭션에 묶인 DB 컨텍스트만 전달',
      'SQL 매개변수 바인딩, snake_case 결과의 camelCase 변환과 쿼리 실패 기록을 DB 경계에서 처리',
      '메시지 저장과 채팅방 마지막 메시지 갱신을 하나의 data-modifying CTE로 처리해 DB 왕복 1회와 원자성 확보',
    ],
    flow: `Controller / Service
        │ DB 접근 없음
        ▼
Repository
        │
        ▼
DbRunner
  ├─ CRUD → MikroORM native API
  ├─ 복잡 쿼리 → raw SQL
  └─ 트랜잭션 → 동일한 DB 컨텍스트
        │
        ▼
PostgreSQL`,
  },
  auth: {
    background:
      '동일 계정으로 새로 로그인했을 때 기존 로그인을 서버 인스턴스의 메모리가 아닌 PostgreSQL의 현재 세션을 기준으로 무효화할 수 있어야 했습니다. REST API와 Socket.IO도 같은 로그인 유효성 기준을 사용하도록 구성했습니다.',
    details: [
      '로그인할 때마다 새로운 sessionId를 생성하고 refresh token과 함께 PostgreSQL에 저장',
      'access token과 refresh token에 동일한 sessionId를 포함',
      'REST API에서는 access token과 refresh token을 HttpOnly 쿠키로 전달',
      'Guard에서 JWT 검증 후 토큰의 sessionId와 DB의 현재 값을 대조',
      '새 로그인으로 DB 세션이 교체되면 기존 access token과 Socket.IO 연결을 거부',
      '토큰 갱신 시 refresh token과 sessionId를 함께 검증하고, 로그아웃 시 DB 세션과 인증 쿠키를 무효화',
    ],
    flow: `로그인
  → 새 sessionId 생성
  → DB에 sessionId / refresh token 저장
  → access token / refresh token 발급
  → HttpOnly 쿠키 전달

보호 API 요청 / Socket.IO 연결·이벤트 전송
  → JWT 검증
  → 토큰 sessionId와 DB 현재 sessionId 대조
  → 일치할 때만 요청 또는 이벤트 처리

새 로그인 / 로그아웃
  → DB sessionId 교체 또는 무효화
  → 기존 세션의 요청과 이벤트 차단`,
  },
  matching: {
    background: [
      '구인 공고와 사용자 프로필에서 시작된 매칭이 채팅방, 실시간 알림과 근무 일정으로 자연스럽게 이어져야 했습니다.',
      '각 기능의 데이터 저장 책임은 분리하면서 사용자에게는 하나의 서비스 흐름으로 제공했습니다.',
    ],
    details: [
      '매칭 서비스에서 구인 공고와 사용자 프로필의 소유자 정보를 확인하고 후속 기능을 연결',
      '매칭 수락 시 기존 채팅방을 조회하거나 새 채팅방 생성',
      'Socket.IO 연결을 사용자별 room으로 관리해 채팅과 인앱 알림 전달',
      '메시지 저장과 채팅방 마지막 메시지 갱신을 하나의 SQL 문으로 처리',
      '알림 데이터를 저장한 뒤 FCM 푸시와 Socket.IO 인앱 이벤트 전송',
      '이벤트 전송 전 사용자의 현재 DB 세션을 확인해 만료된 소켓 연결 차단',
      '확정된 근무 조건과 일정은 별도 일정 데이터로 저장',
    ],
    flow: `구인 공고 / 사용자 프로필
          → 매칭 요청·수락
          → 채팅방 조회 또는 생성
          ├─ 메시지·마지막 메시지 원자적 저장 → Socket.IO 전달
          ├─ 알림 저장 → FCM 푸시 / Socket.IO 인앱 이벤트
          └─ 근무 조건 확정 → 일정 저장`,
  },
  deployment: {
    background: [
      '개발 환경에서 검증한 코드와 운영 서버에 배포되는 결과가 달라지는 문제를 줄이기 위해, Pull Request 검증부터 이미지 생성·배포·복구까지 하나의 파이프라인으로 구성했습니다.',
      'Pull Request에서 정적 분석과 빌드를 실행하고, 검증을 통과해 main에 병합된 커밋만 Docker 이미지로 생성했습니다. 이미지는 Git commit SHA로 태깅해 AWS ECR에 저장함으로써 실행 중인 서버가 어떤 코드에서 생성됐는지 추적할 수 있도록 했습니다.',
      '배포 시에는 MikroORM Migration을 애플리케이션 실행보다 먼저 적용하고, 신규 컨테이너가 PostgreSQL을 포함한 필수 의존성과 정상적으로 통신하는지 상태 확인을 수행했습니다. Migration 또는 상태 확인이 실패하면 신규 버전 전환을 중단하고 직전 이미지로 복구해, 실패한 배포가 서비스에 반영되지 않도록 했습니다.',
    ],
    flow: `Pull Request → 정적 분석·빌드 검증 → main 병합
→ commit SHA 기반 Docker 이미지 생성 → AWS ECR 저장
→ DB Migration → 신규 컨테이너 실행 → 상태 확인
   ├─ 성공 → 신규 버전 유지
   └─ 실패 → 배포 중단·직전 이미지 복구`,
    stack: ['GitHub Actions', 'Docker', 'AWS ECR', 'AWS EC2', 'MikroORM Migration'],
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
      { label: 'GitHub', href: 'https://github.com/slobbie/shared-rn-uikit' },
      {
        label: 'SettingRow Docs',
        href: 'https://slobbie.github.io/shared-rn-uikit/docs/design-system/components/organisms/settingrow/',
      },
    ],
  },
  {
    title: '3D Interactive Portal',
    index: '02',
    description: '물리 기반 상호작용을 실험한 3D 웹 인터페이스',
    detail: 'React Three Fiber와 물리 시뮬레이션을 사용해 3D 오브젝트와 사용자의 입력이 연결되는 장면을 구현했습니다.',
    image: assetPath('textures/portal-main.jpg'),
    tech: ['React', 'React Three Fiber', 'Three.js', 'Physics'],
    links: [],
  },
  {
    title: 'Pokémon CardVault',
    index: '03',
    description: '카드 탐색 경험을 중심으로 만든 인터랙티브 도감',
    detail: 'Next.js 기반 탐색 구조와 카드 중심의 시각적 인터랙션을 구현했습니다.',
    image: assetPath('textures/pokemon-main.jpg'),
    tech: ['Next.js', 'React', 'TypeScript'],
    links: [],
  },
] satisfies readonly LabProject[];
