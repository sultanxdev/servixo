# Prompt 02 — Customer panel implementation

Implement only the approved Customer-panel feature plan. Read `AGENTS.md`, `product-spec.md`, `business-rules.md`, `mvp-boundaries.md`, and the approved plan first.

Relevant scope:
- Customer registration, login, authentication, logout.
- View available services and service details.
- View Premium plans, price, validity, and included visits.
- Purchase a Premium subscription and view active subscription, validity, total/used/remaining visits.
- Select service and address, select available date/time, confirm booking.
- View booking status, assigned Professional, and relevant job details.

Requirements:
- Enforce ownership and eligibility on the server, not just in the UI.
- Revalidate active subscription, plan/service eligibility, PIN serviceability, remaining visits, and slot availability at booking confirmation.
- Never expose another customer's profile, subscription, payment, address, or booking data.
- Do not invent cancellation, refund, rescheduling, credit-reservation, or slot-capacity rules; flag them if needed.
- Use TDD for business logic, add role/ownership integration tests, and verify responsive UI states.
- Do not implement Professional/Admin features or MVP-excluded capabilities in this task.

Before editing, confirm the approved plan and list the files you intend to change. After implementation, run relevant checks and report exact results.
