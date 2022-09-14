import React, { useState } from "react";
import c1 from "./Images/featuredlist_chair1.png";
import c2 from "./Images/featuredlist_chair2.png";
import c3 from "./Images/featuredlist_chair3.png";
import c4 from "./Images/featuredlist_chair4.png";
import cart from "./Images/featuredlist_cart.png";
import like from "./Images/featuredlist_like.png";
import zoom from "./Images/featuredlist_zoom.png";
import bar from "./Images/featuredlist_color_bars.png";
import bar1 from "./Images/featuredlist_rose_bar.png";
import bar2 from "./Images/featuredlist_light_rose_bar.png";
import hbar from "./Images/featuredlist_3bars.png";
import "./Featuredlist.css";

export default function Featuredlist() {
  return (
    <>
      <div className="featuredlist">
        <div className="featurelist_outer">
          <h1>Featured Products</h1>
          <div className="featuredlist_outer_inner">
            <Singlefeaturedlist image={c1} />
            <Singlefeaturedlist image={c2} />
            <Singlefeaturedlist image={c3} />
            <Singlefeaturedlist image={c4} />
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

function Singlefeaturedlist({ image }) {
  const [stylecart, setStyleCart] = useState(
    "singlefeatredlist_inner_topimg_1"
  );
  const [stylelike, setStyleLike] = useState(
    "singlefeatredlist_inner_topimg_2"
  );
  const [stylezoom, setStyleZoom] = useState(
    "singlefeatredlist_inner_topimg_3"
  );
  const changeStyleCart = () => {
    setStyleCart("singlefeaturelistcircle");
  };
  const changeStyleLike = () => {
    setStyleLike("singlefeaturelistcircle");
  };
  const changeStyleZoom = () => {
    setStyleZoom("singlefeaturelistcircle");
  };

  return (
    <>
      <div className="singlefeatredlist">
        <div className="singlefeatredlist_inner">
          <div className="singlefeatredlist_inner_topimg">
            <div className={stylecart}>
              <div className="singlefeatredlist_inner_topimg_1">
                <img src={cart} onClick={changeStyleCart} />
              </div>
            </div>
            <div className={stylelike}>
              <div className="singlefeatredlist_inner_topimg_2">
                <img src={like} onClick={changeStyleLike} />
              </div>
            </div>
            <div className={stylezoom}>
              <div className="singlefeatredlist_inner_topimg_3">
                <img src={zoom} onClick={changeStyleZoom} />
              </div>
            </div>
          </div>
          <div className="singlefeatredlist_inner_img">
            <img src={image} height={155} />
          </div>
          <div className="singlefeatredlist_inner_button">
            <button>View Details</button>
          </div>
        </div>
        <h4>Cantilever chair</h4>
        <div className="singlefeatredlist_3bar">
          <img src={bar} className="singlefeatredlist_barimg" />
          <img src={hbar} className="singlefeatredlist_h_barimg" />
        </div>
        <label>Code - Y523201</label>
        <label>$42.00</label>
      </div>
    </>
  );
}
