import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Product from "./pages/product/Product";
import Purchase from "./pages/purchase/Purchase";
import Signin from "./pages/signin/Signin";
import Signup from "./pages/signup/Signup";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar.jsx";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/purchase" element={<Purchase />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
