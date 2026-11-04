# Development Guide

## Prerequisites

- **Node.js** >= 20
- **PNPM** >= 9
- **PostgreSQL** database (local or [Neon](https://neon.tech))

## Initial Setup

```bash
# 1. Clone the repository
git clone <repo-url>
cd servixo

# 2. Install all dependencies
pnpm install

# 3. Set up backend environment
cp .env.example apps/api/.env
# Edit apps/api/.env with your database URL and secrets

# 4. Set up frontend environment
cp apps/web/.env.example apps/web/.env.local
# Edit apps/web/.env.local if needed
```

## Running Locally

### Backend (port 3001)
```bash
pnpm dev:api
```

### Frontend (port 3000)
```bash
pnpm dev:web
```

### Both simultaneously
```bash
# In two terminals, or use:
pnpm dev:api &
pnpm dev:web
```

## Database

```bash
# Push schema to database (development)
pnpm --filter @servixo/api db:push

# Generate migration files
pnpm --filter @servixo/api db:generate

# Run migrations
pnpm --filter @servixo/api db:migrate

# Open Drizzle Studio (GUI)
pnpm --filter @servixo/api db:studio
```

## Type Checking

```bash
# All packages
pnpm typecheck

# Specific package
pnpm --filter @servixo/web typecheck
pnpm --filter @servixo/api typecheck
```

## Linting

```bash
# All packages
pnpm lint

# Specific package
pnpm --filter @servixo/web lint
pnpm --filter @servixo/api lint
```

## Building

```bash
# Frontend (static export to out/)
pnpm build:web

# Backend (compile to dist/)
pnpm build:api
```

## Project Structure

```
servixo/
├── apps/
│   ├── web/                    # Next.js frontend
│   │   ├── src/
│   │   │   ├── app/            # Next.js App Router pages
│   │   │   ├── components/     # React components
│   │   │   ├── lib/            # Utilities, API client, auth
│   │   │   ├── hooks/          # Custom React hooks
│   │   │   └── types/          # Frontend-specific types
│   │   └── public/             # Static assets
│   │
│   └── api/                    # Express.js backend
│       └── src/
│           ├── auth/           # Better Auth configuration
│           ├── config/         # Environment & CORS
│           ├── db/             # Drizzle schema & client
│           ├── middleware/     # Express middleware
│           ├── modules/        # Business logic modules
│           ├── integrations/   # Third-party integrations
│           ├── routes/         # Route definitions
│           ├── utils/          # Helpers
│           └── types/          # Backend-specific types
│
└── packages/
    └── contracts/              # Shared types & schemas
```

## Environment Variables

See `.env.example` at the project root and `apps/web/.env.example` for required variables.

**Never commit `.env` files with real credentials.**

## Shared Contracts

The `@servixo/contracts` package is used by both frontend and backend:

```typescript
import { loginSchema, type UserRole } from "@servixo/contracts";
```

Changes to contracts automatically reflect in both apps during development.
