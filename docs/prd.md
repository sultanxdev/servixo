Your preferred architecture is better suited to a separated frontend/backend project. We'll use two independent Git repositories, not a monorepo.
I'll keep your selected technologies and add only the infrastructure needed to connect them properly.
1. Final Servixo tech stack
Recommended architecture
Layer
Technology
Responsibility
Frontend framework
Next.js + React
Public website and three dashboards
Language
TypeScript
Frontend and backend
Styling
Tailwind CSS
Responsive design
UI components
shadcn/ui
Reusable components
Server state
TanStack Query
API fetching and caching
Forms
React Hook Form + Zod
Form handling and validation
Backend runtime
Node.js
Backend execution
Backend framework
Express.js
REST API
Authentication
Better Auth
Login, sessions and permissions
Database
PostgreSQL
Application data
ORM
Drizzle ORM
Database queries and migrations
Payment gateway
Razorpay
Subscription payments
File storage
Cloudflare R2
Professional KYC documents
Database connection
Cloudflare Hyperdrive
PostgreSQL connection pooling
Frontend hosting
Cloudflare Pages
Next.js static frontend
Backend hosting
Cloudflare Workers
Express API
Version control
Git + GitHub
Separate repositories

2. Architecture overview
Servixo — Frontend / Backend Architecture
Repository 01 — servixo-frontend
Next.js · React · TypeScript · Tailwind CSS
Public Website
Customer Panel
Professional Panel
Admin Panel
Cloudflare Pages
REST API · HTTPS · Cookie Authentication
Repository 02 — servixo-backend
Node.js · Express.js · TypeScript
Better Auth
REST API
Business Logic
Razorpay Integration
Cloudflare Workers
PostgreSQL
Neon + Hyperdrive
Cloudflare R2
KYC document storage
Razorpay
External payment provider and webhooks

