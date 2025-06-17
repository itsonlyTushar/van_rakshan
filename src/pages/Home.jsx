import Carousel from "../components/Home/Carousel.jsx";
import Events from "../components/Events/Events.jsx";
import AboutUs from "../components/Home/AboutUs.jsx";
import { randomVideo } from "../constants/landingPageDetails";
import { Link, useLocation } from "react-router";
import Faq from "../components/Home/Faq.jsx";
import Mission from "../components/Home/Mission.jsx";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function Home() {
  const location = useLocation();

  useEffect(() => {
    Aos.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <>
      <main
        className={`${
          location.pathname === "/" ? "bg-[#9DC08B]" : "bg-green-700"
        }  border-none`}
      >
        <div className="relative h-screen">

        <div className="absolute inset-0 overflow-hidden h-full w-full">
        {/* random video will be display after every render  */}
   
          <video className="w-full h-full object-cover" loop muted autoPlay>
            <source src={randomVideo()} type="video/mp4" />
          </video>
    
        </div>

          {/* overlay text above to video  */}
          <div className="absolute top-1/2 left-1/2 text-center py-16 transform -translate-x-1/2 -translate-y-1/2">
            <h1
              data-aos="fade-up"
              className="text-2xl sm:text-xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-semibold"
            >
              Every Species Matters. Every Action Counts.
            </h1>
            <Link to={"/jointeam"}>
              <button className="py-3 mt-4 px-12 rounded-xl bg-[#9DC08B] text-lg font-bold hover:bg-[#b1cba4] ease-in-out transition-all text-green-700">
                Join Us
              </button>
            </Link>
          </div>
        </div>
      </main>

      {/* Mission section */}
      <section className="bg-[#9DC08B] border-none z-index">
        <div className="text-center p-5 py-20">
          <h1 className="text-5xl sm:text-xl md:text-5xl lg:text-6xl xl:text-7xl text-wrap mt-4 text-green-700 font-thin">
            Our Mission
          </h1>
        </div>
        <Mission />
      </section>

      {/* Carousel section  */}
      <section className="bg-[#9DC08B]">
        <div className="bg-green-700 rounded-t-[4rem] py-28">
          <h1 className="text-center text-5xl sm:text-xl md:text-5xl lg:text-6xl xl:text-7xl text-white p-14">
            What Our Leaders Says
          </h1>
          <Carousel />
        </div>
      </section>

      {/* Events section  */}
      <section className="bg-green-700">
        <Events />
      </section>

      {/*  About us & Newsletter subscribe section  */}

      <section className="bg-[#FFF7DA]">
        <AboutUs />
      </section>

      <section className="bg-green-700">
        <Faq />
      </section>
    </>
  );
}

export default Home;
