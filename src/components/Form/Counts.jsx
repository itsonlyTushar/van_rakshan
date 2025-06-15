

const CounterAnimation = ({ count, label, animation }) => {
  // Reuseable counts component used in join form page
  return (
    <>
      <div data-aos={animation} className="bg-green-700 text-6xl rounded-[3rem] text-white p-6 text-center m-5">
        <div className="flex flex-col h-[20rem] text-center items-center justify-center gap-6 mt-6">
          <h1>{count}+</h1>
          <p className="text-5xl">{label}</p>
        </div>
      </div>
    </>
  );
};

export default CounterAnimation;
