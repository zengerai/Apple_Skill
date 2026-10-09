# product-ui provider contract v1

**Purpose:** Let `product-ui` (v2.4+) delegate a fixed Apple-inspired visual system to this independent Skill without overlapping project governance. This is a *documented coordination convention*, not an API function or claim that product-ui already implements automatic routing.

## Provider activation

Orchestrator calls Apple Skill when user expressly selects the Apple-inspired design or accepted project `DESIGN.md` names `apple-inspired-desktop-saas`. Otherwise product-ui can explore styles independently. If installed Skill absent, report `unavailable` and use a clearly labeled fallback; **do not claim it executed**.

## Input contract (from orchestrator)

```yaml
request_mode: provider
visual_provider: apple-inspired-desktop-saas
product_context: "User workflow and representative page description"
project_mode: NEW_BUILD # or EXISTING_IMPROVE, EXISTING_REDESIGN, EXISTING_REBUILD
accepted_design: "path/to/DESIGN.md or none"
component_stack: "React / Vue / HTML ..."
constraints: "behavior, APIs, density, accessible components, user-selected overrides"
deliverable: "style spec / single page / patch / review"
```

## Provider output contract

```yaml
provider: apple-inspired-desktop-saas
style_version: 2.0.0
layout_pattern: "task-selected, with rationale"
tokens: "light/dark semantic mapping and density"
components: "chosen variants and state contracts"
motion: "specific durations + reduced-motion response"
implementation: "affected files / preview / screenshot if truly available"
checks: "actual tests, viewport widths, unresolved items"
style_conformance: "pass | warnings | fail with observations"
```

## Responsibility boundary

| Decision | Owner |
|---|---|
| project entry routing, scope, user checkpoints, expansion | product-ui |
| visual Apple tokens, materials, component variants, motion system | Apple Skill |
| core business semantics, APIs, record workflows, permissions | product/user requirements + product-ui |
| project DESIGN.md durable accepted source | product-ui after user approval |
| original Hallmark / Impeccable / shadcn Skill availability/execution | product-ui |
| App implementation | project toolchain, coordinated by product-ui |

**Do not:** repeat A/B/C gallery when Apple style fixed; mutate PRODUCT.md or APIs; run third-party Skills automatically; create a rival DESIGN.md; approve your own Demo or bypass orchestrator checkpoints. Read-only provider critique only reports, never edits.

## Conflicts

Order: explicit user request and product truth → approved `DESIGN.md` → this style's token/component rules → third-party audit suggestions. If density or accessibility conflicts with decorative treatment, prefer usable/accessible outcome and note intentional deviation. Provider's visual recommendations may be rejected by product-ui for valid product-task reasons.

## Standalone remains intact

Without product-ui, follow `SKILL.md` standalone modes and user checkpoint preferences. Provider is not an installation dependency.
