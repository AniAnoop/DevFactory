import React, { useState } from "react";
import c1 from "./Images/featuredlist_chair1.png";
import c2 from "./Images/featuredlist_chair2.png";
import c3 from "./Images/featuredlist_chair3.png";
import c4 from "./Images/featuredlist_chair4.png";
import cart from "./Images/featuredlist_cart.png";
import like from "./Images/featuredlist_like.png";
import zoom from "./Images/featuredlist_zoom.png";
import bar from "./Images/featuredlist_color_bars.png";
import hbar from "./Images/featuredlist_3bars.png";
import "./Featuredlist.css";

const cards = {
  chair1: {
    image: c1,
  },
  chair2: {
    image: c2,
  },
  chair3: {
    image: c3,
  },
  chair4: {
    image: c4,
  },
  chair5: {
    image: c2,
  },
  chair6: {
    image: c3,
  },
  chair7: {
    image: c4,
  },
  chair8: {
    image: c1,
  },
  chair9: {
    image: c3,
  },
  chair10: {
    image: c4,
  },
  chair11: {
    image: c1,
  },
  chair12: {
    image: c2,
  },
  chair13: {
    image: c4,
  },
  chair14: {
    image: c1,
  },
  chair15: {
    image: c2,
  },
  chair16: {
    image: c3,
  },
};

export default function Slider() {
  const [pageNumber, setPageNumber] = useState(0);
  let itemPerpage = 4;
  // let currentPage=0;
  let totalPage = Object.keys(cards).length / itemPerpage;

  const switchPage = (index) => {
    setPageNumber(index);
  };

  let cardDisplay = Object.keys(cards)
    .slice(pageNumber * itemPerpage, pageNumber * itemPerpage + itemPerpage)
    .map((item) => {
      return (
        <div key={item}>
          <Singlefeaturedlist img={cards[item]["image"]} />
        </div>
      );
    });
  let page = [];
  for (let i = 0; i < totalPage; i++) {
    page.push(i);
  }
  let pagination = page.map((item) => {
    return (
      <div
        className="featurelist_outer_img_button"
        style={pageNumber===item ? {backgroundColor:'#f61b7a',width:'30px'}:null}
        onClick={() => switchPage(item)}
      >
      </div>
    );
  });

  return (
    <>
      <div className="featuredlist">
        <div className="featurelist_outer">
          <h1>Featured Products</h1>
          <div className="featuredlist_outer_inner">
            {/* <Singlefeaturedlist image={c1} />
              <Singlefeaturedlist image={c2} />
              <Singlefeaturedlist image={c3} />
              <Singlefeaturedlist image={c4} /> */}
            {cardDisplay}
          </div>
          <div className="featurelist_outer_pagination">{pagination}</div>
        </div>
      </div>
    </>
  );
}

function Singlefeaturedlist({ img }) {
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
          <div className="singlefeatredlist_inner_outer">
            <div className="singlefeatredlist_inner_topimg">
              <div className="singlefeatredlist_inner_topimg_top">
                <div className={stylecart}>
                  <div className="singlefeatredlist_inner_topimg_1">
                    <img src={cart} onClick={changeStyleCart} />
                  </div>
                </div>
              </div>
              <div className="singlefeatredlist_inner_topimg_top">
                <div className={stylelike}>
                  <div className="singlefeatredlist_inner_topimg_2">
                    <img src={like} onClick={changeStyleLike} />
                  </div>
                </div>
              </div>
              <div className="singlefeatredlist_inner_topimg_top">
                <div className={stylezoom}>
                  <div className="singlefeatredlist_inner_topimg_3">
                    <img src={zoom} onClick={changeStyleZoom} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="singlefeatredlist_inner_img">
            <img src={img} height={155} />
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
