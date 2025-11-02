import { NavLink, useLocation } from "react-router-dom";

function StyledNavLink({ children, to }) {
  const { pathname } = useLocation();
  const isActive = pathname === to;

  return (
    <NavLink
      to={to}
      className={`
        relative flex items-center gap-2 text-sm lg:text-xs xl:text-base font-bold py-4 rounded-md
         active:scale-95
          transition-all duration-200
        ${
          isActive
            ? "text-teal-dark"
            : "text-gray-light hover:text-teal-dark/80 focus:text-teal-dark/80"
        }
      `}
    >
      {/* Label */}
      {children}

      {/* Bottom border outside box model */}
      {isActive && (
        <span className="hidden lg:inline absolute -bottom-[2px] left-0 w-full h-1 bg-teal-dark"></span>
      )}
    </NavLink>
  );
}

export default StyledNavLink;
