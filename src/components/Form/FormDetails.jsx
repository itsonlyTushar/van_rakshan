import { MdOutlinePendingActions } from "react-icons/md";
import { Link } from "react-router-dom";
import { GrStatusPlaceholderSmall } from "react-icons/gr";
import { checkData, fields } from "../../constants/formFields";
import { FaHome } from "react-icons/fa";
import { useSelector } from "react-redux";

function FormDetails() {
  const submissionData = useSelector((state) => state.teamSlice.submission);

  const isSubmit = checkData();

  const gettingData = localStorage.getItem("User Form");
  const parJson = JSON.parse(gettingData);

  const dynMicFields = fields.map((field) => ({
    ...field,
    data: isSubmit ? parJson[field.name] : submissionData[field.name],
  }));

  return (
    <div className="bg-green-700 pt-32">
      <h1 className="text-6xl text-white text-center mb-10">Form Details</h1>
      <div className="bg-[#9DC08B] p-10 rounded-t-[4rem]">
        <div className="flex items-center text-green-700 font-semibold gap-3">
          <GrStatusPlaceholderSmall />
          <h1>
            Status :
            {isSubmit ? "Form Submitted - In review" : "Form not submitted"}
          </h1>
        </div>

        <div className="flex justify-center items-center mt-10">
          {isSubmit ? (
            <div>
              <table className="table-auto  border border-gray-300 text-left text-sm">
                <tbody className="bg-green-600 text-white">
                  {dynMicFields.map((elem, index) => (
                    <tr className="border" key={index}>
                      <th className="py-5 border text-lg bg-gray-100 text-green-700">
                        {elem?.label}
                      </th>
                      <td className="py-3 px-4 border text-lg break-words ">
                        {elem?.data}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="flex justify-center items-center gap-5  underline text-2xl mt-4 text-green-800">
                <FaHome />
                <Link to={"/"}>
                  <h3 className="">Home Page</h3>
                </Link>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center text-green-700">
              <MdOutlinePendingActions className="text-[15rem]" />
              <div>
                <span className="text-xl">No Submission Found</span>
                <Link to={"/jointeam"}>
                  <h3 className="text-green-900 underline text-sm">
                    Click here to Submit
                  </h3>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default FormDetails;
