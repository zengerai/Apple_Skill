# product-ui v3.0 — Design Provider Contract v1 (adapter)

**Authoritative source:** https://github.com/zengerai/codex-test/blob/main/references/design-provider-protocol.md

This local adapter maps the provider's behavior to the independent orchestration contract. If the installed product-ui protocol is newer, read the original before delegation; don't silently claim compatibility.

## Identity, discovery and limitations

- Original installed Skill ID = `apple-inspired-desktop-saas`; equals both `SKILL.md` frontmatter `name` and `design-provider.json.provider_id`.
- A linked GitHub repo or this manifest **does not prove installation or invocation**. product-ui verifies real installed original Skill and reads its instructions.
- No callable provider API exists; delegation is an **instruction-level handoff** with structured inputs/outputs.

## Required input

```yaml
contract_version: "1.0"
request_id: "trace-label"
provider_id: apple-inspired-desktop-saas
mode: spec                 # style-candidate | spec | implement | style-audit
project_route: NEW_BUILD   # or EXISTING_IMPROVE / EXISTING_REDESIGN / EXISTING_REBUILD
visual_intent:
  family: apple-inspired
  source: "user request or approved DESIGN.md"
product_job: {primary_user: "...", primary_task: "...", density: "..."}
surface_blueprint: {page_type: "...", regions: [], states: []}
environment: {framework: react, existing_component_library: "...", targets: [desktop-web]}
design_source: "accepted DESIGN.md path | observed implementation | none"
change_scope: read-only
deliverable: ["style-spec", "component-mapping", "motion-contract"]
constraints: {preserve_business_and_API_contracts: true}
```

All fields above must be present or explicitly labeled unknown. When critical context missing, ask product-ui rather than change domain behavior.

## Mode contract

| mode | Mutations | Output |
|---|---|---|
| style-candidate | none | comparable Apple style candidate, implementation feasibility |
| spec | none | tokens/preset proposal, component map, motion states, constraints |
| implement | only authorized files | code paths + tested states and unresolved gaps |
| style-audit | none | evidence-backed findings, specialist style-conformance |

Do NOT perform user approval gates, change product IA/workflows/APIs or dispatch other Skills. `spec`, `style-candidate`, `style-audit` are strictly read-only.

## Required result (written summary)

```yaml
contract_version: "1.0"
provider_id: apple-inspired-desktop-saas
provider_version: "3.0.0"
mode: spec
status: executed          # only if original actually executed
selected_style: {family: apple-inspired, preset: rhea, reasoning: "..."}
design_decisions: {tokens_source: "...", themes: "...", overrides: []}
component_mapping: []
motion: {patterns: [], interruptible: true, reduced_motion: "..."}
artifacts: []
compatibility: {framework: react, level: native, dependencies_to_approve: []}
checks: {style_conformance: not-tested, actual_tests: [], limitations: []}
unresolved: []
```

Use statuses `executed`, `skipped-not-needed`, `unavailable`, `blocked`, `failed` with grounded evidence. No simulation of tests, screenshots or missing providers. Specialist style-conformance is **not** Hallmark or global accessibility approval.

## Source priority

Explicit user request + true product/task/API semantics > accepted project DESIGN.md (except approved redesign) > product-ui IA/accessibility/density requirements > provider design recommendations > upstream defaults. product-ui writes **one** approved project DESIGN.md after its checkpoints, provider never creates a competing accepted document.
