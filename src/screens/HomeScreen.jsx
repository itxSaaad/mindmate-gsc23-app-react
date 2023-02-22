import React from "react";
import FAQHeader from "../components/FAQHeader";
import HeroHome from "../components/HeroHome";
import Navbar from "../components/NavbarCmp";

const HomeScreen = () => {
  return (
    <>
      <Navbar />
      <HeroHome />
      <FAQHeader />{" "}
    </>
  );
};

export default HomeScreen;
