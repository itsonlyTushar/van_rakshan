import { Link } from "react-router";

function Pagination({
  apiData,
  currentPage,
  setCurrentPage,
  dataPerPage,
  content = [{}],
  link = true,
}) {

  // Complete customized resusable pagination component 
  const sizeOfPage = apiData.length;
  const totalPages = Math.ceil(sizeOfPage / dataPerPage);
  const start = currentPage * dataPerPage;
  const end = start + dataPerPage;

  const handleNext = () => {
    setCurrentPage((prev) => prev + 1);
  };
  const handlePrevious = () => {
    setCurrentPage((prev) => prev - 1);
  };

  // function which handles click when click on specific button where n is user clicked button 
  const handlePageClick = (n) => {
    setCurrentPage(n);
  };

  return (
    <>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 p-10">
        {apiData.slice(start, end).map((elem) => {

          // blog url wrapped around the each card
          let url = `https://${elem["Website URL"]}`;
          return (
            <div key={elem["ID"]}>
              {link ? (
                <Link
                  target={elem["Website URL"] && url}
                  to={
                    elem["Website URL"] ? url : `/program-details/${elem["ID"]}`
                  }
                >
                  <div className="p-10 text-white bg-green-500 rounded-2xl shadow-lg hover:bg-green-600 transition-colors min-h-[200px] h-full flex flex-col justify-between">
                    {content.map((item, index) => (
                      <div key={index}>
                        {item.heading ? (
                          <h1 className="sm:text-xl md:text-2xl lg:text-4xl py-2">
                            {elem[item.headValue]}
                          </h1>
                        ) : (
                          <div>
                            {item.title !== "Link" && (
                              <div className="flex gap-2 items-center">
                                <h3 className="font-semibold">{item.title}</h3>{" "}
                                :<h4>{elem[item.value]}</h4>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </Link>
              ) : (
                <div className="p-10 text-white bg-green-500 rounded-2xl shadow-lg hover:bg-green-600 transition-colors min-h-[200px] flex flex-col justify-between">
                  
                  {/* Customer content in cards will appear here  */}
                  {content.map((item, index) => (
                    <div key={index}>
                      {item.heading ? (
                        <h1 className="text-4xl py-2">
                          {elem[item.headValue]}
                        </h1>
                      ) : (
                        <div>
                          {item.title !== "Link" && (
                            <div className="flex gap-2 items-center">
                              <h3 className="font-semibold">{item.title}</h3> :
                              <h4>{elem[item.value]}</h4>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="flex justify-center items-center text-center">
        <button
          className="px-4 py-2 bg-green-500 text-white rounded-lg "
          hidden={currentPage === 0}
          onClick={handlePrevious}
        >
          Previous
        </button>

        {/* creates array of numbers using totalpages prop  */}
        {[...Array(totalPages).keys()].map((_, i) => (
          <button
            key={i}
            onClick={() => handlePageClick(i)}
            className={` ${
              i === currentPage
                ? "bg-white text-green-700"
                : "bg-green-500 text-white"
            } text-black px-2 py-1 rounded-md m-2 text-md `}
          >
            {i + 1}
          </button>
        ))}


        <button
          className="px-4 py-2 bg-green-500 text-white rounded-lg"
          hidden={currentPage >= totalPages - 1}
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default Pagination;
