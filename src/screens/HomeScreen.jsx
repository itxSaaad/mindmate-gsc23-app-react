import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

import CommunicateSection from "../components/Home/CommunicateSection";
import FAQSection from "../components/Home/FAQSection";
import TestimonialSection from "../components/Home/TestimonialSection";
import HeroHome from "../components/Home/HeroHome";

const HomeScreen = () => {
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;

        // ...
        console.log("uid", uid);
      } else {
        // User is signed out
        // ...
        console.log("user is logged out");
      }
    });
  }, []);
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
