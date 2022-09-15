import Footer from "./Footer";
import Featuredlist from "./Featuredlist";
import Filterhorizontal from "./Filterhorizontal";
import Listview from "./Listview";
import Signup from "./Signup";
import Productthumb from "./Productthumb";
import Adminlist from "./Adminlist";
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
      </Routes>
    </BrowserRouter>
  );
};
export default Navigation;
