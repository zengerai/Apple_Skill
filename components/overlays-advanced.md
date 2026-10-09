# Overlays and advanced desktop patterns

## Popover/Menu/ContextMenu

Anchor to the invoker, keep within viewport, close on Escape / outside click per behavior, return focus to invoker. Menu keyboard Arrow/Enter/Escape & typeahead if genuine role=menu; simple action list can use ordinary buttons rather than incorrect menu semantics. For complex behavior prefer React Aria / tested headless primitives.

## Drawer / Inspector

Use to inspect/edit while preserving list context. Open from selected record; maintain selection and scroll; Scrim + appropriate `role=dialog`/`aria-modal` for modal drawer, focus enters and is trapped, background inert, Escape closes when allowed, focus restored on exit. A non-modal persistent Inspector is a complementary region and **must not claim `aria-modal=true`**. Motion ~315ms with transform, but do not delay functional readiness.

## AlertDialog / Confirm

Use for irreversible or high-consequence actions. Name exact object and consequence; keep safe action straightforward; focus initially goes to safe option when suitable; don't rely on red styling alone.

## Toast / Tooltip

Toast announces outcome, does not serve as the only place to display critical errors; avoid reappearing every row navigation. Tooltip adds helpful context and can be triggered by keyboard focus; it should not contain essential buttons (use Popover).

## TreeView / File list

Use for hierarchical browsing. Expand/collapse vs selection are separate; keyboard Left/Right/Up/Down/Home/End/typeahead per ARIA APG; drag/drop has keyboard alternative and clear move target. For very large trees consider proven libraries.

## Split/Resizable workspace

Panels have min/max; separator uses accessible `role=separator`, `aria-orientation` and keyboard shortcuts or native split library. Collapse/restore pane deliberately. Width persistence is product-owned. Never copy a Finder layout when the user's task has no real selection/detail dependence.

## Command Palette

Optional power-user shortcut (e.g. Cmd/Ctrl+K) complements, never replaces discoverable actions. Search has visible label and scoped results; trap focus appropriately while modal, Escape closes, restore focus.
