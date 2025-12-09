import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/user/login";
import Viewproduct from "./pages/productInfo/view_product";
import Dashboard from "./pages/dashboard";
import Addproduct from "./pages/productInfo/add_product";
import Editproduct from "./pages/productInfo/edit_product";

function App() {
  return (
    <div className="h-screen">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/product" element={<Viewproduct />} />
            <Route path="/product/add" element={<Addproduct />} />
            <Route path="/product/edit/:id" element={<Editproduct />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
