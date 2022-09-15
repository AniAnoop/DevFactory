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
        <div className="adminlist_heading">
          <label>Image Product</label>
          <label>Producer</label>
          <label>Product</label>
          <label>ID</label>
          <label>Cat</label>
          <label>Link</label>
          <label>Cost</label>
          <label>Extra</label>
          <label>Price</label>
          <label>Priority</label>
          <label>Edit</label>
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
              <img src={image} width={30} height={30}/>
            </div>
          </div>

          <label>{producer}</label>
          <label>{product}</label>
          <label>{id}</label>
          <label>Tablets</label>
          <label>{link}</label>
          <span>$432</span>
          <span>20%</span>
          <span>$540</span>
          <span>1</span>
          <FaPen />
        </div>
      </div>
    </>
  );
}
