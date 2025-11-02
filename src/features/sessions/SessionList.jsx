import SessionItem from "./SessionItem";

function SessionList({ sessionData = [] }) {
  return (
    <ul className="max-h-48 lg:max-h-none lg:min-h-[600px] space-y-6 overflow-y-auto scrollbar-0">
      {sessionData.length > 0 &&
        sessionData.map((item, index) => (
          <SessionItem key={item.id} session={item} index={index} />
        ))}
    </ul>
  );
}

export default SessionList;
