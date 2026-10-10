# Visual style selection — shadcn Luma and Rhea

Canonical official references:
- Luma: https://ui.shadcn.com/docs/changelog/2026-03-luma
- Rhea: https://ui.shadcn.com/docs/changelog/2026-05-rhea
- Generator: https://ui.shadcn.com/create
- Project configuration: https://ui.shadcn.com/docs/components-json

These are **shadcn UI component styles inspired by** macOS, not official Apple components. This provider doesn't ship copies or assert that arbitrary local CSS equals official Luma/Rhea.

## Selection

| Signal from product-ui | First style to evaluate | Confirm with actual render |
|---|---|---|
| high-frequency record processing, dense tables, compact tooling | Rhea | controls readable, hit targets adequate, real density requirements |
| focused utility, editing, more breathing room | Luma | layout not unnecessarily sparse, comfortable action sizes |
| existing coherent design / DESIGN.md | existing system | never restyle without explicit permission |
| explicit preset request | requested preset | do not override user's decision |
| brand accent or specific visual reference | selected compatible preset + explicit overrides | don't import old V4 blue/gray defaults |

Luma and Rhea are **different component styles**; Rhea is not simply `--spacing` set smaller. Avoid in-place style switching or mixing random components from both styles. For an existing app, preserve installed components; an authorized style switch needs migration/rollback, representative-page review and tests.

## How to use (React target app)

1. Inspect existing React version, Tailwind setup, components.json, installed shadcn components and primitive library (Radix or Base UI). Identify whether a style is already adopted.
2. For an empty React project, use **official shadcn/create** to generate a project with the selected Luma or Rhea preset; inspect the generated files and actual installation commands. For a non-empty app, follow current official CLI/docs for existing project migration; no fake `shadcn --style rhea` flag assumed.
3. Use genuine installed components. Compose to meet product-ui's IA/behavior. Do not paste standalone gallery demo CSS into production as an official preset.
4. Record chosen style, primitive, installation/version, component paths, design overrides, actual rendering and a11y results in provider output. product-ui writes accepted result to DESIGN.md after approval.
5. If installation/network unavailable, give precise manual next steps and mark unverified—not `implemented`.

No global preset when context is unknown: propose one based on actual task/density, plus the other as a comparison if user/provider mode requires it.

## Base UI vs Radix

Respect whichever library the project uses. Both supported by official shadcn Luma/Rhea per their release docs, but generated components and behavior must match the chosen primitive and project stack. Do not double-install or silently replace a primitive dependency.
