import { Outlet } from "react-router-dom";
import Header from "./Header";

function AppLayout() {
  return (
    <div className="h-screen grid grid-cols-1 grid-rows-[auto_1fr]">
      <Header />

      <main className="bg-white md:bg-[var(--color-white-700)] px-6 py-4 lg:px-8 lg:py-5 xl:px-12 xl:py-8 overflow-y-auto ">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
