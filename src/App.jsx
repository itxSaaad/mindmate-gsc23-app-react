import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import NavbarCmp from "./components/NavbarCmp";
import Footer from "./components/Footer";

import HomeScreen from "./screens/HomeScreen";
import AppointmentScreen from "./screens/AppointmentScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import UserProfile from "./screens/UserProfile";

function App() {
  return (
    <>
      <Router>
        <NavbarCmp />
        <Routes>
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/appointments" element={<AppointmentScreen />} />
          <Route path="/" exact element={<HomeScreen />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
