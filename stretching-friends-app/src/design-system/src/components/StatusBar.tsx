import React from "react";

/**
 * iPhone-style status bar (9:41 · signal · wifi · battery).
 * Demo chrome for the phone shell — drop it in real native/web app shells
 * only if you need the simulated status bar.
 */
export function StatusBar() {
  return (
    <div
      style={{
        height: 47,
        flex: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 24px 0 34px",
      }}
    >
      <span style={{ font: '700 15px/1 var(--ds-font-ui)', letterSpacing: "0.01em", color: "#000" }}>9:41</span>
      <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
        <svg width="18" height="12" viewBox="0 0 18 12" fill="#000" aria-hidden>
          <rect x="0" y="8" width="3" height="4" rx="1" />
          <rect x="5" y="5.5" width="3" height="6.5" rx="1" />
          <rect x="10" y="3" width="3" height="9" rx="1" />
          <rect x="15" y="0" width="3" height="12" rx="1" />
        </svg>
        <svg width="17" height="12" viewBox="0 0 17 12" fill="#000" aria-hidden>
          <path d="M8.5 2.2c2.7 0 5.2 1 7.1 2.8.3.3.8.3 1.1 0 .3-.3.3-.8 0-1.1C14.6 1.7 11.7.5 8.5.5S2.4 1.7.3 3.9c-.3.3-.3.8 0 1.1.3.3.8.3 1.1 0C3.3 3.2 5.8 2.2 8.5 2.2Z" />
          <path d="M8.5 5.7c1.7 0 3.3.7 4.5 1.9.3.3.8.3 1.1 0 .3-.3.3-.8 0-1.1-1.5-1.5-3.5-2.3-5.6-2.3S4 5 2.4 6.5c-.3.3-.3.8 0 1.1.3.3.8.3 1.1 0 1.2-1.2 2.8-1.9 4.5-1.9Z" />
          <path d="M8.5 9c.9 0 1.4.9.8 1.6l-.3.3c-.3.3-.7.3-1 0l-.3-.3C7.1 9.9 7.6 9 8.5 9Z" />
        </svg>
        <div style={{ display: "flex", alignItems: "center", gap: 2 }}>
          <div style={{ width: 24, height: 12, borderRadius: 3, border: "1px solid rgba(0,0,0,.35)", padding: 1.5 }}>
            <div style={{ width: "82%", height: "100%", borderRadius: 1.5, background: "#000" }} />
          </div>
          <div style={{ width: 2, height: 4, borderRadius: 1, background: "rgba(0,0,0,.35)" }} />
        </div>
      </div>
    </div>
  );
}

export default StatusBar;
