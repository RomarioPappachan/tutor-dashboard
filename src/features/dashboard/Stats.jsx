import Stat from "./Stat";

function Stats() {
  return (
    <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-6 xl:gap-10">
      <Stat title="Upcoming Tutorials" bgColor="tealDark" value={14} />
      <Stat
        title="Number of Tutorial Hours Tracked Last Month"
        bgColor="tealMedium"
        value={65}
      />
      <Stat title="Pending Tutorial Requests" bgColor="graySubtle" value={6} />
    </div>
  );
}

export default Stats;
