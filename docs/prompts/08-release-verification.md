# Prompt 08 — Servixo release verification

Read `AGENTS.md` and relevant product/architecture docs. Inspect Git status and the full diff. Do not deploy, push, commit, or modify production.

Run the repository's actual configured checks where available:
- Format check.
- Lint.
- TypeScript/type check.
- Unit tests.
- Integration tests.
- E2E tests relevant to changed flows.
- Production build.
- Migration/schema validation where available.

Also manually inspect relevant business invariants:
- Server-side role and ownership checks.
- Verified online payment and authorized cash activation.
- Subscription/visit balance correctness.
- Booking eligibility and slot consistency.
- Approved Professional matching and assignment history.
- Allowed job status transitions.
- Exactly-once visit deduction and earnings creation.
- MVP exclusions.

Report exact commands, exit codes, test counts where available, failures, skipped checks, and environmental blockers. Do not say the build/release is verified if required checks were skipped or failed. Identify migration and rollback considerations. Do not deploy.
