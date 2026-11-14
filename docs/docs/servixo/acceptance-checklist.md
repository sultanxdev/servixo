# Servixo — MVP Acceptance Checklist

Use this as a cross-cutting checklist. Feature-specific acceptance criteria should be added to each implementation plan and automated tests.

## Authentication and roles
- [ ] Customer, Professional, and Admin authentication paths are distinct and protected.
- [ ] Protected actions derive actor identity/role from trusted server-side authentication.
- [ ] Customer cannot access another Customer's data.
- [ ] Professional cannot access jobs assigned to another Professional.
- [ ] Professional cannot perform Admin-only actions.
- [ ] Admin actions affecting approval, money, subscriptions, assignments, or payouts are auditable.

## Services, plans, and coverage
- [ ] Customer can view only available/active services and plans.
- [ ] Admin can create/edit/activate/deactivate plans and configure validity, included visits, and eligible services.
- [ ] PIN-code availability reflects active serviceability and configured service coverage.
- [ ] A Professional is eligible for assignment only if approved and matched to the required skill/service and PIN coverage.

## Payments and subscriptions
- [ ] Client-side redirect alone cannot activate a paid subscription.
- [ ] Server verifies provider confirmation/webhook authenticity and expected amount/reference.
- [ ] Duplicate webhook/event delivery does not duplicate payment, activation, or visit credits.
- [ ] Cash record stores amount, collection date, collecting staff member, and receipt/reference.
- [ ] Only an authorised Admin can activate a cash-paid subscription.
- [ ] Subscription start/end/validity and included/used/remaining visits are consistent.
- [ ] Booking eligibility checks active subscription, service eligibility, validity, and remaining visits on the server.

## Booking and availability
- [ ] Customer can select a service, address, date, and available time and confirm a booking.
- [ ] Server revalidates service, PIN code, subscription eligibility, remaining visits, and slot availability at confirmation.
- [ ] Concurrent requests cannot overbook a slot or corrupt visit balances.
- [ ] Customer can view booking status and assigned Professional details when assigned.
- [ ] The exact rules for booking cancellation/rescheduling and whether credits are reserved at booking are approved before implementation.

## Professional review and assignment
- [ ] Professional can submit registration and required documents.
- [ ] Admin can review documents and approve/reject the application.
- [ ] Unapproved Professional cannot be assigned.
- [ ] Admin can manually assign and reassign a Professional.
- [ ] Assignment history records changes and actor/timestamp.
- [ ] No automatic assignment or Professional accept/reject workflow is present in MVP.

## Job lifecycle and visits
- [ ] Allowed MVP statuses are Assigned, In Progress, and Completed.
- [ ] Only an authorised actor can perform each status transition.
- [ ] Status history records actor and timestamp.
- [ ] Visit deduction occurs at the configured completion rule and only once.
- [ ] A repeated completion request cannot deduct a second visit.
- [ ] Visit balance changes have an auditable record.
- [ ] No completion OTP or Customer completion confirmation is introduced in MVP.

## Earnings and payouts
- [ ] Earnings are recorded for completed jobs using an approved calculation formula.
- [ ] Payable amounts can be viewed by Admin.
- [ ] Admin can create/update payout records and statuses.
- [ ] Payout processing remains manual in MVP.
- [ ] Duplicate completion events do not create duplicate earnings.

## Public website and panels
- [ ] Public navigation includes Home, Services, Premium Plans, How It Works, Login, and Become a Professional.
- [ ] Homepage includes Hero, How It Works, Services, Premium Plans, FAQ, CTA, and Footer.
- [ ] Public site, Customer, Professional, and Admin experiences are responsive.
- [ ] User-facing empty, loading, error, and permission-denied states are implemented.

## MVP exclusions regression check
- [ ] No live GPS tracking.
- [ ] No automatic recurring subscription renewal.
- [ ] No wallet, coupons, or loyalty programme.
- [ ] No advanced analytics beyond the specified dashboard overview.
- [ ] No AI chatbot/voice booking.
- [ ] No native Android/iOS apps.
- [ ] No photo-based completion, dispute workflow, or automatic dispatch.
