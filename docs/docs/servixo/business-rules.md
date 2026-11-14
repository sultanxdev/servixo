# Servixo — Business Rules and Decision Register

## A. Rules explicitly stated in the uploaded feature list

### Roles and access
- The product has three roles: Customer, Professional, and Admin.
- APIs and data access must be protected by role-based permissions.
- Professionals see jobs assigned to them; Admin manages assignment and reassignment.

### Subscription and visits
- A Premium plan has a price, validity, included visits, and eligible services.
- Booking eligibility requires an active subscription, an eligible service, a serviceable PIN code, remaining visits, and an available slot.
- A visit is deducted when a job is marked Completed.
- A visit must be deducted only once, with a corresponding deduction record.

### Assignment and job status
- Admin manually assigns and may reassign an approved Professional.
- Candidate Professionals are matched by skills and PIN code coverage.
- Assignment history is stored.
- Job statuses in the MVP are Assigned, In Progress, and Completed.
- No Professional acceptance/rejection and no completion OTP/customer verification in the initial version.

### Payments and activation
- Online orders are created by the backend and verified using provider-side confirmation or webhooks.
- Online transactions are recorded and duplicate processing is prevented.
- Cash collection records include amount, collection date, collecting staff member, and receipt/reference number.
- Cash-paid subscription activation is an authorised Admin action.

### Professional earnings
- Earnings are calculated for completed jobs and stored as records.
- Payable amounts and payout records are tracked.
- Admin updates payout status; payouts are processed manually in the MVP.

## B. Additional decisions captured in earlier Servixo planning discussions

The following decisions were recorded outside the uploaded feature-list PDF. Treat them as current working decisions, but check for a newer product-owner decision before implementing if there has been a change.

| Area | Working decision | Implementation consequence |
|---|---|---|
| Service charge | Service itself is free; material cost is chargeable | Do not invent a service labour fee in the material workflow. Confirm how this coexists with Premium plan pricing. |
| Material pricing | Actual material cost | Store actual material cost and make the price/cost basis visible in the job estimate or record as the approved UI requires. |
| Estimate approval | Professional is responsible for preparing/submitting the estimate; customer approval flow must be respected | Exact estimate states, permissions, and whether Admin can override still need confirmation. |
| Payment methods | Online and cash | Support both where the material/estimate charge applies, consistent with the current payment-provider design. |
| Customer rejects materials | No deduction | Do not deduct rejected material charges. Confirm whether a visit is still consumed when service work has begun or the job is completed; the configurable visit rule below governs the policy. |
| Visit deduction | Configurable | Do not hard-code an unconditional deduction policy if the latest configuration decision overrides it. Preserve the PDF's baseline that deduction is associated with completion, and make the authorised configuration explicit. |

## C. Conflict-resolution rules

1. For the core MVP feature list and exclusions, follow `product-spec.md`.
2. For a later explicit product-owner decision, update this file and the acceptance tests before implementing the changed behavior.
3. Never infer a financial rule from UI text alone. Confirm price basis, tax treatment, rounding, refunds, cancellation effects, and ledger treatment.
4. Do not allow a configurable rule to bypass audit logging or idempotency.
5. When two documents conflict, report the conflict and ask for a decision rather than selecting whichever is easier to code.

## D. Decision log template

For each new decision, record:

- Date:
- Decision owner:
- Area:
- Decision:
- Reason:
- Alternatives rejected:
- Affected roles/features/data:
- Migration or backward-compatibility impact:
- Tests that must change:
