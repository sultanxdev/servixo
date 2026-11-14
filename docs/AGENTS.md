# Servixo — Project Instructions

These instructions apply to all agents working in this repository. Read `docs/servixo/` before changing product behavior.

## 1. Source of truth and change control

- Treat `docs/servixo/product-spec.md`, `business-rules.md`, and `mvp-boundaries.md` as the current product brief.
- Treat the existing repository as the source of truth for the current technical implementation. Inspect it before proposing or changing architecture.
- Do not invent missing requirements. Record unresolved questions in `docs/servixo/open-decisions.md` and ask for a decision when the answer materially changes behavior, data, money, permissions, or scope.
- When a product decision changes, update the relevant documentation in the same change as the implementation.
- Do not silently change approved business rules, role permissions, subscription behavior, visit accounting, payment behavior, job statuses, or MVP exclusions.
- Do not overwrite existing project instructions. If this file is merged into an existing `AGENTS.md`, preserve all valid existing instructions.

## 2. Product summary

Servixo is a responsive web-based home-services subscription and booking platform for the Indian market. It has three primary roles: Customer, Professional, and Admin. The MVP includes a public website and three role-specific panels. Read `docs/servixo/product-spec.md` for the detailed feature list.

## 3. MVP scope discipline

- Implement only the capabilities listed as included in `docs/servixo/product-spec.md` and `mvp-boundaries.md`.
- The MVP uses admin-controlled professional assignment. Do not add automatic assignment.
- Professionals have Assigned, In Progress, and Completed statuses. Do not add acceptance/rejection, completion OTP, or customer completion confirmation.
- Deduct a subscription visit when a job is marked Completed, exactly once, according to the configured visit-deduction policy. Do not deduct on booking creation, assignment, or start of work.
- Online payments require server-side provider confirmation/webhook verification. Never trust a client-side success redirect as proof of payment.
- Cash payments require an authorised Admin action and an auditable collection record before activation.
- Professional payouts are manually processed in the MVP; store payout records and statuses, but do not build automated payout rails.
- Do not build wallet, coupons, loyalty, live GPS, automatic recurring renewal, AI chat/voice booking, native mobile apps, or other explicitly excluded features unless the product owner approves a scope change.

## 4. Architecture and code quality

- First inspect the current stack, directory structure, data model, API conventions, authentication, tests, and deployment setup. Do not replace technology choices without an explicit decision.
- Follow existing repository conventions. Prefer small, reviewable changes over broad rewrites.
- Keep UI components, domain/business logic, persistence, and external-provider integrations separated according to the existing architecture.
- Validate all untrusted input at the server boundary.
- Enforce permissions on the server for every protected operation; hiding a UI control is not authorization.
- Keep customer, professional, and admin capabilities separated. Derive the acting user and role from trusted authentication context, not request body fields.
- Use transactions or equivalent consistency controls for payment finalization, subscription activation, visit deduction, booking state changes, and earnings ledger creation.
- Make money and visit accounting auditable. Prefer append-only transaction/ledger records for financial and visit movements; do not rely only on mutable summary counters.
- Use idempotency or uniqueness constraints for webhook processing and one-time visit deduction.
- Avoid logging secrets, payment credentials, full identity documents, or unnecessary personal data.
- Add or update tests for every changed business rule, authorization boundary, and state transition.

## 5. Data protection and security

- Apply least privilege to Customer, Professional, and Admin roles.
- A Professional may access only jobs assigned to that Professional and the customer/job details needed to perform them.
- A Customer may access only their own profile, subscriptions, payments, addresses, and bookings.
- Admin access must be explicit and auditable. Do not create an undocumented universal bypass.
- Verify ownership and serviceability server-side for every booking and status operation.
- Protect uploaded professional documents and personal data with access controls; do not expose public storage URLs unless the existing security model explicitly supports safe access.
- Verify payment provider signatures and amounts on the server. Handle duplicate, delayed, and out-of-order webhook delivery safely.
- Never commit `.env` files, credentials, private keys, production data, or real customer documents.

## 6. Required engineering workflow

For a material feature or cross-cutting change:

1. Discover — inspect current implementation and relevant docs; do not edit yet.
2. Plan — list files, data changes, API/UI changes, permissions, edge cases, risks, and acceptance criteria.
3. Test — write or update focused tests before or alongside implementation; use TDD for business logic.
4. Implement — work in small steps and preserve unrelated behavior.
5. Review — inspect the full diff from a fresh/reviewer perspective, focusing on security, data integrity, tenant/ownership boundaries, and scope.
6. Verify — execute the relevant tests, type checks, lint, and build; report exact commands and outcomes.
7. Document — update product/architecture/decision docs where behavior or contracts changed.

Use installed ECC skills and workflows when they exist in `.agents/`. Inspect exact installed names before invoking them. Do not assume a skill, command, hook, or agent exists because it appears in an online catalog. If a command is unavailable, follow the documented process manually and state that it was unavailable.

## 7. Agent behavior and reporting

- Do not modify files during discovery, planning, or review-only requests.
- Ask before destructive operations, schema resets, data deletion, production changes, dependency replacement, or broad refactors.
- Do not run migrations against production.
- Do not claim a test, build, security scan, or command passed unless it was actually executed and its result observed.
- Separate confirmed facts, repository observations, assumptions, and open questions.
- At task completion, report: summary, changed files, data/API impact, tests run and results, security considerations, unresolved issues, and any manual steps.
