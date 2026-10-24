# Appearance contract

Use this when customization is selected in the build brief. It describes a
portable behavior contract; it does not assume a particular base, backend,
existing data source or connected application.

## Presets first, then individual choices

Group **Presets / Colors / Pictures** inside Settings → Appearance. Offer a small
coordinated light/dark set with original geometric artwork. The reference UI has
thirteen presets, including Laser Grid, Mall Pastels, Composition Club and
Sunset Surf. A generated app can use the user's chosen names and count.

Let presets coordinate the whole stationery system. Custom color groups cover:

- Surrounding background, cover, edge and decorative highlights.
- Paper background, rules and margin line.
- Card/field fill, secondary fill and borders.
- Main action buttons, heading/callout strips and folder colors.
- Independent task drawer and configuration-panel backgrounds, fields and buttons.

Per-tab color choices remain separate. Keep error/overdue and completion cues
meaningful; retain labels/icons so color is never the only signal. Derive primary,
secondary, link and focus colors separately for paper, cards, soft surfaces and
panels. Native date controls also follow the actual field fill, not just the
preset's name. Optional manual text colors need a readable contrast check and
an automatic repair action before saving.

Preview the actual binder, task drawer and settings examples. Provide Undo,
section resets and an all-appearance reset. Selecting a preset can clear color
overrides while preserving pictures; state that behavior. Save commits only
Appearance. Cancel/Escape discards only the open draft. Failed saves retain the
draft and underlying actionable cause. A stale observed revision must not erase
another settings change. A newer unsupported configuration remains view-only.

## Personal pictures when selected

Provide an authorized image library using the selected platform's supported
upload path. Do not invent an SDK upload API or place privileged keys in a browser.
An Airtable build can open its native attachment editor and keep the Appearance
draft mounted while the user uploads and returns. A standalone app can use the
chosen authenticated asset store. Upload and preference-save permissions are
separate; explain unavailable actions instead of displaying fake controls.

Destinations are cover, surrounding background, paper texture and panel texture.
Offer fill/contain, anchor position and strength; repeat is useful for textures.
Keep solid reading plates over decorative layers, including coherent panel body,
header and footer surfaces. Changing picture strength never fades text. Calm
hides saved pictures and decoration without deleting them. Missing, denied,
removed or expired assets fall back to the preset surface.

Persist a stable owned asset reference and fit/position/strength only. Resolve
current authorized URLs during rendering and after a fresh session. Do not save
file bytes, temporary URLs or access tokens in preference JSON. Removing a
picture from a destination does not delete it from the library; library removal
is a separate supported action. Resetting appearance never removes task records,
notebooks, other settings or uploaded assets.

A conceptual runtime fragment, not a live provider configuration:

```json
{
  "version": 1,
  "preset": "ocean",
  "colors": {"paper": "#fff8ed", "action": "#165b69"},
  "panels": {"paper": "#19283d", "surface": "#fff8ed"},
  "pictures": {
    "cover": {"assetId": "sample-cover", "fit": "cover", "position": "center", "strength": 100}
  }
}
```

The build-profile booleans select which controls to generate. This runtime
fragment is a separate versioned document in that generated app's private store.

## Polish and verification

Reduce decorative cover/ring/padding geometry independently of reading sizes.
Keep the chosen base, task title, field and journal writing sizes unchanged while
adjusting density. Test at the agreed viewport and 100% browser zoom.

Ordinary long task titles grow on open, input and width/font changes. Bound
exceptional text with scrolling, not smaller type. Keep Status/Priority and
Due/Link balanced, with concise effective-date context and expandable help.

Settings headers/actions stay visible around one scroller. Long tab lists, the
last custom section, save errors and validation remain usable. At the default
Today's habit widget height, show at least two ordinary rows and retain controls;
respect explicitly saved compact sizes and scroll longer names/lists.

Check Classic/light, Galaxy/dark and an extreme mixed palette across dashboards,
Resources, drawer, Journal editor/calendar, Habits and every settings screen.
Inspect typed text and selected/disabled controls as well as empty fields.
Accessibility scanners can miss contrast failures behind image layers; inspect
actual rendered screenshots. Test a fresh-session upload/readback, failed save,
concurrent edit, denied/deleted asset, Calm, resets and sibling-setting retention.

See [Acceptance](ACCEPTANCE.md), [Airtable](../platforms/AIRTABLE.md) and
[Cloudflare + Supabase](../platforms/CLOUDFLARE_SUPABASE.md) for selected-runtime
verification. Reference captures use fictional records and browser-local storage;
they do not prove a generated app's backend or authorization.
