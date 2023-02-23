import React from "react";
import { Row, Col } from "react-bootstrap";

const TestimonialSection = () => {
  return (
    <section id="testimonial" className="d-flex min-vh-100 align-items-center">
      <div className="align-self-center text-center col-md-8 offset-md-2">
        <div className="lc-block mb-4">
          <div editable="rich">
            <h1 className="display-4 fw-bold mb-3 mt-5">Testimonials</h1>
          </div>
        </div>
        <Row className="d-flex justify-content-between">
          <Col>
            <figure className="text-center ">
              <blockquote className="blockquote">
                <p className="mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer posuere erat a ante.
                </p>
              </blockquote>
              <figcaption className="blockquote-footer">
                Someone famous in
                <cite title="Source Title">Source Title</cite>
              </figcaption>
            </figure>
          </Col>
          <Col>
            <figure className="text-center">
              <blockquote className="blockquote">
                <p className="mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer posuere erat a ante.
                </p>
              </blockquote>
              <figcaption className="blockquote-footer">
                Someone famous in
                <cite title="Source Title">Source Title</cite>
              </figcaption>
            </figure>
          </Col>
          <Col>
            <figure className="text-center">
              <blockquote className="blockquote">
                <p className="mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer posuere erat a ante.
                </p>
              </blockquote>
              <figcaption className="blockquote-footer">
                Someone famous in
                <cite title="Source Title">Source Title</cite>
              </figcaption>
            </figure>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default TestimonialSection;
