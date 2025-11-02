import React from "react";
import { LuChevronDown } from "react-icons/lu";

const notices = [
  {
    title: "Rescheduled Session",
    time: "Just Now",
    description:
      "This session has been rescheduled to 16th August, 2020 by student.",
    action: "Action",
    active: true,
  },
  {
    title: "John Manor (Student)",
    time: "Aug 10, 2020",
    description:
      "I have an engagement on your proposed date. Could we reschedule?",
    active: false,
  },
  {
    title: "Admin",
    time: "Aug 10, 2020",
    description: "Tutorial commences in 30mins. Get ready.",
    active: false,
  },
  {
    title: "Admin",
    time: "Aug 10, 2020",
    description: "Tutorial commences in 30mins. Get ready.",
    active: false,
  },
];

export default function NoticeBoard() {
  return (
    <div className="w-full bg-white p-4">
      <h3 className="text-teal-dark font-bold text-sm lg:text-base xl:text-lg mb-8  ">
        Notice Board
      </h3>

      <div className="">
        {/* <div className="absolute top-2 left-2 h-full w-[1px] xl:w-[2px] bg-teal-dark/40"></div> */}

        {notices.map((notice, i) => (
          <div
            key={i}
            className="relative ps-1 pb-6 space-x-2 border-l xl:border-l-2 border-teal-dark/40 last:border-transparent"
          >
            <div
              className={`w-2 xl:w-3 h-2 xl:h-3 rounded-full border-2 absolute -left-1 top-0.5 xl:-left-[7px] xl:top-1  ${
                notice.active
                  ? "bg-teal-dark border-teal-dark"
                  : "bg-white border-teal-dark"
              }`}
            ></div>

            <div className="flex justify-between items-center mb-1">
              <p className="text-gray-dark font-bold text-xs xl:text-base">
                {notice.title}
              </p>
              <span className="text-gray-medium font-semibold text-[8px] lg:text-[10px] xl:text-xs whitespace-nowrap">
                {notice.time}
              </span>
            </div>

            <p className="text-gray-medium font-semibold text-[10px] lg:text-[11px] xl:text-xs">
              {notice.description}
              {notice.action && (
                <span className="cursor-pointer underline ml-1 font-medium">
                  {notice.action}
                </span>
              )}
            </p>
          </div>
        ))}
      </div>

      <button className="text-teal-dark text-xs xl:text-base mt-8 p-1 flex items-center gap-1 rounded-md hover:bg-teal-light active:scale-90 active:bg-teal-100 focus:bg-teal-100 transition-all duration-150">
        Go to notifications
        <LuChevronDown />
      </button>
    </div>
  );
}
