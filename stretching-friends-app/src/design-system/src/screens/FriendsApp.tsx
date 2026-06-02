import React from "react";
import { StatusBar } from "../components/StatusBar";
import { BottomNav } from "../components/BottomNav";
import { Toast } from "../components/Toast";
import { Icon } from "../icons/Icon";
import { FriendsScreen } from "./FriendsScreen";
import { SearchScreen } from "./SearchScreen";
import type { Friend } from "../components/FriendRow";
import type { SearchUser } from "./SearchScreen";

const TAB_LABELS: Record<string, string> = {
  home: "홈",
  timeline: "타임라인",
  stretch: "스트레칭",
  settings: "설정",
};

function Placeholder({ label }: { label: string }) {
  return (
    <div className="ds-empty">
      <Icon name="nav-stretch" width={30} color="var(--ds-muted-400)" />
      <p className="ds-empty__title">{label}</p>
      <p className="ds-empty__sub">준비 중입니다</p>
    </div>
  );
}

export interface FriendsAppProps {
  phoneFrame?: boolean;
}

export function FriendsApp({ phoneFrame = true }: FriendsAppProps) {
  const [tab, setTab] = React.useState("friends");
  const [search, setSearch] = React.useState(false);
  const [toast, setToast] = React.useState({ show: false, msg: "" });
  const timer = React.useRef<number | undefined>(undefined);

  const showToast = (msg: string) => {
    setToast({ show: true, msg });
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setToast((t) => ({ ...t, show: false })), 2200);
  };

  let body: React.ReactNode;
  if (search) {
    body = (
      <SearchScreen
        onBack={() => setSearch(false)}
        onAdd={(u: SearchUser) => showToast(`${u.name}님에게 친구 요청을 보냈어요`)}
      />
    );
  } else if (tab === "friends") {
    body = (
      <FriendsScreen
        onOpenSearch={() => setSearch(true)}
        onRemind={(f: Friend) => showToast(`${f.name}님에게 알림을 보냈어요`)}
      />
    );
  } else {
    body = <Placeholder label={TAB_LABELS[tab]} />;
  }

  if (!phoneFrame) {
    return (
      <div
        className="ds-root"
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          background: "var(--ds-bg)",
          paddingTop: "env(safe-area-inset-top)",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", flex: 1, minHeight: 0 }}>
          {body}
          {!search && (
            <BottomNav active={tab} onSelect={(k) => { setSearch(false); setTab(k); }} />
          )}
        </div>
        <Toast show={toast.show} message={toast.msg} />
      </div>
    );
  }

  return (
    <div className="ds-root ds-phone">
      <StatusBar />
      <div style={{ position: "absolute", inset: "47px 0 0", display: "flex", flexDirection: "column" }}>
        {body}
        {!search && <BottomNav active={tab} onSelect={(k) => { setSearch(false); setTab(k); }} />}
      </div>
      <Toast show={toast.show} message={toast.msg} />
    </div>
  );
}

export default FriendsApp;
