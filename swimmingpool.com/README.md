This is a [Next.js](https://nextjs.org/) project bootstrapped with
[`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Environment Variables

### .env file

Provides default env variables and should be committed to source control

- CONTENTFUL_ENVIRONMENT_ALIAS
- WEBSITE

### .env.local

Provides local overrides and secrets that should not be committed to source
control

- CONTENTFUL_SPACE_ID
- CONTENTFUL_ACCESS_KEY
- CONTENTFUL_PREVIEW_TOKEN
- NEXT_PUBLIC_GOOGLE_MAPS_API_KEY

## Development Server

Use for local development

```bash
npm i
npm run dev --workspace swimmingpool.com
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the
result.

## Local production build

Use to test local production build

```bash
npm ci
npm run build --workspace swimmingpool.com
npm run start --workspace swimmingpool.com
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the
result.

## Build docker image

Use to build docker image based on current code base

```bash
npm run docker:build
npm run docker:run
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the
result.
