# State transition contracts

An interaction needs a model, not just CSS :hover. For each important operation define: trigger → validating → pending → success/error/cancel → recovery. Provide reliable disabled/busy states and stable identifiers.

| Action | State transitions | Feedback |
|---|---|---|
| Search/filter | idle → editing → results/empty/error | count updated, clear, preserve context |
| Save | pristine → dirty → validating → saving → saved/error | disabled duplicate submit, retry, unsaved warning |
| Import | empty → selecting → parsing → preview → confirm → accepted/partial/error | format/row issues, retry |
| Delete | idle → confirm → deleting → removed/failed | explicit object and consequence, safe cancel |
| Drawer | closed → opening → open → closing → closed | focus enter/return, background inert while modal |
| Month or mode | old → selected new → values/loading → new/failed | title, metrics, rows all match same scope |

Error messages describe recovery. Local frontend mock must not pretend remote save actually succeeded. Keyboard accessibility remains active through state changes; changing tabs should not unexpectedly reset a search or draft.
