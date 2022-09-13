import React, { useState } from "react";
import c1 from "./Images/featured_chair1.png";
import c2 from "./Images/featured_chair2.png";
import c3 from "./Images/featured_chair3.png";
import c4 from "./Images/featured_chair4.png";
import cart from "./Images/cart.png";
import like from "./Images/like.png";
import zoom from "./Images/zoom.png";
import bar from "./Images/color_bars.png";
import bar1 from "./Images/rose_bar.png";
import bar2 from "./Images/light_rose_bar.png";
import hbar from "./Images/3bars.png";
import "./Featuredlist.css";

export default function Featuredlist() {
  const [stylecart, setStyleCart] = useState(
    "featuredlist_outer_inner_col1_topimg_1"
  );
  const [stylecart1, setStyleCart1] = useState(
    "featuredlist_outer_inner_col1_topimg_1"
  );
  const [stylecart2, setStyleCart2] = useState(
    "featuredlist_outer_inner_col1_topimg_1"
  );
  const [stylecart3, setStyleCart3] = useState(
    "featuredlist_outer_inner_col1_topimg_1"
  );

  const [stylelike, setStyleLike] = useState(
    "featuredlist_outer_inner_col1_topimg_2"
  );
  const [stylelike1, setStyleLike1] = useState(
    "featuredlist_outer_inner_col1_topimg_2"
  );
  const [stylelike2, setStyleLike2] = useState(
    "featuredlist_outer_inner_col1_topimg_2"
  );
  const [stylelike3, setStyleLike3] = useState(
    "featuredlist_outer_inner_col1_topimg_2"
  );

  const [stylezoom, setStyleZoom] = useState(
    "featuredlist_outer_inner_col1_topimg_3"
  );
  const [stylezoom1, setStyleZoom1] = useState(
    "featuredlist_outer_inner_col1_topimg_3"
  );
  const [stylezoom2, setStyleZoom2] = useState(
    "featuredlist_outer_inner_col1_topimg_3"
  );
  const [stylezoom3, setStyleZoom3] = useState(
    "featuredlist_outer_inner_col1_topimg_3"
  );

  const changeStyleCart = () => {
    setStyleCart("circle");
  };
  const changeStyleLike = () => {
    setStyleLike("circle");
  };
  const changeStyleZoom = () => {
    setStyleZoom("circle");
  };

  const changeStyleCart1 = () => {
    setStyleCart1("circle");
  };
  const changeStyleLike1 = () => {
    setStyleLike1("circle");
  };
  const changeStyleZoom1 = () => {
    setStyleZoom1("circle");
  };

  const changeStyleCart2 = () => {
    setStyleCart2("circle");
  };
  const changeStyleLike2 = () => {
    setStyleLike2("circle");
  };
  const changeStyleZoom2 = () => {
    setStyleZoom2("circle");
  };

  const changeStyleCart3 = () => {
    setStyleCart3("circle");
  };
  const changeStyleLike3 = () => {
    setStyleLike3("circle");
  };
  const changeStyleZoom3 = () => {
    setStyleZoom3("circle");
  };

  return (
    <>
      <div className="featuredlist">
        <div className="featurelist_outer">
          <h1>Featured Products</h1>
          <div className="featuredlist_outer_inner">
            <div className="featuredlist_outer_inner_col1">
              <div className="featuredlist_outer_inner_col1_divimg">
                <div className="featuredlist_outer_inner_col1_topimg">
                  <div className={stylecart}>
                    <div className="featuredlist_outer_inner_col1_topimg_1">
                      <img src={cart} onClick={changeStyleCart} />
                    </div>
                  </div>
                  <div className={stylelike}>
                    <div className="featuredlist_outer_inner_col1_topimg_2">
                      <img src={like} onClick={changeStyleLike} />
                    </div>
                  </div>
                  <div className={stylezoom}>
                    <div className="featuredlist_outer_inner_col1_topimg_3">
                      <img src={zoom} onClick={changeStyleZoom} />
                    </div>
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
                  <div className={stylecart1}>
                    <div className="featuredlist_outer_inner_col1_topimg_1">
                      <img src={cart} onClick={changeStyleCart1} />
                    </div>
                  </div>
                  <div className={stylelike1}>
                    <div className="featuredlist_outer_inner_col1_topimg_2">
                      <img src={like} onClick={changeStyleLike1} />
                    </div>
                  </div>
                  <div className={stylezoom1}>
                    <div className="featuredlist_outer_inner_col1_topimg_3">
                      <img src={zoom} onClick={changeStyleZoom1} />
                    </div>
                  </div>
                </div>
                <div className="featuredlist_outer_inner_col1_img">
                  <img src={c2} height={155} />
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
                  <div className={stylecart2}>
                    <div className="featuredlist_outer_inner_col1_topimg_1">
                      <img src={cart} onClick={changeStyleCart2} />
                    </div>
                  </div>
                  <div className={stylelike2}>
                    <div className="featuredlist_outer_inner_col1_topimg_2">
                      <img src={like} onClick={changeStyleLike2} />
                    </div>
                  </div>
                  <div className={stylezoom2}>
                    <div className="featuredlist_outer_inner_col1_topimg_3">
                      <img src={zoom} onClick={changeStyleZoom2} />
                    </div>
                  </div>
                </div>
                <div className="featuredlist_outer_inner_col1_img">
                  <img src={c3} height={155} />
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
                  <div className={stylecart3}>
                    <div className="featuredlist_outer_inner_col1_topimg_1">
                      <img src={cart} onClick={changeStyleCart3} />
                    </div>
                  </div>
                  <div className={stylelike3}>
                    <div className="featuredlist_outer_inner_col1_topimg_2">
                      <img src={like} onClick={changeStyleLike3} />
                    </div>
                  </div>
                  <div className={stylezoom3}>
                    <div className="featuredlist_outer_inner_col1_topimg_3">
                      <img src={zoom} onClick={changeStyleZoom3} />
                    </div>
                  </div>
                </div>
                <div className="featuredlist_outer_inner_col1_img">
                  <img src={c4} height={155} />
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
              <img src={bar1} />
            </div>
            <div className="featurelist_outer_img_2">
              <img src={bar2} />
            </div>
            <div className="featurelist_outer_img_3">
              <img src={bar2} />
            </div>
            <div className="featurelist_outer_img_4">
              <img src={bar2} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
