# Visual regression and comparative review

Before/after must hold **same** viewport, device scale, font, representative fixture, scroll position, theme, density, open overlay and selected item. Compare screenshot pixels where available, but do not equate pixel difference with design regression; review meaningfully.

## Screenshot matrix

- Wide desktop overview: 1692×960, light/comfortable.
- Dense list: 1920×960, light/compact.
- Dark major screen: 1440×900, dark/comfortable.
- Narrow: 750×900, any relevant theme, nav collapsed/overlay.
- Interaction states: selected row, error field, open popover, modal drawer, busy and reduced-motion.

## Audit rubric (0–4 each)

1. Hierarchy/readability; 2. Material/depth calibration; 3. Layout efficiency; 4. Interaction clarity; 5. Accessibility/responsive; 6. Style fidelity. Do not manufacture a numerical score if you lack rendered evidence.

Flags: unexplained large blank strips, over-stretching charts, style-token drift, faint labels, table clipping, detached popovers, fake native chrome, arbitrary card density, inconsistent dark mode.

`quality/anti-template.md` covers Apple-inspired-specific aesthetic regressions. Optional Hallmark and Impeccable run via orchestrator (if installed), not by copying their prompts into this Skill.
