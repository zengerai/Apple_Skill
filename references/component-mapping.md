# Component mapping — style expression after product-ui IA

product-ui chooses **why and where** a control appears. Provider chooses the visual variant, theme and motion that suit accepted IA. Use official shadcn Luma/Rhea components installed **in the target React app**, or the project's existing component library if a migration isn't approved.

| Task primitive (from blueprint) | First inspect / reuse | Specialist styling or motion |
|---|---|---|
| Primary / secondary action | existing Button, IconButton | consistent states, short press feedback, no layout shift |
| Alternate scope (2–4 options) | Tabs or segmented control, whichever task semantics require | thumb continuity when appropriate; keyboard model from primitive |
| Search, filter, select, date, combobox | Input, Select, Combobox | clear focus, error and busy states; no invented ARIA logic |
| Confirm dangerous change | AlertDialog | meaningful consequence, Escape/safe focus, reduced motion |
| Contextual actions | DropdownMenu / Popover | anchored origin, collision-safe placement, focus return |
| Detail review without losing table context | Sheet / Drawer / nonmodal Inspector | enter/exit and preserving selection/scroll; correct modal semantics |
| Multi-select batch operations | Table/list + Checkbox + visible toolbar | don't obscure critical actions behind ellipsis |
| Dense data and drilldown | Table + local overflow + responsive inspector | neutral line/divider hierarchy, no KPI/marketing template |
| Notifications/loading | Toast/sonner, Progress, Skeleton | avoid state lag, no endless shimmer under reduced motion |
| Collapsible structure | Accordion / Collapsible / Tree primitive | state first, animation second, tested keyboard |
| Split view / pane resize | accessible resizable primitive in project | preserve panel constraints, no motion fighting drag input |
| Drag ordering | proven drag library + keyboard equivalent | layout feedback and clear drop target; no div role=button inventions |

For React, original shadcn component installations are not bundled. On Vue/vanilla, use analogous **existing** tested primitives where possible; record implementation level guidance/adapted, not native shadcn.

Don't let component demos dictate workflow or screen choice. Never create an unsolicited KPI dashboard from example fields. Product-ui owns tasks and information architecture. Provider owns visual-system fidelity.
