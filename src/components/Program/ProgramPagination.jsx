import { useEffect, useState } from "react";
import { apiCall } from "../../constants/apiCalls";
import TechnicalError from "../Error/TechnicalError";
import Skeleton from "../Loaders/Skeleton";
import { programsConfig } from "./paginationConfig";
import Pagination from "../UI/Pagination";

function ProgramPagination() {
  const [programData, setProgramData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const callData = await apiCall(
          "https://sheet2api.com/v1/NrYPyVwcTIaZ/program"
        );
        if (callData === true) {
          setError(true);
          setIsLoading(false);
        } else {
          setProgramData(callData);
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

  if (error) {
    return <TechnicalError />;
  }

  return (
    <>
      {isLoading ? (
        <Skeleton />
      ) : (
        <Pagination
          content={programsConfig}
          dataPerPage={6}
          apiData={programData}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          link={true}
        />
      )}
    </>
  );
}

export default ProgramPagination;
