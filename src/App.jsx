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
import ArticlesScreen from "./screens/ArticlesScreen";
import ArticleDetailsScreen from "./screens/ArticleDetailsScreen";

function App() {
  return (
    <>
      <Router>
        <NavbarCmp />
        <Routes>
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/articles/:id" element={<ArticleDetailsScreen />} />
          <Route path="/articles" element={<ArticlesScreen />} />
          <Route path="/appointments" element={<AppointmentScreen />} />
          <Route path="/" exact element={<HomeScreen />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
