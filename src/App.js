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
import AdminLayout from "./components/layout/AdminLayout";
import PrivateRoute from "./components/privateRoute/PrivateRoute";

function App() {
  return (
    <div>
      {/* Public Routes */}
      <Routes>
        {/* Public */}
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/forget-password"
          element={
            <PrivateRoute>
              <ForgetPassword />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/register"
          element={
            <PrivateRoute>
              <Register />
            </PrivateRoute>
          }
        ></Route>
        {/* Private */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/category"
          element={
            <PrivateRoute>
              <Category />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/product"
          element={
            <PrivateRoute>
              <Product />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/payment-options"
          element={
            <PrivateRoute>
              <PaymentOptions />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/orders"
          element={
            <PrivateRoute>
              <Orders />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/customers"
          element={
            <PrivateRoute>
              <Customers />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        ></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
