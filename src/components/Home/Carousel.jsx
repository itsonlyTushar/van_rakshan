import { useEffect, useState } from "react";
import { carouselData } from "../../constants/landingPageDetails";
import { GoDotFill } from "react-icons/go";

const Carousel = () => {
  // tracking the slide change.
  const [currentSlide, setCurrentSlide] = useState(1);
  const [animate, setAnimate] = useState(false);

  // handling next slide change with carausel data from constant file
  const goToNext = (id) => {
    setAnimate(true);
    setTimeout(() => {
      setCurrentSlide(id);
      setAnimate(false);
    }, 500);
  };

  // auto changing slide after some deley
  useEffect(() => {
    setInterval(() => {
      setCurrentSlide((prev) => {
        const nextSlide = (prev % carouselData.length) + 1;
        goToNext(nextSlide);
        return nextSlide;
      });
    }, 5000);
  }, []);

  return (
    <div className="relative">
      <div className="flex flex-col justify-center items-center text center">
        {carouselData
          .filter((slide) => slide.id === currentSlide)
          .map((detail) => (
            <div
              key={detail.id}
              className={`transition-opacity duration-500 ease-in-out px-4 text-center ${
                animate ? "opacity-0" : "opacity-100"
              }`}
            >
              <h1 className="text-3xl max-w-6xl text-green-400">
                {detail.quote}
              </h1>
              <h2 className="py-4 text-md text-green-200"> ~ {detail.name}</h2>
            </div>
          ))}

        <div className="flex items-center">
          {carouselData.map((detail) => (
            <div key={detail.id}>
              <button
                className={`${
                  detail.id === currentSlide
                    ? "text-[#FFF7DA]"
                    : "text-green-400"
                }`}
                onClick={() => goToNext(detail.id)}
              >
                <GoDotFill />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
