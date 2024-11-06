import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const GrowthChart = ({ data }) => {
  const chartData = {
    labels: data.labels, // Labels for the X-axis (age in weeks or months)
    datasets: [
      {
        label: 'Percentil +3',
        data: data.percentile3,
        borderColor: 'black',
        borderWidth: 2,
        fill: false,
      },
      {
        label: 'Percentil +2',
        data: data.percentile2,
        borderColor: 'red',
        borderWidth: 2,
        fill: false,
      },
      {
        label: 'Percentil 0',
        data: data.percentile0,
        borderColor: 'green',
        borderWidth: 2,
        fill: false,
      },
      {
        label: 'Percentil -2',
        data: data.percentileMinus2,
        borderColor: 'red',
        borderWidth: 2,
        fill: false,
      },
      {
        label: 'Percentil -3',
        data: data.percentileMinus3,
        borderColor: 'black',
        borderWidth: 2,
        fill: false,
      },
      {
        label: 'hijo',
        data: data.hijo,
        borderColor: 'blue',
        borderWidth: 2,
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
      },
      title: {
        display: true,
        text: 'Growth Chart (Length vs Age)',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Age (completed weeks or months)',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Altura (cm)',
        },
        min: data.min,
        max: data.max,
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default GrowthChart;