servixo/
│
├── apps/
│   │
│   ├── web/                         # FRONTEND APPLICATION
│   │   │
│   │   ├── public/
│   │   │   ├── images/
│   │   │   │   ├── hero/
│   │   │   │   ├── services/
│   │   │   │   └── professionals/
│   │   │   ├── icons/
│   │   │   └── logo/
│   │   │
│   │   ├── src/
│   │   │   │
│   │   │   ├── app/
│   │   │   │   │
│   │   │   │   ├── (website)/
│   │   │   │   │   ├── layout.tsx
│   │   │   │   │   ├── page.tsx
│   │   │   │   │   ├── services/
│   │   │   │   │   │   └── page.tsx
│   │   │   │   │   ├── plans/
│   │   │   │   │   │   └── page.tsx
│   │   │   │   │   └── become-professional/
│   │   │   │   │       └── page.tsx
│   │   │   │   │
│   │   │   │   ├── (auth)/
│   │   │   │   │   ├── login/
│   │   │   │   │   │   └── page.tsx
│   │   │   │   │   └── signup/
│   │   │   │   │       └── page.tsx
│   │   │   │   │
│   │   │   │   ├── customer/
│   │   │   │   │   ├── layout.tsx
│   │   │   │   │   ├── dashboard/
│   │   │   │   │   ├── services/
│   │   │   │   │   ├── subscriptions/
│   │   │   │   │   └── bookings/
│   │   │   │   │
│   │   │   │   ├── professional/
│   │   │   │   │   ├── layout.tsx
│   │   │   │   │   ├── dashboard/
│   │   │   │   │   ├── profile/
│   │   │   │   │   └── jobs/
│   │   │   │   │
│   │   │   │   ├── admin/
│   │   │   │   │   ├── layout.tsx
│   │   │   │   │   ├── dashboard/
│   │   │   │   │   ├── customers/
│   │   │   │   │   ├── professionals/
│   │   │   │   │   ├── services/
│   │   │   │   │   ├── plans/
│   │   │   │   │   ├── subscriptions/
│   │   │   │   │   ├── bookings/
│   │   │   │   │   ├── pincodes/
│   │   │   │   │   └── payments/
│   │   │   │   │
│   │   │   │   ├── layout.tsx
│   │   │   │   └── globals.css
│   │   │
│   │   ├── components/
│   │   │   │
│   │   │   ├── website/
│   │   │   │   ├── layout/
│   │   │   │   │   ├── navbar.tsx
│   │   │   │   │   ├── footer.tsx
│   │   │   │   │   └── mobile-menu.tsx
│   │   │   │   │
│   │   │   │   ├── sections/
│   │   │   │   │   ├── hero-section.tsx
│   │   │   │   │   ├── pin-code-section.tsx
│   │   │   │   │   ├── services-section.tsx
│   │   │   │   │   ├── premium-plans-section.tsx
│   │   │   │   │   ├── how-it-works-section.tsx
│   │   │   │   │   ├── faq-section.tsx
│   │   │   │   │   └── cta-section.tsx
│   │   │   │   │
│   │   │   │   └── cards/
│   │   │   │       ├── service-card.tsx
│   │   │   │       └── plan-card.tsx
│   │   │   │
│   │   │   ├── customer/
│   │   │   │   ├── dashboard/
│   │   │   │   ├── services/
│   │   │   │   ├── subscriptions/
│   │   │   │   └── bookings/
│   │   │   │
│   │   │   ├── professional/
│   │   │   │   ├── profile/
│   │   │   │   └── jobs/
│   │   │   │
│   │   │   ├── admin/
│   │   │   │   ├── customers/
│   │   │   │   ├── professionals/
│   │   │   │   ├── services/
│   │   │   │   ├── plans/
│   │   │   │   ├── subscriptions/
│   │   │   │   ├── bookings/
│   │   │   │   └── payments/
│   │   │   │
│   │   │   └── ui/
│   │   │       └── shadcn-components/
│   │   │
│   │   ├── lib/
│   │   │   ├── api-client.ts
│   │   │   ├── auth-client.ts
│   │   │   ├── query-client.ts
│   │   │   └── utils.ts
│   │   │
│   │   ├── hooks/
│   │   │   ├── use-auth.ts
│   │   │   └── use-api.ts
│   │   │
│   │   ├── next.config.ts
│   │   ├── package.json
│   │   └── tsconfig.json
│   │
│   └── api/                         # BACKEND APPLICATION
│       │
│       ├── src/
│       │   │
│       │   ├── app.ts               # Express application
│       │   ├── server.ts            # Local Node.js entry
│       │   ├── worker.ts            # Cloudflare Worker entry
│       │   │
│       │   ├── config/
│       │   │   ├── env.ts
│       │   │   └── cors.ts
│       │   │
│       │   ├── auth/
│       │   │   ├── auth.ts
│       │   │   ├── auth.config.ts
│       │   │   └── permissions.ts
│       │   │
│       │   ├── db/
│       │   │   ├── client.ts
│       │   │   ├── schema/
│       │   │   │   ├── auth.schema.ts
│       │   │   │   ├── professional.schema.ts
│       │   │   │   ├── address.schema.ts
│       │   │   │   ├── service.schema.ts
│       │   │   │   ├── pincode.schema.ts
│       │   │   │   ├── plan.schema.ts
│       │   │   │   ├── subscription.schema.ts
│       │   │   │   ├── payment.schema.ts
│       │   │   │   ├── booking.schema.ts
│       │   │   │   ├── assignment.schema.ts
│       │   │   │   └── earnings.schema.ts
│       │   │   │
│       │   │   └── migrations/
│       │   │
│       │   ├── middleware/
│       │   │   ├── authenticate.ts
│       │   │   ├── require-role.ts
│       │   │   ├── validate-request.ts
│       │   │   ├── rate-limit.ts
│       │   │   └── error-handler.ts
│       │   │
│       │   ├── modules/
│       │   │   │
│       │   │   ├── customers/
│       │   │   │   ├── customer.routes.ts
│       │   │   │   ├── customer.controller.ts
│       │   │   │   └── customer.service.ts
│       │   │   │
│       │   │   ├── professionals/
│       │   │   │   ├── professional.routes.ts
│       │   │   │   ├── professional.controller.ts
│       │   │   │   └── professional.service.ts
│       │   │   │
│       │   │   ├── services/
│       │   │   ├── pincodes/
│       │   │   ├── plans/
│       │   │   ├── subscriptions/
│       │   │   ├── payments/
│       │   │   ├── bookings/
│       │   │   ├── assignments/
│       │   │   ├── earnings/
│       │   │   └── payouts/
│       │   │
│       │   ├── integrations/
│       │   │   ├── razorpay/
│       │   │   │   ├── razorpay.client.ts
│       │   │   │   ├── payment-verification.ts
│       │   │   │   └── webhook-handler.ts
│       │   │   │
│       │   │   └── cloudflare/
│       │   │       └── r2-storage.ts
│       │   │
│       │   ├── routes/
│       │   │   ├── index.ts
│       │   │   └── health.routes.ts
│       │   │
│       │   ├── utils/
│       │   │   ├── api-response.ts
│       │   │   └── async-handler.ts
│       │   │
│       │   └── types/
│       │       └── express.d.ts
│       │
│       ├── drizzle.config.ts
│       ├── wrangler.jsonc
│       ├── package.json
│       └── tsconfig.json
│
├── packages/
│   └── contracts/                    # SHARED FRONTEND/BACKEND TYPES
│       ├── src/
│       │   ├── schemas/
│       │   │   ├── auth.schema.ts
│       │   │   ├── booking.schema.ts
│       │   │   ├── service.schema.ts
│       │   │   └── subscription.schema.ts
│       │   ├── types/
│       │   │   └── api.types.ts
│       │   └── index.ts
│       └── package.json
│
├── package.json
├── pnpm-workspace.yaml
├── pnpm-lock.yaml
├── tsconfig.base.json
├── eslint.config.mjs
├── .gitignore
├── .env.example
└── README.md

