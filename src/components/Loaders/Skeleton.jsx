// Custom skeleton component with pusling effect 

function Skeleton() {
  return (
    <div className="grid sm:grid-cols-2 grid-cols-1 justify-center gap-5 p-10 ">
      <div className="animate-pulse p-10 bg-green-500/20 rounded-2xl shadow-lg hover:bg-green-600 transition-colors min-h-[200px] flex flex-col justify-between">
        <h2 className="text-xl font-bold text-white mb-2  p-2">Loading...</h2>
        <p className="text-white max-w-14 text-center rounded-2xl p-3">
          Loading...
        </p>
        <p className="text-white p-2">Loading...</p>
      </div>
      <div className="animate-pulse p-10 bg-green-500/20 rounded-2xl shadow-lg hover:bg-green-600 transition-colors min-h-[200px] flex flex-col justify-between">
        <h2 className="text-xl font-bold text-white mb-2  p-2">Loading...</h2>
        <p className="text-white max-w-14 text-center rounded-2xl p-3">
          Loading...
        </p>
        <p className="text-white  p-2">Loading...</p>
      </div>
      <div className="animate-pulse p-10 bg-green-500/20 rounded-2xl shadow-lg hover:bg-green-600 transition-colors min-h-[200px] flex flex-col justify-between">
        <h2 className="text-xl font-bold text-white mb-2  p-2">Loading...</h2>
        <p className="text-white max-w-14 text-center rounded-2xl p-3">
          Loading...
        </p>
        <p className="text-white  p-2">Loading...</p>
      </div>
      <div className="animate-pulse p-10 bg-green-500/20 rounded-2xl shadow-lg hover:bg-green-600 transition-colors min-h-[200px] flex flex-col justify-between">
        <h2 className="text-xl font-bold text-white mb-2  p-2">Loading...</h2>
        <p className="text-white max-w-14 text-center rounded-2xlp-3">
          Loading...
        </p>
        <p className="text-white  p-2">Loading...</p>
      </div>
    </div>
  );
}

export default Skeleton;
