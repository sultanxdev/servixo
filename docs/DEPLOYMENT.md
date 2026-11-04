# Deployment

## Overview

| Component | Platform | Domain |
|-----------|----------|--------|
| Frontend | Cloudflare Pages | `servixo.com` |
| Backend | Cloudflare Workers | `api.servixo.com` |
| Database | Neon PostgreSQL | Managed |
| Documents | Cloudflare R2 | Private bucket |

## Frontend — Cloudflare Pages

### Build Settings

| Setting | Value |
|---------|-------|
| Framework preset | None |
| Build command | `cd apps/web && pnpm build` |
| Build output directory | `apps/web/out` |
| Root directory | `/` |

### Environment Variables

```
NEXT_PUBLIC_API_URL=https://api.servixo.com
NEXT_PUBLIC_APP_URL=https://servixo.com
```

### Custom Domain

Configure `servixo.com` and `www.servixo.com` in the Cloudflare Pages dashboard.

## Backend — Cloudflare Workers

### Prerequisites

1. Install Wrangler CLI: `pnpm add -g wrangler`
2. Authenticate: `wrangler login`

### Deploy

```bash
cd apps/api
wrangler deploy
```

### Configuration

The `wrangler.jsonc` file in `apps/api/` defines:
- Worker name and entry point
- Compatibility flags (`nodejs_compat`)
- Hyperdrive binding
- R2 bucket binding
- Environment variables and secrets

### Secrets

Set secrets via Wrangler (never in `wrangler.jsonc`):

```bash
wrangler secret put BETTER_AUTH_SECRET
wrangler secret put DATABASE_URL
wrangler secret put RAZORPAY_KEY_SECRET
wrangler secret put RAZORPAY_WEBHOOK_SECRET
wrangler secret put CLOUDFLARE_R2_SECRET_ACCESS_KEY
```

## Cloudflare Hyperdrive

Hyperdrive accelerates PostgreSQL connections from Workers.

### Setup

1. Create a Hyperdrive configuration:
```bash
wrangler hyperdrive create servixo-db --connection-string="postgresql://..."
```

2. Add the Hyperdrive ID to `wrangler.jsonc`:
```jsonc
{
  "hyperdrive": [
    {
      "binding": "HYPERDRIVE",
      "id": "your-hyperdrive-id"
    }
  ]
}
```

3. In the Worker, use the Hyperdrive connection string instead of the direct database URL.

## Cloudflare R2

### Setup

1. Create an R2 bucket:
```bash
wrangler r2 bucket create servixo-documents
```

2. Add the R2 binding to `wrangler.jsonc`:
```jsonc
{
  "r2_buckets": [
    {
      "binding": "R2_BUCKET",
      "bucket_name": "servixo-documents"
    }
  ]
}
```

3. Generate R2 API credentials in the Cloudflare dashboard for S3-compatible access.

## Database Migrations

Before deploying, run migrations against the production database:

```bash
DATABASE_URL="production-connection-string" pnpm --filter @servixo/api db:migrate
```

## Production Checklist

- [ ] All environment variables and secrets are set
- [ ] Database migrations are applied
- [ ] CORS trusted origins include production domains
- [ ] Better Auth URL and trusted origins are configured
- [ ] R2 bucket is created and bound
- [ ] Hyperdrive is configured and bound
- [ ] Custom domains are set up
- [ ] SSL/TLS is enabled (automatic with Cloudflare)
- [ ] Razorpay webhook URL is configured in Razorpay dashboard
- [ ] No secrets are exposed in frontend environment variables
