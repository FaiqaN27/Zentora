const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20">
      <div className="w-15 h-15 rounded-full border-6 border-t-red-500 border-r-yellow-500 border-b-green-500 border-l-blue-500 animate-spin shadow-[0_0_10px_rgba(0,0,0,0.2)]"></div>
    </div>
  );
};

export default Loader;
