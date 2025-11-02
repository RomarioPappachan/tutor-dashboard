import MainNav from "./MainNav";

function Navbar() {
  return (
    <div className="px-6 lg:px-8 xl:px-12 lg:flex items-center justify-normal lg:border-b border-gray-200">
      <div className="pt-4 md:p-4 lg:p-0 lg:w-1/4 text-gray-dark text-sm xl:text-base font-bold flex justify-start items-center">
        <span>Tutor Dashboard</span>
      </div>

      <div className="hidden lg:block">
        <MainNav />
      </div>
    </div>
  );
}

export default Navbar;
