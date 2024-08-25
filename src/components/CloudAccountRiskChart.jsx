import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const CloudAccountRiskChart = ({ failed, warning, notAvailable, passed }) => {
  const data = {
    labels: ["Failed", "Warning", "Not Available", "Passed"],
    datasets: [
      {
        data: [failed, warning, notAvailable, passed],
        backgroundColor: ["#ef4444", "#f59e0b", "#6b7280", "#10b981"],
        borderColor: ["#dc2626", "#d97706", "#4b5563", "#059669"],
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
      <h3 className="text-lg font-semibold mb-2">
        Cloud Account Risk Assessment
      </h3>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default CloudAccountRiskChart;
