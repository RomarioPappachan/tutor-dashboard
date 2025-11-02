import MainNav from "./MainNav";

function Navbar() {
  return (
    <div className="items-center justify-normal border-gray-200 px-6 lg:flex lg:border-b lg:px-8 xl:px-12">
      <div className="flex items-center justify-start pb-2 pt-4 text-sm font-bold text-gray-dark md:p-4 lg:w-1/4 lg:p-0 xl:text-base">
        <span>Tutor Dashboard</span>
      </div>

      <div className="hidden lg:block">
        <MainNav />
      </div>
    </div>
  );
}

export default Navbar;
