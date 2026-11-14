# Prompt 07 — Independent Servixo code review (read-only)

Read `AGENTS.md` and relevant `docs/servixo/` documents. Review the complete current Git diff and related code. Do not edit files.

Review for:
1. Broken Customer/Professional/Admin role boundaries and object ownership.
2. Cross-customer or cross-Professional data exposure.
3. Payment verification flaws, webhook replay, duplicate activation, or amount mismatch.
4. Cash activation without sufficient authority/audit data.
5. Subscription eligibility and visit-credit inconsistencies.
6. Booking/PIN/slot validation and concurrency issues.
7. Assignment to unapproved/ineligible Professionals or missing history.
8. Invalid job status transitions or missing actor/timestamps.
9. Duplicate visit deduction or Professional earning creation.
10. Exposure of Professional documents, secrets, or personal data.
11. MVP scope creep or changes to undocumented business rules.
12. Missing tests, weak assertions, regressions, and migration risks.

For each finding, give severity (Critical/High/Medium/Low), file and line, reproduction scenario, impact, and recommended fix. Distinguish confirmed vulnerabilities from possible risks. Do not report style preferences as defects. End with a prioritized summary and tests that should be run. No file modifications.
