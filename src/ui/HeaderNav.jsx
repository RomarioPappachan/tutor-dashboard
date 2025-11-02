import { NavLink } from "react-router-dom";

function HeaderNav() {
  const navItems = [
    { label: "K-12 Videos", to: "/k12-videos" },
    { label: "Podcasts", to: "/podcasts" },
    { label: "FAQs", to: "/faqs" },
    { label: "Help and Support", to: "/help-support" },
  ];

  return (
    <nav>
      <ul className="flex flex-col items-start justify-start gap-x-2 gap-y-6 lg:gap-x-6 xl:gap-x-10 md:flex-row md:items-center md:justify-between ">
        {navItems.map((item) => (
          <li key={item.to}>
            <NavLink className="flex items-center text-sm lg:text-xs xl:text-base text-gray-dark font-bold hover:bg-gray-100 active:bg-gray-300 focus:bg-gray-100 px-2 py-1 rounded-md transition-all duration-150 active:scale-95">
              <span>{item.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default HeaderNav;
