function Box({ children }) {
  return (
    <div className="space-y-6 rounded-lg border border-teal-medium/40 bg-white px-1 py-4 pb-6 sm:px-2 lg:space-y-8 lg:p-4 xl:space-y-10 xl:p-6">
      {children}
    </div>
  );
}

export default Box;
