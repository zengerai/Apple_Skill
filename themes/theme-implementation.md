# Themes, densities and adaptive settings

- Defaults: `light` + `comfortable` unless product or OS preference explicitly says otherwise. The CSS token definitions live in `assets/styles/design-tokens.css`.
- Dark is a *designed variant*: panel/surface borders and muted text are separately mapped. Recheck contrast of chart labels, inputs, links, selection and scrims in both.
- Density: `comfortable` (36px controls, 47px rows, 16px form gap) and `compact` (32px, 38px, 12px). Small targets should still have appropriate hit area for input modality; don't simply shrink every clickable target to 24px.
- Reduced transparency: when platform `prefers-reduced-transparency` is supported, use an opaque sidebar; always provide opaque fallback.
- Reduced motion: avoid transforms/morphing; preserve instant feedback, keyboard and focus.
- High contrast / forced colors: do not suppress system outlines or map all system semantics to decorative backgrounds.
- Text scaling & 200% zoom: layout must reflow or scroll within tables; do not freeze application width.

Implementation preference: root attributes are deterministic and are easy to test. Browser `prefers-color-scheme` can set initial state; optional user selection is an app feature, not hidden by the Skill.
