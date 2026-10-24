# Validation of the public recipe

Checked October 24, 2026. This validates the **recipe and reference assets**, not
an app that a future agent generates for a new user.

The recipe now specifies Appearance presets, scoped colors, private image
libraries, readable panel surfaces, backend configuration upgrades and field-scoped saves,
all enabled binder-edge tabs, the task drawer/Done queue, unified dated journal
pages and filtered sections, Today's habits/monthly history, and a current media
shelf. Updated Mermaid sources and SVGs express these contracts. The refreshed 6.5-second demo and two current component stills use fictional
records. Existing concept images and these reference captures do not demonstrate
every new requirement. No generated app deployment or account mutation is implied.

- Fifteen deterministic profile-contract tests pass, covering invalid choices,
  scope selection, missing modules, habit history, undefined streak policy,
  timezone errors, custom tabs, platform/device mismatch, legacy profiles and
  optional appearance/image feature dependencies.
- Both fictional preference profiles validate against the schema and semantic rules.
- Local Markdown links resolve. All JSON parses. The portable recipe is rebuilt
  from source documents with correctly rooted links.
- Eight Mermaid diagrams render successfully to SVG, and rasterized review
  images were inspected for labels, arrows and clipping.
- Three AI-generated concept PNGs were visually reviewed: Work, Life and setup.
  They use fictional copy; source prompts and generation model are documented.
- Public text scans find no configured live provider identifiers, credential
  tokens, private hostnames/LAN addresses, operator filesystem paths or key material.
  PNGs contain no text/Exif metadata. Visual review is still required alongside scans.
- The public repository starts with fresh Git history and a generic contributor
  identity. No personal installation source history or operational exports are copied.
- The short video is a real component/browser capture with fictional data, not
  AI-generated video. Encoded frames and metadata were reviewed; duration 6.5 s,
  1920 × 1080, H.264, 30 fps, one video stream, no audio. Capture checks report
  correct tab/theme states, saved fixture preference, no browser errors or off-origin requests.

Reproduce static checks with:

```sh
node scripts/build-recipe.mjs
node --test tests/*.test.mjs
node scripts/validate.mjs
node scripts/check-public.mjs
```

`tests/INTAKE_SCENARIOS.md` supplies manual agent-evaluation cases. They have not
been represented as automated Omni, Cloudflare or Supabase deployments. Use the
selected platform guide and `docs/ACCEPTANCE.md` to validate each generated app.
