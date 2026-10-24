# Product requirements: a binder that fits its owner

## Purpose

Build a fresh productivity cockpit with the tactile character of a 1990s binder
and the clarity of a modern app. Reduce the effort of choosing the next action;
make it easy to find reference material and keep personal routines in view.
The user's preference profile defines the scope. This is not a requirement to
build every module or use a specific platform.

## Personas and jobs

- **Focused doer:** open the app and identify a manageable next action.
- **Organizer:** find a project, drill into folders, and file a resource without
  losing unfiled material.
- **Personal planner:** separate Work and Life, log a habit or reflection, and
  see both only when desired.
- **Low-stimulation user:** keep the same functions with calmer decoration,
  consistent controls, keyboard access, and fewer visible choices.

## Product choices before implementation

Record platform, mobile needs, solo/shared use, modes, modules, organization,
timezone, task semantics, habit schedule, theme, and density in a build brief.
Greenfield is the default. Migration/integration is a separate opt-in project.
There is no pre-existing source base, task workflow, or automation to preserve
unless the new user specifically introduces one.

## Required shell

- A recognizable binder: cover, ruled page, **three consistent rings**, and
  labeled divider tabs. Right-side tabs replace redundant tab grids on the page.
- Show every enabled section on the binder edge, including a **To-do** tab when
  Tasks is selected. Use an accessible scrollable rail or responsive spacing if
  needed; do not silently hide enabled sections behind a fixed tab limit or More menu.
- A small, clear daily dashboard. Start with three to five useful widgets.
- Work/Life/All modes only if both scopes are selected; custom labels are allowed.
  Filtering follows record scope, not the database where a record happens to live.
- Group Home and Settings in one predictable header control group. Settings
  contains cover, layout and section configuration rather than scattering tools
  across the cover.
- A cover affects the entire visual theme: header, paper, cards, controls,
  accents, foreground contrast, and focus states. Include a light and a dark
  theme if selected, and an independent Calm setting.
- Layout preferences belong to the current user. Persist mode, card order,
  size, theme, density, enabled tabs, tab order and notebook configuration in
  backend preference records. Browser storage may cache them; it is not the
  authoritative store. Shared ordering is an explicit separate feature.
- Version runtime configuration and migrate older records without resetting
  saved choices. Add defaults only for new keys, preserve existing sections and
  covers, and surface an actionable error for unreadable configuration.
- Save only the settings the user changed, merging into the latest backend
  configuration with a revision/conflict policy. Preserve unknown keys and sibling
  notebook/volume settings; stale readback must not restore an older snapshot.
- Visible loading, empty, error, saving, permission-denied, and retry states.

## Module contracts

| Module | Required behavior when selected |
| --- | --- |
| Tasks | Side To-do tab, useful editable task drawer, clear completion/reopening behavior, successful Done advances through the current ordered queue |
| Action pocket | Valid http(s) action link, separate Open and Clicked actions, five-second Undo; opening a link never checks it |
| Projects / Areas | Summary, status where relevant, linked tasks/resources, folder drill-down and breadcrumbs |
| Resources | Search, named collections, cards and compact list; multiple collection membership allowed; Unfiled retains unmatched records |
| Habits | Today's quick checklist plus monthly dated history; definition + schedule + check-ins; explicit Done/Skipped/Unknown semantics |
| Journal | One private journal system, one displayed page per local date, entry-date mini calendar, notebook covers and optional filtered sections |
| Fitness / Nutrition | User-selected logging fields; no invented health advice, goals, or scores |
| Media | Current reading/watching/listening shelf, useful details, title/type/status, optional progress and dates; no fake consumption history |

Do not add a module just because it appears in a concept image. A selected module
must be functional; an omitted module should not leave a dead tab or a misleading
zero counter.

## Task semantics

Agree on status names and the meaning of Done. Suggested defaults: To do,
In progress, Done, On hold. Derive overdue from local today and due date;
exclude Done/On hold. Due today is not overdue. Store completion timestamp
when marking Done, and define whether reopening clears it. A greenfield default
clears current completion fields on reopen while preserving an optional event log.

Priority rules must be deterministic: overdue oldest first; today by priority;
upcoming by due date then priority. Agree on whether a task may appear in multiple
pockets; pocket totals must not be presented as a unique grand total.

For recurrence, select one explicit policy: create next task on completion or
advance an existing instance. Make retries idempotent and preserve occurrence
history if it matters. Do not silently use recurring task state as habit history.

## Record details are part of the feature

Opening any entity must show useful information and allow the intended edits.
Tasks should include title, status, due date, priority, notes, action URL and
relevant relationships. Projects/Areas expose descriptions and linked work.
Resources expose URL/notes/collections. Folders expose their name and parent.
Computed values and audit timestamps remain read-only. A read-only source must
show an explanation and an authorized source link instead of fake edit controls.

For Tasks, use an accessible pop-out detail drawer with previous/next controls
following the current view's order. Save ordinary field edits explicitly. Choosing
Done saves pending edits and agreed completion fields together, then advances only
after the write succeeds. The final task closes the drawer or shows a clear
finished state. Other status changes can save immediately without discarding a
field draft. Failed saves retain the current task and draft with retry guidance.
Close and manual navigation protect unsaved changes; saving prevents accidental
double submission or closing mid-write. Restore focus when the drawer closes.

## Personal pages when selected

Journal tabs are views of one journal, not separate copies or tables per notebook.
Group all entries for the selected local date into one page. A small calendar
marks dates that actually contain entries under the active filter and lets the
user jump to a date. Offer notebook/volume covers and filtered sections, such as
one tag or topic; provide a compact picker with several original small notebook
covers. Additional journal sections clearly show their tag filter and read the
same entries. Keep the date, active filter and ownership clear. Removing a
section only removes navigation and its preferences, never the journal entries.
Archiving a notebook volume likewise organizes navigation without erasing data.

Today's habits show a quick checklist for eligible habits with saved completion
and skip state. The full Habits section provides monthly dated history and
authorized corrections. Both surfaces read and write the same check-in evidence.
Define what toggling a completed item back does; do not turn missing days into Done.

A selected Media module has a current shelf based on actual active statuses,
with relevant progress and a detail or safe source-link action. Finished and
planned items remain available in the full library; the shelf is a filtered view.

## Rearrange and resize

Dragging shows the moving card and clear drop target. Offer keyboard equivalents
and explicit Save/Cancel. Width choices can be small/medium/full; height is bounded.
Cancel restores the saved layout. Handle delayed persistence notifications so
older readback cannot overwrite a recent local choice. One user's layout changes
must not silently reorder everybody's data.

## Access and trust

All views, counts, search, details and exports respect the same access policy.
All is a union of authorized scopes, not a permission bypass. Private journals
and personal logs do not become shared merely because a team workspace exists.
Use the platform's authenticated identity, not a browser-provided owner ID.
Writes use explicit field allowlists; credentials never enter browser bundles.
External notifications and integrations are off by default.

## Completion criteria

Use `docs/ACCEPTANCE.md` against the selected feature set. Demonstrate one real
editable record flow, one denied edit, theme/layout persistence after reload,
correct date boundaries, and selected habit logic. Validate browser behavior at
the chosen viewport and in the intended platform. Document measured performance
and dataset size; do not claim a universal subsecond load time.

Deliver source/configuration, schema mapping, setup instructions, test evidence,
rollback notes, and a concise user guide in the generated private project.
