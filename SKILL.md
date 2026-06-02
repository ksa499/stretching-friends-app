---
name: stretching-app-design
description: Use this skill to generate well-branded interfaces and assets for the Stretching App (a Korean stretching / posture-reminder mobile app), either for production or throwaway prototypes/mocks. Contains design guidelines, colors, type, fonts, assets, and UI-kit components for prototyping its Friends feature and beyond.
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available files.

Key files:
- `README.md` — product context, content fundamentals, visual foundations, iconography, index.
- `colors_and_type.css` — design tokens (color vars, type ramp, semantic `.t-*` classes, radii, spacing). Import this; never hardcode hex.
- `assets/icons/` — real SVG glyphs from the source Figma (tint via `currentColor`).
- `preview/` — design-system reference cards (type, color, spacing, components) + `icons.js` inline-SVG registry.
- `ui_kits/app/` — interactive React UI kit recreating the Friends flow; reusable components.

If creating visual artifacts (slides, mocks, throwaway prototypes), copy assets out and create static HTML files for the user to view. If working on production code, copy assets and apply the rules here to design on-brand.

Core brand reminders: one cyan accent (`#56D2FF`) for the single key action + active state; calm green-tinted greys; flat surfaces (hairlines + `#F6F8F6` tint, not shadows); Pretendard type with tight `-0.03em` tracking; 8px radii, full-round avatars; warm, action-first Korean copy; no emoji.

If the user invokes this skill without other guidance, ask what they want to build, ask a few clarifying questions, and act as an expert designer who outputs HTML artifacts or production code depending on the need.
