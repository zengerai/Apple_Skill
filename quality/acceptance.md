# Acceptance gate — design + behavior

Check every delivered **representative** screen, not only screenshots. Block completion for P0 behavior and accessibility failures.

## Design invariants

- No fake traffic-light controls, Dock, wallpaper, generic SaaS gradient background or giant empty KPI cards added without task need.
- Consistent semantic tokens in light/dark; primary/secondary text readable on actual surface; no arbitrary tiny low-contrast labels.
- Navigation context, page title, primary action, scopes and data provenance visible.
- Intentional cards/panels, reasonable density and proper table value overflow handling.
- No overlapping popovers, clipped drawers or sticky headers covering focusable controls.

## Behavior and accessibility

- Keyboard Tab/Shift+Tab, Enter/Space, Escape and relevant arrow keys work; visible focus and focus restoration for modal overlays.
- Forms show pending/invalid/success; actions aren't inert. Destructive action is confirmable and cancellation safe.
- reduced motion, high contrast/forced color where possible, 200% zoom and long CJK labels tested.
- Browser console has no uncaught JS errors; no unrequested API calls, lost data, or fake saved states.
- Correct data scope across filters, month, list, summary and export.

## Viewports

Minimum representative widths: 750, 1024, 1692, 1920, 2560 CSS pixels. Add 375–430 CSS px when project targets phones. Do not confuse physical resolution with CSS viewport. Table-local horizontal overflow acceptable; document-level sideways scroll usually not.

## Evidence

Report testing method, viewports, pages, failed/passed cases and missing browser capabilities. Distinguish static validation (file existence/syntax) from **browser** validation (layout, keyboard, motion). A screenshot is not evidence of all dynamic states.
