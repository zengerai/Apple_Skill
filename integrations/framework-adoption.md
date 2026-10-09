# Adapting to existing stacks

Inspect package.json, components, CSS conventions, tokens, router and local style before editing. Reuse existing components; do not forcibly migrate React to Vue or swap design libraries just for appearance.

| Stack | Approach |
|---|---|
| HTML/CSS/JS | use generated `design-tokens.css` + scoped classes; native controls; original gallery for examples |
| React / Next.js | map tokens to CSS variables; use existing accessible UI primitives; state in components, stable keys, no setTimeout for core state |
| Vue | semantic token CSS vars + reactive selection; teleport overlays if necessary; composables for modal/focus |
| Svelte | semantic CSS vars + component stores; a11y warnings are useful; preserve SSR constraints |
| Tauri / Electron | share Web design system, use real native window chrome only when deliberately integrated |

For components with accessibility complexity prefer tested headless libraries (React Aria, Radix/shadcn for supported projects) and add the Apple-style visual layer without forking keyboard/focus behavior. `shadcn/ui` the component library does not prove any separately installed agent Skill is present. Respect client-only APIs when SSR.

Provide per-project bridge CSS rather than blindly importing a global resets stylesheet that could break existing pages. If product already has a DESIGN.md, derive compatibility map of current -> new token and request approval for visual reset.
