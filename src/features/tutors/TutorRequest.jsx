import Button from "../../ui/Button";
import { LuCheck, LuClock9, LuX } from "react-icons/lu";
import { BsPinAngle } from "react-icons/bs";

function TutorRequest({ show, onRequestOpen }) {
  return (
    <>
      <button
        type="button"
        className={`absolute right-2 top-2 z-20 flex items-center justify-center rounded-md p-0.5 hover:bg-gray-200 focus:bg-gray-100 focus:outline-none active:scale-90 ${
          show ? "opacity-100" : "opacity-0"
        }`}
        onClick={onRequestOpen}
      >
        <LuX className="text-xl text-gray-dark" />
      </button>
      <div
        className={`absolute -top-4 z-10 flex w-full flex-col items-center space-y-5 rounded-md bg-white px-4 pb-6 pt-8 shadow-2xl transition-all duration-300 ease-out md:static md:mb-4 md:flex-row md:bg-teal-light md:py-4 md:shadow-none lg:mb-6 lg:px-10 xl:mb-8 ${
          show ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        } `}
      >
        {/* left  */}
        <div className="flex w-full gap-2 lg:w-1/2 lg:gap-6">
          <div className="flex aspect-square h-10 items-center overflow-hidden rounded-full bg-blue-500">
            <img
              src="https://randomuser.me/api/portraits/women/1.jpg"
              alt="Tutor"
            />
          </div>
          <div className="grow flex-col space-y-2.5">
            <h3 className="text-sm font-bold text-teal-dark md:text-xs xl:text-base">
              New Tutor Request
            </h3>
            <div className="flex flex-col gap-y-2 md:flex-row md:flex-wrap md:items-center md:gap-x-6 lg:gap-x-6 xl:gap-x-10">
              <p className="text-xs font-semibold text-gray-medium md:text-[10px] xl:text-sm">
                Client: Sheila Pratt
              </p>
              <p className="text-xs font-semibold text-gray-medium md:text-[10px] xl:text-sm">
                Date: 16 August, 2020
              </p>
              <p className="text-xs font-semibold text-gray-medium md:text-[10px] xl:text-sm">
                Time: 8:00AM - 10:00AM
              </p>
            </div>
          </div>
        </div>

        {/* right  */}
        <div className="flex w-full justify-around md:justify-normal md:gap-6 lg:w-1/2 lg:gap-8 lg:ps-8 xl:gap-10">
          <Button variation="primary">
            <LuCheck className="text-xl md:text-lg xl:text-2xl" />
            <span>Accept</span>
          </Button>
          <Button variation="danger">
            <LuX className="text-xl md:text-lg xl:text-2xl" />
            <span>Decline</span>
          </Button>
          <Button variation="secondary">
            <LuClock9 className="text-xl md:text-lg xl:text-2xl" />
            <span>Propose new time</span>
          </Button>
          <div className="hidden md:block">
            <Button variation="primary">
              <BsPinAngle className="text-xl md:text-lg xl:text-2xl" />
              <span>Mark as tentative</span>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default TutorRequest;
