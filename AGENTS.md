# Agent entry point

When **using this kit to generate an application**, follow `START_HERE.md` first.
Ask the preference interview before choosing modules, schemas, services, or UI.
The user's current instructions override suggested defaults in this recipe.

When **maintaining the recipe itself**, preserve its greenfield, platform-neutral
scope. Do not rerun the application interview merely to edit documentation.

- Keep all examples fictional and all provider identifiers unset/placeholders.
- No private account history, credentials, records, operational handoffs, or raw
  personal screenshots belong in this repository or its Git history.
- Keep `RECIPE.md` synchronized with its source documents using
  `node scripts/build-recipe.mjs`.
- Validate with `node scripts/validate.mjs` and `node scripts/check-public.mjs`.
- Preserve readable Mermaid sources next to rendered SVG diagrams.
- Concept images are references, not proof of an implemented app.
- A generated app needs actual runtime/browser validation; this kit's tests do
  not establish that the generated app works.
