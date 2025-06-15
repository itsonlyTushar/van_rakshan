import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { events } from "../../constants/landingPageDetails";
import { Link } from "react-router";

function Upcoming() {
  return (
    <>
      <div className="flex flex-wrap gap-10 justify-center p-5">
        {events.map(
          (event) =>
            event.completed === false && (
              <div
                key={event.id}
                className="relative w-full sm:w-[26rem] h-[15rem] rounded-3xl overflow-hidden"
              >
                <img
                  className="object-cover w-full h-full top-0 right-0 absolute"
                  src={event.imgUrl}
                  alt={`imagename: ${event.imgUrl}`}
                />
                <div className="inset-0 bg-black bg-opacity-60 absolute ">
                  <div className="w-24 ml-3 mt-4 text-center z-10">
                    <p className="border-none text-gray-200 text-sm rounded-lg p-1 bg-white/40">
                      {event.date}
                    </p>
                  </div>
                  <div className="text-white py-6 px-4">
                    <h3 className="sm:text-2xl text-xl">{event.name}</h3>
                    <div className="flex items-end justify-between gap-3 mt-10">
                      <div className="flex items-center">
                        <CiLocationOn className="text-xl" />
                        <h2 className="sm:text-sm text-xs max-w-sm w-10">{event.location}</h2>
                      </div>
                      <div className="py-1 px-2 rounded-xl bg-[#9DC08B] hover:bg-[#b1cba4] ease-in-out transition-all max-w-lg">
                        <Link to={"/contact"}>
                      
                          <button>Contact us</button>{" "}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
        )}
      </div>
    </>
  );
}

export default Upcoming;
