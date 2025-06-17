import { useState } from "react";
import { FiArrowUpCircle } from "react-icons/fi";

function ScrollTop() {
  const [show, setShow] = useState(false);

  const setVisibility = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setShow(true);
    } else if (scrolled <= 300) {
      setShow(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  window.addEventListener("scroll", setVisibility);

  return (
    <div  className={`p-5 sm:text-6xl text-3xl ${show ? "inline" : "hidden"} text-white`}>
      <button onClick={scrollToTop}>
        <FiArrowUpCircle />
      </button>
    </div>
  );
}

export default ScrollTop;
