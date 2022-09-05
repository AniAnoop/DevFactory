import React from "react";
import c1 from "./images/chair1.png";
import c2 from "./images/chair2.png";
import c3 from "./images/chair3.png";
import c4 from "./images/chair4.png";
import basket from "./images/Group.png";
import like from "./images/Vectorl.png";
import search from "./images/Vector.png";
import bar from "./images/Group 141.png";
export default function Featuredlist() {
  return (
    <>
      <div className="featuredlist">
        <div className="featurelist_outer">
          <h1>Featured Products</h1>
          <div className="featuredlist_outer_inner">
            <div className="featuredlist_outer_inner_col1">
              <div className="featuredlist_outer_inner_col1_img">
                <img src={c1} />
              </div>
              <h4>Cantilever chair</h4>
              <div>
                <img src={bar}/>
              </div>
              <label>Code - Y523201</label>
              <label>$42.00</label>
            </div>
            <div className="featuredlist_outer_inner_col1">
            <div className="featuredlist_outer_inner_col1_img">
                <img src={c2} />
              </div>
              <h4>Cantilever chair</h4>
              <div>
                <img src={bar}/>
              </div>
              <label>Code - Y523201</label>
              <label>$42.00</label>
            </div>
            <div className="featuredlist_outer_inner_col1">
            <div className="featuredlist_outer_inner_col1_img">
                <img src={c3} />
              </div>
              <h4>Cantilever chair</h4>
              <div>
                <img src={bar}/>
              </div>
              <label>Code - Y523201</label>
              <label>$42.00</label>
            </div>
            <div className="featuredlist_outer_inner_col1">
            <div className="featuredlist_outer_inner_col1_img">
                <img src={c4} />
              </div>
              <h4>Cantilever chair</h4>
              <div>
                <img src={bar}/>
              </div>
              <label>Code - Y523201</label>
              <label>$42.00</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
