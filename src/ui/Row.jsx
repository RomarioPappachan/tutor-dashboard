function Row({ children, type = "vertical" }) {
  return (
    <div
      className={`flex gap-6 ${
        type === "vertical"
          ? "flex-col"
          : type === "horizontal"
            ? "flex-col items-center justify-between md:flex-row"
            : ""
      }`}
    >
      {children}
    </div>
  );
}

export default Row;
