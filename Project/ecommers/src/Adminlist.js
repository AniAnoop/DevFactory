import React from "react";
import "./Adminlist.css";
import { FaPen } from "react-icons/fa";
import airpod from "./Images/adminlist_a_airpods.webp";
import swatch from "./Images/adminlist_s_watch.webp";
import monitor from "./Images/adminlist_a_monitor.jpg";
import awatch from "./Images/adminlist_a_watch.webp";
import phone from "./Images/adminlist_google.webp";
import speaker from "./Images/adminlist_speaker.webp";

export default function Adminlist() {
  return (
    <>
      <div className="adminlist">
        <div className="adminlist_header">
          <div className="adminlist_heading">
            <label className="adminlist_heading_img">Image Product</label>
            <label className="adminlist_heading_producer">Producer</label>
            <label className="adminlist_heading_product">Product</label>
            <label className="adminlist_heading_id">ID</label>
            <label className="adminlist_heading_cat">Cat</label>
            <label className="adminlist_heading_link">Link</label>
            <label className="adminlist_heading_cost">Cost</label>
            <label className="adminlist_heading_extra">Extra</label>
            <label className="adminlist_heading_price">Price</label>
            <label className="adminlist_heading_priority">Priority</label>
            <label className="adminlist_heading_edit">Edit</label>
          </div>
        </div>
        <div className="adminlist_middle">
          <Singleadminlist
            image={airpod}
            producer={"Apple"}
            product={"Air pods 2"}
            id={"p10001"}
            link={"apple-air-pods"}
          />
          <Singleadminlist
            image={swatch}
            producer={"Samsung"}
            product={"Smart Watch"}
            id={"p10001"}
            link={"sumsung-smart-watch"}
          />
          <Singleadminlist
            image={monitor}
            producer={"Apple"}
            product={"Monitor Pro"}
            id={"p10032"}
            link={"apple-monitor-pods"}
          />
          <Singleadminlist
            image={awatch}
            producer={"Apple"}
            product={"Watch Serios 3"}
            id={"p10866"}
            link={"apple-watch-serios-3"}
          />
          <Singleadminlist
            image={phone}
            producer={"Google"}
            product={"Pixel 3 XL"}
            id={"p10643"}
            link={"google-pixel-3xl"}
          />
          <Singleadminlist
            image={speaker}
            producer={"Amazon"}
            product={"Speaker"}
            id={"p10043"}
            link={"amazon-speaker"}
          />
        </div>
        <div className="adminlist_end">
          <button>Load More Products</button>
        </div>
      </div>
    </>
  );
}

function Singleadminlist({ image, producer, product, id, link }) {
  return (
    <>
      <div className="singleadminlist">
        <div className="singleadminlist_row">
          <div className="singleadminlist_row_img">
            <input type="circledcheckbox"></input>
            <div>
              <img src={image} width={30} height={30} />
            </div>
          </div>
          <label className="singleadminlist_row_producer">{producer}</label>
          <label className="singleadminlist_row_product">{product}</label>
          <label className="singleadminlist_row_id">{id}</label>
          <label className="singleadminlist_row_cat">Tablets</label>
          <label className="singleadminlist_row_link">{link}</label>
          <span className="singleadminlist_row_cost">$432</span>
          <span className="singleadminlist_row_extra">20%</span>
          <span className="singleadminlist_row_price">$540</span>
          <span className="singleadminlist_row_priority">1</span>
          <FaPen className="singleadminlist_row_edit"/>
        </div>
      </div>
    </>
  );
}
