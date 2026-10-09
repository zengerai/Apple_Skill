# Typography and reading rhythm

System-first font stack: `-apple-system, BlinkMacSystemFont, "SF Pro Text", "PingFang SC", "Helvetica Neue", Arial, sans-serif`. Browser substitutes naturally on non-Apple systems; do not bundle proprietary typefaces.

| Role | Default CSS px | Weight | Line-height | Usage |
|---|---:|---:|---:|---|
| Page title | 30 | 700 | 1.25 | one per page, no marketing hero |
| Section heading | 16 | 650 | 1.35 | group entry |
| Body | 14 | 400 | 1.50 | regular instructions and content |
| Table body | 13 | 400/500 | 1.45 | high-density records |
| Table header | 12 | 600 | 1.4 | column organization |
| Caption | 12 | 400 | 1.5 | secondary metadata, high contrast |

Use tabular numbers (`font-variant-numeric: tabular-nums`) for amounts, dates, comparisons; align units and numeric columns. Chinese labels can increase line height and require more width than English. Avoid letter-spacing on body Chinese text; do not truncate domain-critical names without tooltip/expand ability. For 200% zoom and narrow CSS viewport, layout should reflow/scroll locally, not turn illegible. Do not use color alone for link or state affordances.
