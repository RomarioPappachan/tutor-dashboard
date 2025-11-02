import SessionItem from "./SessionItem";

function SessionList({ sessionData = [] }) {
  return (
    <ul className="scrollbar-0 max-h-48 space-y-6 overflow-y-auto lg:max-h-none lg:min-h-[600px]">
      {sessionData.length > 0 &&
        sessionData.map((item, index) => (
          <SessionItem key={item.id} session={item} index={index} />
        ))}
    </ul>
  );
}

export default SessionList;
