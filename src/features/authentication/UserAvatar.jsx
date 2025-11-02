import { MdArrowDropDown } from "react-icons/md";
import ButtonIcon from "../../ui/ButtonIcon";

function UserAvatar() {
  const name = "Victor";

  return (
    <div className="flex items-center justify-start gap-0 lg:justify-end">
      <div className="me-3 flex size-9 items-center justify-center rounded-full bg-teal-dark xl:size-10">
        <span className="text-sm font-bold text-white xl:text-lg">
          {name?.charAt(0)}
        </span>
      </div>
      <span className="text-sm lg:text-xs xl:text-base">
        <span className="font-bold text-gray-medium">Hello, </span>
        <span className="font-bold text-gray-dark">{name}</span>
      </span>

      <ButtonIcon className="rounded border-none bg-none p-1 text-teal-dark transition-all duration-200 hover:bg-teal-50 active:scale-90 active:bg-teal-100">
        <MdArrowDropDown className="text-teal-dark lg:text-xl" />
      </ButtonIcon>
    </div>
  );
}

export default UserAvatar;
