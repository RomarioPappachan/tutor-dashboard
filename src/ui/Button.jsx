function Button({ variation, children }) {
  return (
    <button
      type="button"
      className={`flex flex-col items-center rounded-md text-xs font-bold transition-all duration-150 active:scale-90 lg:text-[10px] xl:text-sm ${
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
