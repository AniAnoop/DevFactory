import App from "./App";
import Dash from "./dash";
import Home from "./homepage";
import Profile from "./profile";
import A1 from "./a1";
import Lambda from "./Lambda";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<App />}></Route>
        <Route path={"/l"} element={<Lambda />}></Route>
        <Route path={"/dash"} element={<Dash />}></Route>
        <Route path={"/home"} element={<Home />}></Route>
        <Route path={"/profile"} element={<Profile />}></Route>
        <Route path={"/a1"} element={<A1 />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Navigation;
