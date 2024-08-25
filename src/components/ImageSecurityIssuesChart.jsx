// src/components/ImageSecurityIssuesChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ImageSecurityIssuesChart = ({ data }) => {
  const chartData = {
    labels: ['Critical', 'High'],
    datasets: [
      {
        data: [data.critical, data.high],
        backgroundColor: ['#ef4444', '#f59e0b'],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: `Image Security Issues (Total: ${data.total})`,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1,
        },
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default ImageSecurityIssuesChart;