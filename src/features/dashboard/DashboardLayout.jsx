import { useEffect, useState } from "react";
import Box from "../../ui/Box";
import SessionList from "../sessions/SessionList";
import TutorRequest from "../tutors/TutorRequest";
import Stats from "./Stats";
import NoticeBoard from "./NoticeBoard";
import CalendarWidget from "../../ui/CalenderWidget";
import { completedSessions, upcomingSessions } from "./sessionData";

function DashboardLayout() {
  const [requestOpen, setIsRequestOpen] = useState(false);
  const [showRequest, setShowRequest] = useState(false);

  const [showCalender, setShowCalender] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowRequest(true);
      setTimeout(() => setIsRequestOpen(true), 10); // trigger animation
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  function handleClose() {
    setIsRequestOpen(false);

    setTimeout(() => {
      setShowRequest(false);
    }, 300); // match animation duration
  }

  return (
    <>
      <div className="relative rounded-md">
        {showRequest && (
          <TutorRequest show={requestOpen} onRequestOpen={handleClose} />
        )}
      </div>
      <div className="flex flex-col lg:flex-row justify-start items-start gap-6">
        <div className="w-full lg:w-3/4 space-y-4 lg:space-y-6 xl:space-y-8">
          <Stats />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-3 xl:gap-4">
            <Box>
              <h3 className="text-teal-dark font-bold text-sm lg:text-base xl:text-lg">
                Upcoming sessions this week
              </h3>
              <SessionList sessionData={upcomingSessions} />
            </Box>
            <Box>
              <h3 className="text-teal-dark font-bold text-sm lg:text-base xl:text-lg">
                Completed
              </h3>
              <SessionList sessionData={completedSessions} />
            </Box>
          </div>
        </div>

        {!showCalender && (
          <button
            className="sm:hidden w-full h-10 text-sm font-bold bg-teal-medium text-white hover:bg-teal-medium/90 flex justify-center items-center rounded-lg"
            onClick={() => setShowCalender(true)}
          >
            See Calender
          </button>
        )}

        {/* Calender and Notices  */}
        <div
          className={`w-full lg:w-1/4 sm:flex flex-col space-y-4 lg:space-y-6 xl:space-y-8  ${
            showCalender ? "" : "hidden"
          }`}
        >
          <div className="min-h-72 xl:min-h-[350px] pt-2 xl:pt-4 bg-white">
            <CalendarWidget />
          </div>
          <div className="bg-white xl:p-2 grow">
            <NoticeBoard />
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardLayout;
