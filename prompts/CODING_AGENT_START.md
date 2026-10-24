Read START_HERE.md in this project and conduct its preference interview before
implementation. I am creating a fresh, customized binder-style productivity app.
Do not assume Airtable: ask whether to use Airtable, Cloudflare + Supabase, or
another stack, including my mobile needs and sharing/privacy requirements.

Use docs/PRD.md as a configurable product contract, mockups/ as design direction,
and diagrams/ as workflow intent. Create a build brief in my private generated
project, include only selected modules, and show one representative screen for
approval. My choices override the examples. Read the relevant platform guide and
current official documentation before choosing SDKs, authentication, or deployment.

Separate domain logic from storage. Persist per-user runtime configuration in
backend records, with authenticated ownership and version migrations that preserve
saved choices. Browser storage is a cache. Group Home + Settings and show every
enabled binder-edge tab, including To-do for selected Tasks.

Implement a useful editable task drawer: explicit ordinary field saves, safe
previous/next navigation, and Done saving pending edits plus completion metadata
atomically before advancing on success. A failed save retains the task and draft.
Keep access-controlled Work/Life/All views and useful detail fields throughout.

When selected, Journal is one journal with one page per date, an entry-date mini
calendar, notebook covers and filtered sections over the same records; removing
a section never deletes data. Habits pair Today's quick checklist with monthly
dated history. Media has a current active-item shelf plus its full library.
Build only selected modules and never invent history.

Verify deterministic logic, permission denials, realistic browser flows,
accessibility, and the real preview/deployed surface. Report implemented, tested,
previewed, and deployed states separately. Get authorization for public deployment,
paid services, external sends, destructive changes, or migration cutover.

Default to greenfield. If I request existing-data reuse, first use the optional
migration prompt and preserve originals until a reconciled plan is approved.
