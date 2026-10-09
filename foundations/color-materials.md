# Color, surface and depth

## Color roles, not hardcoded brand identities

Primitive colors are values, semantic aliases assign meaning, component aliases are local applications. See `tokens/light.tokens.json` and `tokens/dark.tokens.json`. **Components consume semantic roles**, not arbitrary `#hex` in page-local CSS.

- Canvas → broad reading surface; sidebar/toolbar → gently differentiated context; raised → overlay on top of context.
- Text primary / secondary / tertiary → semantic hierarchy; text inverse only on sufficiently dark action fills.
- Border subtle → grouping without walls; strong → distinct focus or priority boundaries.
- Action blue → interactive affordance; semantic `error/warning/success` not used as decorative accent.
- Motion/selected states use color + label/icon/stroke for distinguishability.

## Material recipes

| Region | Recipe | Avoid |
|---|---|---|
| Sidebar | faint blue-gray opaque/translucent tint, divider, soft active tint | opaque saturated sheet or noisy gradient |
| Toolbar | near-canvas material + bottom hairline | faux desktop titlebar / giant header |
| Panel | 1px hairline, very restrained shadow (0 3px 14px / ~5% opacity), 10px radius | floating every cell |
| Popover | raised opaque-enough surface, contrast shadow, 12px radius | backdrop blur without fallback |
| Modal | explicit scrim, isolated surface and elevated shadow | dimming unreadably / focus left behind |

Use `backdrop-filter` only as **progressive enhancement**; fall back to opaque accessible background. Dark theme must be tuned separately, not simply invert light colors: reduce shadow dependence; use borders and surface tonal differences. Translucency must not reduce text contrast.

## Contrast criteria

Target WCAG 2.2 AA: normal text ≥4.5:1, large text ≥3:1, relevant non-text/UI state indicators ≥3:1. These are goals to verify against *actual composited backgrounds*, not just token pairs. Translucent backgrounds need browser-rendered tests. Disabled labels can be exempt from some contrast requirements but the next action must remain clear.
