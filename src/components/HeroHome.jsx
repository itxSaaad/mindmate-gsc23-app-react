import React from "react";
import { Button } from "react-bootstrap";

const HeroHome = () => {
  return (
    <section
      className="d-flex min-vh-100"
      lc-helper="background"
      style={{
        backgroundImage:
          "url('../src/assets/img/kelly-sikkema-XX2WTbLr3r8-unsplash.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#444",
        backgroundBlendMode: "overlay",
        backgroundOpacity: "0.9",
      }}
    >
      <div className="align-self-center text-center text-light col-md-8 offset-md-2">
        <div className="lc-block mb-4">
          <div editable="rich">
            <h1 className="display-4 fw-bold mb-3">Mental Health Matters!</h1>
          </div>
        </div>

        <div className="lc-block">
          <div editable="rich">
            <p className="lead text-white mb-5">
              Are you Feeling Depressed, Lonely or getting Wrong temptations
              like suicidal thoughts then youre at a good place. Here you can
              Find Articles regarding your Mental State or you could book an
              Appointment with a Specialist
            </p>

            <p className="lead text-white mb-5">
              Get the help you need for a healthy mind and body.
            </p>
          </div>
        </div>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <Button
            type="button"
            variant="light"
            size="lg"
            className="px-4 gap-3"
          >
            Book an Appointment
          </Button>
          <Button
            type="button"
            variant="outline-light"
            size="lg"
            className="px-4"
          >
            Read Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroHome;
