# Choose the platform before the schema

| Path | Good fit | Decisions to resolve |
| --- | --- | --- |
| Airtable | A binder inside an editable, linked-record workspace; Omni-assisted building | Custom-element device limits, data exposure, permissions, record-detail configuration |
| Cloudflare + Supabase | A standalone web app with custom navigation, mobile browser support and explicit auth/data ownership | Authentication, RLS, hosting, preview environments, database migrations and costs |
| Another stack | Existing team expertise or a specific deployment constraint | Equivalent storage, auth, authorization, secrets, preview and acceptance contracts |

The logical product model is portable. The adapters and deployment steps are not.
No platform-specific SDK import belongs in a universal domain contract. Verify
current official APIs and plan limits at build time, and keep credentials out of
the interview and public recipe.

The kit does not include a pre-provisioned account or production deployment.
Only the chosen path should be implemented. For the two documented paths, start
with [Airtable](AIRTABLE.md) or [Cloudflare + Supabase](CLOUDFLARE_SUPABASE.md).
For an unsupported stack, complete [the adapter checklist](OTHER_STACKS.md).
