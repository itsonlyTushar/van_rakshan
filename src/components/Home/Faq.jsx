import { useState } from "react";
import { IoIosArrowDropright } from "react-icons/io";
import { IoIosArrowDropdown } from "react-icons/io";
import { questions } from "../../constants/faq";

function Faq() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = (id) => {
    setIsOpen((prevId) => (prevId === id ? false : id));
  };

  return (
    <div
      id="faq"
      className=" p-4  bg-[#FFF7DA] text-green-700 py-36  rounded-t-[4rem] "
    >
      <h1 className="text-5xl sm:text-xl md:text-5xl lg:text-6xl xl:text-7xl text-center font-thin py-6">FAQs</h1>
      <div className="grid sm:grid-cols-2 grid-cols-1 place-items-center content-center  gap-2 mt-6 px-2">
        {questions.map((data) => {
          const open = isOpen === data.id;
          return (
            <div
              key={data.id}
              className="rounded-2xl px-6 py-4 w-full max-w-lg shadow-lg bg-[#9DC08B]"
            >
              <div className="flex items-center justify-between mb-3 text-white">
                <h1 className="sm:text-sm md:text-xl text-xl font-semibold">
                  {data.question}
                </h1>
                <button
                  onClick={() => handleToggle(data.id)}
                  className="text-xl leading-none  hover:text-green-700 px-2"
                >
                  {open ? <IoIosArrowDropdown /> : <IoIosArrowDropright />}
                </button>
              </div>

              <p
                className={`text-lg transition-all duration-300 ${
                  open ? "block" : "hidden"
                }`}
              >
                {data.answer}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Faq;
