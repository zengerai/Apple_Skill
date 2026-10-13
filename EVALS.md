# Apple Design Provider v3.0 evaluations

Designed scenarios, NOT a blanket statement that runtime tests passed. Use source/manifest checks and observed browser evidence.

| # | Prompt / Context | Expected |
|---|---|---|
| 01 | product-ui supplies NEW_BUILD, Apple-inspired selected, high-density workbench | Recommend Rhea as candidate based on density; not a mandatory choice; no unrelated A/B/C |
| 02 | same but lightweight utility, no preset fixed | Consider Luma; preserve user-specified density and choices |
| 03 | Existing project has accepted non-Apple DESIGN.md, routine improve | Preserve existing style, do not force Apple |
| 04 | Explicit redesign from another style to Apple | Keep original UI/API baseline; scope migration; provider proposal not auto-approved |
| 05 | Provider style-candidate | Return read-only proposal; no files touched; product-ui organizes user choices |
| 06 | Provider spec | Read-only component/token/motion output; no source edits |
| 07 | Provider implement authorized one component | Only mutate named files; preserve routes, APIs, data |
| 08 | Provider style-audit | Read-only evidence-based findings; never claim Hallmark |
| 09 | Provider reports executed | Original SKILL.md truly used and observable results present |
| 10 | product-ui missing Provider | Report unavailable; no fabricated provider execution |
| 11 | React new project and chosen Rhea | Use official shadcn/create output, not self-made V4 CSS |
| 12 | Existing React has Radix | Preserve existing primitive unless migration authorized |
| 13 | Vue current project | Guidance only; no React JSX pasted into Vue |
| 14 | Plain HTML tool | Adapted CSS/WAAPI scope; no fake native shadcn support |
| 15 | No style source or brand override | Never force blue accent or gray sidebar; use actual project source |
| 16 | Reduced-motion enabled | Interactions remain functional, no compulsory spatial travel |
| 17 | 10x rapid segment selection | Latest selected state and visual thumb agree |
| 18 | Dialog close / Escape | Native or tested primitive semantics, focus returns |
| 19 | Action list vs role=menu | Do not claim a plain button list implements typeahead/arrow behavior |
| 20 | High-density workbench example | Search/selection/inspector consistent, not KPI dashboard |
| 21 | Local file rename utility example | Filename preview only; no fake disk mutation/server upload |
| 22 | Component / Motion upstream license | Do not bundle Animate UI components under Commons Clause |
| 23 | Shadcn agent Skill unavailable | Provider does not invoke; original third-party dispatch belongs to product-ui |
| 24 | Provider output wants competing DESIGN.md | Reject second active design source |
| 25 | Luma ↔ Rhea migration | Treat as component style migration, not CSS spacing switch |
| 26 | 16 motion pattern examples | All IDs P01–P16 defined, components interactive, no missing patterns |
| 27 | Manifest validator | Stable ID equals SKILL frontmatter name, capabilities/levels valid |
| 28 | Specialist QA | Style pass distinct from product-wide UX/Hallmark/Impeccable approval |

Run `python3 scripts/validate.py` (static consistency), `cd examples/motion-gallery && npm install && npm run build` (React compile), `python3 scripts/browser_smoke.py --url http://127.0.0.1:5173` while Vite is running (browser sample). Report exact passed/failed/skipped results.

Do not describe a source-only static check as a real rendered motion test.

## v3.1 Advanced Patterns

### 29. Master Detail
Expected: stable record, inspector, filter and focus return.

### 30. Expand In Place
Expected: same object identity, Escape/back, reduced motion.

### 31. Global Filter + Linked Hover
Expected: canonical state for KPI/table, aligned semantic time keys, focus alternative.

### 32. Sticky Header
Expected: scroll-based compact summary, no content occlusion.

### 33. Command Palette
Expected: Cmd/Ctrl+K, arrow/Enter/Escape, focus return and allowed actions.

### 34. Production boundaries
Expected: demo-only CSS not official Luma/Rhea; use installed accessible primitives in target app.
