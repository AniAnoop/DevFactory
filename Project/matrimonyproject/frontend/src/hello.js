import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [projectname, setProjectName] = useState("");
  const [epic, setEpic] = useState("");
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const handleProjectClick = (e) => {
    e.preventdefault();
    setProjectName(e.target.value);
  };
  const handleEpicClick = (e) => {
    e.preventdefault();
    setEpic(e.target.value);
  };
  const handleTaskClick = (e) => {
    e.preventdefault();
    setTask(e.target.value);
  };
  const handleDescriptionClick = (e) => {
    e.preventdefault();
    setDescription(e.target.value);
  };
  const handleSaveClick = (e) => {
    e.preventdefault();
  };
  return (
    <div className="App">
      <button variant="primary" onClick={handleShow}>
        Add
      </button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label>Projectname</label>
          <br />
          <input
            classname="add_projectname"
            value={projectname}
            onChange={(e) => {
              handleProjectClick(e);
            }}
          ></input>
          <br />
          <label>Epic</label>
          <br />
          <input
            className="add_epic"
            value={epic}
            onChange={(e) => {
              handleEpicClick(e);
            }}
          ></input>
          <br />
          <label>Task</label>
          <br />
          <input
            className="add_task"
            value={task}
            onChange={(e) => {
              handleTaskClick(e);
            }}
          ></input>
          <br />
          <label>Description</label>
          <br />
          <textarea
            rows={4}
            className="add_description"
            value={description}
            onChange={(e) => {
              handleDescriptionClick(e);
            }}
          ></textarea>
          <br />
          <button
            className="add_cancel_button"
            variant="secondary"
            onClick={handleClose}
          >
            Cancel
          </button>
          <button
            className="add_save_button"
            variant="primary"
            onClick={(e) => {
              handleSaveClick(e);
            }}
          >
            Save
          </button>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </div>
  );
}

export default App;
