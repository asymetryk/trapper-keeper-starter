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
- [ ] Task drawer exposes useful editable fields, previous/next controls, native keyboard/focus behavior and clear source context.
- [ ] Ordinary field edits save explicitly; Done saves pending fields plus completion metadata atomically, then advances through the current ordered queue only after success.
- [ ] Last-task behavior is clear; failed completion stays on the same task with its draft and retry available.
- [ ] Closing or manually navigating protects unsaved edits; busy saves prevent duplicate submissions and accidental close.
- [ ] Due-today, overdue, on-hold, no-date and timezone-midnight edge cases pass.
- [ ] Failed and repeated writes cannot leave false optimistic state or duplicate effects.

## Organization and optional modules

- [ ] Folder drill-down, breadcrumbs, search, sort, archive behavior and cycle rejection work.
- [ ] Resource collections, multi-membership, compact list and Unfiled retain all records.
- [ ] Habits have dated, idempotent check-ins and tested scheduled/skip/missing-day rules.
- [ ] Today's habit checklist and monthly history agree after save/reload; quick actions and historical corrections use the same evidence.
- [ ] Journal and personal logs remain private in shared configurations.
- [ ] Journal shows all matching entries for one local date on one page; mini-calendar dates reflect actual filtered entries and are keyboard navigable.
- [ ] Several compact notebook-cover choices and explicit tag-filtered sections persist; two sections can view the same journal without copying records.
- [ ] Removing a journal section or archiving a volume leaves entries available in another view and after reload.
- [ ] Current media shelf follows agreed active statuses; planned and finished items remain accessible in the library.
- [ ] Progress, totals, streaks and activity use actual evidence, never sync time or fabricated history.

## Appearance and persistence

- [ ] Light/dark preset previews affect the whole theme; Save persists and Cancel restores.
- [ ] Selected custom colors cover desk, cover, paper/rules, cards, actions, heading strips, folders and independent drawer/settings surfaces; per-tab colors stay separate.
- [ ] Every foreground matches its actual fill, including typed Journal text, calendar dates/dots, task headers, disabled controls, habit cells and native date-picker icons. Test extreme mixed light/dark palettes visually as well as with accessibility tools.
- [ ] Decorative chrome compacts without shrinking approved reading sizes. Ordinary long titles fit; exceptional titles, long tab lists and saved compact widgets remain usable with fixed actions.
- [ ] Selected personal pictures upload through a supported authorized library; the appearance draft survives leaving/returning from a native uploader.
- [ ] Cover/background/paper/panel fit, position and strength preview correctly; opaque reading plates preserve text contrast and Calm hides images without deleting them.
- [ ] Backend settings contain stable owned asset references and display options, never file bytes or expiring URLs. Fresh-session, expired, denied and removed-image cases resolve current access or show the preset.
- [ ] Undo, scoped/all appearance resets, save failures and observed concurrent changes retain unrelated settings and uploads; unsupported newer appearance versions are view-only.
- [ ] Calm, density, mode and per-user layouts survive reload without crossing users.
- [ ] Theme, layout, tabs and notebook settings read back from backend preference records and survive a fresh browser session; browser storage alone is insufficient.
- [ ] A previous-version configuration upgrades and reloads without resetting custom tab IDs/order, covers, notebook filters or existing values.
- [ ] Unknown/future or invalid configuration exposes recovery and does not silently overwrite stored choices with defaults.
- [ ] Independent settings saves preserve unknown keys and sibling notebook/volume settings; stale responses cannot restore an older snapshot over a newer revision.
- [ ] Home and Settings are grouped; the side To-do tab opens the scoped task list; every enabled section is reachable directly on the binder edge.
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
