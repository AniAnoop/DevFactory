import React from "react";
import Header from "../components/Header";
import Subbanner from "../components/Subbanner";
import Filterhorizontal from "../components/Filterhorizontal";
import "./style.css";

export default function Shoppage_gridpage(){
    return(
        <>
        <div className="shoppage_gridpage">
            <Header/>
            <Subbanner/>
            <Filterhorizontal/>
        </div>
        </>
    )
}