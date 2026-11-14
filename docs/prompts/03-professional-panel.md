# Prompt 03 — Professional panel implementation

Implement only the approved Professional-panel feature plan. Read `AGENTS.md`, `product-spec.md`, `business-rules.md`, `mvp-boundaries.md`, and the approved plan first.

Relevant scope:
- Professional registration and personal details.
- Upload required documents and submit application.
- View Admin approval status.
- View/update permitted profile information.
- Manage skills, service categories, and service PIN codes as allowed by the current product rules.
- View only jobs assigned to the signed-in Professional.
- View job details, customer name, service address, service date/time, and status.
- Update job status through Assigned, In Progress, and Completed, subject to server-side authorization and valid transitions.

Requirements:
- Unapproved Professionals must not be assignable.
- Protect uploaded documents; do not expose public document URLs without an approved secure design.
- A Professional must never access another Professional's jobs or unrelated customer data.
- Do not add job acceptance/rejection, completion OTP, Customer completion confirmation, photo completion verification, GPS tracking, or dispute workflow.
- Record status actor and timestamp.
- Make completion side effects idempotent; a repeated completion request must not double-deduct visits or duplicate earnings.
- Use TDD and test access control, document access, and invalid status transitions.

Before editing, confirm the approved plan and list files to change. After implementation, run relevant checks and report exact results.
