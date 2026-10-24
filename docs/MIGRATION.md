# Optional migration playbook

**Not part of a fresh build.** Use only when the user asks to bring existing data.
The new app can start empty and add a migration later. No specific provider,
number of sources, sync direction or source-of-truth change is predetermined.

## 1. Inventory and intent

Ask which systems hold useful data, what should move, who owns it, and what must
remain private. Choose among a one-time import, read-only connection, staged
transition, or ongoing sync. Identify API/export access, plan limits, attachments,
formulas, linked records, recurring jobs, notifications and external consumers.
Keep unknown dependencies in an explicit retention list.

## 2. Recoverable plan

Take an export/backup appropriate to each system before mutation. Record counts,
IDs, timestamps and access policies. A backup with enabled copied automations can
send unexpected actions; verify copied triggers are disabled where applicable.
Do not claim a provider's export includes interfaces, automations, attachments
or revision history without checking its actual coverage.

## 3. Mapping contract

| Mapping concern | Required decision |
| --- | --- |
| Identity | Source system + entity + immutable source ID → destination ID |
| Scope | Explicit Work/Life/Unclassified mapping; no inference from storage location |
| Dates | Calendar date vs instant, IANA timezone, DST, missing dates |
| Relationships | Two-pass entity creation/link reconciliation; preserve dangling references |
| Status and recurrence | Explicit meaning, completion history, next occurrence policy |
| Habits | Import real check-in history only; current checkbox is not historical evidence |
| Duplicates | Exact/possible duplicate policy; preserve ambiguous matches for review |
| Attachments | Durable files, permissions, hashes, expiring URL handling |
| Access | Private owners, workspace membership, export/redaction rules |
| Ongoing sync | Direction, source of truth, retries, conflicts and delete propagation |

Use `examples/migration-map.example.json` as a shape, not an automatic mapping.
Keep actual mappings and imports in the user's private generated project.

## 4. Staging and reconciliation

Import a representative fictional or authorized staged sample. Run a dry run
before production writes. Use an idempotent mapping ledger so reruns do not
duplicate records. Reconcile unique record counts, projected cell values, links,
attachment availability, privacy and source URLs. Test error recovery and retries.
Report exclusions and transformations explicitly; “import finished” is not a
reconciliation result.

## 5. Cutover and rollback

Present a concrete plan for user approval: freeze window if needed, final delta,
one active writer, disabled legacy actions, verification, rollback trigger and
destination-to-source ID map. Read-only integration can preserve the source as
authoritative; migration may change it only with an explicit decision.

Retire sources, tables or automations only after their consumers and unique data
are accounted for. Never treat absence of recent run history or recent records
as proof of non-use. Keep uncertain dependencies until resolved. Preserve original
records until the user approves their disposition.

## Deliverable

Source inventory, mappings, backup manifest, dry-run receipts, reconciliation
report, unresolved retention list, cutover steps, rollback plan, and owner sign-off.
