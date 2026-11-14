# Servixo — Architecture Context and Guardrails

## 1. Status of this document

The uploaded feature list defines functional capabilities, not a physical software architecture. This document describes logical boundaries and candidate domain concepts to help agents reason consistently. It does **not** prescribe a framework, database vendor, exact table schema, route naming convention, queue, hosting provider, or payment gateway.

Before implementation, inspect the existing Servixo repository and record the actual stack in the Repository Reality section below.

## 2. Logical system areas

1. Public website — service discovery, Premium plan discovery, PIN availability, login, and Professional registration.
2. Customer application — account, addresses, subscriptions, visit balance, bookings, and job details.
3. Professional application — registration/profile, documents, skills, PIN coverage, assigned jobs, and job status.
4. Admin application — dashboard, customers, Professionals, services, plans, payments, bookings, PIN codes, assignments, earnings, and payouts.
5. Backend/domain services — identity/permissions, service catalogue, plans/subscriptions, payments, booking/availability, assignment, job lifecycle, visit ledger, earnings, and payout records.
6. External integrations — payment gateway and any existing communication/storage services discovered in the repository.

## 3. Candidate domain concepts

These are conceptual objects inferred from the feature list, not a claim that the repository already has these exact models.

| Domain | Candidate concepts | Important invariants |
|---|---|---|
| Identity | User, Role, CustomerProfile, ProfessionalProfile, AdminActor | Authenticated identity and role must come from trusted server context. |
| Professional verification | ProfessionalApplication, Document, ApprovalRecord | Unapproved Professionals cannot be assigned. Sensitive documents require private access. |
| Service catalogue | Service, ServiceCategory | Inactive services cannot be newly booked. |
| Coverage | ServiceablePinCode, PinCodeService, ProfessionalCoverage | A booking must be within an active service area; a Professional must cover the booking PIN code. |
| Plans | PremiumPlan, PlanEligibleService | Store price, validity, included visits, and eligible services. Historical subscriptions should not be silently rewritten when a plan changes. |
| Subscription | Subscription, VisitCredit/Ledger | Validity and remaining visits must be checked server-side. Visit movements must be auditable. |
| Payment | PaymentOrder, PaymentTransaction, CashCollection, WebhookEvent | Provider verification, amount/currency matching, deduplication, and authorised cash activation. |
| Booking | Booking, Address, AvailabilitySlot (or equivalent) | Revalidate slot and eligibility at booking time; avoid double booking. |
| Assignment | JobAssignment, AssignmentHistory | Manual Admin assignment/reassignment; match skill and PIN coverage; preserve history. |
| Job lifecycle | JobStatusHistory | Only allowed transitions; actor and timestamp recorded. |
| Earnings | ProfessionalEarning, PayoutRecord | Earnings derive from completed work under an explicit calculation rule; payout is auditable. |
| Material/estimate (additional prior decision) | Material, JobEstimate, EstimateLine, EstimateApproval, MaterialCharge | Use actual material cost; no charge for customer-rejected materials; details and lifecycle require product confirmation. |

## 4. Role-permission boundaries

### Customer
- Manage or view their own account/profile and addresses according to existing product rules.
- View services, plans, own subscription, visit balance, own payment records, and own bookings.
- Create bookings only when service, PIN, subscription, visits, and slot checks pass.
- Cannot assign Professionals, alter job status, or view another customer's data.

### Professional
- Manage permitted profile fields, skills, service categories, and PIN coverage.
- Access only jobs assigned to that Professional and the minimum customer/job details required to perform them.
- Update only permitted job statuses: Assigned → In Progress → Completed, subject to server-side transition checks.
- Cannot approve their own application, assign/reassign jobs, activate subscriptions, or change payment records.

### Admin
- Manage customers and Professionals, approve/reject Professional applications, manage services/plans/PIN codes, verify payments, record cash collections, activate cash-paid subscriptions, manage bookings/assignments, and manage payout records.
- Sensitive and financial actions should record actor, timestamp, and relevant before/after state.
- Do not create undocumented super-admin bypass behavior.

## 5. Critical transaction boundaries

Use the repository's existing transaction mechanism or equivalent consistency controls for these operations:

### Online payment finalization
- Verify provider signature/authenticity on the server.
- Verify order reference, amount, currency, and expected state.
- Make webhook processing idempotent.
- Activate subscription and allocate visit credits exactly once after verified success.
- Handle duplicate, delayed, and out-of-order events.

### Cash subscription activation
- Require an authorised Admin action.
- Persist amount, date, collecting staff member, receipt/reference, and actor.
- Activate the subscription and allocate visit credits exactly once.

### Booking creation
- Recheck service state, PIN serviceability, subscription state/validity, eligible service, visit balance, and slot availability server-side.
- Prevent race conditions that could reserve the same slot or over-consume visits.
- The PDF does not state whether visits are reserved at booking time; do not invent that policy.

### Professional assignment/reassignment
- Confirm Professional approval, relevant skill, and PIN coverage.
- Persist current assignment and history atomically.
- Record Admin actor and timestamps.

### Job completion and visit deduction
- Permit only valid status transitions.
- Record who marked Completed and when.
- Apply visit-deduction policy exactly once and create an auditable movement record.
- Apply the current configured visit policy only after it is defined; the feature-list baseline is one visit at Completed.
- Calculate/store Professional earnings in accordance with an explicit approved formula; the formula is not defined in the PDF.

## 6. API/domain boundaries

Use existing repository conventions. Candidate API domains (not prescribed paths):

- Authentication and account/profile
- Services and categories
- PIN-code serviceability and coverage
- Premium plans
- Subscriptions and visit balance
- Payment orders, verification/webhooks, and cash collections
- Booking and slot availability
- Professional applications and document review
- Professional assignment and assignment history
- Job status lifecycle
- Professional earnings and payout records
- Admin dashboard and management operations

For each endpoint/action, define: actor/role, input validation, authorization/ownership rule, state transition, idempotency requirement, audit record, error cases, and tests.

## 7. Repository reality (fill after discovery)

| Area | Actual implementation | Evidence/path | Notes or gaps |
|---|---|---|---|
| Frontend framework | Unknown — inspect repository | | |
| Backend framework/runtime | Unknown — inspect repository | | |
| Database/ORM | Unknown — inspect repository | | |
| Authentication | Unknown — inspect repository | | |
| Payment gateway | Unknown — inspect repository | | |
| File/document storage | Unknown — inspect repository | | |
| Tests | Unknown — inspect repository | | |
| Deployment/hosting | Unknown — inspect repository | | |

Do not fill unknown values by guessing. Update this table from observed code/configuration and cite paths in the discovery report.
