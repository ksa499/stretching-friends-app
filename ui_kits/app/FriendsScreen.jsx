// Friends list screen — header, search entry, expandable friend rows.

const FRIENDS = [
  { id: "alex",  name: "Alex Johnson",    status: "Last active 2h ago" },
  { id: "sarah", name: "Sarah Miller",    status: "Active now" },
  { id: "jordan",name: "Jordan Lee",      status: "Last active 5m ago" },
  { id: "casey", name: "Casey Wright",    status: "Away" },
  { id: "elena", name: "Elena Rodriguez", status: "Last active 1d ago" },
];

function ActionCard({ icon, wh, label }) {
  return (
    <div className="press" style={{
      flex: 1, height: 62, borderRadius: 8, background: "var(--bg)",
      border: "1px solid var(--primary)", color: "var(--primary)",
      display: "flex", flexDirection: "column", alignItems: "center",
      justifyContent: "center", gap: 4, cursor: "pointer",
    }}>
      <Icon name={icon} w={wh[0]} h={wh[1]} />
      <span style={{ font: "700 14px/1.4 var(--font-sans)", letterSpacing: "-0.03em" }}>{label}</span>
    </div>
  );
}

function FriendRow({ f, expanded, sent, onToggle, onRemind }) {
  return (
    <div style={{ background: expanded ? "var(--surface)" : "var(--bg)" }}>
      <div
        onClick={onToggle}
        style={{
          height: 80, padding: "0 24px", display: "flex", alignItems: "center",
          justifyContent: "space-between", cursor: "pointer",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, minWidth: 0 }}>
          <Avatar size={48} />
          <div style={{ display: "flex", flexDirection: "column", gap: 2, minWidth: 0 }}>
            <span className="t-name" style={{ whiteSpace: "nowrap" }}>{f.name}</span>
            <span className="t-meta">{f.status}</span>
          </div>
        </div>
        <RemindButton sent={sent} onClick={(e) => { onRemind(); }} />
      </div>
      {expanded && (
        <div style={{ padding: "0 24px 18px", display: "flex", gap: 8, animation: "rowExpand .2s ease both" }}>
          <ActionCard icon="posture-up" wh={[18, 14]} label="스트레칭 하세요!" />
          <ActionCard icon="posture-together" wh={[11, 14]} label="스트레칭 같이해요" />
        </div>
      )}
    </div>
  );
}

function FriendsScreen({ onOpenSearch, onToast }) {
  const [open, setOpen] = React.useState("sarah");
  const [sent, setSent] = React.useState({});

  const remind = (f) => {
    if (sent[f.id]) return;
    setSent((s) => ({ ...s, [f.id]: true }));
    onToast(`${f.name}님에게 알림을 보냈어요`);
  };

  return (
    <React.Fragment>
      {/* header */}
      <div style={{ flex: "none", height: 88, padding: "0 24px", display: "flex",
        alignItems: "center", justifyContent: "space-between",
        borderBottom: "1px solid var(--border)" }}>
        <span className="t-title">친구</span>
        <button className="press" style={{ border: 0, background: "none", cursor: "pointer", padding: 8, color: "var(--muted-500)" }}>
          <Icon name="bell" w={20} h={22} />
        </button>
      </div>

      <div className="scroll">
        {/* search entry */}
        <div style={{ padding: "16px 24px" }}>
          <div className="press" onClick={onOpenSearch} style={{
            height: 48, borderRadius: 8, background: "var(--surface)", border: "1px solid var(--border)",
            display: "flex", alignItems: "center", gap: 8, padding: "0 16px", cursor: "pointer",
          }}>
            <Icon name="search" w={16} h={16} color="var(--muted-500)" />
            <span className="t-input" style={{ color: "var(--muted-500)" }}>닉네임을 검색해 보세요</span>
          </div>
        </div>

        {/* list */}
        {FRIENDS.map((f) => (
          <FriendRow
            key={f.id}
            f={f}
            expanded={open === f.id}
            sent={!!sent[f.id]}
            onToggle={() => setOpen((o) => (o === f.id ? null : f.id))}
            onRemind={() => remind(f)}
          />
        ))}
        <div style={{ height: 8 }} />
      </div>
    </React.Fragment>
  );
}

Object.assign(window, { FriendsScreen });
