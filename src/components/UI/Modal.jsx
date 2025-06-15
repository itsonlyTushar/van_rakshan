function Modal({ show, setShow, message }) {
  return (
    <>
      {/* simple modal component with get shown and hidden on show prop  */}
      <div
        className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 ${
          show ? "flex" : "hidden"
        } flex-col justify-between items-center w-11/12 max-w-md p-6 bg-white text-green-700 rounded-3xl shadow-lg border border-green-300 transition-all duration-300`}
      >
        <h2 className="text-2xl font-bold mb-2">Message</h2>

        <p className="text-center font-thin text-2xl mb-6 px-2">{message}</p>

        <button
          className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-xl "
          onClick={() => setShow(!show)}
        >
          Close
        </button>
      </div>
    </>
  );
}

export default Modal;
