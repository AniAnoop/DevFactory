import { FaDownload, FaPlus, FaPrint, FaSearch } from "react-icons/fa";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';
  import datalabels from "chartjs-plugin-datalabels";
function CustomerReliablilityDaily(){
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
            position:'right'
          },
          title: {
            display: true,
            text: 'Commitment Reliability-Daily',
            font: {
                weight: 'bold',
                size:'20rem'
              }
          },
          datalabels:
          {
          display: true,
          color: "black",
          align: "top",
          anchor: "end",
          font: { size: "14" },
        }
        },
        scales: {
            y: {
              min: 1,
              max: 10,
              scaleLabel: {
                display: true,
                   labelString: 'Y text'
                 }
            }
          }
      };
    //   const labels = ['2022-03-12', '2022-04-12', '2022-05-12', '2022-06-12', '2022-07-12'];
     const data = {
        labels:['2022-03-12', '2022-04-12', '2022-05-12', '2022-06-12', '2022-07-12'],
        datasets: [
          {
            label: 'Planned Daily',
            data:[9,7,6,4,3],
            backgroundColor: '#4286F3',
            barPercentage: 1,
         categoryPercentage: .5
          },
          {
            label: 'Completed Daily',
            data:[9,4,8,4,2],
            backgroundColor: '#EA4235',
            barPercentage: 1,
    categoryPercentage: .5
          },
        ],
    };
    return<>
    <div className="outer">
    {/* {<Header />} */}
    <div className="secondrow">
    <div className="firstcolumn">
            {/* <Menu /> */}
    </div>
    <div className="secondcolumn">
    <div className="ccr_daily">
        <label  onClick={()=>{alert("hi")}}>Filters</label><FaPlus className="ccr_plusicon"/>
        <div className="popup">
            <label>Users</label>
          </div>
    {/* <FaSearch className="ccrdaily_icon" /> <input type="text" placeholder="Search"/> */}
    </div>
    <div className="ccrdownprint_icons">
        <div className="icons_ccr">
    <div className="download_ccr"><FaDownload /></div>
    <div className="print_ccr"><FaPrint/></div>
    </div>
   </div>
              <div className="bargraph_ccr">
                <Bar options={options} data={data} />
                </div>
    </div>
     </div>
     </div>
    </>
}
export default CustomerReliablilityDaily;



