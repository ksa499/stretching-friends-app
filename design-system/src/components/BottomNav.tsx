import React from "react";
import { Icon } from "../icons/Icon";
import type { IconName } from "../icons/registry";

export interface NavTab {
  key: string;
  icon: IconName;
  label: string;
  /** glyph width/height in px */
  size?: [number, number];
}

export const DEFAULT_TABS: NavTab[] = [
  { key: "home", icon: "nav-home", label: "홈", size: [21, 18] },
  { key: "friends", icon: "people-empty", label: "친구", size: [22, 18] },
  { key: "timeline", icon: "nav-timeline", label: "타임라인", size: [20, 20] },
  { key: "stretch", icon: "nav-stretch", label: "스트레칭", size: [20, 20] },
  { key: "settings", icon: "nav-settings", label: "설정", size: [20, 20] },
];

export interface BottomNavProps {
  active: string;
  onSelect?: (key: string) => void;
  tabs?: NavTab[];
}

/** Fixed bottom navigation. Active tab tints cyan. */
export function BottomNav({ active, onSelect, tabs = DEFAULT_TABS }: BottomNavProps) {
  return (
    <nav className="ds-nav">
      {tabs.map((t) => {
        const on = active === t.key;
        const [w, h] = t.size ?? [22, 20];
        return (
          <button
            key={t.key}
            type="button"
            onClick={() => onSelect?.(t.key)}
            className={["ds-press ds-nav__tab", on ? "ds-nav__tab--active" : ""].filter(Boolean).join(" ")}
            aria-current={on ? "page" : undefined}
          >
            <Icon name={t.icon} width={w} height={h} />
            <span className="ds-nav__label">{t.label}</span>
          </button>
        );
      })}
    </nav>
  );
}

export default BottomNav;
