import React from "react";
import CommunicateSection from "../components/CommunicateSection";
import FAQSection from "../components/FAQSection";
import HeroHome from "../components/HeroHome";
import TestimonialSection from "../components/TestimonialSection";

const HomeScreen = () => {
  return (
    <>
      <HeroHome />
      <FAQSection />
      <CommunicateSection />
      <TestimonialSection />
    </>
  );
};

export default HomeScreen;
