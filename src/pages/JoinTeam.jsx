import Form from "../components/Form/Form";
import Contributions from "../components/Form/Contributions";

function JoinTeam() {
  return (
    <div className="bg-green-700 pt-32">
      <h3 className="text-2xl sm:text-2xl md:text-4xl lg:text-4xl xl:text-5xl  text-center text-white mt-5 mb-6">
        Fill the form for volunteering.
      </h3>
      <div className="sm:flex sm:p-10 justify-center items-center p-5 rounded-t-[4rem] bg-[#9DC08B]">
        <Form />
      </div>
        <Contributions/>

    </div>
  );
}

export default JoinTeam;
