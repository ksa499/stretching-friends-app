import React from "react";
import { Avatar } from "./Avatar";
import { RemindButton } from "./Button";
import { Icon } from "../icons/Icon";
import type { IconName } from "../icons/registry";

export interface StretchAction {
  icon: IconName;
  label: string;
  onClick?: () => void;
}

const DEFAULT_ACTIONS: StretchAction[] = [
  { icon: "posture-up", label: "스트레칭 하세요!" },
  { icon: "posture-together", label: "스트레칭 같이해요" },
];

export interface Friend {
  id: string;
  name: string;
  status: string;
}

export interface FriendRowProps {
  friend: Friend;
  expanded?: boolean;
  sent?: boolean;
  onToggle?: () => void;
  onRemind?: () => void;
  /** prompts revealed when expanded; defaults to the two stretch actions */
  actions?: StretchAction[];
}

/** A friend list row. Tap toggles the expanded stretch-prompt cards. */
export function FriendRow({
  friend,
  expanded = false,
  sent = false,
  onToggle,
  onRemind,
  actions = DEFAULT_ACTIONS,
}: FriendRowProps) {
  return (
    <div className={expanded ? "ds-row--expanded" : undefined}>
      <div className="ds-row" onClick={onToggle}>
        <div className="ds-row__id">
          <Avatar size={48} />
          <div className="ds-row__text">
            <span className="ds-name" style={{ whiteSpace: "nowrap" }}>{friend.name}</span>
            <span className="ds-meta">{friend.status}</span>
          </div>
        </div>
        <RemindButton sent={sent} onClick={onRemind} />
      </div>

      {expanded && (
        <div className="ds-actions ds-actions--anim">
          {actions.map((a) => (
            <button
              key={a.label}
              type="button"
              className="ds-press ds-action"
              onClick={(e) => { e.stopPropagation(); a.onClick?.(); }}
            >
              <Icon name={a.icon} width={a.icon === "posture-together" ? 11 : 18} />
              <span>{a.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default FriendRow;
