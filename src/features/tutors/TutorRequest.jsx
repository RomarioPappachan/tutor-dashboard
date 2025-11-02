import Button from "../../ui/Button";
import { LuCheck, LuClock9, LuX } from "react-icons/lu";
import { BsPinAngle } from "react-icons/bs";

function TutorRequest({ show, onRequestOpen }) {
  return (
    <>
      <button
        type="button"
        className={`absolute right-2 top-2 z-20 p-0.5 hover:bg-gray-200 rounded-md flex justify-center items-center active:scale-90 focus:outline-none focus:bg-gray-200 focus:ring focus:ring-gray-300 focus:ring-offset-2 ${
          show ? "opacity-100" : "opacity-0"
        }`}
        onClick={onRequestOpen}
      >
        <LuX className="text-xl text-gray-dark" />
      </button>
      <div
        className={`w-full absolute -top-4 z-10 md:static md:mb-4 lg:mb-6 xl:mb-8 px-4 lg:px-10 pt-8 pb-6 md:py-4 rounded-md bg-white md:bg-teal-light shadow-2xl md:shadow-none flex flex-col md:flex-row items-center space-y-5  transition-all duration-300 ease-out ${
          show ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }
      `}
      >
        {/* left  */}
        <div className="w-full lg:w-1/2 flex gap-2 lg:gap-6">
          <div className="h-10 aspect-square bg-blue-500 rounded-full overflow-hidden flex items-center">
            <img
              src="https://randomuser.me/api/portraits/women/1.jpg"
              alt="Tutor"
            />
          </div>
          <div className="grow space-y-2.5 flex-col">
            <h3 className="text-teal-dark font-bold text-sm md:text-xs xl:text-base">
              New Tutor Request
            </h3>
            <div className="flex flex-col md:flex-row md:items-center md:flex-wrap md:gap-x-6 lg:gap-x-6 xl:gap-x-10 gap-y-2">
              <p className="text-gray-medium font-semibold text-xs md:text-[10px] xl:text-sm">
                Client: Sheila Pratt
              </p>
              <p className="text-gray-medium font-semibold text-xs md:text-[10px] xl:text-sm">
                Date: 16 August, 2020
              </p>
              <p className="text-gray-medium font-semibold text-xs md:text-[10px] xl:text-sm">
                Time: 8:00AM - 10:00AM
              </p>
            </div>
          </div>
        </div>

        {/* right  */}
        <div className="w-full lg:w-1/2 lg:ps-8 flex justify-around md:justify-normal md:gap-6 lg:gap-8 xl:gap-10">
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
