import React from "react";
import Header from "../components/Header";
import Subbanner from "../components/Subbanner";
import Filterhorizontal from "../components/Filterhorizontal";
import Gridview from "../components/Gridview";
import BrandList from "../components/BrandList";
import Footer from "../components/Footer";
import "./style.css";

export default function Shoppage_gridpage() {
  return (
    <>
      <div className="shoppage_gridpage">
        <Header />
        <div className="shoppage_gridpage_subbanner">
          <Subbanner />
        </div>
        <Filterhorizontal />
        <div className="shoppage_gridpage_gridview">
          <Gridview />
        </div>
        <BrandList />
        <Footer />
      </div>
    </>
  );
}
