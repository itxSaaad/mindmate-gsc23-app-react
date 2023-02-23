import React from "react";
import { Accordion } from "react-bootstrap";

const FAQSection = () => {
  return (
    <section
      id="faq"
      className="d-flex flex-column m-auto p-5 vh-100 align-items-center "
    >
      <div className="lc-block mb-4">
        <div editable="rich">
          <h1 className="display-4 fw-bold mb-3">Frequently Asked Questions</h1>
        </div>
      </div>

      <div className="w-75">
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Who are the therapists?</Accordion.Header>
            <Accordion.Body>
              Therapists on BetterHelp are licensed, trained, experienced, and
              accredited psychologists (PhD / PsyD), licensed marriage and
              family therapists (LMFT), licensed clinical social workers (LCSW /
              LMSW), or licensed professional counselors (LPC). All of them have
              a Masters Degree or a Doctorate Degree in their field. They have
              been qualified and certified by their state's professional board
              after successfully completing the necessary education, exams,
              training and practice. While their experience, expertise, and
              background vary, they all possess at least 3 years and 1,000 hours
              of hands-on experience.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Who will be helping me?</Accordion.Header>
            <Accordion.Body>
              After you sign up, we will match you to an available therapist who
              fits your objectives, preferences, and the type of issues you are
              dealing with. Different therapists have different approaches and
              areas of focus, so it's important to find the right person who can
              achieve the best results for you. We have found that we are able
              to provide a successful match most of the time; however, if you
              start the process and you feel your therapist isn't a good fit for
              you, you may elect to be matched to a different therapist.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>What is mental health?</Accordion.Header>
            <Accordion.Body>
              Mental health refers to a person's emotional, psychological, and
              social well-being. It affects how we think, feel, and behave, and
              influences how we cope with stress, relate to others, and make
              choices.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              What are the symptoms of anxiety and depression?
            </Accordion.Header>
            <Accordion.Body>
              Symptoms of anxiety can include excessive worry or fear,
              restlessness, difficulty sleeping, and physical symptoms such as
              sweating or trembling. Symptoms of depression can include feelings
              of sadness or hopelessness, loss of interest in activities,
              changes in appetite or sleep patterns, and difficulty
              concentrating.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>
              What are some common mental health disorders?
            </Accordion.Header>
            <Accordion.Body>
              Some common mental health disorders include anxiety disorders,
              mood disorders (such as depression and bipolar disorder),
              personality disorders, and psychotic disorders.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>What is mindfulness?</Accordion.Header>
            <Accordion.Body>
              Mindfulness is a practice that involves paying attention to the
              present moment without judgment. It can help reduce stress,
              anxiety, and depression, and improve overall mental health.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
