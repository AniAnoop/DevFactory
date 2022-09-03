import React, { useState, useEffect } from "react";
import "./styles/style.css";
import axios from "axios";
// import Loader from "./Loader";
export default function Addsprint({ sprintadd, setSprintAdd }) {
  const [sprint, setSprint] = useState("");
  const [status, setStatus] = useState("");
  const [task, setTask] = useState("");
  const [assignee, setAssignee] = useState("");
  const [array, setArrayFunc] = useState([]);
  // const [show,setShow]=useState(true);
  // const handleSelectStatus = (e) => {
  //   e.preventDefault();
  //   setProjectName(e.target.value);
  // };
  // const handleSelectTask = (e) => {
  //   e.preventDefault();
  //   setEpic(e.target.value);
  // };
  const handleSprint = (e) => {
    e.preventDefault();
    setSprint(e.target.value);
  };
  // const handleSelectAssignee = (e) => {
  //   e.preventDefault();
  //   setDescription(e.target.value);
  // };
  const handleCancelClick=(e)=>{
    e.preventDefault();
    setSprintAdd(sprintadd ? false : true);
  }
  const handleSaveClick = (e) => {
    e.preventDefault();

    const url =
      "https://gwukuor2gb.execute-api.us-west-1.amazonaws.com/sprintedittask";
    const req =
      ' { "task":"' +
      task +
      '", "status":"' +
      status +
      '","sprint":"'+sprint+
      '","assignee":"' +
      assignee +
      '","id":"61"}';
    const header = {};
    //console.log("req",data);
    axios
      .post(url, req, header)
      .then((res) => {
        console.log("res", res.req);
        //setArrayFunc(res.req);
         setSprintAdd(sprintadd ? false : true);
        //  setShow(false);
      })
      .catch((err) => {
        console.log(err);
        // setShow(false);
      });
  };
  useEffect(() => {
    const url =
      "https://0bzzocj5j1.execute-api.us-west-1.amazonaws.com/sprinttbljoin";
    const data = {};
    const header = {};
    axios
      .post(url, data, header)
      .then((res) => {
        console.log("res", res.data);
        setArrayFunc(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {" "}
      {/* <div  className={modalshow?"modal_project":"hidden"}  id="modal"> */}
      <div className={sprintadd ? "modal_project" : "hidden"} id="modal">
        {/* <div  className="modal_project"   id="modal"> */}
        <div className="modalContent">
          <label className="addproject_label">Add Task</label>
          <div className="projectname_div">
            <label className="taskname">Task</label>
            <select
              className="project_select"
              value={task}
              onChange={(e) => {
                setTask(e.target.value);
              }}
            >
              <option>--options--</option>
              {array.map((itm, indx) => {
                return <option value={itm.id}>{itm.txtTitle}</option>;
              })};
            </select>
          </div>
          <div className="projectname_div">
            <label className="status">Status</label>
            <select
              className="project_select"
              value={status}
              onChange={(e) => {
                setStatus(e.target.value);
              }}
            >
              <option>--options--</option>
              {array.map((itm, indx) => {
                return <option value={itm.id}>{itm.txtStatus}</option>;
              })}
            </select>
          </div>
          <div className="projectname_div">
            <label>Sprint name</label>
            <input
              type="text"
              value={sprint}
              onChange={(e) => handleSprint(e)}
            ></input>
          </div>
          <div className="projectname_div">
            <label className="assignee">Assigned to</label>
            <select
              className="project_select"
              value={assignee}
              onChange={(e) => {
                setAssignee(e.target.value);
              }}
            >
              <option>--options--</option>
              {array.map((itm, indx) => {
                return <option value={itm.id}>{itm.txtUserName}</option>;
              })}
            </select>
          </div>
          <div className="button_div">
            <button
              onClick={(e) => handleCancelClick(e)}
              className="cancelbutton"
            >
              Cancel
            </button>
            <button onClick={(e) => handleSaveClick(e)}>Save </button>
          </div>
        </div>
      </div>
    </>
  );
}
