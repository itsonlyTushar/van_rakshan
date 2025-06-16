import { useState } from "react";
import Modal from "../UI/Modal";
import { PiSpinnerGapLight } from "react-icons/pi";

function NewsLetter() {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const clickNewsLetter = (e) => {
    setLoading(true);
    e.preventDefault();

    setTimeout(() => {
      setShow(true);
      setLoading(false);
    }, 2000);
  };

  return (
    <div id="about" className="bg-green-700 text-white py-10 rounded-t-[4rem]">
      <h1 className="text-5xl sm:text-xl md:text-5xl lg:text-6xl xl:text-7xl text-center">About Us</h1>
      <div className="flex flex-col sm:flex-row justify-center items-center max-w-screen-lg mx-auto px-6 gap-20 mt-10">
        <div className="p-2 max-w-xl text-center text-xl">
          Van Rakshan is a non-profit organization committed to the protection
          and conservation of endangered species across India and beyond. Our
          mission is to raise awareness, educate communities nationwide, and
          take impactful action to safeguard the natural world for future
          generations. Through national events, webinars, and conservation
          initiatives, we strive to inspire individuals across the country to
          become stewards of nature and actively contribute to the preservation
          of biodiversity. Join us in our mission to protect wildlife—because
          every species deserves a future.
        </div>

        <div className="p-6 max-w-md">
          <h1 className="text-3xl mb-2">Subscribe</h1>
          <p className="text-sm italic mb-2">
            Stay updated with the latest information!
          </p>
          <Modal
            setShow={setShow}
            show={show}
            message={"You have successfully subsribed to our weekly newsletter"}
          />
          <form onSubmit={clickNewsLetter} action="POST">
            <input
              placeholder="enter mail..."
              className="p-3 mb-4 bg-transparent outline outline-green-400 w-full rounded-xl focus:outline-green-500 "
              type="text"
              required
            />
            <button
              type="submit"
              className="border rounded-xl p-3 px-6 hover:border-green-500"
            >
              {loading ? (
                <PiSpinnerGapLight className="animate-spin" />
              ) : (
                "Subscribe"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewsLetter;
