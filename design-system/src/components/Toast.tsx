import React from "react";
import { Icon } from "../icons/Icon";

export interface ToastProps {
  show: boolean;
  message: string;
  /** show the small bell glyph (used for reminder confirmations) */
  withIcon?: boolean;
}

/** Transient confirmation toast. Position it inside a relative container. */
export function Toast({ show, message, withIcon = true }: ToastProps) {
  return (
    <div className={["ds-toast", show ? "ds-toast--show" : ""].filter(Boolean).join(" ")} role="status">
      {withIcon && <Icon name="remind-bell" width={11} color="#fff" />}
      {message}
    </div>
  );
}

export default Toast;
