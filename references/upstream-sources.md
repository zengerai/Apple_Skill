# Upstream sources, reuse and license boundaries

This project is not affiliated with Apple, shadcn or upstream UI authors. Never treat inspiration as permission to bundle fonts/brand icons, upstream proprietary assets or third-party source wholesale.

## Primary external systems (consume upstream, do not vendor)

- Apple Human Interface Guidelines: https://developer.apple.com/design/human-interface-guidelines/
- Official shadcn Luma: https://ui.shadcn.com/docs/changelog/2026-03-luma
- Official shadcn Rhea: https://ui.shadcn.com/docs/changelog/2026-05-rhea
- shadcn create/CLI: https://ui.shadcn.com/create
- Base UI: https://base-ui.com/
- Radix UI: https://www.radix-ui.com/
- Motion for React: https://motion.dev/docs/react
- Motion Layout: https://motion.dev/docs/react-layout-animations

Use upstream's current install commands, copy/paste conventions, licenses and API docs at **implementation time**. The Skill's examples are independently authored; they are not claims of official Luma/Rhea component copies.

## Secondary reference projects (evaluate case-by-case)

- applecn: https://github.com/STiXzoOR/applecn — research token system and styles, MIT in observed upstream LICENSE; not official Apple.
- Motion Primitives: https://github.com/ibelick/motion-primitives — pattern ideas; MIT in observed LICENCE.md; prototype maturity varies.
- Animate UI: https://github.com/imskyleen/animate-ui — motion ideas, BUT its observed LICENSE.md declares **MIT + Commons Clause** prohibiting sale or redistribution of components themselves in original form. DO NOT vendor/copy its components into this Skill or redistribute as a component collection without separate permission/legal review. Build original motion demos with Motion instead.

Source licenses can change; inspect exact commit and package assets before use, retain required notices if copying authorized code, and distinguish original design ideas from licensed source. Bundled demo code in this repository is written for this Skill, not extracted from those libraries.

The existing repository's MIT LICENSE covers this project's **own** materials; it does not override upstream licenses.
