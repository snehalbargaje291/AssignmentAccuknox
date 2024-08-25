import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const CloudAccountsChart = ({ connected, notConnected }) => {
  const data = {
    labels: ["Connected", "Not Connected"],
    datasets: [
      {
        data: [connected, notConnected],
        backgroundColor: ["#3b82f6", "#e5e7eb"],
        borderColor: ["#2563eb", "#d1d5db"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
    },
  };

  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Cloud Accounts</h3>
      <Pie data={data} options={options} />
    </div>
  );
};

export default CloudAccountsChart;
