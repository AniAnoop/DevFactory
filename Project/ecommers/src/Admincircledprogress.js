import React from "react";
import {IoMdMore} from "react-icons/io";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import datalabels from "chartjs-plugin-datalabels";
import "./Admincircledprogress.css";



export default function Admincircledprogress() {
  return (
    <>
      <div className="admincircledprogress">
        <div className="admincircledprogress_row1">
          <label>Completed Purchases</label>
          <IoMdMore style={{ color: '#7D8FB3', fontSize:'20px'}}/>
        </div>
        <div className="admincircledprogress_row2">
          <Admincircle/>
        </div>
      </div>
    </>
  );
}

function Admincircle() {
  ChartJS.register(ArcElement, Tooltip, Legend, datalabels);
  const options = {
    responsive: true,
    // maintainAspectRatio: true,
    plugins: {
      legend: {
        position: "top",
        display: false,
      },
      // labels:{
      //   render: 'percentage',
      //   fontColor: ['#8833FF','F4F1FC'],
      //   precision: 2

      // }
    },
  };

  const data = {
    labels: ["Red", "Blue"],
    datasets: [
      {
        label: "# of Votes",
        data: [24, 76],
        backgroundColor: ["#F4F1FC", "#F4F1FC"],
        borderColor: ["#EADFFC", "#8833FF"],
        borderWidth: 2,
      },
    ],
  };

  return (
    <>
      <div style={{ maxWidth: "200px" }}>
        <Pie options={options} data={data} />
      </div>
    </>
  );
}
