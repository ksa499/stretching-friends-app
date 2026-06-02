import React from "react";
import { Icon } from "../icons/Icon";
import { SearchField } from "../components/SearchField";
import { FriendRow, type Friend } from "../components/FriendRow";

export const SAMPLE_FRIENDS: Friend[] = [
  { id: "alex", name: "Alex Johnson", status: "Last active 2h ago" },
  { id: "sarah", name: "Sarah Miller", status: "Active now" },
  { id: "jordan", name: "Jordan Lee", status: "Last active 5m ago" },
  { id: "casey", name: "Casey Wright", status: "Away" },
  { id: "elena", name: "Elena Rodriguez", status: "Last active 1d ago" },
];

export interface FriendsScreenProps {
  friends?: Friend[];
  /** id of the row expanded by default */
  initialExpanded?: string | null;
  onOpenSearch?: () => void;
  onRemind?: (friend: Friend) => void;
}

/** Friends list — header, search entry, expandable rows with reminder buttons. */
export function FriendsScreen({
  friends = SAMPLE_FRIENDS,
  initialExpanded = "sarah",
  onOpenSearch,
  onRemind,
}: FriendsScreenProps) {
  const [open, setOpen] = React.useState<string | null>(initialExpanded);
  const [sent, setSent] = React.useState<Record<string, boolean>>({});

  const remind = (f: Friend) => {
    if (sent[f.id]) return;
    setSent((s) => ({ ...s, [f.id]: true }));
    onRemind?.(f);
  };

  return (
    <div className="ds-screen">
      <header className="ds-header">
        <h1 className="ds-title">친구</h1>
        <button type="button" className="ds-press ds-iconbtn" aria-label="Notifications" style={{ color: "var(--ds-muted-500)" }}>
          <Icon name="bell" width={20} />
        </button>
      </header>

      <div className="ds-scroll">
        <div style={{ padding: "16px 24px" }}>
          <SearchField readOnly onPress={onOpenSearch} />
        </div>

        {friends.map((f) => (
          <FriendRow
            key={f.id}
            friend={f}
            expanded={open === f.id}
            sent={!!sent[f.id]}
            onToggle={() => setOpen((o) => (o === f.id ? null : f.id))}
            onRemind={() => remind(f)}
          />
        ))}
        <div style={{ height: 8 }} />
      </div>
    </div>
  );
}

export default FriendsScreen;
