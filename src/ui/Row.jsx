function Row({ children, type = "vertical" }) {
  return (
    <div
      className={`flex gap-6  ${
        type === "vertical"
          ? "flex-col"
          : type === "horizontal"
          ? "justify-between items-center flex-col md:flex-row"
          : ""
      }`}
    >
      {children}
    </div>
  );
}

export default Row;
