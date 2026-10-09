# Keyboard, focus and accessibility

Targets: WCAG 2.2 AA, ARIA APG patterns as applicable. Native elements first; avoid `div role=button` when `<button>` is available.

- Focus-visible clearly seen for keyboard; `outline` not globally removed. Focus order matches reading order, especially after responsive reflow.
- Modal dialog/drawer: meaningful label, modal semantics only if focus trapped + background truly unavailable; initial focus inside; Escape unless unsafe; restore trigger on close.
- Tabs: correct `tablist/tab/tabpanel` roles and Arrow/Home/End keys. Segmented button group: use ordinary buttons + `aria-pressed`, focus remains predictable.
- Sortable table: use actual table semantics; sort buttons with `aria-sort`; row focus/selection behavior documented, no hidden keyboard-only work.
- Menu/Listbox/Combobox/Tree: use tested primitives such as React Aria where practical; ARIA attribute by itself does not implement the behavior.
- Errors and success: labels linked, instructions visible; `role=alert` only for urgent content and `role=status` for polite updates; avoid excessive announcements.
- 200% zoom, forced-colors, reduced-motion, dark theme, CJK and long translations all affect layout. Check touch targets in touch-capable contexts. Avoid accessibility regressions when using CSS animation or virtualization.
