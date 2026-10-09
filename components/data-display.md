# Data display, charts, lists and feedback

## Data table

Column meaning and comparison efficiency outrank decoration. One coherent panel, hairline row dividers, 12px headers, 13px body. `table` element for tabular data, `th scope=col`, proper caption (can be visually hidden). Clickable sortable headings use buttons and `aria-sort` on current column. Sticky headers only when tested.

- Selection via checkbox or row activation (do not silently mix). Selected state must be unambiguous; row click target must not swallow actions/links.
- Preserve full value via wrap, expandable text, accessible tooltip, or detail panel. Numeric right alignment + tabular figures; dates consistent.
- Filter/sort/pagination states persist through drawer open/close. Empty vs no results vs loading vs error distinct.
- Large data: pagination/virtualization only when needed; ensure screen reader and keyboard context are not lost. Local horizontal scrolling not page-wide overflow.
- Batch actions appear adjacent to selection context, communicate count and consequences; dangerous action uses confirmation.

## Status / feedback

Badge has text not only color. High salience reserved for urgent issues; ordinary statuses quieter. Skeleton follows final layout to prevent layout shift; no fake eternal spinner. Inline error offers retry; a user action receives localized result/toast with sensible duration and live announcement.

## Chart and KPI

Only use for a decision question. Include time range, source/units, legend, axis legibility, tooltip or focus alternative, and a data-table fallback for critical values. Two series require distinct colors/line styles/markers, not color alone. Data changes update values and labels together; don't animate misleadingly across incomparable scales. Dense data list remains accessible from aggregate to evidence.

## Data consistency

Mocks must come from a single fixture/state source: same record, status, filter and month across summary/detail/export. Keep illustrative vs full-population data explicitly labeled. Cross-page navigation must carry selection or use a stable ID.
