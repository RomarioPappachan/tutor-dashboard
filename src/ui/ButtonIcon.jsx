function ButtonIcon({ children }) {
  return (
    <button className="bg-none border-none rounded p-1 transition-all duration-200 text-teal-dark hover:bg-teal-50 active:scale-90 active:bg-teal-100  focus:bg-teal-50">
      {children}
    </button>
  );
}

export default ButtonIcon;
