# Preference interview

Start with the five questions in `START_HERE.md`. This is a follow-up guide,
not a mandatory long form. Ask only questions that change the selected build.

| Area | Ask | Suggested default if accepted |
| --- | --- | --- |
| Stack | Airtable, Cloudflare + Supabase, or another stack? | No silent default; help compare if unsure |
| Devices | Desktop browser, mobile browser, native mobile? | Desktop browser first |
| People | Solo, shared workspaces, or both? | Solo, authenticated, private |
| Scope | Work, Life, both, or custom labels? | Both only if requested |
| Modules | What actually belongs in version one? | Tasks + resources, optional projects |
| Organization | PARA, simple lists, custom tabs? | User choice; avoid duplicate navigation |
| First screen | What three things should be immediately visible? | Today, overdue, next actions |
| Task states | Which states, completion rules, reopen behavior? | To do / In progress / Done / On hold |
| Action queue | Separate link opened vs action completed? | Open has no side effect; Clicked has Undo |
| Recurrence | New occurrence or advance existing task? | Off unless selected |
| Habits | Which schedules, targets, skip policy, timezone? | Dated daily check-ins; no streak until rules are defined |
| Privacy | What can teammates see or edit? | Personal records private; explicit shared work |
| Appearance | Original retro cover, dark/light options, density, Calm? | One light, one dark; comfortable spacing |
| Layout | Reorder, resize, per-user vs shared? | Per-user widget layout; no shared record reordering |
| Dates | IANA timezone, date display, week start? | Ask timezone; locale-appropriate display |
| Data | Fresh start, import later, or migration now? | Fresh start, empty production data |
| Rollout | Preview location, deployment permission, budget? | Preview first; no paid provisioning or public deployment assumed |

Use follow-ups in small batches. Example:

> You selected habits. Should these be daily, selected weekdays, or weekly targets?
> What timezone defines a day, and should a deliberate skip break a streak?

When the user chooses “sensible defaults,” state the defaults in the build brief.
Never fill in a timezone, privacy policy, recurring schedule or imported data
meaning as if the user had confirmed it.

Avoid sensitive intake. You need field shapes and privacy preferences, not
private journal text, medical details, account passwords or production API keys.
