import { useEffect, useState } from "react";
import Skeleton from "../Loaders/Skeleton";
import TechnicalError from "../Error/TechnicalError";
import Pagination from "../UI/Pagination";
import { blogConfig } from "./blogConfig";
import { useDispatch, useSelector } from "react-redux";
import { fetchApi } from "../../features/apiSlice";

function BlogPagination() {
  const [currentPage, setCurrentPage] = useState(0);
  const dispatch = useDispatch();
  const fetchData = useSelector((state) => state.apiReducer.data);

  const loadingState = useSelector((state) => state.apiReducer.loading);
  const errorState = useSelector((state) => state.apiReducer.error.error);

  const handleFetchApi = () => {
    dispatch(fetchApi("https://sheet2api.com/v1/NrYPyVwcTIaZ/copy-of-blog"));
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
          dataPerPage={4}
          currentPage={currentPage}
          apiData={fetchData}
          setCurrentPage={setCurrentPage}
          content={blogConfig}
          link={true}
        />
      )}
    </>
  );
}

export default BlogPagination;
