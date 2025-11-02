import MainNav from "./MainNav";
import Logo from "./Logo";
import UserAvatar from "../features/authentication/UserAvatar";
import HeaderNav from "./HeaderNav";

function MobileSidebar({ isOpen, closeSidebar }) {
  return (
    <div
      className={`fixed top-0 left-0 h-full bg-white w-[50vw] max-w-[300px] z-50
        transition-transform duration-300 lg:hidden 
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
    >
      <div className="flex flex-col h-full p-4 space-y-8">
        <div>
          <Logo />
        </div>

        <div className="space-y-14 pb-6 overflow-y-auto scrollbar-0">
          {/* Profile / Settings / Logout */}
          <div>
            <UserAvatar />
          </div>

          {/* Nav Links */}
          <div>
            <MainNav />
          </div>

          <div>
            <HeaderNav />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileSidebar;
