import { useEffect, useState } from "react";
import { GrProjects } from "react-icons/gr";
import { IoIosArrowForward } from "react-icons/io";
import { Link, useParams } from "react-router-dom";
import { GoDotFill } from "react-icons/go";
import Spinner from "../Loaders/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { fetchApi } from "../../features/apiSlice";

function ProgramDetails() {

  const [program, setProgram] = useState({});
  const { programId } = useParams();

  const dispatch = useDispatch();
  const fetchData = useSelector((state) => state.apiReducer.data);
  const loadingState = useSelector((state) => state.apiReducer.loading);

  useEffect(() => {
    dispatch(fetchApi("https://sheet2api.com/v1/NrYPyVwcTIaZ/program"));
  }, [dispatch, programId]);

  useEffect(() => {
    if (Array.isArray(fetchData) && fetchData.length > 0) {
      const setType = Number(programId);
      const prgmId = fetchData.find((n) => n["ID"] === setType);
      setProgram(prgmId);
    }
  }, [fetchData, programId]);

  if (loadingState) {
    return (
      <div className="bg-green-700 py-48 flex justify-center item-center mx-auto h-screen">
        <Spinner textSize={"20px"} textColor={"text-green-700"} />
      </div>
    );
  }

  return (
    <div className="bg-green-700 pt-32">
      <h1 className="text-white text-6xl text-center">Program Details</h1>
      {/* Navigator  */}
      <div className="flex gap-4 items-center text-center p-4 text-sm text-white/60">
        <Link to={"/program"}>
          <span className="hover:text-green-300">Programs</span>
        </Link>
        <IoIosArrowForward />
        <span className="font-semibold text-white cursor-pointer">
          {program["Program Name"]}
        </span>
      </div>

      {/* Program section  */}
      <div className="bg-[#FFF7DA] p-8 rounded-t-[4rem] text-green-700 py-32">
        <div className="flex items-center justify-start gap-2">
          <GrProjects className="text-4xl mr-3" />
          <h1 className=" text-4xl font-semibold my-3">
            {program["Program Name"]}
          </h1>
        </div>
        <span className="mr-4">Launced : {program["Year Launched"]}</span>
        <span className="mr-4">Duration : {program["Duration"]}</span>
        <span>Country : {program["Country/Region"]}</span>
        <div className="flex items-center gap-2 mt-4 ">
          <GoDotFill className="animate-pulse" />
          <span className="text-green-500">
            Status : {program["Current Status"]}
          </span>
        </div>

        <p className="text-xl mt-4 text-justify">{program["Description"]}</p>
        <p className="text-xl mt-4 text-justify">
          Working Towards : {program["Objectives and Goals"]}
        </p>
        <h4 className="text-md font-semibold text-red-500 text-center mt-2 border max-w-xl rounded-xl bg-white/90">
          Targeted Species to Protect : {program["Target Species/Ecosystems"]}
        </h4>

        <h3 className="mt-3 underline italic">
          Managed by: {program["Government Agency"]}
        </h3>
      </div>
    </div>
  );
}

export default ProgramDetails;
