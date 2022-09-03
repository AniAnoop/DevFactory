import React, { useEffect, useState } from "react";
import "./styles/style.css";
import axios from "axios";
export default function Sprintedit({ sprintedits, setSprintEdit }) {
  const [sprint, setSprint] = useState("");
  const [status, setStatus] = useState("");
  const [tasks, setTask] = useState("");
  const [assignee, setAssignee] = useState("");
  const [array, setArrayFunc] = useState([]);

  const handleSelectTask = (e) => {
    e.preventDefault();

    setTask(e.target.value);
  };
  const handleSelectStatus = (e) => {
    e.preventDefault();
    setStatus(e.target.value);
  };
  const handleSprint = (e) => {
    e.preventDefault();
    setSprint(e.target.value);
  };
  const handleSelectAssignee = (e) => {
    e.preventDefault();
    setAssignee(e.target.value);
  };
  useEffect(() => {
    const url =
      "https://0bzzocj5j1.execute-api.us-west-1.amazonaws.com/sprinttbljoin";

    const data = {};
    const header = {};
    axios
      .post(url, data, header)
      .then((res) => {
        setArrayFunc(res.data);
        console.log("res==>", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const handleSaveClick = (e) => {
    e.preventDefault();
    const url =
      "https://gwukuor2gb.execute-api.us-west-1.amazonaws.com/sprintedittask";
    const data1 =
      ' { "txttask":"' +
      tasks +
      '", "txtstatus":"' +
      status +
      '","txtsprint":"' +
      sprint +
      '","txtassignee":"' +
      assignee +
      '"}';
    const header = {};
    //console.log("req",data);
    axios
      .post(url, data1, header)
      .then((res) => {
        console.log("res", res.data);
        //  setArrayFunc(res.data);
        setSprintEdit(sprintedits ? false : true);
      })
      .catch((err) => {
        console.log(err);
      });
    // const url =
    //   "https://w0f3gv3q97.execute-api.us-west-1.amazonaws.com/projectedittask";
    // const req =
    //   ' { "txtEpicId":"' +
    //   epic +
    //   '","txtTask":"' +
    //   task +
    //   '","txtDescription":"' +
    //   description +
    //   '"}';
    // const header = {};
    // axios
    //   .post(url, req, header)
    //   .then((res) => {
    //     console.log("res", res.req);

    //     //setArrayFunc(res.req);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  return (
    <>
      {" "}
      {/* <div  className={modalshow?"modal_project":"hidden"}  id="modal"> */}
      <div className={sprintedits ? "modal_project" : "hidden"} id="modal">
        {/* <div  className="modal_project"   id="modal"> */}
        <div className="modalContent">
          <label className="addproject_label">Edit Task</label>
          <div className="projectname_div">
            <label className="taskname">Task</label>
            <select
              className="project_select"
              value={tasks}
              onChange={(e) => handleSelectTask(e)}
            >
              <option>-------Select-------</option>
              {array.map((itm, indx) => {
                return <option>{itm.txtTitle}</option>;
              })}
            </select>
          </div>
          <div className="projectname_div">
            <label className="status">Status</label>
            <select
              className="project_select"
              value={status}
              onChange={(e) => handleSelectStatus(e)}
            >
              <option>-------Select-------</option>

              {array.map((itm, indx) => {
                return <option>{itm.txtStatus}</option>;
              })}
            </select>
          </div>
          <div className="projectname_div">
            <label>Sprint name</label>
            <select
              className="project_select"
              value={sprint}
              onChange={(e) => handleSprint(e)}
            >
              <option>-------Select-------</option>

              {array.map((itm, indx) => {
                return <option value={itm.id}>{itm.txtSprintName}</option>;
              })}
            </select>
          </div>
          <div className="projectname_div">
            <label className="assignee">Assigned to</label>
            <select
              className="project_select"
              value={assignee}
              onChange={(e) => handleSelectAssignee(e)}
            >
              <option>-------Select-------</option>

              {array.map((itm, indx) => {
                return <option value={itm.id}>{itm.txtUserName}</option>;
              })}
            </select>
          </div>
          <div className="button_div">
            <button
              onClick={(e) => {
                setSprintEdit(sprintedits ? false : true);
              }}
              className="cancelbutton"
            >
              Cancel
            </button>
            <button onClick={(e) => handleSaveClick(e)}>Save</button>
          </div>
        </div>
      </div>
    </>
  );
}