4. Important implementation decisions
Authentication — Better Auth
Keep Better Auth in the Express backend, not as a second authentication system in Next.js.
The frontend uses the Better Auth React client to communicate with the backend. Better Auth officially supports Express integration, including handling authentication routes and session retrieval.
Better Auth+1
Recommended:
Email/password or configured mobile OTP login.
Secure session cookies.
Three roles: customer, professional, admin.
Server-side role verification.
Restricted Admin permissions.
Database — PostgreSQL + Drizzle
I recommend Neon PostgreSQL with Cloudflare Hyperdrive.
Use Drizzle to manage:
Database schema.
Relationships.
Queries.
Transactions.
Migrations.
Better Auth supports a Drizzle database adapter.
Better Auth+1
Payments — Razorpay
Payment flow:
Frontend requests a payment order.
Express backend creates the Razorpay order.
Customer completes checkout.
Razorpay sends payment information.
Backend verifies the payment signature and webhook.
Backend activates the subscription.
Visit credits are allocated.
Never activate a subscription solely from the frontend payment success callback.
5. Cloudflare deployment — important detail
Your hosting choice is workable, but there are two different deployment approaches.
Application
Cloudflare service
Deployment
Next.js frontend
Cloudflare Pages
Static export
Express backend
Cloudflare Workers
Express with Node.js compatibility
PostgreSQL
Neon
Via Hyperdrive
KYC documents
Cloudflare R2
Private bucket

Cloudflare officially documents Express deployment on Workers using its nodejs_compat compatibility flag. It is a Workers runtime with Node.js compatibility, not a conventional always-running Node.js server. Test Better Auth and your selected database/payment libraries in this environment early.
Cloudflare Workers docs+1
For the frontend, use Next.js static export (output: "export") because the backend is separate. This means API calls, authentication and dashboard data come from Express. You won't use Next.js server-side API routes or SSR in this deployment mode.
Next.js+1
Cloudflare Hyperdrive supports connecting Workers to PostgreSQL and managing database connection pooling.
Cloudflare Workers docs+1
R2 supports temporary signed URLs, useful for private professional document uploads and downloads.
Cloudflare R2 docs
6. Domain structure
I recommend:
Domain
Purpose
servixo.in
Public website
app.servixo.in
Customer, Professional and Admin panels
api.servixo.in
Express backend API

