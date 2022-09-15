import React from "react";
import "./Footer.css";
import fb from "./Images/footer_facebook.png";
import cam from "./Images/footer_camscan.png";
import twit from "./Images/footer_twitter.png";

export default function App() {
  return (
    <>
      <div className="footer">
        <div className="footer_row1">
          <div className="fooer_row1_row1">
            <div className="footer_row1_col1">
              <h1>Hekto</h1>
              <div className="footer_row1_col1_input">
                <input placeholder="Enter Email Address"></input>
                <button>Sign Up</button>
              </div>
              <label>Contact Info</label>
              <label>
                17 Princess Road, London, Greater London NW1 8JR, UK
              </label>
            </div>
            <div className="footer_row1_col2">
              <h3>Catagories</h3>
              <label>Laptops & Computers</label>
              <label>Cameras & Photography</label>
              <label>Smart Phones & Tablets</label>
              <label>Video Games & Consoles</label>
              <label>Waterproof Headphones</label>
            </div>
            <div className="footer_row1_col2">
              <h3>Customer Care</h3>
              <label>My Account</label>
              <label>Discount</label>
              <label>Returns</label>
              <label>Orders History</label>
              <label>Order Tracking</label>
            </div>
            <div className="footer_row1_col2">
              <h3>Pages</h3>
              <label>Blog</label>
              <label>Browse the Shop</label>
              <label>Category</label>
              <label>Pre-Built Pages</label>
              <label>Visual Composer Elements</label>
              <label>WooCommerce Pages</label>
            </div>
          </div>
        </div>
        <div className="footer_row2">
          <div className="footer_row2_col1">
            <label> ©Webecy - All Rights Reserved</label>
          </div>
          <div className="footer_row2_col2">
            <div>
              <img src={fb} />
            </div>
            <div>
              <img src={cam} />
            </div>
            <div>
              <img src={twit} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
