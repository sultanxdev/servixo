# Servixo — MVP Scope and Non-Goals

## Included in MVP

- Responsive public website with navigation, homepage sections, service and plan discovery, PIN checker, customer login/signup, and Professional registration.
- Customer panel: registration/login, services/plans, subscription details and visit balance, service booking, status, assigned Professional and relevant job details.
- Professional panel: registration, document upload, Admin approval status, permitted profile fields, skills/categories, PIN codes, assigned jobs, and status updates.
- Admin panel: dashboard, customer management, Professional verification/management, services/categories, Premium plan management, payments/subscriptions, bookings and manual assignments/reassignments, serviceable PIN codes.
- Backend role-based access, online payment verification, cash collection/authorised activation, subscriptions/credits, booking validation, manual assignment history, job status history, one-time visit deduction, Professional earnings, and manual payout records.

## Explicitly excluded from initial MVP

- Automatic Professional assignment.
- Professional job acceptance/rejection.
- Completion OTP.
- Customer completion confirmation.
- Photo-based completion verification.
- Customer/Professional dispute workflow.
- Live GPS tracking.
- Automatic recurring subscription renewal.
- Customer wallet.
- Coupons and loyalty programmes.
- Advanced analytics.
- AI chatbot or voice booking.
- Native Android/iOS applications.

## Scope guardrails

- Do not introduce excluded features as "small enhancements" or hidden dependencies.
- Do not add new roles or permission levels without approval.
- Do not add payment methods beyond the confirmed online/cash scope without approval.
- Do not assume automatic scheduling, dispatch, refunds, cancellation fees, rescheduling rules, slot capacity rules, or subscription pause/renewal rules. These remain open decisions unless present in the current repository and approved product docs.
- If an implementation appears to require an excluded feature, explain the dependency and offer an MVP-compatible alternative before coding.
- Any scope expansion must include a product decision, UI/API/data impact, migration considerations, test plan, and revised acceptance criteria.
