import App from "./App";
import Signup from "./signup";
import {BrowserRouter,Routes,Route} from "react-router-dom";

const Navigation=()=>{
    return(
        <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<App/>}></Route>
            <Route path={"/signup"} element={<Signup/>}></Route>
        </Routes>
        </BrowserRouter>
    )
}
export default Navigation;