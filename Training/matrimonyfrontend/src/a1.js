import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";

import Button from "react-bootstrap/Button";
import React, { useState } from "react";
export default function Example() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [loginname, setLoginNameFun] = useState("");
  const [loginpassword, setPasswordFun] = useState("");

  const handleNameClick = (e) => {
    e.preventDefault();
    setLoginNameFun(e.target.value);
  };
  const handlePasswordClick = (e) => {
    e.preventDefault();
    setPasswordFun(e.target.value);
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Login
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Matrimony Id/Mobile No./E-mail
          <br />
          <input
            className="login_input"
            value={loginname}
            onChange={(e) => {
              handleNameClick(e);
            }}
          ></input>
          <br />
          Password
          <br />
          <input
            className="login_input"
            value={loginpassword}
            onChange={(e) => {
              handlePasswordClick(e);
            }}
          ></input>
          <br />
          <input type="checkbox"></input>
          Keep me logged in
          <br />
          <Button variant="primary" onClick={handleClose}>
            Login
          </Button>
          <br />
          Forgot Password? | Login Via OTP
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
}
