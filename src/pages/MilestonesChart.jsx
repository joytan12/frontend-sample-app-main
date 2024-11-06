import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar, Scatter } from 'react-chartjs-2';

// Registrar componentes
ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend);

const MilestonesChart = () => {
  // Datos de los hitos motores con su promedio, mínimo y máximo
  const data = {
    labels: [
      'caminar solo',
      'de pie solo',
      'caminar con asistencia',
      'arrastrandose con las manos y las rodillas',
      'estar de pie con asistencia',
      'sentado sin apoyo'
    ],
    datasets: [
      {
        label: 'rango', // Representa el rango sombreado entre mínimo y máximo
        data: [15, 11, 10, 8, 7, 6],
        backgroundColor: 'rgba(136, 132, 216, 0.2)',
        barThickness: 20,
        borderRadius: 5,
      },
      {
        label: 'min años',
        type: 'scatter',
        data: [8, 8, 6, 5, 4, 4], // Valores mínimos
        pointBackgroundColor: 'rgba(136, 132, 216, 0.6)',
        pointRadius: 5,
        showLine: false,
      },
      {
        label: 'Max años',
        type: 'scatter',
        data: [18, 18, 16, 13, 12, 9], // Valores máximos
        pointBackgroundColor: 'rgba(136, 132, 216, 0.6)',
        pointRadius: 5,
        showLine: false,
      },
      {
        label: 'edad a la que lo logro', // Punto central para el promedio
        type: 'scatter',
        data: [15, 11, 10, 8, 7, 6], // Edad promedio
        pointBackgroundColor: '#0000ff',
        pointRadius: 6,
        showLine: false,
      }
    ]
  };

  const options = {
    indexAxis: 'y',
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Ventanas de logros para seis hitos de la motricidad gruesa',
      },
    },
    scales: {
      x: {
        min: 3,
        max: 21,
        title: {
          display: true,
          text: 'edad en meses'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Psicomotor'
        }
      }
    }
  };

  return <Bar data={data} options={options} />;
};

export default MilestonesChart;
