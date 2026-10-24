# Logical model, independent of storage

These are conceptual entities, not mandatory tables. Materialize only the selected
modules. Let the platform adapter map these names to real table/column identifiers.
Do not copy another installation's IDs or prepopulate production data.

| Entity | Key fields and relationships |
| --- | --- |
| Task | id, owner/workspace, scope, title, status, priority, due_date, notes, action_url, clicked, completed_at, project/area/folder links |
| Project | id, ownership, scope, name, description, status, optional area |
| Area | id, ownership, scope, name, description, archived |
| Folder | id, ownership, scope, name, section, parent folder/project/area, order, archived |
| Resource | id, ownership, scope, title, url, notes, format, area links |
| ResourceCollection | resource_id + folder/collection_id; unique pair |
| UserPreference | authenticated user, screen/context, schema version, layout JSON, theme, Calm, density, mode, enabled sections/order, notebook filters/covers/archive preferences; unique user/context |
| Habit | id, ownership, title, active, schedule, target/unit, start date, IANA timezone |
| HabitCheckIn | id, habit, local_date, outcome Done/Skipped/Unknown, amount, notes, recorded_at; unique habit/local_date for daily grain |
| JournalEntry | id, private owner, local_date, content, optional mood/tags |
| FitnessEntry | id, ownership, local_date, activity, duration, optional notes |
| MediaItem | id, ownership, title, type, status, progress, started/completed dates |
| NutritionEntry | id, ownership, local_date, meal label, selected logging fields, notes |

Runtime preferences are durable backend rows/records, scoped to authenticated
identity and context. Local storage is an optional cache. The public build
profile is an input to generation, not the runtime preference database.

Keep a configuration schema version and explicit upgrade functions. Migrations
preserve known user values, merge defaults only for missing new keys, and retain
stable section IDs so renaming/reordering does not create duplicates. Do not
rewrite a failed or future-version record with empty defaults. Preserve the
previous valid configuration and expose recovery rather than resetting the binder.
Test a prior-version fixture through upgrade, save and reload, including custom tabs.

Preference writes patch only changed fields against the latest stored revision.
Merge nested notebook/volume preferences at the appropriate key, preserving
unknown fields and sibling settings. Use an explicit revision/conflict policy
and reject or reconcile stale results so older readback cannot undo a newer save.
QA must use fictional preference records, not restore snapshots over real users' settings.

Daily check-in uniqueness is not enough for several daily occurrences: if the user
chooses that schedule, add an occurrence/slot key and define aggregation first.
Weekly targets likewise need a defined week boundary and eligible period.

## Domain rules

Scope and provenance are separate: a Work task imported from a personal tool is
still Work. Storage location does not grant editing rights. Unclassified items
remain visible in an inbox with an explicit label; never silently discard them.

Use calendar dates for deadlines and check-in days. Use instants for audit events.
Convert instants with the user's timezone before determining “today.” A sync/import
timestamp is not evidence that the underlying activity occurred then.

Cycles in folder ancestry must be rejected. Define a maximum visible drill depth;
deeper items can open a detail view. Multi-collection resources appear once in a
compact all-resources list and once per relevant collection, without inflating
unique totals. Deleted/unknown collection links return records to Unfiled.

Habit streaks count only scheduled, evidenced periods under the agreed skip and
missing-data policy. Unknown is not Done. Never manufacture historical check-ins
from a current Completed checkbox, task frequency, or imported schedule.

Today's checklist and the monthly habit grid query the same check-in records.
Use the same idempotency and ownership rules for quick actions and history edits.

Journal pages group authorized entries by owner and local date; multiple entries
on one date appear on one displayed page. Notebook sections store filters and
presentation preferences, not duplicate journal content. Removing a section or
archiving a volume does not delete entries. The mini calendar derives marked
dates from entries matching the active filter, not from sync or creation times.
The media shelf similarly derives current items from agreed active statuses.

## Adapter boundary

Expose list/query, expand/read detail, permission checks, update, and preference
save operations. Domain UI should not contain base IDs, database secrets, or
direct privileged API calls. Use versioned preference JSON with safe fallbacks.
Serialize concurrent saves and reconcile delayed readback without losing recent
changes. Keep status writes atomic; a Done request can include pending editable
fields and completion metadata in one allowed write. Advance the drawer only
after success, using the current filtered/sorted queue; optimistic errors retain
the current task and draft. Never use an unrelated record update as completion proof.

For a relational store, use foreign keys, uniqueness and ownership policies.
For Airtable, use linked records, filtered views and explicit permissions; enforce
any missing uniqueness/idempotency guarantees in an approved backend or controlled
automation when required. Do not claim Airtable enforces a SQL-style unique constraint.
