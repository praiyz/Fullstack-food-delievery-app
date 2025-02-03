import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar.jsx";
import SideBar from "./components/SideBar/SideBar.jsx";
import Add from "./pages/Add/Add.jsx";
import List from "./pages/list/List.jsx";
import Orders from "./pages/orders/Orders.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
const url = "https://fullstack-food-delievery-app.onrender.com";

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
