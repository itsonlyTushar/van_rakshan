import { useState } from "react";
import Skeleton from "../Loaders/Skeleton";
import TechnicalError from "../Error/TechnicalError";
import Spinner from "../Loaders/Spinner";
import Pagination from "../UI/Pagination";
import { wildlifeConfig } from "./wildlifeConfig";

function WildLifePagination({ fetchedApiData, fetchedLoading, fetchedError }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectConcern, setSelectConcern] = useState("Vulnerable");

  const filterConern = fetchedApiData.filter(
    (animal) => animal["Conservation Status"] === selectConcern
  );

  // filteres status to map over options
  const uniqueStatuses = [
    ...new Set(fetchedApiData.map((item) => item["Conservation Status"])),
  ];

  const changeConcern = (e) => {
    setCurrentPage(0);
    setSelectConcern(e.target.value);
  };

  if (fetchedError) {
    return <TechnicalError />;
  }

  return (
    <>
      <div className="flex justify-center items-center">
        {/* dropdown to filter the status  */}

        {fetchedLoading ? (
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

      {fetchedLoading ? (
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
