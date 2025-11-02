import { MdNotificationsNone } from "react-icons/md";
import UserAvatar from "../features/authentication/UserAvatar";
import ButtonIcon from "./ButtonIcon";

function HeaderMenu() {
  return (
    <div className="flex items-center justify-end gap-0">
      <UserAvatar />

      <div className="relative">
        <span className="absolute top-0.5 xl:top-1 right-0 size-4 p-1 rounded-full  border-[0.5px] border-white text-[8px] bg-red-500 text-white flex justify-center items-center">
          4
        </span>
        <ButtonIcon>
          <MdNotificationsNone className="text-2xl xl:text-3xl" />
        </ButtonIcon>
      </div>
    </div>
  );
}

export default HeaderMenu;
