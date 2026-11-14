# Servixo — Open Product and Technical Decisions

The uploaded feature list does not specify the answers below. Agents must not silently invent them. Add the approved answer, owner, date, and affected tests when resolved.

## Product and pricing
- [ ] Exact Premium plan names, prices, validity periods, included visit counts, and eligible-service combinations.
- [ ] Whether each plan is limited to one customer, one address, one service category, or multiple addresses/services.
- [ ] What "service itself is free; material cost is chargeable" means in relation to Premium plan pricing (captured in prior discussion; reconfirm).
- [ ] Tax/GST treatment, invoice/receipt requirements, rounding, and display of inclusive/exclusive tax.

## Booking and availability
- [ ] Slot duration, operating hours, holidays, capacity per slot, and buffer/travel time.
- [ ] Whether a slot is reserved temporarily during checkout or only after booking confirmation.
- [ ] Whether a visit is reserved at booking, deducted at completion, or handled by a separate reservation ledger.
- [ ] Booking cancellation, no-show, rescheduling, late arrival, and refund rules.
- [ ] Whether Admin may create bookings on behalf of customers.

## Visit policy
- [ ] Exact configurable visit-deduction modes and who may configure them.
- [ ] Whether cancellation, no-show, partial work, or customer rejection affects a visit.
- [ ] How to handle a completed job when no visit remains or a subscription expires during the job.
- [ ] Whether a visit credit can ever be restored, and which Admin workflow authorizes restoration.

## Materials and estimates (additional prior planning decisions)
- [ ] Exact estimate lifecycle/statuses and required fields.
- [ ] Confirm whether Professional submits the material estimate and whether Customer approval is mandatory before purchase/use.
- [ ] How actual material cost is evidenced (receipt, catalogue cost, manual entry, supplier invoice).
- [ ] Whether a markup, delivery fee, tax, or handling charge is prohibited or allowed.
- [ ] What happens when a Customer rejects some/all materials and whether service work can continue.
- [ ] Whether material charges use the same payment gateway/cash process as Premium subscription payments.
- [ ] Who can edit an estimate after Customer approval and how changes are re-approved.

## Payments and refunds
- [ ] Payment provider and supported payment instruments.
- [ ] Currency and provider account configuration.
- [ ] Refund rules and who can issue/approve refunds.
- [ ] Handling of failed, pending, partially captured, reversed, disputed, or refunded payments.
- [ ] Receipt/invoice numbering and accounting export needs.

## Professional operations
- [ ] Professional earnings formula, rate card, deductions, taxes, and whether rates vary by service/area.
- [ ] Payout schedule, minimum payout, payout method, and required payout proof.
- [ ] Whether a Professional can edit PIN coverage/skills immediately or requires Admin approval.
- [ ] Required document types and retention/deletion policy.
- [ ] Whether Admin can mark a job Completed on behalf of a Professional, and under what audit process.

## Security, privacy, and operations
- [ ] Admin account provisioning and any admin sub-roles.
- [ ] OTP/email/SMS authentication requirements, if any.
- [ ] Privacy policy, retention periods, deletion/export process, and consent requirements.
- [ ] Storage provider and access policy for Professional documents.
- [ ] Notification channels and templates (SMS, email, WhatsApp, push) — not specified in the feature list.
- [ ] Production hosting, environments, backups, monitoring, and recovery objectives.

## Engineering decisions to discover from the existing repository
- [ ] Actual frontend/backend framework and package structure.
- [ ] Database, ORM, migration tool, and transaction support.
- [ ] Authentication/session strategy and authorization implementation.
- [ ] Existing payment gateway integration, if any.
- [ ] Existing test framework and CI commands.
- [ ] File upload/storage implementation.
