# Stretching App — Design System (React + TypeScript)

Drop-in design system for the stretching/posture app's **Friends (친구)** feature. Tokens + icons + typed React components, styled with plain CSS variables so they render **without any build config** (Tailwind preset included as an option).

```
design-system/
├─ package.json              # metadata + peer deps (react ≥18)
├─ tailwind.preset.cjs       # OPTIONAL Tailwind theme preset
├─ styles/
│  ├─ tokens.css             # :root CSS variables  ← import once
│  ├─ base.css               # webfonts + minimal reset
│  └─ components.css         # ds-* component classes
└─ src/
   ├─ index.ts               # barrel export
   ├─ tokens.ts              # typed token objects (color/font/radius/…)
   ├─ icons/
   │  ├─ registry.ts         # IconName + SVG paths (currentColor)
   │  └─ Icon.tsx            # <Icon name=… />
   ├─ components/            # Avatar, Button, SearchField, FriendRow,
   │  └─ …                   #   BottomNav, EmptyState, Toast, StatusBar
   └─ screens/               # FriendsScreen, SearchScreen, FriendsApp (demo)
```

## Install into your project (VS Code)

1. Copy the `design-system/` folder into your repo (e.g. `src/design-system/`).
2. Ensure React 18+ is installed. No other runtime deps.
3. Import the three stylesheets **once** at your app root (order matters):

```ts
import "@/design-system/styles/tokens.css";
import "@/design-system/styles/base.css";
import "@/design-system/styles/components.css";
```

4. Use the components:

```tsx
import { FriendsApp } from "@/design-system/src";

export default function App() {
  return <FriendsApp />;            // full interactive demo (phone shell)
}
```

…or compose the pieces yourself:

```tsx
import { FriendRow, BottomNav, SearchField, Icon, tokens } from "@/design-system/src";

<div className="ds-root">
  <SearchField readOnly onPress={openSearch} />
  <FriendRow friend={{ id: "1", name: "Sarah Miller", status: "Active now" }}
             expanded onRemind={sendReminder} />
  <BottomNav active="friends" onSelect={setTab} />
  <Icon name="remind-bell" width={12} color={tokens.color.primary} />
</div>
```

> Wrap your tree in an element with `className="ds-root"` (or add the class to `<body>`) to inherit the base font + smoothing. The `FriendsApp` demo already does this.

## Components

| Component | Notes |
|-----------|-------|
| `Icon` | `name` from `IconName`; tints via `color` (currentColor) |
| `Avatar` | `size` (32 / 48 / 64) |
| `RemindButton` | `sent` → disabled "보냈어요" |
| `AddButton` | `state`: `"add" | "pending" | "added"` |
| `SearchField` | editable (controlled/uncontrolled) or `readOnly` entry pill |
| `FriendRow` | `expanded` reveals the stretch-prompt cards; `onToggle`, `onRemind` |
| `BottomNav` | 5 tabs, `active` tints cyan; pass custom `tabs` |
| `EmptyState` | `title` + `description` + `icon` |
| `Toast` | `show` + `message`; place inside a relative container |
| `StatusBar` | demo iPhone status bar |
| `FriendsScreen` / `SearchScreen` / `FriendsApp` | full screens + routed demo |

## Tokens

- **CSS variables** — `var(--ds-primary)`, `var(--ds-ink)`, `var(--ds-r-md)`, … (see `styles/tokens.css`).
- **TypeScript** — `import { tokens } from "@/design-system/src"` → `tokens.color.primary`, `tokens.radius.md`, …
- **Tailwind (optional)** — add the preset, then use `bg-primary`, `text-ink`, `rounded-md`, `shadow-float`:
  ```js
  // tailwind.config.js
  module.exports = {
    presets: [require("./src/design-system/tailwind.preset.cjs")],
    content: ["./src/**/*.{ts,tsx}"],
  };
  ```

## Fonts

`base.css` loads **Pretendard** (CDN) + **Inter** (Google Fonts). For production, self-host Pretendard and replace the `@import` — see [orioncactus/pretendard](https://github.com/orioncactus/pretendard). Inter is only used for the 10px bottom-nav labels.

## Notes / substitutions

- Real Figma glyphs: bell, search, avatar, posture prompts, home, back, people, clear.
- **`nav-timeline`, `nav-stretch`, `nav-settings` are Lucide-style placeholders** — the source Figma only exposed the Home nav glyph. Replace their `body` in `src/icons/registry.ts` with the real brand icons.
- Non-Friends tabs render a "준비 중" placeholder (those screens aren't in the source file).

This package mirrors the visual reference cards in the project's **Design System** tab and the HTML kit in `ui_kits/app/`.
