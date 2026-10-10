# Apple-inspired product Web design — principles, not a theme

Primary inspiration: https://developer.apple.com/design/human-interface-guidelines/ . Apply **intent**, not proprietary assets or fake operating-system chrome. These are adapted guidelines for browser-native desktop productivity applications, not a claim that Apple publishes a web-component design system for SaaS.

1. **Clarity:** hierarchy, readable typography, control labels and obvious selected state above effects.
2. **Deference to content:** containers support the user's task; do not add decorative glass, fake traffic lights, Dock or giant filler cards merely to signal macOS.
3. **Continuity:** moving/resizing/selecting an object maintains the user's sense of location. Avoid unrelated entrance animations on data-heavy screens.
4. **Direct manipulation:** when appropriate, selection, resize, drag and hover feedback should match actual object state; don't animate a fake action.
5. **Predictable interaction:** preserve focus and scroll context, respond to repeated input immediately, provide Escape/cancel/undo semantics as determined by product-ui.
6. **Adaptability:** respect project brand, system Light/Dark, zoom, accessibility, reduced-motion/contrast/transparency and bilingual text.
7. **Web honesty:** browser semantics and keyboard controls take precedence over visually simulating AppKit.

**Do not** prescribe a global accent color, forced gray sidebar, fixed radius/shadow numbers or one layout arrangement. The target app's DESIGN.md or selected original shadcn preset governs exact values.

An Apple-inspired Provider gives aesthetic/animation decisions *after* product-ui decides real user jobs, IA, density, state meaning and layout regions.
