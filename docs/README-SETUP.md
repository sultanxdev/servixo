# Servixo + Antigravity + ECC setup pack

This pack gives Antigravity a durable project brief and a repeatable engineering workflow for Servixo.

## What is included

- `AGENTS.md` — root-level project instructions for Antigravity and other compatible coding agents.
- `docs/servixo/product-spec.md` — the product and MVP scope transcribed and organized from `Servixo_Features.pdf`.
- `docs/servixo/business-rules.md` — confirmed business behavior, including decisions recorded in prior Servixo planning discussions.
- `docs/servixo/architecture-context.md` — conceptual architecture boundaries and entity/API domains. It deliberately does not invent a technology stack or physical schema.
- `docs/servixo/mvp-boundaries.md` — included and excluded scope, plus rules against scope creep.
- `docs/servixo/development-workflow.md` — the recommended plan → test → implement → review → verify process using installed ECC capabilities where available.
- `docs/servixo/acceptance-checklist.md` — cross-cutting acceptance checks for the MVP.
- `docs/servixo/open-decisions.md` — important questions that the feature list does not answer.
- `prompts/` — reusable Antigravity prompts for repository discovery and panel-by-panel implementation.

## Install into the Servixo repository

1. Make a backup or commit your current work before changing project instructions.
2. Extract this folder's contents into the root of the Servixo repository (the same directory that contains `.agents/`, `package.json`, and your source folders).
3. If a root `AGENTS.md` already exists, **do not overwrite it**. Merge the Servixo-specific sections into the existing file.
4. Keep ECC's installer-managed `.agents/` directory intact. This pack does not replace or modify it.
5. Open the Servixo workspace in Antigravity and start a new conversation so it reads the updated project context.
6. First run `prompts/00-repository-discovery.md`. Do not ask the agent to implement features until it has mapped the actual repository and compared it with the product brief.

## Important source and inference policy

The product feature list is the source of truth for the MVP behavior represented in this pack. The feature list does not define the exact framework, database, schema, API routes, payment provider, pricing values, slot algorithm, cancellation policy, or production deployment topology. The architecture document therefore defines boundaries and candidate domain concepts, not implementation facts.

A few material/estimate/payment decisions in `business-rules.md` were captured in earlier Servixo planning discussions and are marked separately from the uploaded feature list. Verify them against the latest product decision before implementation if there has been a change.

## Recommended first session

Use `prompts/00-repository-discovery.md`, then review the generated findings yourself. The agent must report discrepancies and missing decisions instead of silently rewriting the existing application to match assumptions.
