import React from "react";
import c1 from "./images/chair1.png";
import c2 from "./images/chair2.png";
import c3 from "./images/chair3.png";
import c4 from "./images/chair4.png";
import cart from "./images/Group.png";
import like from "./images/Vectorl.png";
import search from "./images/Vector.png";
import bar from "./images/Group 141.png";
import bar1 from "./images/Rectangle 105.png";
import hbar from "./images/3bars.png";
export default function Featuredlist() {
  return (
    <>
      <div className="featuredlist">
        <div className="featurelist_outer">
          <h1>Featured Products</h1>
          <div className="featuredlist_outer_inner">
            <div className="featuredlist_outer_inner_col1">
              <div className="featuredlist_outer_inner_col1_divimg">
                <div className="featuredlist_outer_inner_col1_topimg">
                  <div className="featuredlist_outer_inner_col1_topimg_3">
                    <img src={cart} />
                  </div>
                  <div className="featuredlist_outer_inner_col1_topimg_3">
                    <img src={like} />
                  </div>
                  <div className="featuredlist_outer_inner_col1_topimg_3">
                    <img src={search} />
                  </div>
                </div>
                <div className="featuredlist_outer_inner_col1_img">
                  <img src={c1} height={155} />
                </div>
                <div className="featuredlist_outer_inner_col1_button">
                  <button>View Details</button>
                </div>
              </div>
              <h4>Cantilever chair</h4>
              <div className="featuredlist_outer_inner_col1_3bar">
                <img src={bar} className="barimg" />
                <img src={hbar} className="h_barimg" />
              </div>
              <label>Code - Y523201</label>
              <label>$42.00</label>
            </div>
            <div className="featuredlist_outer_inner_col1">
              <div className="featuredlist_outer_inner_col1_divimg">
                <div className="featuredlist_outer_inner_col1_topimg">
                  <div className="featuredlist_outer_inner_col1_topimg_3">
                    <img src={cart} />
                  </div>
                  <div className="featuredlist_outer_inner_col1_topimg_3">
                    <img src={like} />
                  </div>
                  <div className="featuredlist_outer_inner_col1_topimg_3">
                    <img src={search} />
                  </div>
                </div>
                <div className="featuredlist_outer_inner_col1_img">
                  <img src={c2} height={155}/>
                </div>
                <div className="featuredlist_outer_inner_col1_button">
                  <button>View Details</button>
                </div>
              </div>
              <h4>Cantilever chair</h4>
              <div className="featuredlist_outer_inner_col1_3bar">
                <img src={bar} className="barimg" />
                <img src={hbar} className="h_barimg" />
              </div>
              <label>Code - Y523201</label>
              <label>$42.00</label>
            </div>
            <div className="featuredlist_outer_inner_col1">
              <div className="featuredlist_outer_inner_col1_divimg">
                <div className="featuredlist_outer_inner_col1_topimg">
                  <div className="featuredlist_outer_inner_col1_topimg_3">
                    <img src={cart} />
                  </div>
                  <div className="featuredlist_outer_inner_col1_topimg_3">
                    <img src={like} />
                  </div>
                  <div className="featuredlist_outer_inner_col1_topimg_3">
                    <img src={search} />
                  </div>
                </div>
                <div className="featuredlist_outer_inner_col1_img">
                  <img src={c3} height={155}/>
                </div>
                <div className="featuredlist_outer_inner_col1_button">
                  <button>View Details</button>
                </div>
              </div>
              <h4>Cantilever chair</h4>
              <div className="featuredlist_outer_inner_col1_3bar">
                <img src={bar} className="barimg" />
                <img src={hbar} className="h_barimg" />
              </div>
              <label>Code - Y523201</label>
              <label>$42.00</label>
            </div>
            <div className="featuredlist_outer_inner_col1">
              <div className="featuredlist_outer_inner_col1_divimg">
                <div className="featuredlist_outer_inner_col1_topimg">
                  <div className="featuredlist_outer_inner_col1_topimg_3">
                    <img src={cart} />
                  </div>
                  <div className="featuredlist_outer_inner_col1_topimg_3">
                    <img src={like} />
                  </div>
                  <div className="featuredlist_outer_inner_col1_topimg_3">
                    <img src={search} />
                  </div>
                </div>
                <div className="featuredlist_outer_inner_col1_img">
                  <img src={c4} height={155}/>
                </div>
                <div className="featuredlist_outer_inner_col1_button">
                  <button>View Details</button>
                </div>
              </div>
              <h4>Cantilever chair</h4>
              <div className="featuredlist_outer_inner_col1_3bar">
                <img src={bar} className="barimg" />
                <img src={hbar} className="h_barimg" />
              </div>
              <label>Code - Y523201</label>
              <label>$42.00</label>
            </div>
          </div>
          <div className="featurelist_outer_img">
            <div className="featurelist_outer_img_1">
              <img src={bar1}/>
            </div>
            <div className="featurelist_outer_img_2">
              <img src={bar1} />
            </div>
            <div className="featurelist_outer_img_3">
              <img src={bar1} />
            </div>
            <div className="featurelist_outer_img_4">
              <img src={bar1} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
