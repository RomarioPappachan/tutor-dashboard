import React, { useState } from "react";
import dayjs from "dayjs";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

const markedDates = [7, 9, 14, 19, 21];

export default function CalendarWidget() {
  const [currentMonth, setCurrentMonth] = useState(dayjs());

  const [selectedDates, setSelectedDates] = useState([]);

  const daysInMonth = currentMonth.daysInMonth();
  const firstDay = (currentMonth.startOf("month").day() + 6) % 7;

  const nextMonth = () => setCurrentMonth(currentMonth.add(1, "month"));
  const prevMonth = () => setCurrentMonth(currentMonth.subtract(1, "month"));

  const weeks = ["MO", "TU", "WE", "TH", "FR", "SA", "SU"];

  const daysArray = [];
  for (let i = 0; i < firstDay; i++) daysArray.push(null);
  for (let i = 1; i <= daysInMonth; i++) daysArray.push(i);

  // toggle selected date
  const toggleDate = (day) => {
    if (!day) return;

    setSelectedDates((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day],
    );
  };

  return (
    <div className="w-full space-y-4 bg-white p-4">
      <div className="mb-4 flex items-center justify-around">
        <button
          onClick={prevMonth}
          className="text-xs text-gray-dark focus:bg-gray-200 xl:text-base"
        >
          <LuChevronLeft className="text-lg" />
        </button>
        <h3 className="text-sm font-bold text-gray-dark xl:text-base">
          {currentMonth.format("MMMM YYYY")}
        </h3>
        <button
          onClick={nextMonth}
          className="text-xs text-gray-600 focus:bg-gray-200 xl:text-base"
        >
          <LuChevronRight className="text-lg" />
        </button>
      </div>

      {/* Week Row */}
      <div className="mb-2 grid grid-cols-7 text-center text-[10px] font-bold text-gray-medium xl:text-xs">
        {weeks.map((d) => (
          <div key={d}>{d}</div>
        ))}
      </div>

      {/* Days */}
      <div className="grid grid-cols-7 text-center text-xs lg:text-[10px] xl:text-xs">
        {daysArray.map((day, index) => {
          const isSelected = selectedDates.includes(day);
          return (
            <button
              key={index}
              onClick={() => toggleDate(day)}
              className="relative flex h-8 cursor-pointer items-center justify-center active:bg-teal-light xl:h-10"
            >
              {day && (
                <span
                  className={`${
                    isSelected ? "font-bold text-teal-dark" : "text-gray-700/80"
                  }`}
                >
                  {day}
                </span>
              )}

              {day && markedDates.includes(day) && (
                <span className="absolute right-3 top-1 h-1 w-1 rounded-full bg-teal-dark md:right-6 lg:right-2 xl:right-4"></span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
