import { Outlet } from "react-router-dom";
import Header from "./Header";

function AppLayout() {
  return (
    <div className="grid h-screen grid-cols-1 grid-rows-[auto_1fr]">
      <Header />

      <main className="overflow-y-auto bg-white px-6 py-4 md:bg-neutralWhite-soft lg:px-8 lg:py-5 xl:px-12 xl:py-8">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
