# Prompt 04 — Admin panel implementation

Implement only the approved Admin-panel feature plan. Read `AGENTS.md`, `product-spec.md`, `business-rules.md`, `architecture-context.md`, `mvp-boundaries.md`, and the approved plan first.

Relevant scope:
- Dashboard counts: customers, Professionals, active subscriptions, total/pending/completed bookings, revenue overview.
- Customer search, details, subscriptions, and bookings.
- Professional applications, document review, approve/reject, permitted edits, skills, PIN coverage, assigned jobs, and status.
- Services/categories/descriptions: add, edit, delete/deactivate.
- Premium plans: create/edit, price, validity, visits, eligible services, activate/deactivate.
- Subscriptions and payment records, online payment results, cash collection records, authorised cash activation.
- All bookings, details, manual Professional assignment/reassignment, current status, completed/cancelled bookings.
- Serviceable PIN codes and service availability per PIN.

Requirements:
- Protect every Admin action server-side and audit sensitive/financial changes.
- Candidate Professionals must be approved and match service skills and PIN coverage.
- Assignment is manual; preserve assignment history on reassignment.
- Cash records must include amount, collection date, collecting staff member, and receipt/reference number.
- Cash activation must be a separate authorised Admin action with idempotent subscription/credit allocation.
- Never treat client-side payment status as verified payment.
- Do not add automatic dispatch, recurring renewals, advanced analytics, wallet, coupons, or loyalty features.

Before editing, confirm the approved plan and list files to change. After implementation, run relevant checks and report exact results.
