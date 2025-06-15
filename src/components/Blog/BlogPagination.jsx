import React, { useEffect, useState } from "react";
import Skeleton from "../Loaders/Skeleton";
import { apiCall } from "../../constants/apiCalls";
import TechnicalError from "../Error/TechnicalError";
import Pagination from "../UI/Pagination";
import { blogConfig } from "./blogConfig";

function BlogPagination() {
  // blog data to track the data from an api
  const [blogData, setBlogData] = useState([]);
  const [error, setError] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const getData = async () => {
      try {
        const callData = await apiCall(
          "https://sheet2api.com/v1/NrYPyVwcTIaZ/copy-of-blog"
        );
        if (callData === true) {
          setError(true);
          setIsLoading(false);
        } else {
          setBlogData(callData);
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
          dataPerPage={4}
          currentPage={currentPage}
          apiData={blogData}
          setCurrentPage={setCurrentPage}
          content={blogConfig}
          link={true}
        />
      )}
    </>
  );
}

export default BlogPagination;
