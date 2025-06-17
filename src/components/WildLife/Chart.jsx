import {
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  Tooltip,
  Legend,
} from "recharts";
import TechnicalError from "../Error/TechnicalError";
import Spinner from "../Loaders/Spinner";

function Chart({ fetchedApiData, fetchedLoading, fetchedError }) {
  // filtering only unique API data using Set
  const uniqueStatuses = [
    ...new Set(fetchedApiData.map((item) => item["Conservation Status"])),
  ];

  // separating and storing data as an object using map
  const speciesStatus = uniqueStatuses.map((status) => ({
    name: status,
    count: fetchedApiData.filter(
      (item) => item["Conservation Status"] === status
    ).length,
  }));

  // filtereing unique diet
  const uniqueDiet = [...new Set(fetchedApiData.map((item) => item["Diet"]))];

  const dietData = uniqueDiet.map((diet) => ({
    name: diet,
    count: fetchedApiData.filter((item) => item["Diet"] === diet).length,
  }));

  // to resue the charts
  const chartConfig = [
    {
      id: 1,
      data: speciesStatus,
      title: "Number of Species",
    },
    {
      id: 2,
      data: dietData,
      title: "Diet Count",
    },
  ];

  if (fetchedError) {
    return <TechnicalError />;
  }

  return (
    <>
      {fetchedLoading ? (
        <div className="flex justify-center items-center">
          <Spinner />
        </div>
      ) : (
        <div className="p-10 mx-auto m-32">
          <h1 className="text-center text-white text-3xl">
            Wild Animals Visualization through Charts
          </h1>
          {chartConfig.map((chartsData) => (
            <div
              key={chartsData.id}
              className="p-5 my-4 flex justify-center items-center mx-auto bg-[#FFF7DA] rounded-2xl max-w-4xl"
            >
              <ResponsiveContainer
                width="75%"
                height={400}
                style={{ marginLeft: "50px" }}
              >
                <BarChart data={chartsData.data}>
                  <XAxis
                    tick={{ fill: "green", fontSize: 12, fontWeight: "bold" }}
                    dataKey="name"
                  />

                  <Tooltip
                    contentStyle={{
                      borderColor: "white",
                      borderRadius: "10px",
                      color: "#22c55e",
                      backgroundColor: "#FFF7DA",
                      fontWeight: "bold",
                    }}
                  />
                  <Legend />
                  <Bar
                    barSize={70}
                    dataKey="count"
                    fill="#22c55e"
                    name={chartsData.title}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Chart;
