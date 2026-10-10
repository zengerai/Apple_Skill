---
name: apple-inspired-desktop-saas
description: Apple-inspired visual and motion Design Provider for product-ui v3.0 or focused standalone UI tasks. Uses official shadcn Luma/Rhea as optional React visual presets, Apple HIG as design guidance, and Motion for interactive behavior. Does not define product IA, business workflows, or approval gates.
---

# Apple Design Provider v3.0

This independent Skill supplies **visual-system and presentational-interaction expertise**, not an application template or a second product-ui orchestrator. Compatible with product-ui's written Design Provider Protocol v1. It is not affiliated with Apple, and does not bundle Apple fonts, icons, branding, or upstream components.

## Mandatory activation

- Under product-ui: accept one of `style-candidate`, `spec`, `implement`, or `style-audit`. Read `references/provider-protocol.md` and honor the exact handoff scope. product-ui owns the four project lifecycle routes, task IA, feature behavior, A/B/C user choice, checkpoints, DESIGN.md, third-party Skill dispatch and whole-product QA.
- Standalone: support a **bounded** Apple-inspired visual spec, component/motion implementation, or read-only style review. Inspect requested files/tech stack and do the task directly; **do not invent product roadmap, auto-expand to other pages or create an entire product-ui workflow**.
- Do not mistake a linked repository or a manifest for installed Skills. When a provider/third-party Skill is unavailable, say so and use an accurately described fallback.

## Safe operation matrix

| Mode | Project file changes | Output |
|---|---|---|
| `style-candidate` | NONE | visual direction candidate, distinguishing component states, UI preview guidance for product-ui A/B/C |
| `spec` | NONE | style selection, tokens/theme contract, component mapping, motion, accessibility, stack compatibility |
| `implement` | Only explicitly authorized project paths after product-ui's stage permits edits | real component/visual/motion code plus evidence |
| `style-audit` | NONE | concrete Apple-style discrepancies and actionable, grounded findings |

No project source mutation in the three read-only modes. Creating an informational response/plan is not modifying project files. Do not call Hallmark, Impeccable, UI UX Pro Max or the shadcn **agent Skill**; product-ui handles external Skill orchestration. No automatic framework/library migration, auto-installation or vendor asset redistribution.

## Execution flow (proportional; load only relevant references)

1. **Validate handoff**: mode, original product-ui-approved visual intent, user tasks, layout regions, app/component stack, accepted DESIGN.md, permission `change_scope` and deliverables. On ambiguity preserve existing behavior/design rather than guessing. In standalone mode define the same essentials only as needed.
2. **Choose visual base**: read `references/style-selection.md` and `references/apple-principles.md`. React new project: evaluate **official shadcn Luma and Rhea** via official generator; do not assume either is always default. Already-established apps: preserve actual components and accepted DESIGN.md; recommend a style migration only when explicitly authorized.
3. **Map components and themes**: read `references/component-mapping.md`, `references/theme-adaptation.md` and `references/framework-compatibility.md` when relevant. Build onto the existing primitive/framework. Never hardcode the old V4 sidebar, blue/gray palette, radius or design-token values.
4. **Map interaction to motion**: read `motion/foundations.md` plus only relevant items in `motion/patterns.md`. For complex layout, exit or shared element animation prefer `motion/react`; simple feedback can use CSS. Each important animation must specify trigger, final state, interruption, reduced-motion and focus behavior. DO NOT delay business state to await animation.
5. **Deliver or implement**: `spec` returns a written design handoff; `implement` changes only permitted files and prefers original shadcn components installed in the target app. Demo source in `examples/` illustrates integration but is **not** a vendored copy of official Luma/Rhea.
6. **Verify honestly**: check `quality/style-audit.md`, `quality/motion-qa.md`. Report actual framework/library versions, renders, tests, reduced-motion/rapid input results and limitations. Use `scripts/validate.py` for package integrity; no fabricated browser runs.

## Source of truth

Current explicit user request, product/domain correctness, accepted project DESIGN.md (except explicit approved redesign), product-ui task IA & accessibility > this provider's visual proposal > library presets > optional inspiration. Provider outputs are candidates until product-ui records accepted choices in the **single project DESIGN.md**.

## Useful routes

| Work | Load |
|---|---|
| Provider schema / modes / handoff examples | `references/provider-protocol.md` |
| Apple guidance and styles | `references/apple-principles.md`, `references/style-selection.md` |
| Components, themes, frameworks | `references/component-mapping.md`, `references/theme-adaptation.md`, `references/framework-compatibility.md` |
| Motion design / 16 runnable demonstrations | `motion/foundations.md`, `motion/patterns.md`, `examples/motion-gallery/` |
| Legal reuse and actual upstream URLs | `references/upstream-sources.md` |
| Style QA / motion QA | `quality/style-audit.md`, `quality/motion-qa.md` |

The standalone React + Motion gallery includes 16 individually interactive patterns plus two product-oriented example views. It uses **demo-only neutral styling**; for official Luma/Rhea visual fidelity, install the chosen original shadcn style in the target application, do not copy demo CSS as an official preset.
