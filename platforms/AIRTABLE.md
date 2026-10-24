# Airtable path

Official capability notes checked **October 23, 2026**; recheck before building.

## Start fresh

Create or use the **new base explicitly chosen by the user**. Do not assume any
existing productivity base, personal tracker, source sync, automation or base
merge. Create only the selected entities, then discover their actual IDs and
record them in the generated project's private schema map.

Use `prompts/OMNI_START.md`. Omni supports AI-generated custom interface elements
and uploaded images as visual references. Open the intended base/interface and
review its proposed build plan before building.
[Official guide](https://support.airtable.com/articles/6845086569-AI-generated-interface-elements-in-Airtable).

## Match the requested surface

Ask for an **AI-generated custom interface element** for the fully themed binder.
Standard Interface Designer list/detail pages are a different surface. When
using code, verify the current Interface SDK and supported imports, rather than
copying legacy extension SDK examples. Bundle unsupported local modules into the
delivered file; use the host's supported React/Interface SDK imports.

Configure the element's Data panel: selected tables, fields, filters and sorting.
Missing access must show a setup/permission explanation rather than an invented
zero count. Inline actions and record-detail editing are separate settings;
test both. Implement the task drawer contract in the custom element using actual
supported record updates. Done saves pending edits and completion fields together,
then advances only on success. If that surface cannot support the requested flow,
explain the limit and agree on a specific alternative; a standard detail page is
not proof of custom-drawer behavior. Enable useful editable fields in appropriate
detail pages for other selected entities. Keep computed fields read-only.

## Limits to discuss

Current documentation says AI-generated elements are not available on mobile,
cannot securely hide third-party credentials, and apply only to supported page
types. If mobile is essential, discuss a standard native-page companion or a
standalone app. Do not claim CSS responsiveness removes a host platform limit.
Only authorized data should be exposed to an element, and large tables may
need host filters/field limits.
[Current limitations](https://support.airtable.com/articles/6845086569-AI-generated-interface-elements-in-Airtable).

## Data and validation

- Use linked records for relationships and one authenticated per-user/context
  preference row containing versioned configuration. Include tabs/order, covers,
  layouts, mode and notebook filters as selected. Cache locally only as an optimization.
- Upgrade existing configuration records without resetting user choices; test
  a previous-version fixture through readback and reload.
- Keep journal sections as filtered views over the same native journal records.
  One displayed date page may contain several entries. Store covers/section
  preferences separately; removing navigation never deletes journal entries.
- Use the same dated habit check-in records for Today's checklist and monthly
  history; use actual media statuses for the current shelf when selected.
- Enforce writes through explicit field allowlists and actual SDK permissions.
- If habits are selected, store dated check-ins. Airtable does not provide a
  relational unique index; define a retry-safe check-in writer if uniqueness is required.
- Inspect generated automations before enabling them. External sending is off
  unless selected and explicitly authorized.
- Test in the actual custom-element preview: record expansion, editable details,
  permission-denied actions, Done auto-advance, themes, backend configuration
  persistence/upgrades, all enabled edge tabs, selected personal flows, date boundaries and counts.
- Save a recoverable version and publish only when the user authorizes it.

No native sync is required for greenfield. If the user later requests integration,
use the optional migration playbook and verify current native-sync capabilities.
Do not replace a requested native connection with a custom job silently.

Additional reference: [Using Omni](https://support.airtable.com/articles/1744327578-using-omni-ai-in-airtable).
