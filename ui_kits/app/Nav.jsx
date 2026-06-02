// Buttons + bottom navigation.

// Primary "send reminder" pill (44px). Variants: primary | disabled.
function RemindButton({ sent, onClick }) {
  return (
    <button
      className="press"
      onClick={sent ? undefined : onClick}
      style={{
        height: 44, padding: "0 16px", borderRadius: 8, border: 0,
        background: sent ? "var(--border)" : "var(--primary)",
        color: sent ? "var(--muted-600)" : "#fff",
        font: "700 14px/1.4 var(--font-sans)", letterSpacing: "-0.03em",
        display: "inline-flex", alignItems: "center", gap: 8,
        cursor: sent ? "default" : "pointer", flex: "none",
      }}
    >
      <Icon name="remind-bell" w={11} h={13} />
      {sent ? "보냈어요" : "알림보내기"}
    </button>
  );
}

// Small "add friend" button (36px). state: add | pending | added.
function AddButton({ state, onClick }) {
  const map = {
    add:     { bg: "var(--primary)", fg: "#fff",            label: "친구 추가" },
    pending: { bg: "var(--border)",  fg: "var(--muted-600)", label: "처리중" },
    added:   { bg: "var(--border)",  fg: "var(--muted-600)", label: "추가됨" },
  };
  const s = map[state] || map.add;
  return (
    <button
      className="press"
      onClick={state === "add" ? onClick : undefined}
      style={{
        height: 36, padding: "0 16px", borderRadius: 6, border: 0,
        background: s.bg, color: s.fg, font: "700 14px/1.4 var(--font-sans)",
        letterSpacing: "-0.03em", cursor: state === "add" ? "pointer" : "default", flex: "none",
      }}
    >{s.label}</button>
  );
}

const NAV = [
  { key: "home",     icon: "nav-home",     label: "홈",      wh: [21, 18] },
  { key: "friends",  icon: "people-empty", label: "친구",    wh: [22, 18] },
  { key: "timeline", icon: "nav-timeline", label: "타임라인", wh: [20, 20] },
  { key: "stretch",  icon: "nav-stretch",  label: "스트레칭", wh: [20, 20] },
  { key: "settings", icon: "nav-settings", label: "설정",    wh: [20, 20] },
];

function BottomNav({ active, onSelect }) {
  return (
    <div style={{
      flex: "none", height: 81, background: "var(--bg)", borderTop: "1px solid var(--border)",
      display: "flex", justifyContent: "space-between", padding: "12px 24px 32px",
    }}>
      {NAV.map((t) => {
        const on = active === t.key;
        return (
          <button key={t.key} className="press" onClick={() => onSelect(t.key)} style={{
            border: 0, background: "none", cursor: "pointer", padding: 0,
            display: "flex", flexDirection: "column", alignItems: "center", gap: 4,
            width: 44, color: on ? "var(--primary)" : "var(--muted-600)",
          }}>
            <Icon name={t.icon} w={t.wh[0]} h={t.wh[1]} />
            <span style={{ font: "700 10px/15px var(--font-ui)", letterSpacing: "-0.023em" }}>{t.label}</span>
          </button>
        );
      })}
    </div>
  );
}

Object.assign(window, { RemindButton, AddButton, BottomNav });
