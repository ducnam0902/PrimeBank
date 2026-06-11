import { Outlet } from "react-router";

export default function MainLayout() {
  return (
    <div>
      <header>PrimeBank</header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}