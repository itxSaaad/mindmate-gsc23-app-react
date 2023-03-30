import React from "react";

import CommunicateSection from "../components/Home/CommunicateSection";
import FAQSection from "../components/Home/FAQSection";
import TestimonialSection from "../components/Home/TestimonialSection";
import HeroHome from "../components/Home/HeroHome";
import Meta from "../components/Meta";

const HomeScreen = () => {
  return (
    <>
      <Meta />
      <HeroHome />
      <FAQSection />
      <CommunicateSection />
      <TestimonialSection />
    </>
  );
};

export default HomeScreen;
