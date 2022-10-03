import Footer from "./Footer";
import Featuredlist from "./Featuredlist";
import Filterhorizontal from "./Filterhorizontal";
import Listview from "./Listview";
import Signup from "./Signup";
import Productthumb from "./Productthumb";
import Adminlist from "./Adminlist";
import Payment from "./Payment";
// import Adminbargraph from "./Adminbargraph";
import Adminbargraph from "./Adminbargraph";
import Admincategoryeditpopup from "./Admincategoryeditpopup";
import Adminrelated from "./Adminrelated";
import Adminbasicinformation from "./Adminbasicinformation";
import Admincircledprogress from "./Admincircledprogress";
import Adminorderlist from "./Adminorderlist";
import Adminpopupbuttonlay from "./Adminpopupbuttonlay";
import Adminpopuptitle from "./Adminpopuptitle";
import Adminproductmain from "./Adminproductmain";
import Exampleareagraph from "./Exampleareagraph";
import Areachart from "./Areachart";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Featuredlist />}></Route>
        <Route path={"/footer"} element={<Footer />}></Route>
        <Route path={"/fhorizontal"} element={<Filterhorizontal />}></Route>
        <Route path={"/listview"} element={<Listview/>}></Route>
        <Route path={"/signup"} element={<Signup/>}></Route>
        <Route path={"/productthumb"} element={<Productthumb/>}></Route>
        <Route path={"/adminlist"} element={<Adminlist/>}></Route>
        <Route path={"/payment"} element={<Payment/>}></Route>
        <Route path={"/adminbargraph"} element={<Adminbargraph/>}></Route>
        <Route path={"/admincategoryeditpopup"} element={<Admincategoryeditpopup/>}></Route>
        <Route path={"/adminrelated"} element={<Adminrelated/>}></Route>
        <Route path={"/adminbasicinformation"} element={<Adminbasicinformation/>}></Route>
        <Route path={"/admincircledprogress"} element={<Admincircledprogress/>}></Route>
        <Route path={"/adminorderlist"} element={< Adminorderlist/>}></Route>
        <Route path={"/adminpopupbuttonlay"} element={<Adminpopupbuttonlay/>}></Route>
        <Route path={"/adminpopuptitle"} element={<Adminpopuptitle/>}></Route>
        <Route path={"/adminproductmain"} element={<Adminproductmain/>}></Route>
        <Route path={"/example"} element={<Exampleareagraph/>}></Route>
       <Route path={'/areachart'} element={<Areachart/>}></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Navigation;
