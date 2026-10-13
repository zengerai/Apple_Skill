# Advanced Interaction Patterns v3.1

This module complements the 16 baseline patterns. Runnable demo: examples/motion-gallery/src/AdvancedLab.jsx. Demo styling is not official Luma/Rhea.

1. Master Detail: stable selected record ID; preserved filter/list; a nonmodal inspector; close focus return; keyboard and mobile alternative for production.
2. Expand in Place: stable tile identity with Motion LayoutGroup/layoutId; expanded context and Escape return; no unrelated modal or forced full-page redirect.
3. Global Filter + Linked Hover: one canonical filter drives KPI and table; linked charts use semantic month keys. Real async products must implement latest-request-wins and empty/error behavior.
4. Sticky Compact Header: compact summary within the correct scroll container, no content occlusion or forced animation under reduced motion.
5. Command Palette: Cmd/Ctrl+K, arrow/Enter/Escape, focus return; only permitted/known actions, never fake AI-generated commands. Production code should use a tested accessible command primitive.

Source task/permission/API contracts belong to product-ui, visual motion belongs to Provider. Bento Grid, graph exploration and heatmaps remain conditional research directions; do not invent implementations or claim they exist in this lab.
