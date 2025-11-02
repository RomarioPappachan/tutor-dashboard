function Button({ variation, children }) {
  return (
    <button
      type="button"
      className={`font-bold text-xs lg:text-[10px] xl:text-sm rounded-md active:scale-90 transition-all duration-150 flex flex-col items-center ${
        variation === "primary"
          ? "text-teal-dark hover:text-teal-medium focus:text-teal-medium"
          : variation === "secondary"
          ? "text-gray-dark hover:text-gray-medium focus:text-gray-medium"
          : variation === "danger"
          ? "text-red-500 hover:text-red-400 focus:text-red-400"
          : ""
      }`}
    >
      {children}
    </button>
  );
}

export default Button;
