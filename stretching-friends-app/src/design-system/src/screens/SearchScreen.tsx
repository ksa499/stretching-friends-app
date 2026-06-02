import React from "react";
import { Icon } from "../icons/Icon";
import { SearchField } from "../components/SearchField";
import { Avatar } from "../components/Avatar";
import { AddButton, type AddState } from "../components/Button";
import { EmptyState } from "../components/EmptyState";

export interface SearchUser {
  id: string;
  name: string;
  /** initial add state (e.g. a request already pending) */
  initial?: AddState;
}

export const SAMPLE_POOL: SearchUser[] = [
  { id: "u1", name: "Alex Johnson" },
  { id: "u2", name: "Alexa Kim" },
  { id: "u3", name: "Alex Park", initial: "pending" },
  { id: "u4", name: "Alexander Cho" },
  { id: "u5", name: "Sarah Miller" },
  { id: "u6", name: "Sarah Jung" },
  { id: "u7", name: "Jordan Lee" },
  { id: "u8", name: "Casey Wright" },
];

export interface SearchScreenProps {
  pool?: SearchUser[];
  recent?: string[];
  onBack?: () => void;
  onAdd?: (user: SearchUser) => void;
}

/** Add-friend search — recent searches, live results, empty states. */
export function SearchScreen({
  pool = SAMPLE_POOL,
  recent = ["Alex Johnson", "Sarah Miller"],
  onBack,
  onAdd,
}: SearchScreenProps) {
  const [q, setQ] = React.useState("");
  const [states, setStates] = React.useState<Record<string, AddState>>(() =>
    Object.fromEntries(pool.map((u) => [u.id, u.initial ?? "add"]))
  );

  const query = q.trim().toLowerCase();
  const results = query ? pool.filter((u) => u.name.toLowerCase().includes(query)) : [];

  const add = (u: SearchUser) => {
    setStates((s) => ({ ...s, [u.id]: "pending" }));
    onAdd?.(u);
    window.setTimeout(() => setStates((s) => ({ ...s, [u.id]: "added" })), 1400);
  };

  return (
    <div className="ds-screen">
      <header className="ds-header ds-header--search">
        <button type="button" className="ds-press ds-iconbtn" aria-label="Back" onClick={onBack} style={{ color: "#000" }}>
          <Icon name="back" width={11} />
        </button>
        <h1 className="ds-title">검색</h1>
      </header>

      <div style={{ padding: "16px 24px", flex: "none" }}>
        <SearchField value={q} onChange={setQ} autoFocus focused />
      </div>

      <div className="ds-scroll" style={{ display: "flex", flexDirection: "column" }}>
        {!query && (
          <>
            <div style={{ padding: "0 24px" }}>
              <p className="ds-section">최근 검색</p>
              <div style={{ marginTop: 8 }}>
                {recent.map((name, i) => (
                  <div key={name} className={["ds-recent", i === recent.length - 1 ? "ds-recent--last" : ""].filter(Boolean).join(" ")}>
                    <Avatar size={32} />
                    <span className="ds-listname">{name}</span>
                  </div>
                ))}
              </div>
            </div>
            <EmptyState title="친구를 추가해보세요" description="추가할 친구의 ID를 검색해 보세요." />
          </>
        )}

        {query && results.length > 0 && (
          <div style={{ padding: "0 24px" }}>
            <p className="ds-section">{`검색 결과(${results.length})`}</p>
            <div style={{ marginTop: 8 }}>
              {results.map((u, i) => (
                <div key={u.id} className={["ds-result", i === results.length - 1 ? "ds-result--last" : ""].filter(Boolean).join(" ")}>
                  <div className="ds-result__id">
                    <Avatar size={32} />
                    <span className="ds-listname">{u.name}</span>
                  </div>
                  <AddButton state={states[u.id]} onClick={() => add(u)} />
                </div>
              ))}
            </div>
          </div>
        )}

        {query && results.length === 0 && (
          <EmptyState title="사용자가 없습니다" description="다른 ID로 검색해 보세요" />
        )}
      </div>
    </div>
  );
}

export default SearchScreen;
