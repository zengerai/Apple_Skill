# Apple-inspired Desktop SaaS v2.0

An independent and domain-neutral Codex Skill for refined **macOS-inspired Web application design** + modern minimal SaaS. Contains extensive design system documentation, three layers of W3C DTCG-style tokens, generated CSS theme mappings, reusable component patterns, motion, interaction contracts, responsive layouts, a runnable component gallery, and an independent/provider execution contract.

## Install

Download the ZIP and unzip so the final path is:

`~/.agents/skills/apple-inspired-desktop-saas/SKILL.md`  (or your Codex installation's configured skills directory).

```sh
mkdir -p ~/.agents/skills
unzip apple-inspired-desktop-saas-v2.0.zip -d ~/.agents/skills/
python3 ~/.agents/skills/apple-inspired-desktop-saas/scripts/validate_package.py
```

If replacing an older ZIP install, back up then remove the old `apple-inspired-desktop-saas` folder first so no obsolete references remain. Reload Codex if necessary. This Skill **does not require** product-ui or third-party Skills to be installed.

## Use

```
使用 $apple-inspired-desktop-saas，针对当前产品真实功能设计苹果原生感的 Web 前端。先完成一页可运行 Demo 供我审核，再扩展。不要使用示例业务字段。
```

For a single bounded UI request, implementation can be direct. To review without edits: `使用 $apple-inspired-desktop-saas 以 standalone-audit 模式检查当前页面，不修改代码。`

For product-ui integration, `product-ui` selects this installed Skill when Apple visual direction is approved and uses `integrations/product-ui-provider.md`. Provider never takes over product routing, user checkpoints, Hallmark/Impeccable or external Skill dispatch.

## Where to look

- `SKILL.md` — modes and routing
- `foundations/` — design principles, typography, materials, iconography, tokens
- `tokens/` — light/dark DTCG token documents and density
- `assets/styles/design-tokens.css` — compiled CSS theme variables
- `components/` — catalogue and detailed state/behavior contracts
- `patterns/` — task-driven layout choices and responsive rules
- `interaction/` — interaction states, motion, keyboard, focus
- `integrations/` — implementation stack and optional original external Skills
- `examples/component-gallery/` — offline interactive neutral gallery with themes and density
- `quality/` — acceptance and comparison playbooks
- `scripts/` — CSS token build, ZIP checks, and optional real-browser smoke tests

## Principles

Browser-native Web, not faux macOS window. Clear hierarchy, sensible density, subtle hierarchy/depth, no decorative glass explosion. Colors, layouts and examples are defaults, never fixed business requirements. Honor `prefers-reduced-motion`, focus restoration and proper semantic HTML. Screenshot-based review is recommended; screenshot-only is not a substitute for working interactions.

## Sources (design inspiration, not vendored source code)

- Apple Human Interface Guidelines: https://developer.apple.com/design/human-interface-guidelines/
- Design Tokens Community Group 2025.10: https://www.w3.org/community/reports/design-tokens/CG-FINAL-format-20251028/
- React Aria: https://react-aria.adobe.com/
- ARIA APG: https://www.w3.org/WAI/ARIA/apg/
- shadcn/ui: https://ui.shadcn.com/
- Storybook: https://storybook.js.org/

Optional Chromium browser smoke test (requires Playwright installed separately): `python3 scripts/browser_smoke.py`. It uses the fully inlined gallery and does not require a local server.

No external Skill contents, vendor component source, assets, or fonts are redistributed. Bundled examples are original neutral illustrations of these principles.
