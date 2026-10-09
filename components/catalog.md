# Component catalog and common contract

This is a **design contract**, not a package of dozens of production-ready framework components. In React/Vue etc use an established accessible library for complex primitives, then apply this visual system. Every component specifies purpose, structure, size/tokens, interactions, accessibility, responsive and states.

| Family | Components | Detailed reference |
|---|---|---|
| Actions | Button (primary/secondary/ghost/danger), IconButton, SplitButton, SegmentedControl, Toggle, Checkbox, Radio | `components/controls-forms.md` |
| Input | TextField, Search, Textarea, Combobox, Select, Date/Time, Upload, Validation | `components/controls-forms.md` |
| Navigation | Sidebar, Toolbar, Breadcrumb, Tabs, TreeView, CommandPalette | `components/overlays-advanced.md` |
| Data | Table, Sort, Filter, Pagination, Status, Empty/Skeleton/Error, Chart, KPI, Timeline | `components/data-display.md` |
| Overlays | Popover, Menu, Tooltip, Sheet/Drawer, Dialog, Toast, Alert | `components/overlays-advanced.md` |
| Workspace | ResizableSplit, Inspector, FileList, BatchActions, ContextMenu | `components/overlays-advanced.md` |

## Universal state matrix

| State | Required visual | Behavior & semantics |
|---|---|---|
| default | explicit affordance | label / accessible name |
| hover | quiet surface contrast (mouse only) | never hover-only access to essentials |
| focus-visible | visible 2px outline with offset | keyboard traversal, no trap |
| active/selected | contrast + marker | `aria-pressed`, `aria-selected`, `aria-current` as appropriate; not all interchangeable |
| disabled | distinct inactive state | `disabled`/`aria-disabled`, explain if needed |
| busy/loading | clear local progress, no double-submit | `aria-busy`, status message; preserve layout |
| error | text and icon + correction | `aria-invalid` / `aria-describedby` for fields |
| success | confirmation near action | `role=status` polite live region when warranted |
| empty | task-specific next step | not a decorative blank illustration |

Design **families of components**, not each screen independently. Override tokens only where semantic function requires it.
