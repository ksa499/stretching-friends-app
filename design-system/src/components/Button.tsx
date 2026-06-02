import React from "react";
import { Icon } from "../icons/Icon";

/* ---------------- RemindButton (알림보내기) ---------------- */
export interface RemindButtonProps {
  /** sent state → disabled, label becomes "보냈어요" */
  sent?: boolean;
  onClick?: () => void;
  labelDefault?: string;
  labelSent?: string;
  className?: string;
}

export function RemindButton({
  sent = false,
  onClick,
  labelDefault = "알림보내기",
  labelSent = "보냈어요",
  className,
}: RemindButtonProps) {
  return (
    <button
      type="button"
      disabled={sent}
      onClick={sent ? undefined : onClick}
      className={["ds-press ds-btn ds-btn--remind", sent ? "ds-btn--disabled" : "ds-btn--primary", className]
        .filter(Boolean)
        .join(" ")}
    >
      <Icon name="remind-bell" width={11} />
      {sent ? labelSent : labelDefault}
    </button>
  );
}

/* ---------------- AddButton (친구 추가) ---------------- */
export type AddState = "add" | "pending" | "added";

export interface AddButtonProps {
  state?: AddState;
  onClick?: () => void;
  labels?: Partial<Record<AddState, string>>;
  className?: string;
}

export function AddButton({ state = "add", onClick, labels, className }: AddButtonProps) {
  const text = { add: "친구 추가", pending: "처리중", added: "추가됨", ...labels }[state];
  const isAdd = state === "add";
  return (
    <button
      type="button"
      disabled={!isAdd}
      onClick={isAdd ? onClick : undefined}
      className={["ds-press ds-btn ds-btn--add", isAdd ? "ds-btn--primary" : "ds-btn--disabled", className]
        .filter(Boolean)
        .join(" ")}
    >
      {text}
    </button>
  );
}

export default RemindButton;
