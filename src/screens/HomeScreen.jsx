import React from "react";
import CommunicateSection from "../components/CommunicateSection";
import FAQSection from "../components/FAQSection";
import HeroHome from "../components/HeroHome";

const HomeScreen = () => {
  return (
    <>
      <HeroHome />
      <FAQSection />
      <CommunicateSection />
    </>
  );
};

export default HomeScreen;
