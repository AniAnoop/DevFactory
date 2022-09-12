import App from "./App";
import Featuredlist from "./Featuredlist";
import Filterhorizontal from "./Filterhorizontal";
import {BrowserRouter,Routes,Route} from "react-router-dom";

const Navigation=()=>{
    return(
        <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<Featuredlist/>}></Route>
            <Route path={"/footer"} element={<App/>}></Route>
            <Route path={"/fhorizontal"} element={<Filterhorizontal/>}></Route>
        </Routes>
        </BrowserRouter>
    )
}
export default Navigation;