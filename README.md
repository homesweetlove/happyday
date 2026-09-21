# happyday 🎂

모바일 전용 생일 축하 웹사이트입니다.


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
