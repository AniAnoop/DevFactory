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
      title: {
        display: true,
        text: "Story Point Estimates",
      },
      grid:{
        borderColor:'white',
      },
      scaleLabel: {
        display: true,
        labelString: "Y text",
      },
    },
    // yAxis: {
    //   position: "right",
    //   grid:{
    //     borderColor:'white',
    //   },
    //   ticks: {
    //     beginAtZero:true,
    //     // min:0,
    //     max: 50,
      
    //     stepSize: 10,
    //     callback: function (value) {
    //       return value * 10 ;
    //     },
    //     scaleLabel: {
    //       display: true,
    //       labelString: "Percentage",
    //     },
    //   },
    // },
    x:{
        grid:{
          color:'white',
          borderColor:'black',
        },
        title:{
          display:true,
          text:"Sprint",
          color:'black',
        },
       }
  },
};

const data = {
  
  labels: ["Sprint 1", "Sprint 2", "Sprint 3", "Sprint 4"],

  datasets: [
    {
      label: "Capacity",
      data: [40, 30, 30, 36],
      backgroundColor: "#980505",
      barPercentage: .9,
      categoryPercentage: 0.5,
    },
    {
      label: "Planned",
      data: [43.5, 35, 23, 36],
      backgroundColor: "#5138ED",
      barPercentage: .9,
      categoryPercentage: 0.5,
    },
    // {
    //   label: "CU%",
    //   backgroundColor:"white",
    //   barPercentage:0,
    //   categoryPercentage:0
    // },
  ],
};

export default function Example() {
  return (
    <div style={{ maxWidth: "850px"}}>
      <Bar options={options} data={data} />
    </div>
  );
}
