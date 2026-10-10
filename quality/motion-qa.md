# Motion runtime QA — for gallery and real product integration

Do not claim these cases passed unless run in a browser with actual test evidence. Focus and functional state outrank effects.

## Required tests

1. Repeated rapid input (10x tab/segment switches, open/close twice quickly): final selected item and aria-pressed/aria-selected agree.
2. If an overlay opens during another action: no stale content, focus trap/focus restoration remain correct; Escape works; no lingering scrim.
3. With `prefers-reduced-motion: reduce`: spatial effects disabled/near-instant; status, keyboard and focus remain available.
4. With Light/Dark: text contrast, scrim, focus indicators, selection and loading states remain legible.
5. On 375px, 750px, 1024px and desktop: no document-wide horizontal overflow; local table scroll is acceptable.
6. Tab/Shift+Tab, Enter/Space, Escape; arrow keys for actual tablist/listbox controls. Never simulate ARIA roles without behavior.
7. Drag/drop includes keyboard alternative; resizing includes arrow-key or accessible input alternative.
8. Loading/success: updates independent of animation callback, no stale or lost status after duplicate action or unmount.
9. Local utility example must not upload or mutate files; UI clearly says preview only.
10. No uncaught JS errors; no unexpected network requests from interaction examples.

## Actual runtime commands

```bash
cd examples/motion-gallery
npm install
npm run build
npm run dev
# another terminal (Python + Playwright + Chromium installed):
python ../../scripts/browser_smoke.py --url http://127.0.0.1:5173
```

The smoke script inspects representative routes/patterns, rapid selection and reduced-motion, not exhaustive ARIA tests. Production apps still require library-level integration tests and review.

## Demo limitations

The standalone gallery uses CSS/JSX wrappers to demonstrate animation. Action List is plain buttons, **not** a complete ARIA role=menu with arrow/typeahead. Native dialog supplies platform focus/escape baseline, but advanced dialog/sheet lifecycle should use tested primitives in actual products. Simple drop target and sorting have keyboard/click alternatives but aren't full enterprise DnD/virtualized trees. The gallery is not itself the official shadcn Luma/Rhea generated application.
