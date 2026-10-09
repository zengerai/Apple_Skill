# Foundations — aesthetic and system principles

**Goal:** desktop-Web productivity quality, not literal macOS window simulation. Emphasize precision and native-feeling interaction while adapting to actual browser conventions.

## Five invariants

1. **Content before chrome.** Navigation must fit the information hierarchy; controls belong near the objects they change; avoid unnecessary cards and KPI grids.
2. **Depth without decoration.** Quiet canvas; gently differentiated toolbar/sidebar; cards only where grouping earns them; border + slight elevation over glass flooding.
3. **Readable density.** Text/body normally 14px; table normally 13px, caption 12px with adequate contrast; if density needs to increase, reduce spacing before legibility.
4. **Predictable interaction.** Stable positions; focus states; selected states; keyboard; local feedback; undo/recovery when appropriate. Visual motion communicates action and continuity.
5. **Platform honesty.** Web tabs, address bar and scroll behavior are real. Don't imitate native traffic lights or add a desktop wallpaper; true desktop wrappers can integrate OS window controls separately.

## Visual anatomy

- Sidebar (when useful) ~236px open / ~65px collapsed, a softly tinted surface, mild separators and active accent. It is not mandatory for one-task tools.
- Toolbar ~67px, quiet elevation and compact action positions, no giant marketing hero.
- Primary canvas white/off-white, cards with 1px subtle border, 8–15px radii and low-intensity shadow; never make all elements elevated equally.
- Accent usually system-like blue for actions/selection; statuses reserve project-defined semantic hues. Do not encode meaning only with color.
- System font stack for cross-OS Web; **do not ship Apple's proprietary fonts**.

## Design review questions

Can a returning user find their next action in two seconds? Can they scan 20–100 records? Does a selected item look selected without relying only on color? Does any component use a novel interaction without a reason? Does dark mode preserve information hierarchy? Are increased-contrast/reduced-motion users still served?

## Common regressions to reject

Artificially huge cards, empty dashboard filler, faint 10px copy, shadows on every surface, indiscriminate backdrop filters, made-up macOS window chrome, universal 12px fonts, gratuitous bouncing, hidden daily actions inside ellipsis menus, all pages arranged as four KPI tiles + a chart, creating a custom combobox/dialog without correct accessibility.
