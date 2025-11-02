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
      <ul className="flex flex-col items-start justify-start gap-x-2 gap-y-6 md:flex-row md:items-center md:justify-between lg:gap-x-6 xl:gap-x-10">
        {navItems.map((item) => (
          <li key={item.to}>
            <NavLink className="flex items-center rounded-md px-2 py-1 text-sm font-bold text-gray-dark transition-all duration-150 hover:bg-gray-100 focus:bg-gray-100 active:scale-95 active:bg-gray-300 lg:text-xs xl:text-base">
              <span>{item.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default HeaderNav;
