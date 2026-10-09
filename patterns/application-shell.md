# Browser-native application shell

- Stable navigation sidebar only if multiple top-level destinations; collapse on limited width with labels/tooltip and accessible control. One-task utility can use a single compact toolbar instead.
- Topbar ~67px when justified by global context/actions. Group shortcuts, notifications and account items carefully; leave primary page CTA near page title/object context.
- Main content scrolls independently where appropriate. Avoid nested scroll traps. `min-width:0` on flex/grid children.
- Cards are for meaningfully distinct regions; a dense list is better served by a single panel with headers/footers than one card per row.
- Inspector/Drawer for preserving context during review; modal only when the user must commit/choose before proceeding.
- Avoid fake OS chrome. Actual Electron/Tauri shells can choose genuine window decoration integration after separate platform-specific testing.

## Responsive max-width patterns (CSS viewport pixels)

- `overview`: fluid until 1360–1440px content width; chart aspect/height capped. 24–40px side gutters at larger viewport.
- `data`: max 1600–1680px; table consumes available width; wide tables scroll within panel when necessary.
- `editor`: may fill width with min/max side inspector widths and resizable split; content canvas can have own max readable width.
- `form`: readable form columns often 560–920px; use right whitespace intentionally (guidance panel) instead of stretching fields 2000px.

Measure effective main viewport after sidebar, not physical monitor pixel resolution; browser zoom changes CSS width.
