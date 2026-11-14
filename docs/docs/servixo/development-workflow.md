# Servixo — Antigravity + ECC Development Workflow

## Guiding principle

Use Antigravity as the coding environment and ECC as a collection of reusable engineering workflows, skills, agents, rules, and (where supported) hooks. Do not assume every ECC component or command is installed in the minimal profile. Inspect `.agents/` and invoke only names that exist.

## 0. Session start

Prompt:

> Read `AGENTS.md` and the relevant files in `docs/servixo/`. Inspect the current Git branch, working tree, and recent changes. Summarize the current task context and any uncommitted work. Do not modify files yet.

## 1. Repository discovery (first session or major architecture change)

- Map application entry points, packages, modules, routes, schemas/models, migrations, auth, role checks, payment integration, file storage, and test commands.
- Locate each current implementation for Customer, Professional, Admin, public website, booking, subscription, payments, and job lifecycle.
- Compare repository reality to `product-spec.md` and `architecture-context.md`.
- Report missing features, existing behavior that conflicts with the product brief, duplicate/legacy implementations, and unresolved questions.
- Update the Repository reality table only with evidence from files in the repository.

Do not refactor during discovery.

## 2. Feature planning

Use the installed ECC plan workflow if present (for example `/plan`). Otherwise use this template:

> Plan [FEATURE]. First inspect existing code and relevant product docs. Do not edit files. Provide: user story; role/permission matrix; current implementation paths; proposed files; data/schema changes; API contracts; UI states; domain/state transitions; validation; security and privacy risks; concurrency/idempotency considerations; edge cases; migration/backward-compatibility concerns; tests; acceptance criteria; unresolved decisions. Separate facts from assumptions. Stop for approval before implementation.

A plan is not ready if it invents missing financial, subscription, cancellation, or scheduling rules.

## 3. Test-first implementation

Use the installed `tdd-workflow` skill if present.

- Write focused unit tests for business rules and calculations.
- Write integration tests for API authorization, ownership, transactions, and state transitions.
- Write end-to-end tests for important role journeys where the current test stack supports them.
- Confirm tests fail for the expected reason before implementation when practicing strict TDD.
- Implement the smallest change that passes tests.
- Do not weaken or delete tests merely to obtain a green run.

## 4. Independent review

Use the installed `/code-review` workflow or a fresh reviewer agent/session. Review the full Git diff, not just the summary.

Review priorities:
1. Customer/Professional/Admin authorization and data ownership.
2. Payment verification, webhook idempotency, and cash activation audit trail.
3. Booking eligibility, slot race conditions, and visit accounting.
4. Professional assignment eligibility and history.
5. Job state transitions and completion effects.
6. Personal document protection and secret handling.
7. MVP exclusions and accidental scope creep.
8. Regressions, performance, maintainability, accessibility, and test quality.

Review-only means no file edits. Fixes should be a separate approved implementation step.

## 5. Verification

Use the installed `/verification-loop` workflow if present. Run only commands supported by the repository and report exact commands/results:

- Format check (if configured).
- Lint.
- Type check.
- Unit tests.
- Integration tests.
- Relevant E2E tests.
- Production build.
- Migration/schema validation where available.

Do not report a check as passed if it was not run. Explain skipped tests and environmental blockers.

## 6. Completion report

Every feature completion report must include:

- What changed and why.
- Files changed.
- Data/schema/migration impact.
- API and UI impact.
- Role/permission changes.
- Tests and exact results.
- Security and operational considerations.
- Open decisions or limitations.
- Manual deployment/migration steps, if any.

## 7. Memory and documentation

At the end of meaningful work:
- Update this documentation if the product behavior, domain contract, or decision changed.
- Prefer concise durable facts over saving a full chat transcript.
- Keep unverified assumptions out of permanent project rules.
- If ECC memory features are available and configured, use them only as supporting recall; approved repository documentation remains the source of truth.

## 8. Parallel agent use

Delegate work only when tasks are genuinely separable (for example, isolated backend tests and independent public-page UI). Give each agent bounded file ownership and explicit acceptance criteria. Do not have multiple agents edit the same schema, shared component, or business-critical module concurrently. One coordinator owns integration, review, and final verification.
