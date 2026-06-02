# App UI Kit — Friends (친구)

An interactive, high-fidelity recreation of the stretching app's **Friends** feature, built from the Figma frames. Open `index.html` to use it.

## Flow
- **Friends list** (`친구`) — search entry, friend rows with presence + **알림보내기** (send reminder). Tap a row to expand the **스트레칭 하세요! / 스트레칭 같이해요** prompts. Tap 알림보내기 → confirmation toast, button → `보냈어요`.
- **Search / add friend** (`검색`) — tap the search bar. Empty = recent searches + "친구를 추가해보세요" empty state. Type to filter live results with **친구 추가** buttons (→ `처리중` → `추가됨`). No match = "사용자가 없습니다". Back chevron returns.
- **Other tabs** — nav highlights; non-Friends tabs show a "준비 중입니다" placeholder (those screens aren't in the source file).

## Files
| File | Purpose |
|------|---------|
| `index.html` | Entry point — loads React + tokens + all components |
| `kit.css` | Phone shell, scroll, toast, shared atoms |
| `icons.js` | Inline-SVG icon registry (`window.svgIcon`), tints via `currentColor` |
| `Icon.jsx` | `<Icon>` + `<Avatar>` |
| `StatusBar.jsx` | iPhone status bar |
| `Nav.jsx` | `RemindButton`, `AddButton`, `BottomNav` |
| `FriendsScreen.jsx` | Friends list + expandable rows + action prompts |
| `SearchScreen.jsx` | Add-friend search, results, empty states |
| `App.jsx` | Screen routing, toast |

## Notes
- Tokens come from `../../colors_and_type.css`. Don't hardcode hex.
- Home/Friends glyphs are the real Figma assets; Timeline/Stretching/Settings nav icons are flagged Lucide-style substitutes (see root README → Iconography).
- Components export to `window` (separate Babel scripts don't share scope).
