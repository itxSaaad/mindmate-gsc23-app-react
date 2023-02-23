import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import NavbarCmp from "./components/NavbarCmp";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <>
      <NavbarCmp />
      <HomeScreen />
      <Footer />
    </>
  );
}

export default App;
