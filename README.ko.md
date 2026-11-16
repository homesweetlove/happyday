[![English](https://img.shields.io/badge/README-English-24292f?style=for-the-badge)](./README.md) [![한국어](https://img.shields.io/badge/README-%ED%95%9C%EA%B5%AD%EC%96%B4-24292f?style=for-the-badge)](./README.ko.md)

# happyday 🎂

**휴대폰으로 열어보는 작은 생일 축하 이벤트.**

Next.js와 React로 만든 모바일 중심의 생일 축하 웹사이트입니다. 단순한 축하 문구 대신, 알림을 열고 → 케이크의 촛불을 끄고 → 선물 배달을 기다리고 → 마지막에 축하 메시지와 선물 정보를 확인하는 짧은 인터랙션을 담았습니다.

## 화면 흐름

| 단계 | 실제 동작 |
| --- | --- |
| **1. 인트로** | **열어보기** 버튼으로 시작하는 생일 알림 |
| **2. 케이크** | CSS로 그린 케이크의 촛불을 눌러 끄는 화면 |
| **3. 배달** | 배달 라이더 이미지와 움직임으로 선물이 도착하는 연출 |
| **4. 축하** | 받는 사람 이름, 축하 문구, 선물명, 선물코드, 등록 기한과 링크 표시 |

마지막에는 **선물코드 복사** 및 **촛불 다시 켜기** 버튼도 있습니다. 진동 API를 지원하는 기기라면 촛불을 끌 때 짧게 진동할 수 있습니다.

별도 선물 전송 서버나 관리 페이지는 없으며, 스마트폰 화면에 맞춘 개인용 웹페이지입니다.

## 실행 방법

**필요 환경:** Next.js 16과 호환되는 Node.js와 npm.

```bash
git clone https://github.com/homesweetlove/happyday.git
cd happyday
npm install
npm run dev
```

브라우저에서 `http://localhost:3000`을 엽니다.

```bash
npm run build   # 배포용 빌드
npm run start   # 빌드된 페이지 실행
```

## 생일 메시지 수정하기

[`app/page.tsx`](./app/page.tsx) 상단의 상수 5개를 수정하면 됩니다.

```ts
const RECIPIENT = "친구명";
const GIFT_CODE = "선물하기 코드";
const GIFT_NAME = "상품명";
const GIFT_EXPIRES = "카카오 선물하기 링크 유효기간";
const GIFT_URL = "카카오 선물하기 링크";
```

| 항목 | 화면에서 하는 일 |
| --- | --- |
| `RECIPIENT` | 마지막 축하 문구에 표시되는 이름 |
| `GIFT_CODE` | 선물코드 표시 및 복사 버튼에 사용 |
| `GIFT_NAME` | 선물 카드의 상품명 |
| `GIFT_EXPIRES` | 선물 등록 기한 안내 |
| `GIFT_URL` | **선물 등록하러 가기** 버튼 주소. `https://`로 시작하는 실제 링크로 변경 |

축하 문구 자체는 `app/page.tsx`의 `celebrate` 부분에서 수정합니다. 배달 라이더 이미지는 [`public/delivery-rider.png`](./public/delivery-rider.png), 화면 스타일과 애니메이션은 [`app/globals.css`](./app/globals.css)에 있습니다.

**이전 README와 달라진 점:** 예전 문서에는 `GIFT_IMAGE` 상수와 기프티콘 이미지 교체 방법이 적혀 있었지만, 현재 코드는 **이미지 대신 선물코드와 등록 링크**를 보여줍니다. `public/gifticon-placeholder.svg` 파일은 남아 있지만 현재 `app/page.tsx`에서는 사용하지 않습니다.

## 프로젝트 구조

```text
happyday/
├── app/
│   ├── page.tsx       # 4단계 이벤트와 선물 정보
│   ├── globals.css    # 화면 스타일과 애니메이션
│   └── layout.tsx     # 페이지 메타정보
├── public/
│   ├── delivery-rider.png
│   ├── delivery-rider.svg
│   └── gifticon-placeholder.svg  # 현재 화면에서 미사용
└── package.json
```

## Vercel 배포

1. 저장소를 복제하고 받는 사람 이름과 선물 관련 기본 문구를 수정합니다.
2. Vercel에서 GitHub 저장소의 `main` 브랜치를 연결합니다.
3. 프레임워크를 **Next.js**로 지정하고 빌드/출력 설정은 기본값으로 둡니다.
4. 배포한 주소를 휴대폰으로 열어서 애니메이션, 복사 버튼, 선물 등록 링크를 확인합니다.

현재 별도의 API 키, 데이터베이스 또는 백엔드 서버 설정은 필요하지 않습니다.

## 공유하기 전에 확인할 점

- **웹페이지에 접근할 수 있다면 선물코드와 링크도 확인할 수 있습니다.** `app/page.tsx`에 넣은 값은 화면에 바로 보이지 않더라도 배포 결과에 포함됩니다.
- 실제 사용 가능한 선물코드를 공개 GitHub 저장소에 커밋하지 마세요. 가치가 있는 쿠폰이라면 전달 방법을 별도로 고려해 주세요.
- 등록 링크와 유효기간을 미리 확인하세요. 이 웹사이트가 쿠폰 등록 여부를 검사하거나 자동으로 선물을 전송하지는 않습니다.
- 복사 버튼은 브라우저의 클립보드 기능과 권한이 필요하며, 일반적으로 HTTPS 또는 localhost에서 동작합니다.

## 사용 기술

Next.js 16 · React 19 · TypeScript · CSS 애니메이션
