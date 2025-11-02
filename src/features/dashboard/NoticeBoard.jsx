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
      <h3 className="mb-8 text-sm font-bold text-teal-dark lg:text-base xl:text-lg">
        Notice Board
      </h3>

      <div className="">
        {/* <div className="absolute top-2 left-2 h-full w-[1px] xl:w-[2px] bg-teal-dark/40"></div> */}

        {notices.map((notice, i) => (
          <div
            key={i}
            className="relative space-x-2 border-l border-teal-dark/40 pb-6 ps-1 last:border-transparent xl:border-l-2"
          >
            <div
              className={`absolute -left-1 top-0.5 h-2 w-2 rounded-full border-2 xl:-left-[7px] xl:top-1 xl:h-3 xl:w-3 ${
                notice.active
                  ? "border-teal-dark bg-teal-dark"
                  : "border-teal-dark bg-white"
              }`}
            ></div>

            <div className="mb-1 flex items-center justify-between">
              <p className="text-xs font-bold text-gray-dark xl:text-base">
                {notice.title}
              </p>
              <span className="whitespace-nowrap text-[8px] font-semibold text-gray-medium lg:text-[10px] xl:text-xs">
                {notice.time}
              </span>
            </div>

            <p className="text-[10px] font-semibold text-gray-medium lg:text-[11px] xl:text-xs">
              {notice.description}
              {notice.action && (
                <span className="ml-1 cursor-pointer font-medium underline hover:text-teal-dark">
                  {notice.action}
                </span>
              )}
            </p>
          </div>
        ))}
      </div>

      <button className="mt-8 flex items-center gap-1 rounded-md p-1 text-xs text-teal-dark transition-all duration-150 hover:bg-teal-light focus:bg-teal-100 active:scale-90 active:bg-teal-100 xl:text-base">
        Go to notifications
        <LuChevronDown />
      </button>
    </div>
  );
}
