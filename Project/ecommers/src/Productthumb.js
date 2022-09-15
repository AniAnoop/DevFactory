import { React, useState } from "react";
import "./Productthumb.css";
import bag1 from "./Images/productthumb_bag1.png";
import bag2 from "./Images/productthumb_bag2.png";
import bag3 from "./Images/productthumb_bag3.png";
import bag4 from "./Images/productthumb_bag4.png";
import like from "./Images/productthumb_like.png";
import star from "./Images/productthumb_star-filled.png";
import facebook from "./Images/productthumb_facebook.png";
import instagram from "./Images/productthumb_camscan.png";
import twitter from "./Images/productthumb_twitter.png";

export default function Productthumb() {
  const [stylelikes, setStyleLikes] = useState(
    "productthumb_row2_outer_col3_row3_like"
  );
  const changeStyleLike = () => {
    setStyleLikes("productthumbcircle");
  };
  return (
    <>
      <div className="productthumb">
        <div className="productthumb_row1">
          {/* <label className="productthumb_row1_label1">Product Details</label> */}
          <h1>Product Details</h1>
          <label className="productthumb_row1_label2">
            Home . Page
            <span>. Product Details</span>
          </label>
        </div>
        <div className="productthumb_row2">
          <div className="productthumb_row2_outer">
            <div className="productthumb_row2_outer_col1">
              <div>
                <img src={bag1} width={104.5} />
              </div>
              <div>
                <img src={bag2} width={104.5} />
              </div>
              <div>
                <img src={bag3} width={104.5} />
              </div>
            </div>
            <div className="productthumb_row2_outer_col2">
              <img src={bag4} width={260} />
            </div>
            <div className="productthumb_row2_outer_col3">
              <h2>Playwood arm chair</h2>
              <div className="productthumb_row2_outer_col3_row1">
                <div>
                  <img src={star} />
                </div>
                <div>
                  <img src={star} />
                </div>
                <div>
                  <img src={star} />
                </div>
                <div>
                  <img src={star} />
                </div>
                <div>
                  <img src={star} />
                </div>
                <span>(22)</span>
              </div>
              <div className="productthumb_row2_outer_col3_row2">
                <span>$32.00</span>
                <s>$32.00</s>
              </div>
              <label className="productthumb_row2_outer_col3_label1">
                Color
              </label>
              <label className="productthumb_row2_outer_col3_label2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                tellus porttitor purus, et volutpat sit.
              </label>
              <div className="productthumb_row2_outer_col3_row3">
                <label>Add To Cart</label>
                <div className={stylelikes}>
                  <div className="productthumb_row2_outer_col3_row3_like">
                    <img src={like} onClick={changeStyleLike} />
                  </div>
                </div>
              </div>
              <label className="productthumb_row2_outer_col3_label3">
                Categories:
              </label>
              <label className="productthumb_row2_outer_col3_label4">
                Tags
              </label>
              <div className="productthumb_row2_outer_col3_row4">
                <label>Share</label>
                <div>
                  <img src={facebook} />
                </div>
                <div>
                  <img src={instagram} />
                </div>
                <div>
                  <img src={twitter} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
