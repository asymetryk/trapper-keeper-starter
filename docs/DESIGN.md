# Design direction

The visual promise is a familiar binder, not a dashboard wearing a decorative
border. Make the cover, paper, tab colors and controls feel like one system.
Use `mockups/` as concepts and let the user choose or change the direction.

## Structure

- One cover header: title, local date, a small number of useful counters, tools.
- Three evenly spaced rings aligned to the left spine; the same geometry across views.
- Ruled paper with generous inner margins, readable text and crisp focus states.
- Right-side divider tabs for the selected organization. Do not repeat a large
  PARA navigation grid inside the page when the same tabs are already visible.
- Mode switch above the page content; hide it for a one-mode build.
- Cards for glanceable work; compact lists for dense references. Detail views
  carry full notes, relationships and edits rather than squeezing everything onto cards.

## Themes

Define semantic tokens: cover, paper, surface, soft, ink, muted, border, action,
action-ink, focus, overdue, overdue-ink, and divider colors. Test contrast for
each foreground/background pair, especially dark themes and status pills.

Suggested original concepts: Ocean (teal/coral), Memphis (bright geometric),
Galaxy (deep night colors), Quiet Paper (minimal). No licensed character art,
vendor logos or copied commercial binder illustrations are needed.

Cover selection previews on hover **and keyboard focus**, saves explicitly, and
Cancel/Escape restores the saved theme. Calm reduces decoration and motion without
removing useful controls. Respect reduced-motion preferences. Avoid gratuitous
entrance animation, perpetual sparkle, flashing surfaces, or layout-shifting effects.

## Interaction

Use native elements or proven accessible primitives for dialogs, menus and forms.
Every icon-only control needs a name. Dialogs manage focus and return it to the
trigger. All drag actions have keyboard alternatives. Announce saves/errors
without making transient toasts the only place important information appears.

Rearrange mode is visually distinct: move handle, moving-card preview, drop
target, bounded resize, Save and Cancel. A drag reorders layout; filing a resource
changes collection membership. Do not conflate the two actions.

## Review before propagation

Show one screen at the agreed viewport. Review it as a focused doer, an organizer,
and a low-stimulation user: can each identify the next action, find a record,
and tell what is editable? Resolve clipping, clutter, misleading metrics and
contrast issues before generating every module. Use actual browser screenshots
for implementation QA; concept images cannot prove behavior.
