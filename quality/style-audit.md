# Apple Provider style-only audit

Strictly READ ONLY in style-audit mode. Do not rewrite page templates or change product UX. Never report an upstream style-conformance PASS solely because shadcn or Motion is installed.

## Inspect

- Chosen visual family/preset and actual installed components vs project-approved DESIGN.md. A bespoke brand override may be intentional; do not mark it automatically wrong.
- Consistency of component states: default/hover/selected/focus/disabled/busy/error, rounded surfaces, typography hierarchy, density and Light/Dark.
- Motion: origin, causality, correct final state, rapid repeated toggles, focus restoration, reduced-motion, interruption, cross-layout continuity.
- UI shell: content before chrome; no fake Mac menu bar/traffic lights/Dock; no accidental one-size-fits-all KPI dashboard.
- Actual browser state evidence: viewport, zoom, theme, interaction, element/selector, screenshot path when available. If no browser, explicitly label source-only findings.

## Output

For each issue: severity (P0 task/accessibility blocker, P1 noticeable inconsistency or bad motion, P2 refinement), file/line or element, observed behavior, expected accepted-style behavior, safe proposed fix and how to verify. Report intentional project exceptions rather than overriding them.

`style_conformance: pass | warnings | fail | not-tested` with actual evidence. This does **not** replace product-ui's business/UX checks, Hallmark read-only AI-slop audit or Impeccable critique/audit.
