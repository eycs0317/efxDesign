This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Auth info

Auth info - http://localhost:3000/api/auth/providers

Sign in Page - http://localhost:3000/api/auth/signin

Sign out Page - http://localhost:3000/api/auth/signout

Github - https://next-auth.js.org/providers/github

google - https://next-auth.js.org/providers/google

## DB info

prisma studio - npx prisma studio

method - https://www.prisma.io/docs/orm/reference/prisma-client-reference#findmany

Database model at prisma/schema.prisma after update make sure run `npx prisma db push`

User method at lib/user

## Todo

1.active link - usePathname
https://youtu.be/aJjMeCUvZ0E?si=7qqtBldDK-2h79eS
