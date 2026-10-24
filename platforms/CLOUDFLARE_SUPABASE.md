# Cloudflare + Supabase path

Official capability notes checked **October 23, 2026**; verify current SDKs,
framework guidance, quotas and billing before provisioning.

## Starting architecture

Use a small React web app, a storage adapter and Supabase Postgres/Auth. Cloudflare
Workers can serve frontend static assets and optional API routes; use the current
official React/Vite foundation rather than inventing a deployment harness.
[Cloudflare React guide](https://developers.cloudflare.com/workers/framework-guides/web-apps/react/),
[static assets](https://developers.cloudflare.com/workers/static-assets/).

This is a suggested path, not a requirement to add a backend endpoint for every
database query. Authenticated browser access can use Supabase's client with a
publishable key and correctly tested row-level security. Privileged operations,
webhooks or third-party secrets belong in an authenticated server/Worker route
when needed. Avoid duplicate ownership rules across client and server.

## Fresh data model

Translate selected entities from `docs/DATA_MODEL.md` into migrations. Choose
UUIDs or another stable key policy; foreign keys, uniqueness, indexes, timestamps
and local calendar dates must match the domain contracts. Add only selected
modules, with no import jobs or source-system assumptions.

Daily habit check-ins use a unique `(habit_id, local_date)` key. Use a transactional
upsert or equivalent idempotent operation. Different schedules may require an
occurrence key and explicit period aggregation. Completion/reopen writes should
be transactional and concurrent updates should have a conflict policy.

## Identity and private data

Enable RLS on exposed tables and enforce ownership/workspace membership on both
reads and writes, including related entities. Derive ownership from authenticated
identity. A publishable key is not a substitute for authorization. Secret/service
role keys bypass RLS and must never appear in browser code, logs or this kit.
[RLS guide](https://supabase.com/docs/guides/database/postgres/row-level-security),
[API-key security](https://supabase.com/docs/guides/getting-started/api-keys).

Test as user A and user B: B cannot read or update A's personal tasks, habits,
journal, layouts or logs. Shared Work does not make private Life visible in All.
Check update ownership transfer and linked-record access as well as initial reads.
For solo use, an authenticated private app is the suggested default.

## Build and preview

Use environment-scoped configuration, database migrations and the selected secret
store. Keep production credentials separate from fictional fixtures. Confirm
which compute/preview environment the user permits before starting hosting.
Do not assume paid provisioning, public access, a domain or automated deployment.

Test the app in an actual preview deployment, including auth redirects, persisted
edits, reload, access denial, mobile browser layout if selected, and optional
realtime updates. Client-side success alone is not durable database readback.
Use `docs/ACCEPTANCE.md`; document rollback for app and schema changes before release.
