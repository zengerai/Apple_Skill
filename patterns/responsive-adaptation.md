# Responsive and high-density behavior

Verify CSS viewport widths 750, 1024, 1440, 1692, 1920, 2560 (plus smallest supported mobile width if applicable). `1280px` is not inherently desktop if zoom is 200%.

| Available width | Shell policy | Content policy |
|---|---|---|
| <768px | compact drawer navigation instead of permanently consuming 236px | forms stack; tables locally scroll; actions remain reachable |
| 768–1199px | slim or collapsible sidebar | one/two column grids as space allows |
| 1200–1599px | sidebar + fluid main | sensible gutters 24–32px |
| 1600–2199px | full sidebar + page-specific max | overview capped, data region wider |
| ≥2200px | no forced stretch of charts or input forms | data/workbench can grow; optional inspector only if useful |

Use `minmax(0,1fr)` and explicit min widths. Do not allow table widths to force the entire document to scroll. Provide sticky headers only when compatible with overlays and keyboard focus. On resize, preserve current selection, input, unsaved state and scroll context when possible.

Never hide critical actions because of a breakpoint; use an accessible overflow menu with clear affordance if necessary. Reduce columns only when the semantics permit it; don't silently omit mandatory fields in exports.
