import React, { useEffect, useState } from "react";
import axios from "axios";
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

export default function Tilldatechart() {
  // const [array, setArray] = [];
  const [planedArray, setPlanedArr] = useState([]);
  const [completeArray, setCompleteArr] = useState([]);
  const [dateArray, setDateArray] =useState([]);

  useEffect(() => {
    // setPlanedArr([]);
    const url =
      "https://rx358zhsee.execute-api.us-west-1.amazonaws.com/tdchart1";
    const data = {};
    const header = {};
    axios
      .post(url, data, header)
      .then((res) => {
        console.log("res==>", res.data);
        var tempPlan = [];
        //  planedArray=[...planedArray,tempPlan];
        var sum = 0;
        for (var i = 0; i <= res.data.length; i = i + 2) {
          var a = res.data[i].points;
          var b = res.data[i + 1].points;
          sum = parseInt(sum) + parseInt(a) + parseInt(b);
          tempPlan = [...tempPlan, sum];
          console.log("sum==>", sum);
          // setPlanedArr(...tempPlan);
        }
        setPlanedArr(...setDateArray,tempPlan);
        
      })
      .catch((err) => {});

      setCompleteArr([]);

    const curl =
      "https://rmc5zpx6je.execute-api.us-west-1.amazonaws.com/tdchart1_complete";
    const req = {};
    const headers = {};

    axios
      .post(curl, req, headers)
      .then((res) => {
        console.log("complete==>", res.data);
        // setDateArray(res.data[0].cdate);
        // console.log("date==>",res.data[0].cdate);
        var csum = 0;
        var tempComp = [];
        for (var j = 0; j <= res.data.length; j++) {
          csum = parseInt(csum) + parseInt(res.data[j].cpoint);
          console.log("csum==>", csum);
          tempComp = [...tempComp, csum];
          // setCompleteArr(...tempComp);
        }
       setCompleteArr(tempComp);
      })
      .catch(() => {});

    const durl =
      "https://rmc5zpx6je.execute-api.us-west-1.amazonaws.com/tdchart1_complete";
    const dreq = {};
    const dheader = {};
    axios
      .post(durl, dreq, dheader)
      .then((res) => {
        console.log("date==>",res.data);
        setDateArray(res.data);
      })
      .catch(() => {});
  }, []);

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
        position: "right",
        // show:true
      },

      title: {
        display: true,
        text: "Commitment Reliability - TillDate",
        font: {
          weight: "bold",
          size: "20rem",
          paddingbottom: "10px",
        },
      },
      datalabels: {
        display: true,
        color: "black",
        align: "top",
        anchor: "end",
        font: {
          size: "14",
        },
      },
    },
    scales: {
      y: {
        // ticks:{
        // display:true,
        beginAtZero: true,
        min: 0,
        max: 40,
        // stepSize:5,
        // },
        title: {
          display: true,
          text: "Story Point Estimates",
        },
        scaleLabel: {
          display: true,
          labelString: "Y text",
        },
      },
      x: {
        grid: {
          color: "white",
        },
      },
    },
  };

  const data = {
    labels: [
      "5-23-2022", "5-24-2022", "5-25-2022", "5-26-2022", "5-27-2022"
      // dateArray.map((itemd,index)=>itemd.cdate) 
    ],
    datasets: [
      {
        label: "Planned Cumulative",
        data: [
          6, 13, 18.5, 25.5, 35,
          // PlanedArray.map((itemp,index)=>itemp.sum)
        ],
        backgroundColor: "blue",
        barPercentage: 1,
        categoryPercentage: 0.4,
      },
      {
        label: "Completed Cumulative",
        data: [
          0.5, 4.5, 4.5, 5.5, 5.5,
          // completeArray.map((itemc,index)=>itemc.csum)
        ],
        backgroundColor: "red",
        barPercentage: 1,
        categoryPercentage: 0.4,
      },
    ],
  };

  return (
    <>
      <div style={{ maxWidth: "850px" }}>
        <Bar options={options} data={data} />
      </div>
    </>
  );
}
