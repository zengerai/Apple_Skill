# 16 Motion and interaction patterns — runnable example map

All 16 IDs are implemented as individual interactive components in `examples/motion-gallery/src/App.tsx`. The gallery's CSS is **demonstration styling only**, NOT official shadcn Luma/Rhea. Implement production controls with installed shadcn/project primitives before adding Motion; gallery buttons are used only in the independent example app.

| ID | Pattern | Action/state to verify | Preferred primitive |
|---|---|---|---|
| P01 | Button press | press motion doesn't delay event; stays clickable | CSS + Motion whileTap |
| P02 | Switch | immediately changes checked semantics; knob moves | accessible input + layout/transform |
| P03 | Segmented | rapidly reselect, thumb reaches latest tab | shared `layoutId` |
| P04 | Tabs | key selection switches content; content keyed | Tabs semantics + AnimatePresence |
| P05 | Popover | anchored entrance, Escape/outside dismiss, focus returns | real accessible Popover in production |
| P06 | Menu | menu appears/disappears; menu navigation model from primitive | project menu primitive |
| P07 | Dialog | close while entering; Escape and focus lifecycle | Dialog primitive + AnimatePresence |
| P08 | Drawer | open/close rapidly, overlay semantics and focus | Sheet/Dialog primitive + AnimatePresence |
| P09 | Sidebar | width and label change retain context | Motion layout; avoid disabling navigation |
| P10 | Split pane | resizable by pointer + keyboard, clamped constraints | tested resizable primitive in production |
| P11 | Shared element | item selection leads to context detail | `layoutId` + AnimatePresence |
| P12 | List reorder | reorder updates actual order, no ghost stale item | Motion `Reorder` with keyboard alternative |
| P13 | Drag/drop | drop target feedback, click alternative for keyboard | established DnD lib in production |
| P14 | Loading | clear pending → success; repeated clicks stable | AnimatePresence + explicit state |
| P15 | Toast | useful response, polite live region, independent timer | toast primitive + AnimatePresence |
| P16 | Data update | values/layout update together, no misleading random chart morph | Motion text/layout |

Notes: Demo interactions are intentionally bounded and do not represent a production ARIA-complete combobox/menu, resizable separator, drag-drop system or a full charting package. These production features MUST use tested primitives. Data update reflects a simple counter/list; do not animate arbitrary series without semantic comparison.

## Interaction QA matrix

For each pattern test normal click, rapid repeat, keyboard activation/focus, reduced-motion, unmount/close, narrow view and programmatic state integrity. In read-only `spec` mode merely recommend patterns; don't modify project sources.
