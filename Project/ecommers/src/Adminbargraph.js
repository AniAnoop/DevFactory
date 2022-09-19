import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import datalabels from "chartjs-plugin-datalabels";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  datalabels
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
      show:true
    },
    title: {
      display: true,
      text: "Capacity Utilization",
      font: {
        weight: "bold",
        size: "20rem",
      },
    },
    datalabels: {
      display: true,
      color: "black",
      align: "bottom",
      anchor: "end",
      font: { size: "14" },
    },
  },
  scales: {
    
    y: {
      position: "left",
    
      ticks: {
        // The y-axis value will start from zero
        beginAtZero: true,
        max: 50,
        stepSize: 10,
      },
      grid:{
        borderColor:'white',
  
      },
      scaleLabel: {
        display: true,
        labelString: "Y text",
      },
    },
    
    x:{
        grid:{
          color:'white',
          borderColor:'white',
        },
       }
  },
};

const data = {
  
  labels: ["2027", "2028", "2029"],

  datasets: [
    {
      label: "Capacity",
      data: [8,7,10],
      backgroundColor: "#980505",
      barPercentage: .2,
      categoryPercentage: 0.2,
    },
  ],
};

export default function Adminbargraph() {
  return (
    <div style={{ maxWidth: "550px"}}>
      <Bar options={options} data={data} />
    </div>
  );
}
