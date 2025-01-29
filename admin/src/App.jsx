import { Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar/navBar";
import SideBar from "./components/sidebar/sideBar.jsx";
import Add from "./pages/Add/Add.jsx";
import List from "./pages/list/List.jsx";
import Orders from "./pages/orders/Orders.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
const url = "http://localhost:4000";

  return (
    <div>
      <ToastContainer />
      <NavBar />
      <hr />
      <div className="app-contents">
        <SideBar />
        <Routes>
          <Route path="/add" element={<Add  url={url} />} />
          <Route path="/list" element={<List url={url} />} />
          <Route path="/orders" element={<Orders url={url} />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
