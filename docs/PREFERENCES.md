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
| Configuration | Which choices should follow the user across devices? | Backend records for theme, layout, mode, tabs and notebook preferences; migrate versions without reset |
| Navigation | Which selected sections belong on the edge? | Every enabled tab visible, a side To-do tab for Tasks, Home + Settings grouped |
| Task detail | Which useful fields are editable, and what follows Done? | Drawer with explicit field save; Done saves pending edits and advances after success |
| Journal | One dated notebook, topic sections, calendar, covers? | One journal with one page per local date, entry-date mini calendar, optional filtered sections; removing a tab keeps entries |
| Habit surfaces | What belongs on Home vs history? | Today's eligible checklist on Home; monthly dated history in Habits |
| Media shelf | Which statuses mean currently reading/watching/listening? | Filter real active items; keep planned/finished items in the library |
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

The public preference-profile schema captures build choices. The generated app
also needs its own versioned runtime configuration records; these are distinct
from this interview file and must not depend on a browser cache for durability.
