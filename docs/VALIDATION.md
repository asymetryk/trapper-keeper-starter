# Validation of the public recipe

Checked October 23, 2026. This validates the **recipe and reference assets**, not
an app that a future agent generates for a new user.

- Ten deterministic profile-contract tests pass, covering invalid choices,
  scope selection, missing modules, habit history, undefined streak policy,
  timezone errors, custom tabs and platform/device mismatch.
- Both fictional preference profiles validate against the schema and semantic rules.
- Local Markdown links resolve. All JSON parses. The portable recipe is rebuilt
  from source documents with correctly rooted links.
- Seven Mermaid diagrams render successfully to SVG, and rasterized review
  images were inspected for labels, arrows and clipping.
- Three AI-generated concept PNGs were visually reviewed: Work, Life and setup.
  They use fictional copy; source prompts and generation model are documented.
- Public text scans find no configured live provider identifiers, credential
  tokens, private hostnames/LAN addresses, operator filesystem paths or key material.
  PNGs contain no text/Exif metadata. Visual review is still required alongside scans.
- The public repository starts with fresh Git history and a generic contributor
  identity. No personal installation source history or operational exports are copied.
- The short video is a real component/browser capture with fictional data, not
  AI-generated video. Encoded frames and metadata were reviewed; duration 6.467 s,
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
