# Acceptance checklist for a generated app

Mark unselected modules N/A. Record the runtime, viewport, data fixture and exact
evidence; a code diff alone is not a browser test.

## Product and data

- [ ] Preference profile and build brief match the user's answers and selected stack.
- [ ] Only selected modules/tables/tabs exist; omitted features leave no dead controls.
- [ ] Work/Life/All scopes and counts are correct, including unclassified records.
- [ ] All views, detail views, search and counts obey the same access rules.
- [ ] No production records, integrations or notifications were created for QA without authorization.

## Tasks and details

- [ ] Title opens the correct entity, with useful fields and the intended edit controls.
- [ ] Status, due date, priority, notes, URLs and relationships save and read back.
- [ ] Computed/audit/unauthorized fields remain read-only; denial creates no write.
- [ ] Open accepts valid http(s) URLs and does not set Clicked.
- [ ] Clicked removes the intended action; actual Undo restores it within the agreed window.
- [ ] Undo test waits for save completion and verifies the actual Undo action, not a manual uncheck.
- [ ] Done/reopen rules match the brief and preserve or clear history as agreed.
- [ ] Due-today, overdue, on-hold, no-date and timezone-midnight edge cases pass.
- [ ] Failed and repeated writes cannot leave false optimistic state or duplicate effects.

## Organization and optional modules

- [ ] Folder drill-down, breadcrumbs, search, sort, archive behavior and cycle rejection work.
- [ ] Resource collections, multi-membership, compact list and Unfiled retain all records.
- [ ] Habits have dated, idempotent check-ins and tested scheduled/skip/missing-day rules.
- [ ] Journal and personal logs remain private in shared configurations.
- [ ] Progress, totals, streaks and activity use actual evidence, never sync time or fabricated history.

## Appearance and persistence

- [ ] Light/dark cover previews affect the whole theme; Save persists and Cancel restores.
- [ ] Calm, density, mode and per-user layouts survive reload without crossing users.
- [ ] Pointer and keyboard rearranging work; resize is bounded; Cancel discards changes.
- [ ] Slow preference readback cannot overwrite recent local choices.
- [ ] Primary viewport has no overlap, clipping or horizontal overflow.
- [ ] Keyboard navigation, dialog focus, labels, contrast and reduced motion pass review.
- [ ] Loading, empty, saving, error and denied states are understandable and actionable.

## Runtime and release

- [ ] Static/deterministic tests and browser checks pass with realistic fictional fixtures.
- [ ] The actual Airtable preview or deployed web preview is exercised, not only a mock.
- [ ] Supabase RLS/ownership tests include a second unauthorized user when that stack is chosen.
- [ ] Performance is measured with stated dataset size; host/network and app timings are distinguished.
- [ ] Browser bundle contains no secrets or privileged keys; external requests are expected and documented.
- [ ] User has authorized the actual publish/deploy action and any costs.
- [ ] Source/configuration, schema mapping, setup, rollback, limits and user guide are delivered.

## Optional migration only

- [ ] Dry run reconciles unique counts, field values, links, attachments, access and date conversions.
- [ ] Duplicate/conflict policy, ID map, source preservation, rollback and cutover are approved.
- [ ] No source retirement or destructive cleanup happens on an inferred dependency decision.
