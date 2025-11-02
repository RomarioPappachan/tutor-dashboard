import { NavLink, useLocation } from "react-router-dom";

function StyledNavLink({ children, to }) {
  const { pathname } = useLocation();
  const isActive = pathname === to;

  return (
    <NavLink
      to={to}
      className={`relative flex items-center gap-2 rounded-md py-4 text-sm font-bold transition-all duration-200 active:scale-95 lg:text-xs xl:text-base ${
        isActive
          ? "text-teal-dark"
          : "text-gray-light hover:text-teal-dark/80 focus:text-teal-dark/80"
      } `}
    >
      {/* Label */}
      {children}

      {/* Bottom border outside box model */}
      {isActive && (
        <span className="absolute -bottom-[2px] left-0 hidden h-1 w-full bg-teal-dark lg:inline"></span>
      )}
    </NavLink>
  );
}

export default StyledNavLink;
