import React, { useState } from "react";

const FAQSection = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const questions = [
    {
      id: 1,
      question: "Who are the therapists?",
      answer:
        "Therapists on BetterHelp are licensed, trained, experienced, and accredited psychologists (PhD / PsyD), licensed marriage and family therapists (LMFT), licensed clinical social workers (LCSW / LMSW), or licensed professional counselors (LPC). All of them have a Masters Degree or a Doctorate Degree in their field. They have been qualified and certified by their state's professional board after successfully completing the necessary education, exams, training and practice. While their experience, expertise, and background vary, they all possess at least 3 years and 1,000 hours of hands-on experience.",
    },
    {
      id: 2,
      question: "Who will be helping me?",
      answer:
        "After you sign up, we will match you to an available therapist who fits your objectives, preferences, and the type of issues you are dealing with. Different therapists have different approaches and areas of focus, so it's important to find the right person who can achieve the best results for you. We have found that we are able to provide a successful match most of the time; however, if you start the process and you feel your therapist isn't a good fit for you, you may elect to be matched to a different therapist.",
    },
    {
      id: 3,
      question: "What is mental health?",
      answer:
        " Mental health refers to a person's emotional, psychological, and social well-being. It affects how we think, feel, and behave, and influences how we cope with stress, relate to others, and make choices.",
    },
    {
      id: 4,
      question: "What are the symptoms of anxiety and depression?",
      answer:
        "Symptoms of anxiety can include excessive worry or fear, restlessness, difficulty sleeping, and physical symptoms such as sweating or trembling. Symptoms of depression can include feelings of sadness or hopelessness, loss of interest in activities, changes in appetite or sleep patterns, and difficulty concentrating.",
    },
    {
      id: 5,
      question: "What are some common mental health disorders?",
      answer:
        "Some common mental health disorders include anxiety, depression, bipolar disorder, schizophrenia, and eating disorders.",
    },
    {
      id: 6,
      question: "What is mindfulness?",
      answer:
        "Mindfulness is a practice that involves paying attention to the present moment without judgment. It can help reduce stress, anxiety, and depression, and improve overall mental health.",
    },
  ];

  const handleQuestionClick = (id) => {
    if (id === activeQuestion) {
      setActiveQuestion(null);
    } else {
      setActiveQuestion(id);
    }
  };

  return (
    <section
      id="faq"
      className="h-auto flex flex-col justify-center items-center py-10"
    >
      <h2 className="text-center text-4xl font-bold tracking-tight sm:text-5xl">
        Frequently Asked Questions
      </h2>
      <div className="w-3/4 py-8">
        <dl
          className="group rounded-lg bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
          open
        >
          {questions.map((q) => (
            <div key={q.id} className="py-3">
              <dt className="text-lg">
                <button
                  onClick={() => handleQuestionClick(q.id)}
                  className="text-left w-full flex justify-between items-start text-gray-400"
                >
                  <span className="font-bold text-gray-900">{q.question}</span>
                  <span className="relative ml-1.5 h-5 w-5 flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute inset-0 w-5 h-5 opacity-100 group-open:opacity-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="absolute inset-0 w-5 h-5 opacity-0 group-open:opacity-100"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </span>
                </button>
              </dt>
              <dd
                className={`mt-2 pr-12 ${
                  q.id !== activeQuestion ? "hidden" : ""
                }`}
              >
                <p className="mt-4 leading-relaxed text-gray-700">{q.answer}</p>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default FAQSection;
