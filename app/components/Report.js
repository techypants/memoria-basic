import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  PointElement,
  LinearScale,
  Tooltip,
  Legend
);

const Report = ({ timestamps, matches }) => {
  const labels = matches.map((match, index) => `Word ${index + 1}`);
  const dataPoints = timestamps.map((timestamp, index) =>
    matches[index] ? timestamp / 1000 : null
  );

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Time to Match (s)",
        data: dataPoints,
        backgroundColor: "transparent",
        borderColor: "#f26c6d",
        pointBorderColor: "transparent",
        pointBorderWidth: 4,
        tension: 0.5,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: { display: false },
      },
      y: {
        min: 0,
        ticks: {
          stepSize: 5,
          callback: (value) => value + "s",
        },
        grid: {
          borderDash: [10],
        },
      },
    },
  };

  return (
    <div className="w-[500px] h-[500px] m-auto">
      <Line data={data} options={options}></Line>
    </div>
  );
};

export default Report;
