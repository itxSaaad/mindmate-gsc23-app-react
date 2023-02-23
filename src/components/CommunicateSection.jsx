import React from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const CommunicateSection = () => {
  return (
    <section
      className="d-flex min-vh-100"
      lc-helper="background"
      style={{
        backgroundImage:
          "url('src/assets/img/brooke-cagle--uHVRvDr7pg-unsplash.jpg')",
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
            <h1 className="display-4 fw-bold mb-3 mt-5">
              Communicate your way
            </h1>
          </div>
        </div>

        <div className="lc-block">
          <div editable="rich">
            <p className="lead text-white mb-5">
              Talk to your therapist however you feel comfortable — text, chat,
              phone, or video.
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
            <a href="#testimonial" className="text-decoration-none text-black">
              <FontAwesomeIcon icon={faArrowDown} />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CommunicateSection;
