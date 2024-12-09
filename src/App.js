import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Product from "./pages/product/Product";
import Purchase from "./pages/purchase/Purchase";
import Signin from "./pages/signin/Signin";
import Signup from "./pages/signup/Signup";
import ForgotPassword from "./pages/forgotPassword/ForgotPassword.jsx";
import RetrievePassword from "./pages/retrievePassword/RetrievePassword.jsx";
import Dashboard from "./pages/dashboard/Dashboard.jsx";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar.jsx";
import Footer from "./components/footer/Footer.jsx";
import Details from "./pages/details/Details.jsx";
import ScrollToTop from "./core-ui/ScrollToTop.js";
//--------------------------------------------------------------------------------------------

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/details" element={<Details />} />
          <Route path="/purchase" element={<Purchase />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/retrievePassword/:userId" element={<RetrievePassword />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
