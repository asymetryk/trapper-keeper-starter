Read START_HERE.md in this project and conduct its preference interview before
implementation. I am creating a fresh, customized binder-style productivity app.
Do not assume Airtable: ask whether to use Airtable, Cloudflare + Supabase, or
another stack, including my mobile needs and sharing/privacy requirements.

Use docs/PRD.md as a configurable product contract, mockups/ as design direction,
and diagrams/ as workflow intent. Create a build brief in my private generated
project, include only selected modules, and show one representative screen for
approval. My choices override the examples. Read the relevant platform guide and
current official documentation before choosing SDKs, authentication, or deployment.

Separate domain logic from storage. Implement allowed record actions, useful
editable details, per-user cover/layout persistence, access-controlled Work/Life/All
views, and dated habit check-ins only when selected. Never invent history.

Verify deterministic logic, permission denials, realistic browser flows,
accessibility, and the real preview/deployed surface. Report implemented, tested,
previewed, and deployed states separately. Get authorization for public deployment,
paid services, external sends, destructive changes, or migration cutover.

Default to greenfield. If I request existing-data reuse, first use the optional
migration prompt and preserve originals until a reconciled plan is approved.
