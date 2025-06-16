import React from "react";
import { missionContent } from "../../constants/landingPageDetails";

function Mission() {

  return (
    <div className="py-6 md:py-16 px-4 md:px-6">
      <div className="grid sm:grid-cols-3 grid-cols-1 place-items-center content-center gap-4 items-center">
        {missionContent.map((card) => (
          <div
            key={card.id}
            className="text-center flex flex-col items-center justify-center gap-2 "
          >
            <div className="text-7xl text-center text-green-700">
              {React.createElement(card.icon)}
            </div>
            <h1 className="text-4xl text-green-700 font-semibold">
              {card.heading}
            </h1>
            <p className="sm:max-w-sm max-w-xs text-[#FFF7DA] sm:text-md md:text-md">
              {card.para}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Mission;
