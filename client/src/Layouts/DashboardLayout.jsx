import { Outlet } from "react-router-dom";

function DashboardLayout() {
  return (
    <div>
      <h2>AI SMART FLASHCARD APP</h2>
      <nav>Dashboard | Decks | Practice | Profile</nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default DashboardLayout;
