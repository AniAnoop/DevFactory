import App from "./App";
import Dash from "./dash";
import Home from "./homepage";
import Login from "./login";
import Profile from "./profile";
import A1 from "./a1";


import { BrowserRouter, Routes, Route } from "react-router-dom";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<App />}></Route>
        <Route path={"/dash"} element={<Dash />}></Route>
        <Route path={"/home"} element={<Home />}></Route>
        <Route path={"/login"} element={<Login />}></Route>
        <Route path={"/profile"} element={<Profile/>}></Route>
        
      </Routes>
    </BrowserRouter>
  );
};
export default Navigation;
