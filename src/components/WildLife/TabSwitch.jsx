import { useEffect, useState } from "react";
import Chart from "./Chart";
import { FaChartBar } from "react-icons/fa";
import { FaListUl } from "react-icons/fa";
import WildLifePagination from "./WildLifePagination";
import { useDispatch, useSelector } from "react-redux";
import { fetchApi } from "../../features/apiSlice";

function TabSwitch() {
  const [activeStep, setActiveStep] = useState(1);

  const dispatch = useDispatch();
  const fetchData = useSelector((state) => state.apiReducer.data);

  const loadingState = useSelector((state) => state.apiReducer.loading);
  const errorState = useSelector((state) => state.apiReducer.error.error);

  const handleFetchApi = () => {
    dispatch(fetchApi("https://sheet2api.com/v1/bnwbW8PxQlSW/animal"));
  };

  useEffect(() => {
    handleFetchApi();
  }, []);

  const tabsSwitch = () => {
    switch (activeStep) {
      case 1:
        return (
          <WildLifePagination
            fetchedApiData={fetchData}
            fetchedLoading={loadingState}
            fetchedError={errorState}
          />
        );
      case 2:
        return (
          <Chart
            fetchedApiData={fetchData}
            fetchedError={loadingState}
            fetchedLoading={errorState}
          />
        );
      default:
        <WildLifePagination
          fetchedApiData={fetchData}
          fetchedLoading={loadingState}
          fetchedError={errorState}
        />;
    }
  };

  const changeStep = (step) => {
    setActiveStep(step);
  };

  return (
    <>
      <div className="flex justify-between items-center py-2 px-2">
        <div className="text-xl p-4 flex gap-6 text-green-500">
          <button
            className={`px-6 py-2  rounded-xl ${
              activeStep === 1 && "bg-green-500 text-white"
            }`}
            onClick={() => changeStep(1)}
          >
            <FaListUl />
          </button>
          <button
            className={`px-6 py-2  rounded-xl ${
              activeStep === 2 && "bg-green-500 text-white"
            }`}
            onClick={() => changeStep(2)}
          >
            <FaChartBar />
          </button>
        </div>
      </div>
      {tabsSwitch()}
    </>
  );
}

export default TabSwitch;