For authentication across the frontend and backend subdomains, configure Better Auth's trusted origins, cross-subdomain cookie settings, secure cookies and exact-origin CORS with credentials. The frontend must send requests with credentials enabled.
Better Auth
7. Final stack to freeze
Servixo Technology Stack
Frontend repository
Next.js + React
TypeScript
Tailwind CSS
shadcn/ui
TanStack Query
React Hook Form + Zod
Better Auth React Client
Backend repository
Node.js
Express.js
TypeScript
Better Auth
Drizzle ORM
PostgreSQL
Razorpay
Infrastructure
Cloudflare Pages
Cloudflare Workers
Cloudflare R2
Cloudflare Hyperdrive
Neon PostgreSQL
GitHub
One recommendation: Since you have a 10-day deadline, make a deployment proof on Day 1: deploy a minimal Express Worker, connect Better Auth, and connect PostgreSQL through Hyperdrive. If any dependency is incompatible with the Workers runtime, move the API to a conventional Node.js host while retaining Cloudflare Pages, DNS and R2. Don't discover that blocker on Day 8.

Understood. Servixo will have one GitHub repository containing both the frontend and backend, but they will remain separate applications with separate source code, dependencies, builds and deployments.

The best structure is a pnpm workspace. This is technically a monorepo, but it does not mean combining the frontend and backend into one application.

I would also correct a few things in the previous backend design before development begins.

# 1. Final architecture

## SERVIXO — Single Repository Architecture

GitHub Repository

One repo

servixo/

apps/web

Next.js + React + TypeScript + Tailwind

Frontend

apps/api

Node.js + Express + TypeScript

Backend

packages/contracts

Shared TypeScript types and Zod validation schemas

Cloudflare Pages

Frontend hosting

Cloudflare Workers

Express API hosting

PostgreSQL

Neon + Hyperdrive

Cloudflare R2

Private KYC documents

Razorpay

Online subscription payments and webhooks

# 2. Complete repository folder structure

This is the structure I recommend freezing for Servixo.

