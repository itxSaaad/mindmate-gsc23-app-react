import React from "react";
import HeroHome from "../components/HeroHome";
import Navbar from "../components/NavbarCmp";

const HomeScreen = () => {
  return (
    <>
      <Navbar fixed="top" />
      <HeroHome />
    </>
  );
};

export default HomeScreen;
