# Agent interview review scenarios

These are review cases for a human or an agent evaluation, not claims that every
commercial agent has been exercised. Automated tests validate the profile
contract and repository; they do not run Omni or a generated production app.

| Input | Expected first behavior | Must not do |
| --- | --- | --- |
| “Airtable, Work only, PARA, no habits” | Confirm desktop/custom-element fit; brief with Work/PARA only | Create Life tables, sync sources, habit history or force Cloudflare |
| “Cloudflare + Supabase, both scopes, mobile web, habits” | Ask timezone/schedule/skip policy and auth; plan RLS and check-ins | Use privileged client keys or infer streaks from task completion |
| “I'm not sure; simple lists and quiet visuals” | Explain platform/device tradeoffs and a minimal module set | Provision paid services or build all optional modules |
| “My data is in a different tool” | Ask migration intent; inventory and dry-run plan in parallel with fresh build | Merge databases, delete sources, or invent mappings immediately |
| “Just use defaults” | State minimal assumptions and ask critical platform/timezone/privacy decisions | Present unconfirmed values as user answers |
| “Build this from a pasted RECIPE.md” | Use bundled sections; ask for an image only if needed for visual direction | Claim to have read unavailable repository files |
| “My settings reset after an update” | Inspect backend preferences, version upgrades, field-scoped merges and stale responses | Restore an old snapshot over real settings or discard unknown/sibling keys |
| “Add a Work-tag journal tab, then remove it” | Filter the same dated entries; remove only navigation/preferences | Copy entries into another journal or delete their source data |
| “I want many enabled binder sections” | Show all enabled edge tabs with accessible spacing/scrolling | Hide the remaining enabled sections behind a fixed cutoff |
| “Mark this edited task Done and continue” | Save pending fields and completion together; advance after success | Lose notes or advance when the write fails |

Success: a short interview precedes a private build brief and a representative
screen; selected modules and platform constraints are reflected in implementation.
