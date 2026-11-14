# Development Guide

## Prerequisites

- **Node.js** >= 20
- **PNPM** >= 9 (or NPM)
- **PostgreSQL** database (local or [Neon](https://neon.tech))

## Initial Setup

```bash
# 1. Clone the repository
git clone <repo-url>
cd servixo

# 2. Install dependencies
pnpm install:all
# or install in each folder:
# cd backend && pnpm install
# cd ../frontend && pnpm install

# 3. Set up backend environment
cp backend/.env.example backend/.env
# Edit backend/.env with your database URL and secrets

# 4. Set up frontend environment
cp frontend/.env.example frontend/.env.local
# Edit frontend/.env.local if needed
```

## Running Locally

### Backend (port 3001)
```bash
cd backend
pnpm dev

# Or from root:
pnpm dev:backend
```

### Frontend (port 3000)
```bash
cd frontend
pnpm dev

# Or from root:
pnpm dev:frontend
```

## Database

```bash
cd backend

# Push schema to database (development)
pnpm db:push

# Generate migration files
pnpm db:generate

# Run migrations
pnpm db:migrate

# Open Drizzle Studio (GUI)
pnpm db:studio
```

## Type Checking

```bash
# From root
pnpm typecheck:backend
pnpm typecheck:frontend

# Or inside directories
cd backend && pnpm typecheck
cd frontend && pnpm typecheck
```

## Linting

```bash
# From root
pnpm lint:backend
pnpm lint:frontend

# Or inside directories
cd backend && pnpm lint
cd frontend && pnpm lint
```

## Building

```bash
# Frontend (static export to out/)
cd frontend
pnpm build

# Backend (compile to dist/)
cd backend
pnpm build
```

## Project Structure

```
servixo/
├── backend/                    # Express.js REST API
│   ├── src/
│   │   ├── auth/               # Better Auth configuration & permissions
│   │   ├── config/             # Environment & CORS
│   │   ├── db/                 # Drizzle schema & client
│   │   ├── middleware/         # Express middleware
│   │   ├── modules/            # Business logic modules
│   │   ├── integrations/       # Third-party integrations
│   │   ├── routes/             # Route definitions
│   │   ├── schemas/            # Zod validation schemas
│   │   ├── types/              # Backend types & Express definitions
│   │   └── utils/              # Helpers
│   ├── .env.example
│   ├── package.json
│   └── tsconfig.json
│
├── frontend/                   # Next.js frontend
│   ├── src/
│   │   ├── app/                # Next.js App Router pages
│   │   ├── components/         # React components
│   │   ├── lib/                # Utilities, API client, auth
│   │   ├── hooks/              # Custom React hooks
│   │   └── types/              # Frontend types & validation schemas
│   ├── public/                 # Static assets
│   ├── .env.example
│   ├── package.json
│   └── tsconfig.json
│
├── docs/                       # Project documentation
└── package.json                # Root runner scripts
```

## Environment Variables

See `backend/.env.example` and `frontend/.env.example` for required variables.

**Never commit `.env` files with real credentials.**