```

servixo/
│
├── apps/
│   │
│   ├── web/                         # FRONTEND APPLICATION
│   │   │
│   │   ├── public/
│   │   │   ├── images/
│   │   │   │   ├── hero/
│   │   │   │   ├── services/
│   │   │   │   └── professionals/
│   │   │   ├── icons/
│   │   │   └── logo/
│   │   │
│   │   ├── src/
│   │   │   │
│   │   │   ├── app/
│   │   │   │   │
│   │   │   │   ├── (website)/
│   │   │   │   │   ├── layout.tsx
│   │   │   │   │   ├── page.tsx
│   │   │   │   │   ├── services/
│   │   │   │   │   │   └── page.tsx
│   │   │   │   │   ├── plans/
│   │   │   │   │   │   └── page.tsx
│   │   │   │   │   └── become-professional/
│   │   │   │   │       └── page.tsx
│   │   │   │   │
│   │   │   │   ├── (auth)/
│   │   │   │   │   ├── login/
│   │   │   │   │   │   └── page.tsx
│   │   │   │   │   └── signup/
│   │   │   │   │       └── page.tsx
│   │   │   │   │
│   │   │   │   ├── customer/
│   │   │   │   │   ├── layout.tsx
│   │   │   │   │   ├── dashboard/
│   │   │   │   │   ├── services/
│   │   │   │   │   ├── subscriptions/
│   │   │   │   │   └── bookings/
│   │   │   │   │
│   │   │   │   ├── professional/
│   │   │   │   │   ├── layout.tsx
│   │   │   │   │   ├── dashboard/
│   │   │   │   │   ├── profile/
│   │   │   │   │   └── jobs/
│   │   │   │   │
│   │   │   │   ├── admin/
│   │   │   │   │   ├── layout.tsx
│   │   │   │   │   ├── dashboard/
│   │   │   │   │   ├── customers/
│   │   │   │   │   ├── professionals/
│   │   │   │   │   ├── services/
│   │   │   │   │   ├── plans/
│   │   │   │   │   ├── subscriptions/
│   │   │   │   │   ├── bookings/
│   │   │   │   │   ├── pincodes/
│   │   │   │   │   └── payments/
│   │   │   │   │
│   │   │   │   ├── layout.tsx
│   │   │   │   └── globals.css
│   │   │
│   │   ├── components/
│   │   │   │
│   │   │   ├── website/
│   │   │   │   ├── layout/
│   │   │   │   │   ├── navbar.tsx
│   │   │   │   │   ├── footer.tsx
│   │   │   │   │   └── mobile-menu.tsx
│   │   │   │   │
│   │   │   │   ├── sections/
│   │   │   │   │   ├── hero-section.tsx
│   │   │   │   │   ├── pin-code-section.tsx
│   │   │   │   │   ├── services-section.tsx
│   │   │   │   │   ├── premium-plans-section.tsx
│   │   │   │   │   ├── how-it-works-section.tsx
│   │   │   │   │   ├── faq-section.tsx
│   │   │   │   │   └── cta-section.tsx
│   │   │   │   │
│   │   │   │   └── cards/
│   │   │   │       ├── service-card.tsx
│   │   │   │       └── plan-card.tsx
│   │   │   │
│   │   │   ├── customer/
│   │   │   │   ├── dashboard/
│   │   │   │   ├── services/
│   │   │   │   ├── subscriptions/
│   │   │   │   └── bookings/
│   │   │   │
│   │   │   ├── professional/
│   │   │   │   ├── profile/
│   │   │   │   └── jobs/
│   │   │   │
│   │   │   ├── admin/
│   │   │   │   ├── customers/
│   │   │   │   ├── professionals/
│   │   │   │   ├── services/
│   │   │   │   ├── plans/
│   │   │   │   ├── subscriptions/
│   │   │   │   ├── bookings/
│   │   │   │   └── payments/
│   │   │   │
│   │   │   └── ui/
│   │   │       └── shadcn-components/
│   │   │
│   │   ├── lib/
│   │   │   ├── api-client.ts
│   │   │   ├── auth-client.ts
│   │   │   ├── query-client.ts
│   │   │   └── utils.ts
│   │   │
│   │   ├── hooks/
│   │   │   ├── use-auth.ts
│   │   │   └── use-api.ts
│   │   │
│   │   ├── next.config.ts
│   │   ├── package.json
│   │   └── tsconfig.json
│   │
│   └── api/                         # BACKEND APPLICATION
│       │
│       ├── src/
│       │   │
│       │   ├── app.ts               # Express application
│       │   ├── server.ts            # Local Node.js entry
│       │   ├── worker.ts            # Cloudflare Worker entry
│       │   │
│       │   ├── config/
│       │   │   ├── env.ts
│       │   │   └── cors.ts
│       │   │
│       │   ├── auth/
│       │   │   ├── auth.ts
│       │   │   ├── auth.config.ts
│       │   │   └── permissions.ts
│       │   │
│       │   ├── db/
│       │   │   ├── client.ts
│       │   │   ├── schema/
│       │   │   │   ├── auth.schema.ts
│       │   │   │   ├── professional.schema.ts
│       │   │   │   ├── address.schema.ts
│       │   │   │   ├── service.schema.ts
│       │   │   │   ├── pincode.schema.ts
│       │   │   │   ├── plan.schema.ts
│       │   │   │   ├── subscription.schema.ts
│       │   │   │   ├── payment.schema.ts
│       │   │   │   ├── booking.schema.ts
│       │   │   │   ├── assignment.schema.ts
│       │   │   │   └── earnings.schema.ts
│       │   │   │
│       │   │   └── migrations/
│       │   │
│       │   ├── middleware/
│       │   │   ├── authenticate.ts
│       │   │   ├── require-role.ts
│       │   │   ├── validate-request.ts
│       │   │   ├── rate-limit.ts
│       │   │   └── error-handler.ts
│       │   │
│       │   ├── modules/
│       │   │   │
│       │   │   ├── customers/
│       │   │   │   ├── customer.routes.ts
│       │   │   │   ├── customer.controller.ts
│       │   │   │   └── customer.service.ts
│       │   │   │
│       │   │   ├── professionals/
│       │   │   │   ├── professional.routes.ts
│       │   │   │   ├── professional.controller.ts
│       │   │   │   └── professional.service.ts
│       │   │   │
│       │   │   ├── services/
│       │   │   ├── pincodes/
│       │   │   ├── plans/
│       │   │   ├── subscriptions/
│       │   │   ├── payments/
│       │   │   ├── bookings/
│       │   │   ├── assignments/
│       │   │   ├── earnings/
│       │   │   └── payouts/
│       │   │
│       │   ├── integrations/
│       │   │   ├── razorpay/
│       │   │   │   ├── razorpay.client.ts
│       │   │   │   ├── payment-verification.ts
│       │   │   │   └── webhook-handler.ts
│       │   │   │
│       │   │   └── cloudflare/
│       │   │       └── r2-storage.ts
│       │   │
│       │   ├── routes/
│       │   │   ├── index.ts
│       │   │   └── health.routes.ts
│       │   │
│       │   ├── utils/
│       │   │   ├── api-response.ts
│       │   │   └── async-handler.ts
│       │   │
│       │   └── types/
│       │       └── express.d.ts
│       │
│       ├── drizzle.config.ts
│       ├── wrangler.jsonc
│       ├── package.json
│       └── tsconfig.json
│
├── packages/
│   └── contracts/                    # SHARED FRONTEND/BACKEND TYPES
│       ├── src/
│       │   ├── schemas/
│       │   │   ├── auth.schema.ts
│       │   │   ├── booking.schema.ts
│       │   │   ├── service.schema.ts
│       │   │   └── subscription.schema.ts
│       │   ├── types/
│       │   │   └── api.types.ts
│       │   └── index.ts
│       └── package.json
│
├── package.json
├── pnpm-workspace.yaml
├── pnpm-lock.yaml
├── tsconfig.base.json
├── eslint.config.mjs
├── .gitignore
├── .env.example
└── README.md

```

