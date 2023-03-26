import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";

import Footer from "./components/Footer";
import NavbarCmp from "./components/NavbarCmp";

import AppointmentScreen from "./screens/AppointmentScreen";
import ArticleDetailsScreen from "./screens/ArticleDetailsScreen";
import ArticlesScreen from "./screens/ArticlesScreen";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import UserProfile from "./screens/UserProfile";

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
