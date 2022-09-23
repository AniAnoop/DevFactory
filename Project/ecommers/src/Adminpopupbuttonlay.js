import React from "react";
import "./Adminpopupbuttonlay.css";
import {MdDelete} from "react-icons/md";

export default function AdminpopupButtonlay() {
  return (
    <>
      <div className="adminpopupbuttonlay">
        <div className="adminpopupbuttonlay_row1">
            <MdDelete style={{color:'C3CAD9',fontSize:'25px'}}/>
            <label>Clear Filters</label>
        </div>
        <div className="adminpopupbuttonlay_row2">
            <button>Apply Filter</button>
        </div>
      </div>
    </>
  );
}
