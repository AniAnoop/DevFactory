import React, { useState } from "react";
import "./Listview.css";
import ydot from "./Images/listview_yellowdot.png";
import rdot from "./Images/listview_rosedot.png";
import bdot from "./Images/listview_bluedot.png";
import dictum from "./Images/listview_dictum.png";
import sodales from "./Images/listview_sodales.png";
import nibh from "./Images/listview_nibh.png";
import mauris from "./Images/listview_mauris.png";
import morbi from "./Images/listview_morbi.png";
import ultricies from "./Images/listview_ultricies.png";
import scelerisque from "./Images/listview_scelerisque.png";
import ustar from "./Images/listview_star_unfilled.png";
import fstar from "./Images/listview_star_filled.png";
import cart from "./Images/listview_cart.png";
import clike from "./Images/listview_like.png";
import czoom from "./Images/listview_zoom.png";

export default function Listview() {
  return (
    <>
      <div className="listview">
        <Singlelist imge={dictum} title={"Dictum morbi"}/>
         <Singlelist imge={sodales} title={"Sodales sit"}/>
         <Singlelist imge={nibh} title={"Nibh varius"}/>
         <Singlelist imge={mauris} title={"Mauris quis"}/>
         <Singlelist imge={morbi} title={"Morbi sagittis"}/>
         <Singlelist imge={ultricies} title={"Ultricies venenatis"}/>
         <Singlelist imge={scelerisque} title={"Scelerisque dignissim"}/>
      </div>
    </>
  );
}

function Singlelist({imge,title}) {
  return (
    <>
      <div className="singlelist">
        <div className="singlelist_col1">
          <img src={imge} />
        </div>
        <div className="singlelist_col2">
          <div className="singlelist_col2_row1">
            <h4>{title}</h4>
            <div className="singlelist_col2_row1_dots">
              <div>
                <img src={ydot} />
              </div>
              <div>
                <img src={rdot} />
              </div>
              <div>
                <img src={bdot} />
              </div>
            </div>
          </div>
          <div className="singlelist_col2_row2">
            <span className="singlelist_col2_row2_label1">$26.00</span>
            <s className="singlelist_col2_row2_label2">$52.00</s>
            <div className="singlelist_col2_row2_img">
              <img src={fstar} />
              <img src={fstar} />
              <img src={fstar} />
              <img src={fstar} />
              <img src={ustar} />
            </div>
          </div>
          <div className="singlelist_col2_row3">
            <label>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
              est adipiscing in phasellus non in justo.
            </label>
          </div>
          <div className="singlelist_col2_row4">
            <div className="singlelist_col2_row4_circle">
              <div>
              <img src={cart} />
              </div>
            </div>
            <div className="singlelist_col2_row4_circle">
            <div>
              <img src={clike} />
              </div>
            </div>
            <div className="singlelist_col2_row4_circle">
              <div>
              <img src={czoom} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
