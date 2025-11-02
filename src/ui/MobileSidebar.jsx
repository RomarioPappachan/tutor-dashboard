import MainNav from "./MainNav";
import Logo from "./Logo";
import UserAvatar from "../features/authentication/UserAvatar";
import HeaderNav from "./HeaderNav";

function MobileSidebar({ isOpen, closeSidebar }) {
  return (
    <div
      className={`fixed left-0 top-0 z-50 h-full w-[50vw] max-w-[300px] bg-white shadow-sm transition-transform duration-300 lg:hidden ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
    >
      <div className="flex h-full flex-col p-4">
        <div className="pb-4">
          <Logo />
        </div>

        <div className="scrollbar-0 space-y-14 overflow-y-auto pb-6 pt-6">
          {/* Profile / Settings / Logout */}
          <div>
            <UserAvatar />
          </div>

          {/* Nav Links */}
          <div className="ps-3">
            <MainNav />
          </div>

          <div className="ps-3">
            <HeaderNav />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileSidebar;
