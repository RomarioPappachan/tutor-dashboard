import { MdArrowDropDown } from "react-icons/md";
import ButtonIcon from "../../ui/ButtonIcon";

function UserAvatar() {
  const name = "Victor";

  return (
    <div className="flex items-center justify-start lg:justify-end gap-0">
      <div className="me-3 size-8 xl:size-10 rounded-full flex justify-center items-center bg-teal-dark">
        <span className="font-bold text-white text-sm xl:text-lg ">
          {name?.charAt(0)}
        </span>
      </div>
      <span className="text-sm lg:text-xs xl:text-base">
        <span className="text-gray-medium font-bold">Hello, </span>
        <span className="text-gray-dark font-bold">{name}</span>
      </span>

      <ButtonIcon className="bg-none border-none rounded p-1 transition-all duration-200 text-teal-dark hover:bg-teal-50 active:scale-90 active:bg-teal-100">
        <MdArrowDropDown className="lg:text-xl text-teal-dark" />
      </ButtonIcon>
    </div>
  );
}

export default UserAvatar;
