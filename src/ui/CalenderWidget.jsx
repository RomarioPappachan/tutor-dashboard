import React, { useState } from "react";
import dayjs from "dayjs";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

const markedDates = [7, 9, 14, 19, 21];

export default function CalendarWidget() {
  const [currentMonth, setCurrentMonth] = useState(dayjs());

  const daysInMonth = currentMonth.daysInMonth();
  const firstDay = currentMonth.startOf("month").day();

  const nextMonth = () => setCurrentMonth(currentMonth.add(1, "month"));
  const prevMonth = () => setCurrentMonth(currentMonth.subtract(1, "month"));

  const weeks = ["MO", "TU", "WE", "TH", "FR", "SA", "SU"]; // Monday first

  // Generate grid
  const daysArray = [];
  for (let i = 0; i < firstDay; i++) daysArray.push(null);
  for (let i = 1; i <= daysInMonth; i++) daysArray.push(i);

  return (
    <div className="w-full bg-white p-4 space-y-4">
      <div className="flex justify-around items-center mb-4">
        <button
          onClick={prevMonth}
          className="text-gray-dark text-xs xl:text-base focus:bg-gray-200"
        >
          <LuChevronLeft className="text-lg" />
        </button>
        <h3 className="text-gray-dark font-bold text-sm xl:text-base">
          {currentMonth.format("MMMM YYYY")}
        </h3>
        <button
          onClick={nextMonth}
          className="text-gray-600 text-xs xl:text-base focus:bg-gray-200"
        >
          <LuChevronRight className="text-lg" />
        </button>
      </div>

      {/* Week Row */}
      <div className="grid grid-cols-7 text-center text-gray-medium text-[10px] xl:text-xs font-bold mb-2">
        {weeks.map((d) => (
          <div key={d}>{d}</div>
        ))}
      </div>

      {/* Days */}
      <div className="grid grid-cols-7 text-center text-[10px] xl:text-xs">
        {daysArray.map((day, index) => (
          <div
            key={index}
            className="h-8 xl:h-10 flex items-center justify-center relative"
          >
            {day && (
              <span
                className={`${
                  markedDates.includes(day)
                    ? "text-[#00A3A7] font-semibold"
                    : "text-gray-700"
                }`}
              >
                {day}
              </span>
            )}

            {day && markedDates.includes(day) && (
              <span className="w-1 h-1 rounded-full bg-[#00A3A7] absolute top-1 lg:right-2 xl:right-4"></span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
