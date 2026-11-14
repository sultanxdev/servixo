# Servixo

**Home Services Subscription and Booking Platform**

Servixo connects customers with verified home service professionals. Customers can browse services, subscribe to maintenance plans, and book on-demand service visits.

## Architecture

Servixo uses a simple, decoupled frontend and backend architecture:

| Directory | Description | Tech Stack |
|-----------|-------------|------------|
| `frontend` | Next.js frontend (static export for Cloudflare Pages) | Next.js 15, React 19, Tailwind CSS, TanStack Query |
| `backend` | Express.js 5 backend (Node.js / Cloudflare Workers) | Express 5, Drizzle ORM, PostgreSQL (Neon), Better Auth |

## Tech Stack

### Frontend
- Next.js 15 (App Router, static export)
- React 19
- TypeScript (strict)
- Tailwind CSS + shadcn/ui
- TanStack Query
- React Hook Form + Zod
- Better Auth (React client)

### Backend
- Express.js 5
- TypeScript (strict)
- Drizzle ORM
- PostgreSQL (Neon)
- Better Auth
- Zod validation

### Infrastructure
- Cloudflare Pages (frontend)
- Cloudflare Workers (backend)
- Cloudflare Hyperdrive (DB proxy)
- Cloudflare R2 (document storage)
- Razorpay (payments)

## User Roles

1. **Customer** — Browse services, subscribe to plans, book visits.
2. **Professional** — Accept jobs, manage profile, track earnings.
3. **Admin** — Manage services, plans, users, bookings, and payments.

## Prerequisites

- Node.js >= 20
- PNPM >= 9 (or NPM)
- PostgreSQL (or a Neon account)

## Getting Started

### 1. Backend Setup

```bash
cd backend

# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env

# Run database migrations (or push)
pnpm db:push

# Start backend dev server (port 3001)
pnpm dev
```

### 2. Frontend Setup

```bash
cd frontend

# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env.local

# Start frontend dev server (port 3000)
pnpm dev
```

### 3. Root Helper Scripts

From the repository root, you can also run:

| Command | Description |
|---------|-------------|
| `pnpm dev:backend` | Start backend dev server |
| `pnpm dev:frontend` | Start frontend dev server |
| `pnpm build:backend` | Build backend for production |
| `pnpm build:frontend` | Build frontend for production |
| `pnpm typecheck:backend` | Typecheck backend |
| `pnpm typecheck:frontend` | Typecheck frontend |
| `pnpm lint:backend` | Lint backend |
| `pnpm lint:frontend` | Lint frontend |
| `pnpm install:all` | Install dependencies for both apps |

## Project Structure

```
servixo/
├── backend/          # Express.js REST API
│   ├── src/
│   │   ├── auth/         # Better Auth & permissions
│   │   ├── config/       # Environment & CORS configuration
│   │   ├── db/           # Drizzle ORM schemas & client
│   │   ├── middleware/   # Auth, role check, validation middleware
│   │   ├── modules/      # Business logic modules
│   │   ├── routes/       # API endpoints
│   │   ├── schemas/      # Zod validation schemas
│   │   ├── types/        # Backend TypeScript types
│   │   └── utils/        # Utility functions
│   ├── .env.example
│   ├── drizzle.config.ts
│   ├── package.json
│   └── tsconfig.json
│
├── frontend/         # Next.js web application
│   ├── src/
│   │   ├── app/          # App router pages
│   │   ├── components/   # UI components
│   │   ├── lib/          # API & auth clients, utilities
│   │   └── types/        # Frontend TypeScript types & schemas
│   ├── public/           # Static assets
│   ├── .env.example
│   ├── next.config.ts
│   ├── package.json
│   └── tsconfig.json
│
├── docs/             # Documentation
└── package.json      # Root runner scripts
```

## Documentation

- [Architecture](docs/ARCHITECTURE.md)
- [Database](docs/DATABASE.md)
- [API](docs/API.md)
- [Development](docs/DEVELOPMENT.md)
- [Deployment](docs/DEPLOYMENT.md)

## License

Private — All rights reserved.
