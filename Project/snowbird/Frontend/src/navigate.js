// import App from "./App";
// import Fullmodals from "./fullmodal.js";
// import Modal from "./modal.js";
import Addtask from "./addtask";
import Edittask from "./edittask";
// import Sample from "./sample";
import Boardaddtask from "./boardaddtask";
import Boardedittask from "./boardedittask";
// import Sprint from "./sprint";
// import BoardPage from "./boardpage";
import BoardPage1 from "./boardpage1";
// import Dash from "./Dash";
// import Singleuser from "./Singleuser";
// import Dashboard from "./dashboard";
// import Drageanddrop from "./Draganddrop";
import Tilldatechart from "./Tilldatechart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./Menu";
// import Dashboardchart1 from "./Dashboardchart1";
// import SummaryPage from "./SummaryPage";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path={"/"} element={<App />}></Route> */}
        {/* <Route path={"/fullmodal"} element={<Fullmodals />}></Route>
        <Route path={"/modal"} element={<Modal />}></Route> */}
        <Route path={"/addtask"} element={<Addtask />}></Route>
        <Route path={"/edittask"} element={<Edittask />}></Route>
        {/* <Route path={"/sample"} element={<Sample />}></Route> */}
        <Route path={"/boardedittask"} element={<Boardedittask />}></Route>
        <Route path={"/boardaddtask"} element={<Boardaddtask />}></Route>
        {/* <Route path={"/sprint"} element={<Sprint />}></Route>
        <Route path={"/boardpage"} element={<BoardPage />}></Route> */}
        <Route path={"/"} element={<BoardPage1 />}></Route>
        <Route path={"/menu"} element={<Menu />}></Route>
        {/* <Route path={"/dash"} element={<Dash />}></Route>
        <Route path={"/dashboard"} element={<Dashboard />}></Route>
        <Route path={"/singleuser"} element={<Singleuser />}></Route>
        <Route path={"/draganddrop"} element={<Drageanddrop/>}></Route> */}
        {/* <Route path={"/dbchart1"} element={<Dashboardchart1/>}></Route>
        <Route path={"/summary"} element={<SummaryPage/>}></Route> */}
        <Route path={"/tdchart"} element={<Tilldatechart/>}></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Navigation;
