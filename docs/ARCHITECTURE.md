# Architecture

## Overview

Servixo uses a decoupled frontend-backend architecture within a single monorepo managed by PNPM workspaces.

```
┌─────────────────┐     HTTPS/REST      ┌─────────────────┐
│   apps/web      │ ──────────────────▶  │   apps/api      │
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

The frontend is a Next.js application configured for **static export** (`output: "export"`). It is deployed on **Cloudflare Pages** as a fully static site.

Key decisions:
- No SSR, no API routes, no server actions.
- All dynamic data is fetched client-side using TanStack Query.
- Authentication state is managed via Better Auth React client.
- The frontend communicates exclusively with the backend REST API.

## Backend

The backend is an Express.js 5 application that serves a versioned REST API at `/api/v1/*`.

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

## Shared Contracts

The `packages/contracts` package contains shared TypeScript types and Zod schemas used by both frontend and backend. It includes:
- User role definitions
- Status enums (booking, subscription, payment, payout)
- API request/response types
- Validation schemas

This package has no runtime dependencies on the database or any backend service.

## Deployment

| Component | Platform | Notes |
|-----------|----------|-------|
| Frontend | Cloudflare Pages | Static files from `out/` |
| Backend | Cloudflare Workers | Express via Workers adapter |
| Database | Neon PostgreSQL | Serverless, with Hyperdrive |
| Documents | Cloudflare R2 | Private bucket |
| Payments | Razorpay | Server-side integration |
