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
      <div className="relative scale-105 rounded-md sm:scale-100">
        {showRequest && (
          <TutorRequest show={requestOpen} onRequestOpen={handleClose} />
        )}
      </div>
      <div className="flex flex-col items-start justify-start gap-6 lg:flex-row">
        <div className="w-full space-y-4 lg:w-3/4 lg:space-y-6 xl:space-y-8">
          <Stats />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-3 xl:gap-4">
            <Box>
              <h3 className="text-sm font-bold text-teal-dark lg:text-base xl:text-lg">
                Upcoming sessions this week
              </h3>
              <SessionList sessionData={upcomingSessions} />
            </Box>
            <Box>
              <h3 className="text-sm font-bold text-teal-dark lg:text-base xl:text-lg">
                Completed
              </h3>
              <SessionList sessionData={completedSessions} />
            </Box>
          </div>
        </div>

        {!showCalender && (
          <button
            className="flex h-10 w-full items-center justify-center rounded-lg bg-teal-medium text-sm font-bold text-white hover:bg-teal-medium/90 md:hidden"
            onClick={() => setShowCalender(true)}
          >
            See Calender
          </button>
        )}

        {/* Calender and Notices  */}
        <div
          className={`w-full flex-col space-y-4 md:flex lg:w-1/4 lg:space-y-6 xl:space-y-8 ${
            showCalender ? "" : "hidden"
          }`}
        >
          <div className="min-h-72 bg-white pt-2 xl:min-h-[350px] xl:pt-4">
            <CalendarWidget />
          </div>
          <div className="grow bg-white xl:p-2">
            <NoticeBoard />
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardLayout;
