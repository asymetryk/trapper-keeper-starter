# Build your own Trapper Keeper

**A recipe for a productivity app that feels like your favorite binder.**

Pick your platform. Pick what belongs inside. Give the recipe to Airtable Omni
or your preferred coding agent, and build a cockpit that fits your life.

![A fictional Work dashboard in a retro binder](mockups/work-concept.png)

[Watch the 6.5-second theme demo](media/trapper-keeper-demo.mp4) ·
[Demo notes and poster](media/README.md)

This is a **greenfield, platform-independent build kit**, not a one-click
installer or an already connected app. It includes a PRD, a guided preference
interview, original UI concepts, workflow diagrams, a logical data model, and
acceptance checks. It contains fictional examples and no live account configuration.

## Start in two minutes

1. Download this repository as a ZIP, or clone it.
2. Give your agent [START_HERE.md](START_HERE.md), the [PRD](docs/PRD.md),
   and the mockups. In a coding agent, open the whole folder.
3. Ask: **“Use this kit to build my own Trapper Keeper. Ask about my preferences
   before choosing modules or creating anything.”**
4. Answer the short interview, review your build brief and one representative
   screen, then let the agent implement and test the selected scope.

For Omni, paste [prompts/OMNI_START.md](prompts/OMNI_START.md) into a chat in a
new base and attach a mockup image. If the agent cannot read GitHub links, upload
the files or paste their contents; a repository URL alone is not a file import.

For another coding agent, use [prompts/CODING_AGENT_START.md](prompts/CODING_AGENT_START.md).
For one portable text attachment, use [RECIPE.md](RECIPE.md); images remain separate.

## Make it yours

| Choice | Options |
| --- | --- |
| Platform | Airtable; Cloudflare + Supabase; another stack |
| Scope | Work, Life, both, or your own names |
| Organization | PARA, simple lists, custom tabs, or no folders |
| Modules | Tasks, action queue, projects, resources, habits, journal, fitness, media, nutrition |
| Look | Ocean, Memphis, quiet paper, or your own original cover |
| Experience | Calm mode, comfortable/compact lists, rearrange/resize, keyboard navigation |
| Ownership | Private solo use, selected shared workspaces, role-based access |
| Starting data | Empty by default; optional migration only when requested |

Only selected modules should be built. No journaling, health tracking, accounts,
integrations, or analytics are quietly added on your behalf.

## What's in the kit

- [Preference interview](docs/PREFERENCES.md) and [machine-readable profile schema](schemas/preferences.schema.json).
- [Product requirements](docs/PRD.md), [UI design rules](docs/DESIGN.md),
  [data model](docs/DATA_MODEL.md), and [acceptance checklist](docs/ACCEPTANCE.md).
- [Platform guides](platforms/README.md) for [Airtable](platforms/AIRTABLE.md)
  and [Cloudflare + Supabase](platforms/CLOUDFLARE_SUPABASE.md).
- [Workflow maps](diagrams/README.md): onboarding, navigation, data relationships,
  task actions, habit check-ins, architecture, and optional migration.
- [Three original UI concepts](mockups/README.md), with reproducible prompts.
- [Fictional sample preferences](examples/preferences.json),
  [sample records](examples/demo-data.json), and a [filled build brief](examples/build-brief.md).
- [Optional migration prompt](prompts/MIGRATION_START.md) and [playbook](docs/MIGRATION.md).

## Bringing existing data later?

Say **“Plan a migration from my current tool using this kit's migration playbook.”**
The agent should inventory sources, propose mappings, stage a dry run, reconcile
counts/relationships, and define rollback before cutover. A migration is not a
default requirement for a fresh build. No specific source app or two-base merge
is assumed.

## What is and isn't verified

The kit's preference examples, links, diagrams, and privacy checks are validated.
See the [validation record](docs/VALIDATION.md) for checks and their limits.
The images are **AI-generated design concepts**, not screenshots of a generated
application. A newly generated app still needs the selected platform's native
preview or deployed-browser acceptance checks. This kit does not promise identical
results from every agent, and it does not provision an account or incur hosting charges.

Platform notes link to official documentation and record their check date.
For example, Airtable currently supports image references for Omni-generated
elements, but those custom elements have platform-specific limitations, including
mobile availability. Read the [Airtable guide](platforms/AIRTABLE.md) before choosing it.

## Maintain or extend the recipe

Run `node scripts/validate.mjs` and `node scripts/check-public.mjs` with a current
Node.js LTS runtime. These require no dependencies or server. Run them before
sharing a fork: your filled preferences, imports, credentials and screenshots
belong in your own private project, not in this public template.

MIT licensed. Independent community project. “Trapper Keeper” is a product name
used descriptively; this project is not affiliated with its trademark owner or
with the platform vendors. No vendor logos or original commercial cover artwork
are included.
