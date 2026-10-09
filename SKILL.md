---
name: apple-inspired-desktop-saas
description: Independent, domain-neutral Apple-inspired desktop Web UI design system for Codex. Use when asked for 苹果风, macOS-like productivity UI, refined desktop SaaS, a native-feeling Web app, consistent design tokens/components/motion/themes, or review of this visual style. Standalone design/implementation/audit modes or provider mode under product-ui. Not an Apple official framework and not a banking/dashboard template.
---

# Apple-inspired Desktop SaaS · v2.0

This Skill supplies a **visual and interaction system** for any product, not a page template and not a business model. Follow the user's product requirements. Output browser-native Web UI: **no fake Mac traffic lights, Dock, desktop wallpaper or nested fake browser window**. Prefer a polished, layered, legible application shell, tasteful depth and efficient work surfaces over flat admin boilerplate or aggressive glass effects.

## Choose operating mode FIRST

- `standalone-create`: new UI. Inspect product/user/tasks, choose page pattern, use design system, demonstrate one representative real page, request user approval before scaling **unless user requests one-shot**.
- `standalone-refine`: existing UI, preserve routes, APIs and workflows. When requested change is broad/ambiguous, audit first and agree scope; a small explicit change can be implemented directly.
- `standalone-redesign`: explicitly authorized visual overhaul; preserve behavioral contracts and before/after comparison.
- `standalone-audit`: read-only P0/P1/P2 findings, with file/screen evidence; make no edits.
- `provider`: only when called by an orchestrator such as `product-ui`. Supply styling, tokens, components, motion recommendations, code and a style-conformance report. **Do not repeat project routing, A/B/C exploration, approval gates, production expansion, or external Skill orchestration**. `product-ui` owns these.

When the user's invocation already fixes the visual direction to Apple-inspired, **do not independently offer unrelated design styles**. Never assert another Skill was executed unless its installed original guidance was read and followed.

## Required sequence (proportional to task)

1. **Inspect**: user task, existing visual conventions, platform, information density, framework, component library, current `PRODUCT.md` / `DESIGN.md` if present. Don't infer missing business rules. Respect existing accepted design unless the user explicitly requests a reset.
2. **Select pattern** using `patterns/layout-decision-tree.md`; choose list/workbench/editor/form/settings/overview as appropriate. Do **not** default to KPI cards and charts.
3. **Apply foundations**: read `foundations/design-principles.md`, `foundations/tokens-and-themes.md`; inspect `tokens/light.tokens.json`, `tokens/dark.tokens.json`, `tokens/density.tokens.json`, and generated `assets/styles/design-tokens.css`. Load other foundation files only as needed.
4. **Choose components**: use `components/catalog.md` then load specialized references. Prefer native controls and existing tested headless components for accessible behavior; preserve project's framework. Avoid custom ARIA keyboard logic without testing.
5. **Design states and behavior**: `interaction/interaction-contracts.md`, `interaction/motion-system.md`, and `interaction/keyboard-accessibility.md`; include default, hover, focus, busy, empty, error, and success as relevant.
6. **Produce real UI**: implement a representative page/flow with realistic **new-project** content; render actual browser DOM; use bundled `examples/component-gallery/` for neutral visual reference, not a business starting point. Stop for visual approval in standalone mode if cost of expansion is material.
7. **Verify** using `quality/acceptance.md`, `quality/visual-regression.md` and `scripts/validate_package.py` and optional `scripts/browser_smoke.py`. Report what was truly tested; don't invent screenshots, audits or success.

## Layer rules (source of truth)

- Explicit user request / actual product tasks and safety > approved project `DESIGN.md` > project component conventions > these Skill defaults > optional external reviews.
- In **provider mode**, `product-ui` is the orchestrator. Use `integrations/product-ui-provider.md` input/output contract. The accepted project's single `DESIGN.md` records the adopted provider and allowed overrides. Do not create competing active design specifications.
- Visual syntax: crisp typography, quiet neutral backdrop, blue selection/action accents by default, translucent *where supported* sidebar, restrained shadows and separators, perceptible focus and state changes. Light and Dark use semantic tokens; compact/comfortable use density tokens.
- Behavioral syntax: actions have feedback; menus/sheets/dialogs have semantic accessibility and focus lifecycle; motion is meaningful, interruptible, and reduced on preference; content width follows job type and available CSS viewport.

## Reference routing (do not load everything upfront)

| Trigger | Read |
|---|---|
| Design principle, type, color, depth, icon | `foundations/design-principles.md`, `foundations/typography.md`, `foundations/color-materials.md`, `foundations/iconography.md` |
| Token source, light/dark, density, adaptation | `foundations/tokens-and-themes.md`, `themes/theme-implementation.md`, `tokens/` |
| Screen layout, tables or editor split | `patterns/layout-decision-tree.md`, `patterns/application-shell.md`, `patterns/responsive-adaptation.md` |
| Buttons, form, table, overlays, complex | `components/catalog.md`, `components/controls-forms.md`, `components/data-display.md`, `components/overlays-advanced.md` |
| Motion/keyboard/loading | `interaction/motion-system.md`, `interaction/interaction-contracts.md`, `interaction/keyboard-accessibility.md` |
| React/Vue/shadcn integrations | `integrations/framework-adoption.md`, `integrations/external-projects.md` |
| product-ui delegation | `integrations/product-ui-provider.md` |
| Quality and verification | `quality/acceptance.md`, `quality/visual-regression.md`, `quality/anti-template.md` |

## Deliverables

- Standalone build/refine: requested UI + short record of page pattern, adopted tokens, interaction states, tested viewports and uncovered limitations.
- Standalone audit: read-only P0/P1/P2 report with evidence and suggested contained fixes.
- Provider: structured design decisions + token/component/motion specification, implementation or patch if requested, **style conformance** and unresolved accessibility/QA notes. Return control to orchestrator.

Not official Apple UI assets; do not redistribute Apple fonts or copy Apple branding. Do not copy bundled neutral example fields into a new project.
