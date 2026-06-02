import React from "react";
import { Icon } from "../icons/Icon";

export interface AvatarProps {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

/** Avatar — white circle, hairline ring, grey person glyph. */
export function Avatar({ size = 48, className, style }: AvatarProps) {
  const w = Math.round(size * 0.75);
  return (
    <div
      className={["ds-avatar", className].filter(Boolean).join(" ")}
      style={{ width: size, height: size, ...style }}
    >
      <Icon name="avatar-person" width={w} />
    </div>
  );
}

export default Avatar;
