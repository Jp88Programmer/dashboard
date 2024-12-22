export const fetchChartData = async ({
  url,
  yearNo,
  // title,
}: {
  url: string;
  yearNo: number;
  title?: string;
}) => {
  const response = await fetch(url);
  const data = await response.json();
  const title = data[1][0].indicator.value;
  const chartData = {
    labels: data[1]
      .slice(0, yearNo == 100 ? data[1].length : yearNo)
      .map((item: any) => item.date)
      .reverse(),
    datasets: [
      {
        label: title,
        data: data[1]
          .slice(0, yearNo == 100 ? data[1].length : yearNo)
          .map((item: any) => item.value)
          .reverse(),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        fill: true,
        pointRadius: 15,
        tension: 0.5,
        spanGaps: true,
        pointStyle: ["rect", "circle", "rectRounded", "triangle"],
      },
    ],
  };
  return chartData;
};
