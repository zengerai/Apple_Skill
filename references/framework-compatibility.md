# Framework and deployment strategy

A provider is not license to switch frameworks. Inspect the existing application and declared manifest capability before recommending component code.

| Stack | Level | Recommended delivery |
|---|---|---|
| New React + Tailwind | native | original shadcn Luma/Rhea generator/component installs; Motion for complex transitions |
| Existing React with shadcn | native subject to current preset | reuse existing primitive/style; explicit migration only after authorization |
| Existing React without shadcn | native for Motion, adapted for visual-system components | preserve primitives or ask for approved shadcn adoption |
| Vue | guidance | use project's actual Vue primitives/CSS and compatible Vue Motion/WAAPI behavior; never ship React JSX as Vue |
| Vanilla HTML/CSS/JS | adapted | CSS transitions/Web Animations API for supported effects, no React/shadcn component code |

The manifest's `react: native` means **this provider has a supported React path**; it does not promise every browser, React or dependency version passes without testing.

For browser-only UI the example React gallery is a runnable **Motion reference lab**, not an official shadcn preset. For real projects use installed original component code and protect API/route/permission behavior.

Implementation checklist: component version, actual installed npm packages, license notes, current UI stack, selected preset, dependencies requiring authorization, CSS source, browser targets, a11y state and unavailable features.
