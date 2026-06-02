# Stretching App — Design System

A design system reconstructed from the Figma file **`test.fig`** (Page 1 → frames `G`, `G-2_1`, `G-2_2`, `G-2_3`). It captures the **Friends (친구)** feature of a Korean mobile **stretching / posture-reminder** app: a social layer where users find friends, nudge them to stretch with reminders, and invite them to stretch together.

> Source of truth: the attached `test.fig`. Frames cover the Friends list, friend search, search results (with a pending state), and a no-results empty state. There is no codebase attached — all tokens, components, and copy below are derived directly from the Figma frames.

---

## Product context

The app helps people who sit a lot (desk workers) **stretch regularly and fix their posture**. The bottom navigation reveals the full product surface:

| Tab | Korean | Meaning |
|-----|--------|---------|
| Home | 홈 | Dashboard |
| Friends | 친구 | Social / this feature |
| Timeline | 타임라인 | Activity feed / history |
| Stretching | 스트레칭 | The core stretching flow |
| Settings | 설정 | Settings |

The **Friends** feature lets a user:
- Browse their friends with live presence (`Active now`, `Last active 2h ago`, `Away`).
- Send a friend a **reminder** to stretch — the primary cyan **알림보내기** ("Send reminder") button.
- Expand a friend to reveal two prompts: **스트레칭 하세요!** ("Go stretch!") and **스트레칭 같이해요** ("Let's stretch together").
- **Search** by nickname / ID to **add friends** (친구 추가), with a **처리중** ("Pending") state while a request is in flight.

---

## Content fundamentals

- **Language:** Korean UI copy, English personal names (Alex Johnson, Sarah Miller…). Keep this mix — it's intentional, names come from user profiles.
- **Voice:** warm, encouraging, action-first. Buttons are imperative verbs (알림보내기 / 친구 추가). Prompts use friendly exclamation (스트레칭 하세요!).
- **Casing:** Korean has no casing; English names use Title Case. No ALL-CAPS anywhere.
- **Tone of empty states:** gently instructive, never scolding. Heading states the goal (친구를 추가해보세요 — "Try adding a friend"), sub-line tells you how (추가할 친구의 ID를 검색해 보세요 — "Search for a friend's ID to add").
- **Status microcopy:** terse and lowercase-feeling — `Active now`, `Away`, `Last active 5m ago`.
- **No emoji.** Meaning is carried by icons + color, not emoji.
- **Numbers:** result counts inline in the section label — 검색 결과(4) ("Search results (4)").

---

## Visual foundations

**Overall feel:** clean, airy, near-flat. A bright **cyan (#56D2FF)** is the single brand color, used sparingly against a white/very-soft-grey canvas. The greys carry a subtle **green tint** (e.g. `#A8B2AB`, `#F6F8F6`) which keeps the app feeling calm and "wellness", not clinical blue-grey.

- **Color usage:** one accent only. Cyan = primary action + active state. Everything else is ink + green-grey neutrals. Disabled/secondary actions drop to the `#EEF0EE` fill with `#A8B2AB` text.
- **Background:** flat white (`#FFFFFF`). The only fills are the `#F6F8F6` input/row tint and `#EEF0EE` hairlines. No gradients, no imagery, no patterns.
- **Type:** **Pretendard** for everything except the 10px bottom-nav labels, which use **Inter Bold**. Tight tracking (`-0.03em`) and a consistent `1.4` line-height. Bold for titles/names/buttons; Regular for body and meta.
- **Corner radii:** `8px` for inputs, primary buttons, and action cards; `6px` for the small 친구 추가 button; full-round for avatars and pills.
- **Cards / separation:** separation comes from **hairline borders** (`1px #EEF0EE`) and **surface tint** (`#F6F8F6`), *not* drop shadows. The expanded friend row sits on a `#F6F8F6` block. Reserve a single soft shadow (`0 8px 24px rgba(34,41,38,.12)`) for transient floating UI only (toasts, sheets).
- **Avatars:** white circle, `1px #EEF0EE` ring, grey person glyph centered. Sizes: 48px (friend list), 32px (search rows), 64px (empty-state illustration circle, filled `#EEF0EE`).
- **Buttons:** 44px tall primary (`알림보내기`), 36px small (`친구 추가`). Filled cyan with white bold 14px label; ghost variant = white fill + cyan border + cyan label (action cards).
- **Inputs:** 48px tall, `#F6F8F6` fill, `8px` radius, `1px #EEF0EE` border at rest → `2px #78DBFF` border + `#222` text when focused, with a trailing **✕ clear** affordance once filled.
- **Layout:** fixed `375px` mobile width, 24px page gutters, 16px row padding. Fixed iPhone status bar on top, fixed 5-tab nav (81px, top hairline) on the bottom.
- **Motion / states (recommended, app is mostly static in Figma):** hover/press on primary → `#34C4FB`; press → subtle scale-down (0.97). Row expand → height/opacity ease. Keep easing soft (`cubic-bezier(.2,.7,.3,1)`), ~180–220ms. No bouncy or decorative looping animation — the brand is calm.

---

## Iconography

- **Style:** solid/filled monochrome glyphs (not outline strokes). Each Figma icon ships as an SVG with `fill="currentColor"`, so they **tint via CSS `color`** — grey (`#B9C2BC`) when passive, white on primary buttons, cyan when active.
- **Copied from Figma** into `assets/icons/` (use these — do not redraw):
  - `bell.svg` — header notifications + the reminder glyph
  - `search.svg` — input magnifier
  - `avatar-person.svg` — person silhouette inside avatars
  - `remind-bell.svg` — bell on the 알림보내기 button
  - `posture-up.svg` — "Go stretch!" prompt glyph (person + up-arrow)
  - `posture-together.svg` — "Stretch together" prompt glyph
  - `people-empty.svg` — group glyph for empty states
  - `clear-x.svg` — ✕ to clear the search field
  - `nav-home.svg` — Home tab glyph
- **Substitution flag:** the Figma reconstruction collapsed the five bottom-nav icons to a single extracted glyph (`nav-home.svg`). The remaining nav icons (Friends/people, Timeline/chart, Stretching/walk, Settings/gear) are rendered with the closest **[Lucide](https://lucide.dev)** matches in the UI kit and **should be replaced with the real brand glyphs** when available. Everything else is the genuine Figma asset.
- **No emoji, no unicode-as-icon.** The back affordance is a chevron (drawn inline in the UI kit, matching the Figma path).

---

## Index — what's in this system

| Path | What it is |
|------|------------|
| `colors_and_type.css` | All design tokens: color vars, type ramp, semantic type classes, radii, spacing, elevation. Import this in any artifact. |
| `assets/icons/` | Real SVG glyphs copied from the Figma (tint via `currentColor`). |
| `preview/` | Design-system cards (type, color, spacing, components) shown in the Design System tab. |
| `ui_kits/app/` | Mobile UI kit — JSX components + interactive `index.html` recreating the Friends flow. |
| `SKILL.md` | Agent-Skill manifest so this folder works as a downloadable Claude skill. |

---

## How to use

1. Link `colors_and_type.css` and use the CSS vars / `.t-*` classes — never hardcode hex.
2. Pull glyphs from `assets/icons/` and tint with `color:` (they're `currentColor`).
3. Compose screens from `ui_kits/app/` components.
4. Stay flat: hairlines + surface tint for separation, cyan for one action per view, calm motion.
