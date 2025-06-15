
// Custom button UI component 
function Button({ OnClick, isLoading, Type }) {

  return (
    <button
      onClick={OnClick}
      type={Type}
      disabled={isLoading}
      className="px-10 py-4 bg-white rounded-xl text-green-700 text-lg font-semibold hover:bg-white/60"
    >
      {isLoading ? "Submitting..." : "Submit"}
    </button>
  );
}

export default Button;
