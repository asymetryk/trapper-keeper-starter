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
| UserPreference | authenticated user, screen/context, versioned layout JSON, theme, Calm, density, mode; unique user/context |
| Habit | id, ownership, title, active, schedule, target/unit, start date, IANA timezone |
| HabitCheckIn | id, habit, local_date, outcome Done/Skipped/Unknown, amount, notes, recorded_at; unique habit/local_date for daily grain |
| JournalEntry | id, private owner, local_date, content, optional mood/tags |
| FitnessEntry | id, ownership, local_date, activity, duration, optional notes |
| MediaItem | id, ownership, title, type, status, progress, started/completed dates |
| NutritionEntry | id, ownership, local_date, meal label, selected logging fields, notes |

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

## Adapter boundary

Expose list/query, expand/read detail, permission checks, update, and preference
save operations. Domain UI should not contain base IDs, database secrets, or
direct privileged API calls. Use versioned preference JSON with safe fallbacks.
Serialize concurrent saves and reconcile delayed readback without losing recent
changes. Keep status writes atomic; optimistic errors restore prior UI state.

For a relational store, use foreign keys, uniqueness and ownership policies.
For Airtable, use linked records, filtered views and explicit permissions; enforce
any missing uniqueness/idempotency guarantees in an approved backend or controlled
automation when required. Do not claim Airtable enforces a SQL-style unique constraint.
