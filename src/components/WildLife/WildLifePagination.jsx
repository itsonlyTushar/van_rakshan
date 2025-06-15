import { useEffect, useState } from "react";
import Skeleton from "../Loaders/Skeleton";
import { apiCall } from "../../constants/apiCalls";
import TechnicalError from "../Error/TechnicalError";
import Spinner from "../Loaders/Spinner";
import Pagination from "../UI/Pagination";
import { wildlifeConfig } from "./wildlifeConfig";

function WildLifePagination() {
  const [wildlifeData, setWildLifeData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [selectConcern, setSelectConcern] = useState("Vulnerable");
  const [error, setError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const callData = await apiCall(
          "https://sheetdb.io/api/v1/4m9ooz1a1a4lx"
        );
        if (callData === true) {
          setError(true);
          setIsLoading(false);
        } else {
          setWildLifeData(callData);
          setIsLoading(false);
        }
      } catch (error) {
        setError(true);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, []);

  const filterConern = wildlifeData.filter(
    (animal) => animal["Conservation Status"] === selectConcern
  );

  // filteres status to map over options
  const uniqueStatuses = [
    ...new Set(wildlifeData.map((item) => item["Conservation Status"])),
  ];

  const changeConcern = (e) => {
    setCurrentPage(0);
    setSelectConcern(e.target.value);
  };

  if (error) {
    return <TechnicalError />;
  }

  return (
    <>
      <div className="flex justify-center items-center">
        {/* dropdown to filter the status  */}

        {isLoading ? (
          <Spinner />
        ) : (
          <select
            onChange={changeConcern}
            className="bg-white/25 p-3 mx-10 rounded-lg text-white text-xl font-thin outline-none"
          >
            {uniqueStatuses.map((unique) => (
              <option key={unique} value={unique} className="text-green-500">
                {unique}
              </option>
            ))}
          </select>
        )}
      </div>

      {isLoading ? (
        <Skeleton />
      ) : (
        <Pagination
          apiData={filterConern}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          dataPerPage={6}
          content={wildlifeConfig}
          link={false}
        />
      )}
    </>
  );
}

export default WildLifePagination;
