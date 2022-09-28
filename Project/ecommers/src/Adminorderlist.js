import React, { useState } from "react";
import "./Adminorderlist.css";
import { TiTick } from "react-icons/ti";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function Adminorderlist() {
  return (
    <>
      <div className="adminorderlist">
        <Singleadminorderlist
          id={"o1001"}
          price={"$1200"}
          cost={"$234"}
          product={"Apple iPad"}
          cname={"Sylvia Sullivan"}
          sdate={"15 Jan 2026"}
          edate={"15 Jan 2019"}
          cstatus={"Expectation"}
        />
        <Singleadminorderlist
          id={"o1002"}
          price={"$567"}
          cost={"$120"}
          product={"5Products"}
          cname={"Alvin Kim"}
          sdate={"15 Jan 2026"}
          edate={"15 Jan 2019"}
          cstatus={"Assebly"}
        />
        <Singleadminorderlist
          id={"o1003"}
          price={"$778"}
          cost={"$70"}
          product={"3 Products"}
          cname={"Linnie Griffith"}
          sdate={"17 Jan 2026"}
          edate={"15 Jan 2019"}
          cstatus={"Delivery"}
        />
        <Singleadminorderlist
          id={"o1004"}
          price={"$1456"}
          cost={"$250"}
          product={"Sumsung"}
          cname={"Troy Guerrero"}
          sdate={"16 Jan 2026"}
          edate={"15 Jan 2019"}
          cstatus={"Done"}
        />
        <Singleadminorderlist
          id={"o1005"}
          price={"$2478"}
          cost={"$320"}
          product={"Apple ipod"}
          cname={"Eliza klein"}
          sdate={"15 Jan 2026"}
          edate={"15 Jan 2019"}
          cstatus={"Failed"}
        />
        <Singleadminorderlist
          id={"o1006"}
          price={"$1234"}
          cost={"$120"}
          product={"4Products"}
          cname={"David Shalton"}
          sdate={"11 Jan 2026"}
          edate={"15 Jan 2019"}
          cstatus={"Exception"}
        />
        <Singleadminorderlist
          id={"o1007"}
          price={"$567"}
          cost={"$245"}
          product={"4 Products"}
          cname={"Adele Huff"}
          sdate={"15 Jan 2043"}
          edate={"15 Jan 2019"}
          cstatus={"Assembly"}
        />
        <Singleadminorderlist
          id={"o1009"}
          price={"$890"}
          cost={"$90"}
          product={"2 Products"}
          cname={"Jared wade"}
          sdate={"15 Jan 2098"}
          edate={"15 Jan 2019"}
          cstatus={"Exception"}
        />
        <Singleadminorderlist
          id={"o1012"}
          price={"$450"}
          cost={"$54"}
          product={"Apple iPad"}
          cname={"Jeanette Bowers"}
          sdate={"15 Jan 2026"}
          edate={"15 Jan 2019"}
          cstatus={"Delivery"}
        />
        <Singleadminorderlist
          id={"o1010"}
          price={"$1200"}
          cost={"$50"}
          product={"6 Products"}
          cname={"Victoria Nelson"}
          sdate={"15 Jan 2021"}
          edate={"15 Jan 2019"}
          cstatus={"Delivery"}
        />
        <Singleadminorderlist
          id={"o1011"}
          price={"$567"}
          cost={"$100"}
          product={"4 Product"}
          cname={"Lucas Robbins"}
          sdate={"15 Jan 2025"}
          edate={"15 Jan 2019"}
          cstatus={"Expectation"}
        />
        <div className="adminorderlist_end">
          <button>Load More Products</button>
        </div>
      </div>
    </>
  );
}

function Singleadminorderlist({
  id,
  price,
  cost,
  product,
  cname,
  sdate,
  edate,
  cstatus,
}) {
  const [style, setStyle] = useState("singleadminorderlist");
  const [circlered, setCircleRed] = useState("");
  const handleChangeStyle = () => {
    setStyle("singleadminorderliststyle");
    setCircleRed("singleadminorderlist_row_button_circle_red");
  };
  return (
    <>
      <div className={"singleadminorderlist"}>
        {/* <div className="singleadminorderlist_row"> */}
        <div className={style} >
          <div className="singleadminorderlist_row_button">
            {/* <div className="singleadminorderlist_row_button_circle"> */}
            <TiTick
              className={circlered}
              style={{
                fontSize: "15px",
                color: "white",
                borderRadius: "50%",
                border: "1px solid silver",
              }}
              onClick={handleChangeStyle}
            />
            {/* </div> */}
          </div>
          <label className="singleadminorderlist_row_id">{id}</label>
          <label className="singleadminorderlist_row_price">{price}</label>
          <label className="singleadminorderlist_row_cost">{cost}</label>
          <label className="singleadminorderlist_row_product">{product}</label>
          <label className="singleadminorderlist_row_cname">{cname}</label>
          <label className="singleadminorderlist_row_sdate">{sdate}</label>
          <label className="singleadminorderlist_row_edate">{edate}</label>
          <div className="singleadminorderlist_row_input">
            <input />
            <label className="singleadminorderlist_row_input_status">
              {cstatus}
            </label>
          </div>
          <AiOutlineArrowRight
            className="singleadminorderlist_row_arrow"
            style={{ color: "#C3CAD9", fontSize: "20px" }}
          />
        </div>
      </div>
      {/* </div> */}
    </>
  );
}
