import { useState } from "react";
import HeaderMenu from "./HeaderMenu";
import HeaderNav from "./HeaderNav";
import Logo from "./Logo";
import Navbar from "./Navbar";
import MobileSidebar from "./MobileSidebar";

import { IoMenu } from "react-icons/io5";
import { LuX } from "react-icons/lu";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeSidebar = () => setIsOpen(false);

  return (
    <div className="w-full">
      <header className="px-6 lg:px-8 xl:px-12 py-2 flex items-center justify-between lg:justify-normal border-b border-gray-200">
        <Logo />
        <div className="hidden lg:flex items-center justify-between grow">
          <HeaderNav />
          <HeaderMenu />
        </div>

        {/* sidebar button  */}
        <div className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <LuX className="text-4xl" />
          ) : (
            <IoMenu className="text-4xl" />
          )}
        </div>
      </header>

      <Navbar />

      {/* MOBILE SIDEBAR */}
      <MobileSidebar isOpen={isOpen} closeSidebar={closeSidebar} />

      {/* Overlay */}
      {isOpen && (
        <div onClick={closeSidebar} className="fixed inset-0 lg:hidden z-40" />
      )}
    </div>
  );
}

export default Header;
