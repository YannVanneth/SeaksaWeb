import Sidebar from "./Sidebar.jsx";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <div style={{ width: "250px", borderLeft: "1px solid #e5e7eb" }}>
        <Sidebar />
      </div>
      {/* Main Content (Outlet) on the left */}
      <div style={{ flex: 1, overflowY: "auto" }}>
        <Outlet />
      </div>
    </div>
  );
}
