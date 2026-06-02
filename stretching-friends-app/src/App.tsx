import { FriendsApp } from "./design-system/src";

/**
 * App entry — renders the interactive Friends feature inside the iPhone
 * shell. Set <FriendsApp phoneFrame={false} /> to fill the viewport instead.
 */
export default function App() {
  return (
    <div className="stage">
      <FriendsApp />
    </div>
  );
}
