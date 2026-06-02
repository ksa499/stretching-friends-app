# Stretching · Friends (React + TypeScript + Vite)

The interactive **Friends (친구)** app, ready to open in VS Code and run. Built on the included design system (`src/design-system/`).

## Run it

Requires **Node 18+**.

```bash
npm install
npm run dev
```

Open the printed URL (usually http://localhost:5173). Production build: `npm run build` then `npm run preview`.

## What's inside

```
stretching-friends-app/
├─ index.html
├─ package.json · vite.config.ts · tsconfig.json
└─ src/
   ├─ main.tsx           # entry — mounts <App/>, imports DS styles
   ├─ App.tsx            # renders <FriendsApp/>
   ├─ index.css          # centers the phone on a stage
   └─ design-system/     # the design system (tokens + components)
      ├─ styles/         # tokens.css · base.css · components.css
      ├─ src/
      │  ├─ tokens.ts          # typed tokens (color/semantic/radius/…)
      │  ├─ icons/             # Icon + SVG registry
      │  ├─ components/        # Avatar, Button, SearchField, FriendRow, BottomNav, …
      │  └─ screens/           # FriendsScreen, SearchScreen, FriendsApp
      ├─ tailwind.preset.cjs   # optional Tailwind theme
      └─ README.md             # design-system usage docs
```

## Try the flow

- Tap a friend row → expands the **스트레칭 하세요! / 스트레칭 같이해요** prompts.
- Tap **알림보내기** → toast, button becomes **보냈어요**.
- Tap the search bar → **검색** screen. Type "Alex" → live results with **친구 추가** (→ 처리중 → 추가됨). Clear → recent searches + empty state.
- Bottom nav switches tabs (non-Friends tabs show a "준비 중" placeholder).

## Use the components in your own code

```tsx
import { FriendRow, BottomNav, Icon, tokens } from "./design-system/src";
```

See `src/design-system/README.md` for the full component + token reference.

## Notes

- Fonts: Pretendard (CDN) + Inter (Google Fonts), loaded in `base.css`. Self-host Pretendard for production.
- `nav-timeline / nav-stretch / nav-settings` icons are Lucide-style placeholders — the source Figma only exposed the Home glyph. Replace in `src/design-system/src/icons/registry.ts`.
- Status colors (online/away/danger) are proposed, not from the source Figma.
