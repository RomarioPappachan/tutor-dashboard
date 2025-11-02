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
    <li className="max-w-sm lg:max-w-md xl:max-w-lg flex justify-between gap-1.5 md:gap-2 xl:gap-4">
      {/* number or check  */}
      <div className="w-auto flex items-start justify-start">
        <span className="text-gray-medium font-semibold text-xs xl:text-base">
          {type === "upcoming" ? (
            <span>{index + 1}.</span>
          ) : (
            <FaCircleCheck className="text-teal-dark text-base xl:text-xl xl:translate-y-1" />
          )}
        </span>
      </div>

      {/* session details */}

      <div className="grow flex flex-col justify-between gap-2">
        <h4 className="text-gray-medium font-semibold text-xs xl:text-base">
          {grade ? `${tutors[0]?.name} | ${grade}` : `${tutorNames}`}
        </h4>
        <div className="flex items-center justify-start gap-3 xl:gap-6">
          {type === "upcoming" && (
            <div className="flex items-center justify-start bg-teal-dark px-1.5 xl:px-4 py-0.5 rounded-sm">
              <p className="text-white text-[8px] xl:text-[10px] font-bold uppercase">
                {when}
              </p>
            </div>
          )}
          <p className="text-gray-dark text-[8px] xl:text-[10px] font-extrabold uppercase">
            {date}
          </p>
          <div className="flex items-center justify-start">
            <MdLocationOn className="text-teal-dark text-sm xl:text-lg" />
            <p className="text-gray-dark text-[10px] xl:text-xs font-bold">
              {mode}
            </p>
          </div>
        </div>
      </div>

      {/* images  */}
      <div className="flex items-start justify-end ">
        {tutors?.slice(0, 2)?.map((tutor, index, tutors) => (
          <div
            key={tutor.name}
            className={`h-10 xl:h-12 aspect-square bg-gray-medium border-4 border-white rounded-full overflow-hidden ${
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
              className="w-full h-full object-cover shadow-sm"
            />
          </div>
        ))}
      </div>

      {/* menu  */}

      <button
        className={`size-9 p-2 hidden rounded-full text-gray-medium hover:bg-gray-200 active:scale-90 active:bg-gray-300 focus:outline-none focus:ring-transparent focus:bg-gray-200 ${
          type === "completed" ? "" : "md:flex justify-center items-center"
        }`}
      >
        <RxDotsVertical className="text-xl" />
      </button>
    </li>
  );
}

export default SessionItem;
