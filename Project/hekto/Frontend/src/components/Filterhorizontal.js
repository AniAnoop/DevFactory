import React from "react";
import grid from "./Images/filterhorizontal_grid_view.png";
import list from "./Images/filterhorizontal_list.png";
import "./Filterhorizontal.css";

export default function Filterhorizontal() {
  return (
    <>
      <div className="filterhorizontal">
        <div className="filterhorizontal_col1">
          <div className="filterhorizontal_col1_row">
            <label className="filterhorizontal_col1_row_label1">
              Ecommerce Acceories & Fashion item
            </label>
            <label className="filterhorizontal_col1_row_label2">
              About 9,620 results (0.62 seconds)
            </label>
          </div>
        </div>
        <div className="filterhorizontal_col2">
          <div className="filterhorizontal_col2_row1">
            <label>Per Page:</label>
            <input></input>
          </div>
          <div className="filterhorizontal_col2_row2">
            <label>Sort By:</label>
            <select placeholder="Best Match">
              <option>Best Match</option>
            </select>
          </div>
          <div className="filterhorizontal_col2_row3">
            <label>View:</label>
            <div>
              <img src={grid} />
            </div>
            <div>
              <img src={list} />
            </div>
            <input></input>
          </div>
        </div>
      </div>
    </>
  );
}
