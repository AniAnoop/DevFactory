import React from "react";
import c1 from "./images/chair1.png";
import c2 from "./images/chair2.png";
import c3 from "./images/chair3.png";
import c4 from "./images/chair4.png";
import basket from "./images/Group.png";
import like from "./images/Vectorl.png";
import search from "./images/Vector.png";
export default function Featuredlist() {
  return (
    <>
      <div className="featuredlist">
        <h2>Featured Products</h2>
        <div className="featuredlist_row">
          <div className="featuredlist_row_col1">
            <div className="featuredlist_row_col1_img">
                <img src={c1}/>
            </div>
            <h4>Cantilever chair</h4>
            <label>Code - Y523201</label>
            <label>$42.00</label>
          </div>
          <div className="featuredlist_row_col1"></div>
          <div className="featuredlist_row_col1"></div>
          <div className="featuredlist_row_col1"></div>
        </div>
      </div>
    </>
  );
}