# 3. Important backend corrections

Your previous backend structure had a few architectural problems. These are the changes I recommend.

## Fix 1 — Better Auth must have one owner

Better Auth should run only in the Express backend.

The Next.js frontend should use the Better Auth React client to call the backend authentication endpoints.

Frontend

Better Auth React Client

Express API

Better Auth server · Session validation · Role checks

PostgreSQL

Authentication tables and Servixo user data

Better Auth officially supports Express using `toNodeHandler(auth)`.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://better-auth.com\&sz=32)

Better Auth+1



Do not create a second authentication system inside Next.js.

## Fix 2 — Don't create a duplicate users table

Better Auth already manages its core authentication tables:

- `user`
- `session`
- `account`
- `verification`

Use the Better Auth `user` record as the identity for Servixo.

Extend it with a server-controlled role:

```
type UserRole =
  | "customer"
  | "professional"
  | "admin";
```

Then use separate business profile tables where needed:

- `professional_profiles`
- `addresses`

Customer and professional registration must never allow the browser to assign itself the Admin role.

Admin accounts should be created through a controlled seed or administrative process.

Better Auth supports database adapters and schema generation; use its generated schema instead of manually building duplicate authentication tables.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://better-auth.com\&sz=32)

Better Auth+1



## Fix 3 — Correct Express middleware order

This is important.

For Express 5, use the following order:

1. CORS.
2. Better Auth handler.
3. Razorpay webhook with raw body.
4. JSON parser.
5. Application API routes.
6. Error handler.

Example:

```
import express from "express";
import cors from "cors";
import { toNodeHandler } from "better-auth/node";

import { auth } from "./auth/auth";
import { apiRouter } from "./routes";
import { razorpayWebhookHandler } from "./modules/payments/webhook";

const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

// Better Auth MUST come before express.json()
app.all("/api/auth/*splat", toNodeHandler(auth));

// Preserve original body for Razorpay signature verification
app.post(
  "/api/webhooks/razorpay",
  express.raw({ type: "application/json" }),
  razorpayWebhookHandler
);

// JSON parser only after auth and raw webhook routes
app.use(express.json());

app.use("/api/v1", apiRouter);

export { app };
```

This follows Better Auth's Express integration guidance. In particular, placing `express.json()` before the Better Auth handler can leave requests stuck pending. The wildcard syntax above is for Express 5; Express 4 uses `/api/auth/*`.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://better-auth.com\&sz=32)

Better Auth



## Fix 4 — Correct Cloudflare Express deployment

Cloudflare Workers can run Express using Node.js compatibility, but they are not conventional, persistent Node.js servers.

Cloudflare's documented Express deployment uses:

- Express.
- `nodejs_compat`.
- `cloudflare:node` HTTP server handler.

