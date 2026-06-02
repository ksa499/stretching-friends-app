// App shell — screen routing, bottom nav, toast.
function Placeholder({ label }) {
  return (
    <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center",
      justifyContent: "center", gap: 10, color: "var(--muted-500)" }}>
      <Icon name="nav-stretch" w={30} h={30} color="var(--muted-400)" />
      <span style={{ font: "700 16px/1.4 var(--font-sans)", letterSpacing: "-0.03em", color: "var(--muted-700)" }}>{label}</span>
      <span style={{ font: "400 13px/1.4 var(--font-sans)", letterSpacing: "-0.03em" }}>준비 중입니다</span>
    </div>
  );
}

const TAB_LABELS = { home: "홈", timeline: "타임라인", stretch: "스트레칭", settings: "설정" };

function App() {
  const [tab, setTab] = React.useState("friends");
  const [search, setSearch] = React.useState(false);
  const [toast, setToast] = React.useState({ show: false, msg: "" });
  const timer = React.useRef(null);

  const showToast = (msg) => {
    setToast({ show: true, msg });
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setToast((t) => ({ ...t, show: false })), 2200);
  };

  let body;
  if (search) {
    body = <SearchScreen onBack={() => setSearch(false)} onToast={showToast} />;
  } else if (tab === "friends") {
    body = <FriendsScreen onOpenSearch={() => setSearch(true)} onToast={showToast} />;
  } else {
    body = <Placeholder label={TAB_LABELS[tab]} />;
  }

  return (
    <div className="phone">
      <StatusBar />
      <div className="screen" style={{ top: 47, bottom: 0 }}>
        {body}
        {!search && <BottomNav active={tab} onSelect={(k) => { setSearch(false); setTab(k); }} />}
      </div>
      <div className={"toast" + (toast.show ? " show" : "")}>
        <Icon name="remind-bell" w={11} h={13} color="#fff" />
        {toast.msg}
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
