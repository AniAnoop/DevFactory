import React from "react";
import "./Adminbargraph.css"
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
import {BsThreeDots} from "react-icons/bs";


export default function Adminbargraph() {
  return (
    <>
      <div className="adminbargraph">
        <div className="adminbargraph_row1">
          <label>Made Orders</label>
          <BsThreeDots style={{color:'#C3CAD9'}}/>
        </div>
        <div className="adminbargraph_row2">
          <Barchart/>
        </div>
      </div>
    </>
  );
}

function Barchart() {
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
        show:true,
        display:false
      },
      tooltips:{
        display:false
      },
      datalabels: {
        display: true,
        color: ["#3361FF", "#29CC39", "#FF6633"],
        align: "top",
        anchor: "end",
        font: { 
          size: "12" ,
          weight:550
      },
      },
    },
    scales: {
      y: {
        position: "left",

        ticks: {
          display: false,
          // The y-axis value will start from zero
          beginAtZero: true,
          max: 10,
        },
        grid: {
        color: "white",
          display:false,
          drawOnChartArea:false,
          drawBorder:false
          // borderWidth:0
        },
      },

      x: {
        grid: {
          display:false,
          drawOnChartArea:false,
          drawBorder:false
          // borderWidth:0
        },
        ticks:{
          color:'#7D8FB3'
        }
        
      },
    },
  };

  const data = {
    labels: ["2027", "2028", "2029"],
    // color:"#7D8FB3",

    datasets: [
      {
        label: "Capacity",
        data: [8, 7, 10],
        backgroundColor: ["#3361FF", "#29CC39", "#FF6633"],
        barPercentage: 0.3,
        borderRadius:3
        // categoryPercentage: 0.5,
      },
    ],
  };

  return (
    <div style={{ maxWidth: "350px" }}>
      <Bar options={options} data={data} />
    </div>
  );
}
