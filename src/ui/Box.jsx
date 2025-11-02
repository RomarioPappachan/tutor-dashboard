function Box({ children }) {
  return (
    <div className="bg-white border border-teal-medium/40 px-1 py-4 pb-6 sm:px-2 lg:p-4 xl:p-6 rounded-lg space-y-6 lg:space-y-8 xl:space-y-10">
      {children}
    </div>
  );
}

export default Box;
