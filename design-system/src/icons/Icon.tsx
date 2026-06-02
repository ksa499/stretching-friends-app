import React from "react";
import { icons, type IconName } from "./registry";

export interface IconProps {
  name: IconName;
  /** width in px (height defaults to keep aspect ratio of the viewBox) */
  size?: number;
  width?: number;
  height?: number;
  /** any CSS color; defaults to currentColor (inherits text color) */
  color?: string;
  className?: string;
  style?: React.CSSProperties;
  title?: string;
}

/**
 * Inline-SVG icon. Tints via `color` (currentColor). Pass `size` for a
 * square, or `width`/`height` to match a glyph's native ratio.
 */
export function Icon({ name, size, width, height, color, className, style, title }: IconProps) {
  const def = icons[name];
  if (!def) return null;

  const [, , vbW, vbH] = def.viewBox.split(" ").map(Number);
  const w = width ?? size ?? vbW;
  const h = height ?? size ?? (width ? (width * vbH) / vbW : vbH);

  return (
    <svg
      className={className}
      width={w}
      height={h}
      viewBox={def.viewBox}
      fill="currentColor"
      preserveAspectRatio="xMidYMid meet"
      role={title ? "img" : "presentation"}
      aria-hidden={title ? undefined : true}
      aria-label={title}
      style={{ color, display: "block", flex: "none", ...style }}
      dangerouslySetInnerHTML={{ __html: (title ? `<title>${title}</title>` : "") + def.body }}
    />
  );
}

export default Icon;
