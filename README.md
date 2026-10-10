# Apple Design Provider v3.0

Independent **Apple-inspired visual + interactive motion** Skill, primarily a specialist Design Provider for [product-ui v3.0](https://github.com/zengerai/codex-test), with focused standalone tasks. **This is a full architectural reset** from the previous hardcoded v2.0 V4-theme package.

## Design base and what is NOT bundled

- **Principle**: [Apple Human Interface Guidelines](https://developer.apple.com/design/human-interface-guidelines/) applied pragmatically to browser-native product interfaces.
- **React visual implementation**: choose [official shadcn Luma](https://ui.shadcn.com/docs/changelog/2026-03-luma) or [Rhea](https://ui.shadcn.com/docs/changelog/2026-05-rhea) based on product constraints. **Install from official shadcn/create**; no vendor copies are included here.
- **Motion**: [Motion for React](https://motion.dev/docs/react) for spring, AnimatePresence, layout and shared elements; CSS for simple transitions. Demo includes **16 runnable motion/interaction patterns**, not an imitation of the macOS desktop.
- **Reference only**: applecn, Animate UI, Motion Primitives. See source/licenses warning in `references/upstream-sources.md`.
- **No hardcoded accent blue**, gray sidebar, font package, universal radius, fake traffic lights, Dock, desktop wallpaper or copied Apple assets.

## Install as independent Codex Skill

Clone this GitHub repository into a regular working directory and register/symlink it under your configured Skills directory:

```bash
git clone https://github.com/zengerai/Apple_Skill.git
mkdir -p ~/.agents/skills
ln -s /ABSOLUTE/PATH/TO/Apple_Skill ~/.agents/skills/apple-inspired-desktop-saas
python3 /ABSOLUTE/PATH/TO/Apple_Skill/scripts/validate.py
```

Use your Codex's actual skill installation path if different. Do not create a second conflicting installation under a different name.

## Usage

As provider:

```text
使用 $product-ui 开发文件管理工具。视觉采用 $apple-inspired-desktop-saas。
product-ui 先定页面布局，Apple Provider 负责 Luma/Rhea 的匹配、
组件外观与 Motion；完成一个真实 Product Demo 后请我确认。
```

Standalone:

```text
使用 $apple-inspired-desktop-saas，style-audit 模式只读检查当前 React 页面
是否符合选定的 Apple-inspired 风格及 Motion 规范，不修改代码。
```

Modes: `style-candidate` / `spec` / `implement` / `style-audit`. **Only implement may modify explicitly authorized files.** See `references/provider-protocol.md` and `examples/handoffs/`.

## How to choose Luma / Rhea

For a brand-new React application, use shadcn's actual **create** flow to select one preset and the project's appropriate primitive (Base UI or Radix), inspect the generated `components.json`, then install components from the original source. Rhea generally suits compact, high-density work; Luma generally suits more spacious utility/editor flows. This is a *recommendation*, not a global hardcoded default.

shadcn presets are not guaranteed to be interchangeable simply by flipping a CSS variable: Rhea changes component geometry. Existing projects should reuse approved DESIGN.md and installed components; an explicit visual reset needs product-ui's migration route.

## Run the motion gallery

This self-contained example exercises **16 patterns**, plus two product-layout scenarios. It is **a React + Motion training gallery**, with neutral demo-only CSS and no official shadcn style source copied into this repository.

```bash
cd examples/motion-gallery
npm install
npm run dev
# open the Vite URL printed in the terminal
npm run build
```

A browser and npm network access are required to install its example dependencies. No claim that the demo CSS equals official Luma/Rhea. Run keyboard, fast toggles, reduced-motion and breakpoint checks; see `quality/motion-qa.md`.

## Contract, references, quality

- `design-provider.json` — optional capability manifest matching SKILL.md name; not proof of runtime invocation.
- `references/provider-protocol.md` — product-ui Provider Protocol v1 handoff fields/modes, with external canonical link.
- `references/style-selection.md` — official styles and framework decision rules.
- `references/component-mapping.md`, `references/theme-adaptation.md` — task → component/visual choices; no duplicate product IA.
- `motion/patterns.md` — all 16 demo patterns.
- `examples/motion-gallery/` — runnable React + Motion example.
- `examples/handoffs/` — four mode examples.
- `scripts/validate.py`, `EVALS.md` — static integrity and behavior evaluation specification.
- `quality/` — style-specific review and motion runtime checks.

## Versions, backup, and provenance

The v2.0 implementation is preserved in Git history and the `archive/apple-skill-v2.0-20261010` branch. This v3 refactor intentionally does **not** import the old hardcoded CSS/token/gallery as defaults. Not an official Apple or shadcn project. See `references/upstream-sources.md` for the upstream links and licensing guidance.
