import App from "./App";
import Fullmodals from "./fullmodal.js";
import {BrowserRouter,Routes,Route} from "react-router-dom";

const Navigation=()=>{
    return(
        <BrowserRouter>
          <Routes>
            <Route path={"/"} element={<App/>}></Route>
            <Route path={"/fullmodal"} element={<Fullmodals/>}></Route>
          </Routes>
        </BrowserRouter>
    );
};
export default Navigation;