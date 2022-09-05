import App from "./App";
import Featuredlist from "./Featuredlist";
import {BrowserRouter,Routes,Route} from "react-router-dom";

const Navigation=()=>{
    return(
        <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<Featuredlist/>}></Route>
            <Route path={"/footer"} element={<App/>}></Route>
        </Routes>
        </BrowserRouter>
    )
}
export default Navigation;