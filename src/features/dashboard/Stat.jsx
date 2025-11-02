function Stat({ title, bgColor, value }) {
  const colorMap = {
    tealDark: "bg-teal-dark",
    tealMedium: "bg-teal-medium",
    graySubtle: "bg-gray-subtle",
  };

  return (
    <div
      className={`px-6 py-4 lg:px-4 lg:py-3 xl:px-6 xl:py-4 ${colorMap[bgColor]} rounded-md flex flex-col justify-between items-start gap-3 lg:gap-2 xl:gap-3`}
    >
      <p className="font-semibold text-[#fff] text-xs xl:text-base">{title}</p>
      <span className="text-2xl lg:text-3xl xl:text-5xl font-bold text-[#fff]">
        {value}
      </span>
    </div>
  );
}

export default Stat;
