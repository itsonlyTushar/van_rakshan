import { useEffect } from "react";
import { eventsImages } from "../../constants/landingPageDetails";
import Aos from "aos";
import "aos/dist/aos.css";

function Contributions() {

    useEffect(() => {
      Aos.init({
        duration: 800,
        once: true
      })
    }, []);


    // Bento grid like image gallery customized 
  return (
    <div data-aos="zoom-in-up" className="bg-[#9DC08B]">
      <div className="bg-[#FFF7DA] text-green-700 rounded-t-[4rem] p-5">
        <h1 className="text-6xl text-center">Glimpse of our efforts</h1>
        <div className="sm:grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-4 p-5 flex flex-col justify-center">
          <div className="row-span-2">
            <img
              className="object-cover w-full h-full rounded-[2rem]"
              src={eventsImages[0].img}
              alt={eventsImages[0].event}
            />
          </div>

          <div className="flex sm:flex-row flex-col gap-4">
            <img
              className="objext-cover w-full rounded-[2rem]"
              src={eventsImages[1].img}
              alt={eventsImages[1].event}
            />

            <img
              className="objext-cover w-full rounded-[2rem]"
              src={eventsImages[2].img}
              alt={eventsImages[2].event}
            />
          </div>

          <div className="col-span-2">
            <img
              className="object-cover w-full h-full rounded-[2rem]"
              src={eventsImages[3].img}
              alt={eventsImages[3].event}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contributions;
