import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Red", "Blue"],
  datasets: [
    {
      label: "# of Votes",
      data: [76, 24],
      backgroundColor: ["rgba(255, 99, 132, 0.2)"],
      borderColor: ["rgba(255, 99, 132, 0.2)","rgba(255, 99, 132, 0.2)"],
      borderWidth: 1,
    },
  ],
};

export default function Admincircledprogress() {
  return (
    <>
      <div style={{ maxWidth: "300px" }}>
        <Pie data={data} />
      </div>
    </>
  );
}
