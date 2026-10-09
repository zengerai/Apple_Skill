# Design Tokens — three layers

## Authoritative source

`tokens/light.tokens.json` and `tokens/dark.tokens.json` each contain self-contained **primitive**, **semantic**, **component** token trees. Tokens use DTCG 2025.10 `$value`, `$type`, aliases (`{color.neutral.900}`), correct sRGB color objects, dimension units and durations. `tokens/density.tokens.json` encodes compact/comfortable geometry choices. CSS is generated output, not independent design authority. A separate JSON of page-specific business colors is **not** part of this Skill.

**Why self-contained per theme?** Without a token resolver supporting multi-file imports, each file can resolve aliases without undocumented build magic. A shared primitive schema is intentionally repeated in light/dark; `scripts/generate_css.py` enforces schema alignment.

## Layer contract

1. Primitive: neutral/color steps, spacing, radii, typography, motion. Avoid directly using primitive colors in app pages.
2. Semantic: `surface.*`, `text.*`, `border.*`, `action.*`, `status.*`; theme switches semantic mappings.
3. Component: `component.button.*`, `component.table.*`, `component.sidebar.*`, `component.drawer.*` alias appropriate semantic / primitive entries.

**Rule:** adjust brand color in semantic theme mappings, density in `density.tokens.json`, and one-off component variants only at component scope. Never modify fixed business rules just to match the gallery.

## Export and theme usage

```sh
python3 scripts/generate_css.py
```

Generates `assets/styles/design-tokens.css`. App root can set `data-theme="light|dark"` and `data-density="comfortable|compact"`. Use `color-scheme` for native input surfaces, but style all important interactive states in both themes. Respect system preference by default if product hasn't chosen a theme; allow explicit user override. Store user preference only where authorized by the app.

## Backward compatibility

`assets/styles/apple-native.css` and `assets/templates/` are generic v1 baseline demonstrations. New components should use `--ds-*` variables and the v2 gallery; don't assume legacy `.an-*` selectors are themselves fully theme-aware. If migrating, map their hardcoded colors to semantic tokens instead of stacking an opaque filter over the page.