[image](https://www.google.com/s2/favicons?domain=https://developers.cloudflare.com\&sz=32)

Cloudflare Workers docs+2

Keep two entry points:

Local development: `server.ts`

```
import { app } from "./app";

const PORT = Number(process.env.PORT ?? 4000);

app.listen(PORT, () => {
  console.log(`Servixo API running on ${PORT}`);
});
```

Cloudflare deployment: `worker.ts`

```
import { httpServerHandler } from "cloudflare:node";
import { app } from "./app";

app.listen(3000);

export default httpServerHandler({
  port: 3000,
});
```

This keeps your Express application separate from its runtime startup configuration.

You must still test Better Auth, Drizzle, Razorpay integration and every Node-dependent package in the Workers runtime. Some Node modules only have stubs in Workers and are not fully functional.

# 4. Correct database architecture

I recommend:



Recommended

&#x20;PostgreSQL + Drizzle ORM + Cloudflare Hyperdrive.



Use Neon as the managed PostgreSQL provider, with Hyperdrive between the API Worker and database.

Cloudflare documents support for PostgreSQL and Drizzle through Hyperdrive, and recommends the `pg` driver for PostgreSQL Worker applications. Use a supported current version, at least `pg@8.16.3` according to its current requirements.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://developers.cloudflare.com\&sz=32)

Cloudflare Hyperdrive docs+1



Your database should contain:

| Database area  | Tables                                                                                                   |
| -------------- | -------------------------------------------------------------------------------------------------------- |
| Authentication | Better Auth's `user`, `session`, `account`, `verification`                                               |
| Customers      | `addresses`                                                                                              |
| Professionals  | `professional_profiles`, `professional_documents`, `professional_services`, `professional_service_areas` |
| Catalogue      | `service_categories`, `services`                                                                         |
| Coverage       | `serviceable_pincodes`                                                                                   |
| Plans          | `plans`, `plan_services`                                                                                 |
| Subscriptions  | `subscriptions`, `subscription_visit_ledger`                                                             |
| Payments       | `payments`, `razorpay_webhook_events`                                                                    |
| Bookings       | `bookings`, `booking_assignments`, `booking_status_history`                                              |
| Finance        | `professional_earnings`, `payouts`                                                                       |

Three important corrections:

- No separate `users` table. Better Auth's `user` table is the identity source.
- No `job_completions` or completion OTP table. You removed completion verification.
- No automatic dispatch or job-offer tables. Admin manually assigns professionals.

## Fix 5 — Correct assignment and completion logic

Your workflow is Admin-controlled.

```
Customer creates booking
        ↓
Admin reviews booking
        ↓
Admin selects eligible professional
        ↓
Professional views assigned job
        ↓
Professional updates status
        ↓
Assigned → In Progress → Completed
        ↓
Database transaction:
    1. Confirm assigned professional
    2. Check booking is not already completed
    3. Deduct one subscription visit
    4. Create one earnings record
    5. Update booking status
```

The last step must run inside a single database transaction.

Use a unique constraint to prevent duplicate visit deductions for the same booking. Also enforce a unique earning record per completed booking.

This is especially important because a professional may accidentally click Complete more than once.

## Fix 6 — Correct Razorpay integration

Do not trust the frontend payment success response.

The backend must:

1. Calculate the plan price from the database.
2. Create the Razorpay order.
3. Store a pending payment record.
4. Receive the Checkout response.
5. Verify the payment signature.
6. Confirm that the payment is captured and its order, amount and currency match the stored order.
7. Activate the subscription.
8. Allocate the visit credits.

For webhook handling, verify the HMAC-SHA256 signature against the original raw request body. Store the provider event ID to prevent duplicate processing.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://razorpay.com\&sz=32)

Razorpay Docs+2



Because the API will run in Workers, I recommend using HTTPS `fetch` for Razorpay's server-to-server APIs and Web Crypto for signature verification, rather than depending on a Node-specific SDK before its Workers compatibility is tested.

Cash transactions should use the same `payments` table, with fields such as `collected_by`, `collected_at`, `receipt_reference` and `verified_by`.

# 5. Shared package responsibility

Keep `packages/contracts` small.

It should contain only:

- Shared TypeScript API types.
- Zod request schemas.
- Zod response schemas.
- Enum values such as booking status and user roles.

For example:

```
export type UserRole =
  | "customer"
  | "professional"
  | "admin";

export type BookingStatus =
  | "pending_assignment"
  | "assigned"
  | "in_progress"
  | "completed"
  | "cancelled";
```

The frontend can use these contracts for form validation and typing. The backend must independently validate every incoming request.

Do not share database connections, credentials, ORM models or backend service functions with the frontend.

# 6. Cloudflare deployment setup

I recommend this deployment arrangement:

| Application                | Deployment                      | Address            |
| -------------------------- | ------------------------------- | ------------------ |
| Next.js website and panels | Cloudflare Pages, static export | `servixo.in`       |
| Express API                | Cloudflare Workers              | `api.servixo.in`   |
| PostgreSQL                 | Neon + Hyperdrive               | Private connection |
| KYC files                  | Cloudflare R2                   | Private bucket     |

For the Next.js MVP, use static export because the Express API handles dynamic data. Add this to `apps/web/next.config.ts`:

```
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
```

Cloudflare Pages officially supports static Next.js exports, while Cloudflare recommends vinext for full Next.js hosting on Workers. Vinext is currently beta, so I would avoid adding that migration risk to your 10-day MVP.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://developers.cloudflare.com\&sz=32)

Cloudflare Pages docs+1



Use `credentials: "include"` in frontend authentication requests, exact-origin CORS on Express, and the correct Better Auth trusted origins. Do not use wildcard CORS with credentials. Avoid sharing session cookies across every subdomain unless you actually need that; the API can issue host-only cookies for `api.servixo.in`.&#x20;

[image](https://www.google.com/s2/favicons?domain=https://better-auth.com\&sz=32)

Better Auth+1



# 7. Root workspace configuration

`pnpm-workspace.yaml`:

```
packages:
  - "apps/*"
  - "packages/*"
```

Root `package.json`:

```
{
  "name": "servixo",
  "private": true,
  "packageManager": "pnpm",
  "scripts": {
    "dev:web": "pnpm --filter @servixo/web dev",
    "dev:api": "pnpm --filter @servixo/api dev",
    "build:web": "pnpm --filter @servixo/web build",
    "deploy:api": "pnpm --filter @servixo/api deploy",
    "typecheck": "pnpm -r typecheck"
  }
}
```

I don't recommend adding Turborepo yet. Plain pnpm workspaces are enough for two applications and a shared contracts package.

# 8. Final architecture decisions to freeze

| Decision                    | Final choice                      |
| --------------------------- | --------------------------------- |
| Repository                  | One GitHub repository             |
| Workspace                   | pnpm                              |
| Frontend                    | Next.js + React + TypeScript      |
| Styling                     | Tailwind CSS + shadcn/ui          |
| Landing page                | Independent reusable sections     |
| Customer/Professional/Admin | Three dashboards in frontend      |
| Backend                     | Node.js + Express.js + TypeScript |
| Authentication              | Better Auth, backend-owned        |
| ORM                         | Drizzle                           |
| Database                    | PostgreSQL                        |
| Database hosting            | Neon + Cloudflare Hyperdrive      |
| Payment                     | Razorpay                          |
| Storage                     | Cloudflare R2                     |
| Frontend hosting            | Cloudflare Pages                  |
| Backend hosting             | Cloudflare Workers                |

My strongest recommendation: On Day 1, build and deploy a small proof of concept with Express on Workers, Better Auth through Express, and Drizzle connected to PostgreSQL through Hyperdrive. That is the highest-risk part of your chosen architecture. Once that passes, build the rest of Servixo. If Workers compatibility blocks a required dependency, keep exactly the same Express backend and deploy it on a conventional Node.js host rather than losing days fighting the runtime.

Useful documentation: [Better Auth Express integration](https://better-auth.com/docs/1.6/integrations/express?utm_source=chatgpt.com) · [Express on Cloudflare Workers](https://developers.cloudflare.com/workers/tutorials/deploy-an-express-app/?utm_source=chatgpt.com) · [PostgreSQL with Hyperdrive](https://developers.cloudflare.com/hyperdrive/examples/connect-to-postgres/?ref=blog.cloudflare.com\&utm_source=chatgpt.com) · [Next.js static export on Cloudflare Pages](https://developers.cloudflare.com/pages/framework-guides/nextjs/deploy-a-static-nextjs-site/?utm_source=chatgpt.com) · [Razorpay payment security checklist](https://razorpay.com/security/checklist/?utm_source=chatgpt.com).