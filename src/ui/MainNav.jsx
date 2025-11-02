import StyledNavLink from "./StyledNavLink";

import { TiThMenuOutline } from "react-icons/ti";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BsPlayBtn } from "react-icons/bs";
import { PiChalkboardSimple } from "react-icons/pi";
import { IoPersonOutline } from "react-icons/io5";
import { LuLayoutDashboard } from "react-icons/lu";

const navItems = [
  {
    label: "Overview",
    to: "/dashboard",
    icon: <LuLayoutDashboard className="text-xl" />,
  },
  {
    label: "Sessions",
    to: "/sessions",
    icon: <TiThMenuOutline className="text-xl" />,
  },
  {
    label: "Notifications",
    to: "/notifications",
    icon: <IoIosNotificationsOutline className="text-xl" />,
  },
  {
    label: "Media",
    to: "",
    icon: <BsPlayBtn className="text-xl" />,
  },
  {
    label: "Whiteboard",
    to: "",
    icon: <PiChalkboardSimple className="text-xl" />,
  },
  {
    label: "Account",
    to: "",
    icon: <IoPersonOutline className="text-xl" />,
  },
];

function MainNav() {
  return (
    <ul className="flex flex-col items-start gap-x-6 lg:flex-row lg:items-center xl:gap-x-12">
      {navItems.map((item) => (
        <li key={item.label}>
          <StyledNavLink to={item.to}>
            {item.icon}
            <span>{item.label}</span>
          </StyledNavLink>
        </li>
      ))}
    </ul>
  );
}

export default MainNav;
