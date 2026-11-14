# Prompt 00 — Servixo repository discovery (read-only)

Read the root `AGENTS.md` and all relevant files under `docs/servixo/` first.

I want a read-only technical discovery of this existing Servixo repository. Do not edit, create, delete, rename, install, migrate, or format any files.

Inspect and report:
1. Actual frontend framework, backend framework/runtime, package manager, and app entry points.
2. Folder/module structure and existing coding conventions.
3. Database technology, ORM, schema/models, migrations, and transaction patterns.
4. Authentication and how Customer, Professional, and Admin roles are represented and enforced.
5. Existing pages/routes/components for the public website and each panel.
6. Existing service, Premium plan, subscription, visit, booking, PIN-code, availability, assignment, job-status, payment, earnings, and payout implementations.
7. Payment gateway and webhook verification, if present.
8. Professional document upload/storage and access controls, if present.
9. Unit/integration/E2E test framework and exact commands for lint, typecheck, tests, and build.
10. Environment/deployment configuration without printing secrets or values from `.env` files.

Compare repository reality with `docs/servixo/product-spec.md`, `business-rules.md`, and `mvp-boundaries.md`.

Return:
- Observed stack with evidence paths.
- Architecture map.
- Existing feature coverage: implemented / partial / missing / unclear.
- Security and data-integrity risks.
- Product decisions needed from `open-decisions.md`.
- Recommended implementation order based on dependencies.

Separate facts observed in the repository from assumptions and recommendations. Do not implement anything. Do not claim a feature exists unless you locate its implementation.
