import { MdOutlineReportGmailerrorred } from "react-icons/md";
import { Link } from "react-router";

function TechnicalError() {
  return (
    <div className="flex flex-col items-center justify-center mx-auto items-center text-white text-4xl text-center py-24 h-screen">
      <MdOutlineReportGmailerrorred className="text-8xl" />
      <h1 className="max-w-2xl">
        We are experiencing technical error. please visit us after some time.
      </h1>
      <Link to={"/"}>
        <button className="bg-white text-green-700 py-1 px-2 rounded-xl text-lg font-semibold">
          Go Home
        </button>
      </Link>
    </div>
  );
}

export default TechnicalError;
