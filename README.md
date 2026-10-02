[![English](https://img.shields.io/badge/README-English-24292f?style=for-the-badge)](./README.md) [![한국어](https://img.shields.io/badge/README-%ED%95%9C%EA%B5%AD%EC%96%B4-24292f?style=for-the-badge)](./README.ko.md)

# happyday 🎂

A mobile-only birthday celebration website.

## What to Change

### Recipient Name

Edit `app/page.tsx`:

```ts
const RECIPIENT = "My friend";
```

### Actual Gift Coupon

The project currently uses `public/gifticon-placeholder.svg`.

Place the real gift-coupon image inside `public`, then change only the path below in `app/page.tsx`:

```ts
const GIFT_IMAGE = "/gifticon.png";
```

## Vercel

Because this is a Next.js project, you can deploy it by connecting the GitHub `main` branch directly to a Vercel project.

- Framework Preset: Next.js
- Build Command: default
- Output Directory: default
- No separate server, database, or environment variables are required
