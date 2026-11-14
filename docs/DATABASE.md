# Database

## Overview

Servixo uses PostgreSQL via Neon and Drizzle ORM.

## Authentication Schema

Better Auth provides these tables:

| Table | Purpose |
|-------|---------|
| `user` | User accounts with role field |
| `session` | Active sessions |
| `account` | OAuth/credential accounts |
| `verification` | Email verification tokens |

The `user` table includes a custom `role` column with values: `customer`, `professional`, `admin`.

## Business Schema

### Professionals
- `professional_profiles` — Extended profile linked to auth user
- `professional_documents` — KYC documents stored in R2
- `professional_services` — Services a professional offers
- `professional_service_areas` — PIN codes a professional covers

### Services
- `service_categories` — Top-level categories
- `services` — Individual service definitions

### Location
- `serviceable_pincodes` — PIN codes where Servixo operates
- `addresses` — Customer addresses

### Plans & Subscriptions
- `plans` — Subscription plan definitions
- `plan_services` — Services included in a plan with visit allocations
- `subscriptions` — Customer subscriptions
- `subscription_visit_ledger` — Visit credit tracking per service

### Bookings
- `bookings` — Service visit bookings
- `booking_assignments` — Professional assigned to a booking
- `booking_status_history` — Audit trail of status changes

### Payments
- `payments` — Payment transactions
- `razorpay_webhook_events` — Idempotent webhook event log

### Earnings
- `professional_earnings` — Per-booking earnings
- `payouts` — Payout batches to professionals

## Design Decisions

- **UUIDs** for all primary keys.
- **Integer (paise)** for all monetary values to avoid floating-point issues.
- **Timestamps** (`created_at`, `updated_at`) on all mutable tables.
- **Foreign keys** with appropriate cascade/restrict rules.
- **Indexes** on frequently queried columns (user ID, status, date).
- **Unique constraints** on natural keys (email, slug, compound keys).

## Migrations

```bash
cd backend

# Generate migration from schema changes
pnpm db:generate

# Run pending migrations
pnpm db:migrate

# Push schema directly (dev only)
pnpm db:push

# Open Drizzle Studio
pnpm db:studio
```

## Entity Relationship Summary

```
user (Better Auth)
├── professional_profiles (1:1)
│   ├── professional_documents (1:N)
│   ├── professional_services (N:M with services)
│   └── professional_service_areas (N:M with serviceable_pincodes)
├── addresses (1:N)
├── subscriptions (1:N)
│   └── subscription_visit_ledger (1:N)
├── bookings (1:N)
│   ├── booking_assignments (1:N)
│   └── booking_status_history (1:N)
└── payments (1:N)

service_categories
└── services (1:N)
    └── plan_services (N:M with plans)

plans
└── plan_services (1:N)
```
