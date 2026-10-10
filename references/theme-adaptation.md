# Themes, materials and token adaptation

The active project's approved DESIGN.md and selected installed style are the token sources of truth. Do **not** prescribe a blue accent, gray navigation backdrop, one radius scale or a proprietary Apple font.

- Use semantic theme roles (background, foreground, surface, action, focus, selected, disabled, destructive, status); map onto actually generated style tokens or current project CSS variables.
- Light/Dark are distinct visual surfaces: inspect actual text contrast, controls, input placeholders, selection, charts and scrims. Don't mechanically invert colors.
- Honor explicit user-provided brand constraints, unless inaccessible; document intentional accessible overrides for product-ui review.
- Translucent materials are optional, not evidence of Apple design. Only use with opaque fallback, readable composited text and supported browser conditions.
- Density reflects product-ui's task frequency; Rhea is a *component style choice*, not a universal override of `--spacing`. UI color/density switches should not silently change approved design systems.
- Use platform font fallback stacks; Apple proprietary fonts and SF Symbols are **not** redistributed. Do not require users to download fonts from this Skill.
- Motion has semantic intent and reduced-motion fallbacks, and never delays data transitions to await CSS `transitionend`.
- For existing established project, preserve `DESIGN.md` and existing primitives unless explicit redesign. A provider-only spec must not edit the project's theme files.

When delivering a spec, include actual token **sources** (which upstream/generated config and overrides), not guessed hex values falsely described as official.
