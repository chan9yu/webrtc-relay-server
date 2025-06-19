# WebRTC Relay Server

> P2P 연결을 지원하기위한 시그널링 및 TURN 서버

[![Node.js](https://img.shields.io/badge/Node.js-22+-green.svg)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8+-blue.svg)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

Node.js, TypeScript로 구축된 WebRTC 시그널링 서버입니다.
<br />
TURN/STUN 자격증명 관리가 통합되어 있으며 P2P 통신 시스템 구축을 지원합니다.

<br />

## Quick Start

### Prerequisites

- Node.js 22+
- PNPM

### Installation

```bash
# 저장소 클론
git clone https://github.com/chan9yu/webrtc-relay-server.git
cd webrtc-relay-server

# 의존성 설치
pnpm install

# 개발 서버 시작
pnpm dev
```

### Environment Setup

루트 디렉토리에 `.env` 파일을 생성하세요:

```env
PORT=3000
NODE_ENV=development
TURN_SECRET=your-super-secret-turn-key
TURN_SERVER_URL=turn:your-turn-server.com:3478
TURNS_SERVER_URL=turns:your-turn-server.com:5349
```

<br />

## API Documentation

### Get TURN Credentials

TURN 서버 자격증명을 가져옵니다.

```http
GET /api/turn-credentials
```

**Response:**

```json
{
  "iceServers": [
    {
      "urls": ["turn:your-server.com:3478", "turns:your-server.com:5349"],
      "username": "1234567890:webrtc-user",
      "credential": "generated-credential"
    }
  ]
}
```

### Health Check

서버 상태를 확인합니다.

```http
GET /health
```

**응답:**

```json
{
  "status": "OK",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

<br />

## WebSocket Events

...

<br />

## Development

### Available Scripts

```bash
# 핫 리로드 개발 모드
pnpm dev

# 프로덕션용 빌드
pnpm build

# 프로덕션 서버 시작
pnpm start

# 린팅 실행
pnpm lint

# 린팅 문제 자동 수정
pnpm run lint:fix

# 테스트 실행
pnpm test
```

### Project Structure

```
webrtc-relay-server/
├── src/
│   ├── server.ts           # 메인 서버 파일
│   ├── turnService.ts      # TURN 자격증명 관리
│   └── types/              # TypeScript 타입 정의
├── public/                 # 정적 파일 (데모 클라이언트)
├── tests/                  # 테스트 파일
└── docs/                   # 문서
```

<br />

## Testing

```bash
# 모든 테스트 실행
pnpm test

# 워치 모드로 테스트 실행
pnpm test:watch

# 커버리지 리포트 생성
pnpm test:coverage
```

<br />

## Security Considerations

- ✅ 프로덕션에서 HTTPS/WSS 사용
- ✅ TURN 자격증명 로테이션
- ✅ 속도 제한 구현
- ✅ CORS 설정
- ✅ 입력 값 검증
- ✅ TURN 포트용 방화벽 설정

<br />

## License

이 프로젝트는 MIT 라이선스 하에 있습니다. 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.
