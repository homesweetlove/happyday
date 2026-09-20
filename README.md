# happyday 🎂

모바일 전용 생일 축하 웹사이트입니다.

## Flow

1. 토스 느낌의 시작 화면
2. 케이크 촛불 터치
3. 촛불이 꺼지고 연기 애니메이션
4. 배달 라이더가 오토바이를 타고 화면을 가로지름
5. 선물 도착
6. 생일 축하 메시지 + 컨페티
7. 기프티콘 카드 표시
8. 기프티콘 이미지 저장 버튼

## 바꿀 곳

### 받는 사람 이름

`app/page.tsx`

```ts
const RECIPIENT = "친구야";
```

### 실제 기프티콘

현재는 `public/gifticon-placeholder.svg`가 들어 있습니다.

실제 기프티콘 파일을 `public`에 넣고 `app/page.tsx`의 아래 경로만 바꾸면 됩니다.

```ts
const GIFT_IMAGE = "/gifticon.png";
```

## Vercel

Next.js 프로젝트라서 GitHub의 `main` 브랜치를 Vercel 프로젝트에 연결하면 그대로 배포할 수 있습니다.

- Framework Preset: Next.js
- Build Command: 기본값
- Output Directory: 기본값
- 별도 서버/DB/환경변수 필요 없음
