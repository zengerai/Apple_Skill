# Apple Provider Motion Gallery

A React + Motion demonstration environment. It provides 16 independent interactive patterns (P01–P16) and two context screens ("紧凑工作台" / "轻量工具"). The styling is **original neutral demonstration CSS**, NOT a snapshot of official shadcn Luma/Rhea components.

## Run

```sh
npm install
npm run dev
npm run build
```

The React demo currently uses `motion/react` with `React` and Vite. To implement a **real Luma/Rhea product**, generate/install the selected official shadcn style via https://ui.shadcn.com/create and apply the motion recipes onto its real component primitives. Do not call this lab an exact official preset reproduction.

## Interactions

P01 action press, P02 switch, P03 segmented, P04 tabs, P05 popover, P06 action list, P07 native dialog, P08 native drawer, P09 collapsible navigation, P10 split pane, P11 shared element, P12 reorder, P13 drop target, P14 pending/success, P15 toast, P16 number update.

The compact-workbench sample has search/selection/density and inspector context. The utility sample accepts local files, displays filename preview and explicitly does **not** rename/upload anything. No backend or real persistence.

For accessibility differences between lab and production-grade components see `../../quality/motion-qa.md`. Automated test: `python ../../scripts/browser_smoke.py --url http://127.0.0.1:5173`.
