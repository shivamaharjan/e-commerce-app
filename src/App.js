import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import ForgetPassword from "./pages/auth/ForgetPassword";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Category from "./pages/category/Category";
import Customers from "./pages/customers/Customers";
import Dashboard from "./pages/dashboard/Dashboard";
import Home from "./pages/home/Home";
import Orders from "./pages/orders/Orders";
import PaymentOptions from "./pages/payment-options/PaymentOptions";
import Product from "./pages/product/Product";
import Profile from "./pages/profile/Profile";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      {/* Public Routes */}
      <Routes>
        {/* Public */}
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/forget-password" element={<ForgetPassword />}></Route>
        <Route path="/register" element={<Register />}></Route>
        {/* Private */}
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/category" element={<Category />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/payment-options" element={<PaymentOptions />}></Route>
        <Route path="/orders" element={<Orders />}></Route>
        <Route path="/customers" element={<Customers />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
      <ToastContainer/>
    </div>
  );
}

export default App;
