// Add-friend search screen — recent searches, live results, empty states.

const POOL = [
  { id: "u1", name: "Alex Johnson",    init: "add" },
  { id: "u2", name: "Alexa Kim",       init: "add" },
  { id: "u3", name: "Alex Park",       init: "pending" },
  { id: "u4", name: "Alexander Cho",   init: "add" },
  { id: "u5", name: "Sarah Miller",    init: "add" },
  { id: "u6", name: "Sarah Jung",      init: "add" },
  { id: "u7", name: "Jordan Lee",      init: "add" },
  { id: "u8", name: "Casey Wright",    init: "add" },
];
const RECENT = ["Alex Johnson", "Sarah Miller"];

function ResultRow({ u, state, onAdd, last }) {
  return (
    <div style={{
      height: 68, display: "flex", alignItems: "center", justifyContent: "space-between",
      borderBottom: last ? "none" : "1px solid var(--border)",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <Avatar size={32} />
        <span style={{ font: "400 16px/1.4 var(--font-sans)", letterSpacing: "-0.03em", color: "var(--ink-600)" }}>{u.name}</span>
      </div>
      <AddButton state={state} onClick={onAdd} />
    </div>
  );
}

function RecentRow({ name, last }) {
  return (
    <div style={{
      height: 64, display: "flex", alignItems: "center", gap: 16,
      borderBottom: last ? "none" : "1px solid var(--border)",
    }}>
      <Avatar size={32} />
      <span style={{ font: "400 16px/1.4 var(--font-sans)", letterSpacing: "-0.03em", color: "var(--ink-600)" }}>{name}</span>
    </div>
  );
}

function EmptyState({ title, sub }) {
  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center",
      justifyContent: "center", gap: 16, padding: "60px 24px" }}>
      <div style={{ width: 64, height: 64, borderRadius: 9999, background: "var(--border)",
        display: "flex", alignItems: "center", justifyContent: "center", color: "var(--muted-400)" }}>
        <Icon name="people-empty" w={32} h={25} style={{ opacity: 0.7 }} />
      </div>
      <span style={{ font: "700 16px/1.4 var(--font-sans)", letterSpacing: "-0.03em", color: "var(--muted-700)", textAlign: "center" }}>{title}</span>
      <span style={{ font: "400 14px/1.4 var(--font-sans)", letterSpacing: "-0.03em", color: "var(--muted-500)", textAlign: "center" }}>{sub}</span>
    </div>
  );
}

function SearchScreen({ onBack, onToast }) {
  const [q, setQ] = React.useState("");
  const [states, setStates] = React.useState(() =>
    Object.fromEntries(POOL.map((u) => [u.id, u.init])));
  const [focused, setFocused] = React.useState(true);
  const inputRef = React.useRef(null);

  React.useEffect(() => { inputRef.current && inputRef.current.focus(); }, []);

  const query = q.trim().toLowerCase();
  const results = query ? POOL.filter((u) => u.name.toLowerCase().includes(query)) : [];

  const add = (u) => {
    setStates((s) => ({ ...s, [u.id]: "pending" }));
    onToast(`${u.name}님에게 친구 요청을 보냈어요`);
    setTimeout(() => setStates((s) => ({ ...s, [u.id]: "added" })), 1400);
  };

  return (
    <React.Fragment>
      {/* header */}
      <div style={{ flex: "none", height: 82, padding: "0 16px", display: "flex",
        alignItems: "center", gap: 16, borderBottom: "1px solid var(--border)" }}>
        <button className="press" onClick={onBack} style={{ border: 0, background: "none", cursor: "pointer", padding: 8, color: "#000" }}>
          <Icon name="back" w={11} h={18} />
        </button>
        <span className="t-title">검색</span>
      </div>

      {/* search field */}
      <div style={{ padding: "16px 24px", flex: "none" }}>
        <div style={{
          height: 48, borderRadius: 8, background: "var(--surface)",
          border: focused ? "2px solid var(--primary-light)" : "1px solid var(--border)",
          display: "flex", alignItems: "center", gap: 8, padding: focused ? "0 15px" : "0 16px",
        }}>
          <Icon name="search" w={16} h={16} color="var(--muted-500)" />
          <input
            ref={inputRef}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            placeholder="닉네임을 검색해 보세요"
            style={{
              flex: 1, border: 0, outline: 0, background: "none",
              font: "400 14px/1.4 var(--font-sans)", letterSpacing: "-0.03em", color: "var(--ink)",
            }}
          />
          {q && (
            <button className="press" onClick={() => setQ("")} style={{ border: 0, background: "none", cursor: "pointer", padding: 4, color: "var(--muted-500)" }}>
              <Icon name="clear-x" w={10} h={10} />
            </button>
          )}
        </div>
      </div>

      {/* body */}
      <div className="scroll" style={{ display: "flex", flexDirection: "column" }}>
        {!query && (
          <React.Fragment>
            <div style={{ padding: "0 24px" }}>
              <span className="t-section">최근 검색</span>
              <div style={{ marginTop: 8 }}>
                {RECENT.map((n, i) => <RecentRow key={n} name={n} last={i === RECENT.length - 1} />)}
              </div>
            </div>
            <EmptyState title="친구를 추가해보세요" sub="추가할 친구의 ID를 검색해 보세요." />
          </React.Fragment>
        )}

        {query && results.length > 0 && (
          <div style={{ padding: "0 24px" }}>
            <span className="t-section">검색 결과({results.length})</span>
            <div style={{ marginTop: 8 }}>
              {results.map((u, i) => (
                <ResultRow key={u.id} u={u} state={states[u.id]} onAdd={() => add(u)} last={i === results.length - 1} />
              ))}
            </div>
          </div>
        )}

        {query && results.length === 0 && (
          <EmptyState title="사용자가 없습니다" sub="다른 ID로 검색해 보세요" />
        )}
      </div>
    </React.Fragment>
  );
}

Object.assign(window, { SearchScreen });
