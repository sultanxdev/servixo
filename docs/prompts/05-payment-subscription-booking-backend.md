# Prompt 05 — Backend payment, subscription, booking, and visit integrity

Implement only the approved backend plan. Read the Servixo project instructions and all relevant product/business/architecture documentation.

Focus on the following invariants:
- Online payment orders are created server-side.
- Payment success is confirmed server-side using provider confirmation/webhook verification.
- Match provider event/order, amount, currency, and expected state.
- Duplicate, delayed, and out-of-order webhook delivery must be safe.
- A verified successful payment activates the intended subscription and allocates included visit credits exactly once.
- Cash collection requires an authorised Admin action and records amount, date, collecting staff member, and receipt/reference.
- Booking validates service, active serviceable PIN code, active/valid subscription, eligible service, remaining visits, and available slot server-side.
- Booking/slot concurrency must not create double bookings or corrupt visit accounting.
- Professional assignment is Admin-controlled and requires approved Professional + relevant skill + PIN coverage.
- Job statuses are Assigned, In Progress, Completed; actor and timestamp are recorded.
- Completion-triggered visit deduction and Professional earnings creation are idempotent.

Do not choose an unspecified payment provider, cancellation/refund policy, slot algorithm, visit-reservation policy, or earnings formula. Flag unresolved items in `open-decisions.md` and request a product decision where necessary.

Use transactions/constraints supported by the existing stack. Add tests for duplicate webhook delivery, wrong amount/reference, unauthorized cash activation, booking eligibility failures, slot concurrency, reassignment history, invalid status transitions, duplicate completion, and duplicate visit/earning records.

Before coding, show the plan and approval boundary. After coding, run actual relevant checks and report exact results.
