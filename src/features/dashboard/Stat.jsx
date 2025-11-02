function Stat({ title, bgColor, value }) {
  const colorMap = {
    tealDark: "bg-teal-dark",
    tealMedium: "bg-teal-medium",
    graySubtle: "bg-gray-subtle",
  };

  return (
    <div
      className={`px-6 py-4 lg:px-4 lg:py-3 xl:px-6 xl:py-4 ${colorMap[bgColor]} flex flex-col items-start justify-between gap-3 rounded-md lg:gap-2 xl:gap-3`}
    >
      <p className="text-xs font-semibold text-[#fff] xl:text-base">{title}</p>
      <span className="text-2xl font-bold text-[#fff] lg:text-3xl xl:text-5xl">
        {value}
      </span>
    </div>
  );
}

export default Stat;
