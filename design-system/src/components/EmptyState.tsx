import React from "react";
import { Icon } from "../icons/Icon";

export interface EmptyStateProps {
  title: string;
  description?: string;
  icon?: React.ComponentProps<typeof Icon>["name"];
}

/** Centered empty state — instructive title + how-to sub-line. */
export function EmptyState({ title, description, icon = "people-empty" }: EmptyStateProps) {
  return (
    <div className="ds-empty">
      <div className="ds-empty__icon">
        <Icon name={icon} width={32} style={{ opacity: 0.7 }} />
      </div>
      <p className="ds-empty__title">{title}</p>
      {description && <p className="ds-empty__sub">{description}</p>}
    </div>
  );
}

export default EmptyState;
