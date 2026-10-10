# Motion foundations — action continuity, not decoration

Design motive = cause/effect, spatial continuity and usable state feedback. Choose transformations consistent with object origin and next interaction. Do not animate every record row on each filter update or gate data behind transition events.

## Priorities

1. State changes **immediately** on interaction. Animation follows state, never blocks it.
2. Animation interruption: a second click during open/close should settle on latest input; avoid stacking timeouts and obsolete `onAnimationComplete` mutations.
3. Accessibility: keyboard focus/lifecycle preserved. Dialog focus trapping and inert background require a tested dialog primitive; Motion by itself does NOT implement ARIA behavior.
4. Reduced motion: `useReducedMotion()` or media query removes transforms/layout flights, but preserves focus, status text, state changes and errors.
5. Performance: prefer opacity/transform/layout engines over manual repeated layout measurement; avoid `height:auto` without testing, paint-heavy blur animations and surprise scroll jumps.
6. Never animate incomparable chart series in a way that suggests false point-to-point continuity.

## Motion primitives

- **Simple feedback:** CSS transition (hover, focus color, pressed).
- **State entrance/exit:** `AnimatePresence` + distinct keyed elements; choose `mode` for correct overlapping behavior; be cautious with focus restoration.
- **Layout continuity:** `motion.div layout`; related elements `layoutId` with scoped IDs.
- **Spring:** `transition={{type:"spring",stiffness:...,damping:...}}` is a starting point to calibrate, not a universal prescribed number.
- **Reduced motion:** `useReducedMotion()` and explicit fallback for spatial effects; test both normal and reduced states.
- **Interruptions:** let Motion retarget from current value; ensure final data/ARIA state comes from React, not asynchronous animation callbacks.

When returning a motion spec, include: pattern ID; user action; immediate functional state; visual states (enter/active/exit); origin; transition; repeated-interaction behavior; reduced motion; keyboard/focus; implementation primitive; test evidence.

Read `motion/patterns.md` for 16 patterns and the actual React demonstration.
