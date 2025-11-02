function ButtonIcon({ children }) {
  return (
    <button className="rounded border-none bg-none p-1 text-teal-dark transition-all duration-200 hover:bg-teal-50 focus:bg-teal-50 active:scale-90 active:bg-teal-100">
      {children}
    </button>
  );
}

export default ButtonIcon;
