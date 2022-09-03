import axios from "axios";
import React, { useState, useEffect, useCallback } from "react";
import "./styles/style.css";
export default function BoardEditTask({ bedit, setBEdit }) {
  const [projectname, setProjectName] = useState("");
  const [epic, setEpic] = useState("");
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [array, setArrayFunc] = useState([]);
  const [id, setId] = useState("");
 
  // const [id, setId] = useState("");
  const handleSelectProject = (e) => {
    e.preventDefault();
    setProjectName(e.target.value);
  };
  const handleSelectEpic = (e) => {
    e.preventDefault();
    setEpic(e.target.value);
  };
  const handleTask = (e) => {
    e.preventDefault();
    setTask(e.target.value);
  };
  const handleDescription = (e) => {
    e.preventDefault();
    setDescription(e.target.value);
  };

  
  // const refreshData=useCallback(()=>{
  //   var tempid =localStorage.getItem("taskid");
  //   // setId(tempid);
  //   const url =
  //     "https://w2vuo8ba9b.execute-api.us-west-1.amazonaws.com/edittbljoining";
  //   const data = '{"id":"' + tempid + '"}';
  //   const header = {};
  //   axios
  //     .post(url, data, header)
  //     .then((res) => {
  //       setArrayFunc(res.data);

  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  //   });
  

  useEffect(() => {
    var tempid =localStorage.getItem("taskid");
    // setId(tempid);
    const url =
      "https://w2vuo8ba9b.execute-api.us-west-1.amazonaws.com/edittbljoining";
    const data = '{"id":"' + tempid + '"}';
    const header = {};
    axios
      .post(url, data, header)
      .then((res) => {
        setArrayFunc(res.data);
        setProjectName(res.data[0].txtName);
        setEpic(res.data[0].txtTitle);
        setTask(res.data[0].task);
        setDescription(res.data[0].txtDescription);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  const handleSaveClick = (e) => {
    e.preventDefault();
    var id = localStorage.getItem("taskid");
    console.log("task id get2=", id);
    const url =
      "https://w0f3gv3q97.execute-api.us-west-1.amazonaws.com/projectedittask";
    const req =
      ' { "txtTask":"' +
      task +
      '","txtDescription":"' +
      description +
      '","id":"' +
      id +
      '"}';
    const header = {};
    axios
      .post(url, req, header)
      .then((res) => {
        console.log("res", res.data);
        setBEdit(bedit ? false : true);
        window.location.reload(false);
      })
      .catch((err) => {
        console.log(err);
        // setShow(false);
      });
  };
  
  return (
    <>
      {" "}
      {/* <div  className={modalshow?"modal_project":"hidden"}  id="modal"> */}
      <div className={bedit ? "modal_project" : "hidden"} id="modal">
        {/* <div  className="modal_project"   id="modal"> */}
        <div className="modalContent">
          <label className="addproject_label">Edit Task</label>

          <div>
            <div className="projectname_div">
              <label className="projectname">Projectname</label>
              <select
                className="project_select"
                value={projectname}
                onChange={(e) => handleSelectProject(e)}
              >
                {/* <option>--options--</option> */}
                {/* {a && a.taskfull && a.taskfull.map(taskfull => { */}
                {array.map((item, index) => {
                  return <option key={item.id}>{item.txtName}</option>;
                })}
              </select>
            </div>
            <div className="projectname_div">
              <label className="epic1">Epic</label>
              <select
                className="project_select"
                value={epic}
                onChange={(e) => handleSelectEpic(e)}
              >
                {/* <option>--options--</option> */}
                {array.map((itm, indx) => {
                  return <option value={itm.id}>{itm.txtTitle}</option>;
                })}
              </select>
            </div>
            <div className="projectname_div">
              <label>Task</label>
              {/* {array.map((itm,indx)=>{
                return */}
              <input type="text" value={task} onChange={(e) => handleTask(e)}>
                {/* {itm.task} */}
              </input>
                
              {/* })}  */}
            </div>
            <div className="projectname_div">
              <label>Description</label>
              {/* {array.map((itm,indx)=>{
                return( */}
              <textarea
                rows={4}
                
                onChange={(e) => handleDescription(e)}
                  //  key={itm.id}
                   value={description}
              >
                 {/* {itm.txtDescription}  */}
              </textarea>
               {/* )
              })}  */}
            </div>
            <div className="button_div">
              <button
                onClick={(e) => {
                  setBEdit(bedit ? false : true);
                }}
                className="cancelbutton"
              >
                Cancel
              </button>
              <button onClick={(e) => handleSaveClick(e)}>Save</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
