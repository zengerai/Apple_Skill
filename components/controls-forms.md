# Controls and forms — implementable contracts

## Buttons

- 34–36px default control height (compact 32); text 12–14px; radius ~8px; icon spacing 6–8px.
- Primary (one emphasized action per operation region), secondary, ghost, destructive. Avoid a page with six competing blue primary buttons.
- Pressed = subtle surface/translateY(1px) *only when motion allowed*; focus-visible ring always; pending state prevents duplicate action without changing button width.
- IconButton: `aria-label`, title/tooltip when appropriate; do not rely on icon shape recognition.

## SegmentedControl / Tabs

- Segmented: mutually exclusive modes of the same scope, small number of short labels (normally 2–4). Selection thumb glides 150–230ms when allowed, content updates independent of animation. Buttons use `aria-pressed` (segmented buttons) or proper Tablist/Tab semantics; do not mix models.
- Tabs: for content panels requiring keyboard roving and `aria-controls`; follow APG keys. Remember selected tab if returning to the page when useful.

## Forms

- Label visible; placeholder examples not replacements. Required vs optional indicated clearly.
- Help/error sits next to field, with `aria-describedby`, `aria-invalid`. Validate on submit or blur according to impact; avoid error flash while user is typing a partial value.
- Control groups reveal complexity progressively. Preserve unsaved changes; confirm destructive exit if necessary.
- Date/select/combobox: default native control unless complex search/keyboard behavior truly needed. Do not invent a custom dropdown list without correct ARIA/focus/listbox patterns.
- Upload/drop zone: button fallback, allowed formats/limits before upload, uploading/progress, invalid format, partial success and retry; don't block keyboard users behind drag/drop.
- Search: debounce remote calls as appropriate; immediate local state; clear button and result count; show empty/filter no-result distinctly.

## Example contract: input

`Label → Input (default/hover/focus/disabled/error) → help or error → pending/save result`. QA: long Chinese/English label, 200% zoom, keyboard-only form submit and Error Summary for long forms.
