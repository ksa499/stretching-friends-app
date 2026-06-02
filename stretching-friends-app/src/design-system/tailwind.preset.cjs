/**
 * Optional Tailwind preset — maps the design tokens onto Tailwind's theme
 * so you can use utilities like `bg-primary`, `text-ink`, `rounded-md`.
 * Only needed if your app uses Tailwind. Wire it up in tailwind.config:
 *
 *   module.exports = {
 *     presets: [require("./design-system/tailwind.preset.cjs")],
 *     content: ["./src/**\/*.{ts,tsx}", "./design-system/**\/*.{ts,tsx}"],
 *   };
 *
 * The components in this kit style themselves with the `ds-` CSS classes
 * (components.css), so they work WITHOUT Tailwind — this preset is purely
 * for your own application code.
 */
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#56D2FF",
          light: "#78DBFF",
          press: "#34C4FB",
          tint: "#EAF9FF",
        },
        ink: {
          strong: "#000000",
          DEFAULT: "#222222",
          600: "#4B5563",
          500: "#6B7280",
        },
        muted: {
          700: "#868F89",
          600: "#A8B2AB",
          500: "#B9C2BC",
          400: "#CBD1CD",
        },
        surface: "#F6F8F6",
        hairline: "#EEF0EE",
      },
      fontFamily: {
        sans: ['"Pretendard"', "-apple-system", "BlinkMacSystemFont", "system-ui", "sans-serif"],
        ui: ['"Inter"', '"Pretendard"', "system-ui", "sans-serif"],
      },
      fontSize: {
        title: ["24px", { lineHeight: "1.4", letterSpacing: "-0.03em" }],
        name: ["16px", { lineHeight: "1.4", letterSpacing: "-0.03em" }],
        body: ["16px", { lineHeight: "1.4", letterSpacing: "-0.03em" }],
        label: ["14px", { lineHeight: "1.4", letterSpacing: "-0.03em" }],
        meta: ["12px", { lineHeight: "1.4", letterSpacing: "-0.03em" }],
        nav: ["10px", { lineHeight: "15px", letterSpacing: "-0.023em" }],
      },
      borderRadius: {
        sm: "6px",
        md: "8px",
      },
      boxShadow: {
        float: "0 8px 24px rgba(34, 41, 38, 0.12)",
      },
    },
  },
};
