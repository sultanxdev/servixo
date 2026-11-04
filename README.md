# Servixo

**Home Services Subscription and Booking Platform**

Servixo connects customers with verified home service professionals. Customers can browse services, subscribe to maintenance plans, and book on-demand service visits.

## Architecture

Servixo is a monorepo containing:

| Package | Description |
|---------|-------------|
| `apps/web` | Next.js frontend (static export for Cloudflare Pages) |
| `apps/api` | Express.js 5 backend (Node.js / Cloudflare Workers) |
| `packages/contracts` | Shared TypeScript types and Zod schemas |

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
- PNPM >= 9
- PostgreSQL (or a Neon account)

## Getting Started

```bash
# Clone the repository
git clone <repo-url>
cd servixo

# Install dependencies
pnpm install

# Set up environment variables
cp .env.example apps/api/.env
cp apps/web/.env.example apps/web/.env.local

# Start the backend (port 3001)
pnpm dev:api

# Start the frontend (port 3000)
pnpm dev:web
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev:web` | Start the frontend dev server |
| `pnpm dev:api` | Start the backend dev server |
| `pnpm build:web` | Build frontend for production |
| `pnpm build:api` | Typecheck and compile backend |
| `pnpm typecheck` | Run TypeScript checks across all packages |
| `pnpm lint` | Lint all packages |

## Project Structure

```
servixo/
├── apps/
│   ├── web/          # Next.js frontend
│   └── api/          # Express.js backend
├── packages/
│   └── contracts/    # Shared types & schemas
├── docs/             # Documentation
├── pnpm-workspace.yaml
└── tsconfig.base.json
```

## Documentation

- [Architecture](docs/ARCHITECTURE.md)
- [Database](docs/DATABASE.md)
- [API](docs/API.md)
- [Development](docs/DEVELOPMENT.md)
- [Deployment](docs/DEPLOYMENT.md)

## License

Private — All rights reserved.
