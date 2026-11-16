[![English](https://img.shields.io/badge/README-English-24292f?style=for-the-badge)](./README.md) [![한국어](https://img.shields.io/badge/README-%ED%95%9C%EA%B5%AD%EC%96%B4-24292f?style=for-the-badge)](./README.ko.md)

# happyday 🎂

**A small birthday surprise, built as an interactive mobile webpage.**

happyday is a personal birthday-greeting experience made with Next.js, React and TypeScript. Instead of opening on a static greeting card, the recipient follows a short sequence: open the invitation, blow out a candle, watch a delivery animation, then reveal the birthday message and gift information.

## Experience

| Scene | What happens |
| --- | --- |
| **1. Intro** | A birthday notification invites the recipient to tap **열어보기** |
| **2. Cake** | A CSS-drawn birthday cake appears; tapping the candle extinguishes the flame |
| **3. Delivery** | A delivery-rider illustration and transition animation build anticipation |
| **4. Celebration** | The message, gift name, redemption code, expiry information and registration link appear |

The final screen includes a **copy gift code** button and a **replay** button. Devices that support the Vibration API may give a short vibration when the candle is blown out.

This project is designed primarily for phone-sized screens; it is not a generic invitation editor or a gift-delivery backend.

## Run locally

**Requirements:** Node.js compatible with Next.js 16 and npm.

```bash
git clone https://github.com/homesweetlove/happyday.git
cd happyday
npm install
npm run dev
```

Open `http://localhost:3000`. For a production build:

```bash
npm run build
npm run start
```

## Personalize the greeting

Edit the constants at the top of [`app/page.tsx`](./app/page.tsx):

```ts
const RECIPIENT = "친구명";
const GIFT_CODE = "선물하기 코드";
const GIFT_NAME = "상품명";
const GIFT_EXPIRES = "카카오 선물하기 링크 유효기간";
const GIFT_URL = "카카오 선물하기 링크";
```

| Field | How it is used |
| --- | --- |
| `RECIPIENT` | Name displayed in the final birthday greeting |
| `GIFT_CODE` | Text shown as the gift code and copied by the button |
| `GIFT_NAME` | Gift title on the final card |
| `GIFT_EXPIRES` | Registration deadline displayed to the recipient |
| `GIFT_URL` | Destination of the **선물 등록하러 가기** button; provide a complete `https://` URL |

To rewrite the actual birthday wishes, edit the message in the `celebrate` section of `app/page.tsx`. The delivery-rider image is stored at [`public/delivery-rider.png`](./public/delivery-rider.png). Visual styling and animations live in [`app/globals.css`](./app/globals.css).

**Important correction:** An older README mentioned a `GIFT_IMAGE` constant and a coupon-image replacement workflow. The current page **does not use `GIFT_IMAGE`**; it displays a **gift code and redemption link**. `public/gifticon-placeholder.svg` remains in the repository but is not rendered by the current `app/page.tsx`.

## Project structure

```text
happyday/
├── app/
│   ├── page.tsx       # Four-scene birthday interaction and gift data
│   ├── globals.css    # Layout and animation
│   └── layout.tsx     # Page metadata and root layout
├── public/
│   ├── delivery-rider.png
│   ├── delivery-rider.svg
│   └── gifticon-placeholder.svg  # Legacy unused placeholder
└── package.json
```

## Deploy with Vercel

1. Fork or clone the repository and replace the placeholder greeting/gift values.
2. Connect the GitHub repository to a Vercel project and select the `main` branch.
3. Choose the **Next.js** framework preset and leave the standard build/output settings.
4. Open the deployed page on a phone to check spacing, animations, the copy button and the redemption link.

The current site has no required API keys, database or separate application server.

## Before sharing

- **Anyone who can load the page can read its gift code and link.** Values embedded in `app/page.tsx` become part of the public website, even if they are not immediately visible in the interface.
- Avoid committing a redeemable code to a public repository. Share a personalized version through an appropriately private channel, and consider a different delivery method for valuable vouchers.
- Make sure the link is valid and the expiry date is correct; the page does not validate a gift or redeem it automatically.
- The clipboard button depends on browser clipboard support and permissions (typically available on secure HTTPS pages or localhost).

## Built with

Next.js 16 · React 19 · TypeScript · CSS animations
