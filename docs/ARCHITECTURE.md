# Architecture

## Overview

Servixo uses a simple, decoupled frontend-backend architecture with independent `frontend/` and `backend/` projects.

```
┌─────────────────┐     HTTPS/REST      ┌─────────────────┐
│   frontend/     │ ──────────────────▶  │   backend/      │
│   (Next.js)     │                      │   (Express.js)  │
│   Static Export │ ◀──────────────────  │   REST API      │
│   Cloudflare    │     JSON responses   │   Cloudflare    │
│   Pages         │                      │   Workers       │
└─────────────────┘                      └────────┬────────┘
                                                  │
                                         ┌────────▼────────┐
                                         │   PostgreSQL    │
                                         │   (Neon)        │
                                         │   via Hyperdrive│
                                         └─────────────────┘
```

## Frontend

The frontend is a Next.js application located in `frontend/` configured for **static export** (`output: "export"`). It is deployed on **Cloudflare Pages** as a fully static site.

Key decisions:
- No SSR, no API routes, no server actions.
- All dynamic data is fetched client-side using TanStack Query.
- Authentication state is managed via Better Auth React client.
- The frontend communicates exclusively with the backend REST API.

## Backend

The backend is an Express.js 5 application located in `backend/` that serves a versioned REST API at `/api/v1/*`.

Key decisions:
- Modular architecture: each business domain has its own routes, controllers, services, and validation.
- Authentication is handled by Better Auth with a Drizzle adapter.
- Two entry points: `server.ts` for local Node.js, `worker.ts` for Cloudflare Workers.
- The Express `app` instance is shared between both entry points.

## Authentication

Better Auth is the sole authentication system. It is configured on the backend and exposes its endpoints at `/api/auth/*`.

- The backend owns user sessions, cookies, and identity.
- The frontend uses the Better Auth React client for sign-in, sign-up, and session queries.
- Cross-origin cookie settings are configured for production subdomains.
- User roles (`customer`, `professional`, `admin`) are stored in the Better Auth user table.
- Roles are assigned server-side; users cannot self-escalate.

## Database

- **ORM**: Drizzle ORM with PostgreSQL dialect.
- **Hosting**: Neon serverless PostgreSQL.
- **Proxy**: Cloudflare Hyperdrive for Workers-to-PostgreSQL connectivity.
- **Schema**: Managed via Drizzle migrations.
- Better Auth tables (user, session, account, verification) are defined alongside business tables.

## Type Definitions & Schemas

The application uses straightforward, self-contained types and validation schemas:
- `backend/src/types/` — Status enums (booking, subscription, payment, payout), API request/response types, and Express user types.
- `backend/src/schemas/` — Zod request validation schemas.
- `frontend/src/types/` — Corresponding client models and input validation schemas.

Each project manages its own dependencies without monorepo workspace linking.

## Deployment

| Component | Platform | Notes |
|-----------|----------|-------|
| Frontend | Cloudflare Pages | Static files from `frontend/out/` |
| Backend | Cloudflare Workers | Express via Workers adapter (`backend/src/worker.ts`) |
| Database | Neon PostgreSQL | Serverless, with Hyperdrive |
| Documents | Cloudflare R2 | Private bucket |
| Payments | Razorpay | Server-side integration |
