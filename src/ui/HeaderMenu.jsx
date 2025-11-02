import { MdNotificationsNone } from "react-icons/md";
import UserAvatar from "../features/authentication/UserAvatar";
import ButtonIcon from "./ButtonIcon";

function HeaderMenu() {
  return (
    <div className="flex items-center justify-end gap-0">
      <UserAvatar />

      <div className="relative">
        <span className="absolute right-0 top-0.5 flex size-4 items-center justify-center rounded-full border-[0.5px] border-white bg-red-500 p-1 text-[8px] text-white xl:top-1">
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
