import { useEffect, useState } from "react";
import TechnicalError from "../Error/TechnicalError";
import Skeleton from "../Loaders/Skeleton";
import { programsConfig } from "./paginationConfig";
import Pagination from "../UI/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { fetchApi } from "../../features/apiSlice";

function ProgramPagination() {
  const [currentPage, setCurrentPage] = useState(0);

  const dispatch = useDispatch();
  const fetchData = useSelector((state) => state.apiReducer.data);

  const loadingState = useSelector((state) => state.apiReducer.loading);
  const errorState = useSelector((state) => state.apiReducer.error.error);

  const handleFetchApi = () => {
    dispatch(fetchApi("https://sheet2api.com/v1/NrYPyVwcTIaZ/program"));
  };

  useEffect(() => {
    handleFetchApi();
  }, []);

  if (errorState) {
    return <TechnicalError />;
  }

  return (
    <>
      {loadingState ? (
        <Skeleton />
      ) : (
        <Pagination
          content={programsConfig}
          dataPerPage={6}
          apiData={fetchData}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          link={true}
        />
      )}
    </>
  );
}

export default ProgramPagination;
