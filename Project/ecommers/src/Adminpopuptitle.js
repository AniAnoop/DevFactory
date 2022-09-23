import React from "react";
import "./Adminpopuptitle.css";
import {MdClose} from "react-icons/md";

export default function Adminpopuptitle() {
  return (
    <>
      <div className="adminpopuptitle">
        <label>Filter Products</label>
        <MdClose style={{color:'#C3CAD9',fontSize:'23px'}}/>
      </div>
    </>
  );
}
