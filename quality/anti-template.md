# Anti-template checks (Apple-inspired-specific)

Use as a style conformance check, **not** as a replacement for Hallmark. Reject:

- Same four KPI cards and chart on unrelated utility, editor, settings, CRUD pages.
- Every page using a centered 900px column on a 2560px viewport regardless of table content.
- A macOS Finder-like two-column layout for tasks without persistent selection/detail context.
- Inconsistent radius, shadows, icons and button heights between modules.
- Translucency over text without enough composited contrast; blur used as decoration.
- Card shadow applied to each list row; fake window bars or macOS Desktop inside browser.
- Fast-working actions hidden inside needless hover-only controls; every action animated as novelty.
- All data presentation as decorative donuts and gradients instead of answerable questions.

When a standard-looking UI pattern objectively helps users (e.g. tables in ToB) **do not reject it merely for looking conventional**. Consistency and repeat-use efficiency take precedence over novelty. Provide concrete screen/location and a bounded fix; don't simply say 'looks AI-generated'.
