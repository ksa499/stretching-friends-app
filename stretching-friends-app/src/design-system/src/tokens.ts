/**
 * Stretching App — Design tokens as typed JS objects.
 * Mirrors styles/tokens.css. Use when you need token values in JS
 * (animations, canvas, charts) — for styling prefer the CSS variables.
 */

export const color = {
  primary: "#56D2FF",
  primaryLight: "#78DBFF",
  primaryPress: "#34C4FB",
  primaryTint: "#EAF9FF",

  inkStrong: "#000000",
  ink: "#222222",
  ink600: "#4B5563",
  ink500: "#6B7280",

  muted700: "#868F89",
  muted600: "#A8B2AB",
  muted500: "#B9C2BC",
  muted400: "#CBD1CD",

  bg: "#FFFFFF",
  surface: "#F6F8F6",
  border: "#EEF0EE",
} as const;

export const font = {
  sans: '"Pretendard", -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", "Malgun Gothic", "Segoe UI", system-ui, sans-serif',
  ui: '"Inter", "Pretendard", system-ui, sans-serif',
} as const;

export const fontSize = {
  title: 24,
  name: 16,
  body: 16,
  label: 14,
  input: 14,
  meta: 12,
  nav: 10,
} as const;

export const tracking = {
  tight: "-0.030em",
  ui: "-0.023em",
} as const;

export const radius = {
  sm: 6,
  md: 8,
  full: 9999,
} as const;

export const space = {
  gutter: 24,
  rowPad: 16,
  gap: 16,
} as const;

export const shadow = {
  float: "0 8px 24px rgba(34, 41, 38, 0.12)",
} as const;

/**
 * Semantic, role-based tokens — prefer these in product code.
 * `status.online/away/danger` are proposed (not in the source Figma);
 * swap for brand values when defined.
 */
export const semantic = {
  text: {
    primary: color.ink,
    secondary: color.ink500,
    tertiary: color.muted500,
    disabled: color.muted600,
    onPrimary: "#FFFFFF",
    link: color.primary,
  },
  surface: {
    canvas: color.bg,
    subtle: color.surface,
    disabled: color.border,
    action: color.primary,
    actionHover: color.primaryPress,
    actionSubtle: color.primaryTint,
  },
  border: {
    default: color.border,
    strong: color.muted500,
    focus: color.primaryLight,
    action: color.primary,
  },
  action: {
    primary: color.primary,
    primaryHover: color.primaryPress,
    onPrimary: "#FFFFFF",
    disabledBg: color.border,
    disabledFg: color.muted600,
  },
  status: {
    info: color.primary,
    online: "#57C98A",
    away: "#E0B23C",
    danger: "#E5736B",
  },
} as const;

export const tokens = { color, font, fontSize, tracking, radius, space, shadow, semantic } as const;
export type Tokens = typeof tokens;
export default tokens;
