import { FaCircleCheck } from "react-icons/fa6";
import { MdLocationOn } from "react-icons/md";
import { RxDotsVertical } from "react-icons/rx";

function SessionItem({ session, index }) {
  const { tutors, grade, date, when, mode, type } = session;

  const tutorNames = tutors
    .slice(0, 2)
    .map((t) => t.name)
    .join(", ");

  return (
    <li className="flex max-w-sm justify-between gap-1.5 md:gap-2 lg:max-w-md xl:max-w-lg xl:gap-4">
      {/* number or check  */}
      <div className="flex w-auto items-start justify-start">
        <span className="text-xs font-semibold text-gray-medium xl:text-base">
          {type === "upcoming" ? (
            <span>{index + 1}.</span>
          ) : (
            <FaCircleCheck className="text-base text-teal-dark xl:translate-y-1 xl:text-xl" />
          )}
        </span>
      </div>

      {/* session details */}

      <div className="flex grow flex-col justify-between gap-2">
        <h4 className="text-xs font-semibold text-gray-medium xl:text-base">
          {grade ? `${tutors[0]?.name} | ${grade}` : `${tutorNames}`}
        </h4>
        <div className="flex items-center justify-start gap-3 xl:gap-6">
          {type === "upcoming" && (
            <div className="flex items-center justify-start rounded-sm bg-teal-dark px-1.5 py-0.5 xl:px-4">
              <p className="text-[8px] font-bold uppercase text-white xl:text-[10px]">
                {when}
              </p>
            </div>
          )}
          <p className="text-[8px] font-extrabold uppercase text-gray-dark xl:text-[10px]">
            {date}
          </p>
          <div className="flex items-center justify-start">
            <MdLocationOn className="text-sm text-teal-dark xl:text-lg" />
            <p className="text-[10px] font-bold text-gray-dark xl:text-xs">
              {mode}
            </p>
          </div>
        </div>
      </div>

      {/* images  */}
      <div className="flex items-start justify-end">
        {tutors?.slice(0, 2)?.map((tutor, index, tutors) => (
          <div
            key={tutor.name}
            className={`aspect-square h-10 overflow-hidden rounded-full border-4 border-white bg-gray-medium xl:h-12 ${
              index === 1
                ? "-translate-x-4"
                : index === 0 && tutors.length < 2
                  ? "-translate-x-8"
                  : ""
            }`}
          >
            <img
              src={tutor.avatar}
              alt={tutor.name}
              className="h-full w-full object-cover shadow-sm"
            />
          </div>
        ))}
      </div>

      {/* menu  */}

      <button
        className={`hidden size-9 rounded-full p-2 text-gray-medium hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:ring-transparent active:scale-90 active:bg-gray-300 ${
          type === "completed" ? "" : "items-center justify-center md:flex"
        }`}
      >
        <RxDotsVertical className="text-xl" />
      </button>
    </li>
  );
}

export default SessionItem;
