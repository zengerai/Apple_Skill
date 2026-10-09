# Motion — Apple-inspired restraint

Motion communicates continuity, causality and feedback; not decoration. No page-wide flying animations, staggered record reveal, bouncing counters for every click, or wait-for-animation business logic.

| Event | Default | Easing | Spatial treatment |
|---|---:|---|---|
| hover / press | 110–155ms | ease-out | surface/opacity; optional 1px movement |
| segment thumb | 230ms | cubic-bezier(.22,1,.36,1) | selected thumb moves between equally ranked choices |
| popover open | 155–230ms | out | opacity+scale(0.985→1), origin at anchor |
| modal drawer | 315ms | out | horizontal translate + scrim |
| chart/update | 230–380ms | out | point/line morph only for comparable data |
| toast | 155–230ms | out | subtle opacity/translation, not bouncing |

## Critical implementation rules

- State updates are **immediate**, animation represents updated state; never gate data update on `transitionend`.
- Rapid toggles must be interruptible and leave one final state. Use CSS transforms/opacity or a simple cancellation state machine, not stacking timers.
- `prefers-reduced-motion: reduce`: remove spatial motion or make it near-instant; preserve status/focus. Avoid auto-scrolling for effect.
- Browser tab background/resume: no runaway animations or stale pending states; cancel animation if component unmounts.
- Height animation can reflow content and lose scroll context; prefer stable dimensions or conservative `grid-template-rows` only when tested.
- Toast or progress must not block critical keyboard controls. Keep visual loading and accessible status consistent.

## Motion QA

Test fast repeated tab switches, opening a second drawer before the first closes, switching theme while a Popover is open, system reduced-motion, loss of focus, and narrow viewport. Motion can be elegant yet inaccessible; prioritize intent over kinetic flair.
