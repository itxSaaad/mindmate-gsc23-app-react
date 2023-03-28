import React from "react";

const CounselingScreen = () => {
  const exercises = [
    {
      id: 1,
      title: "Mindfulness",
      description:
        "Mindfulness is a mental state achieved by focusing one's awareness on the present moment, while calmly acknowledging and accepting one's feelings, thoughts, and bodily sensations, used as a therapeutic technique.",
      link: "https://www.mayoclinic.org/tests-procedures/mindfulness/about/pac-20384680",
    },
    {
      id: 2,
      title: "Cognitive Behavioral Therapy",
      description:
        "Cognitive behavioral therapy (CBT) is a type of psychotherapy that can help you manage your problems by changing the way you think and behave. CBT focuses on the here and now, rather than the past, and on how your thoughts, beliefs, and attitudes affect your feelings and behaviors.",
      link: "https://www.mayoclinic.org/tests-procedures/cognitive-behavioral-therapy/about/pac-20384679",
    },
    {
      id: 3,
      title: "Meditation",
      description:
        "Meditation is a practice where an individual uses a technique  - such as mindfulness, or focusing the mind on a particular object, thought, or activity - to train attention and awareness, and achieve a mentally clear and emotionally calm and stable state.",
      link: "https://www.mayoclinic.org/tests-procedures/meditation/about/pac-20384681",
    },
    {
      id: 4,
      title: "Gratitude Journaling",
      description:
        "Gratitude journaling is a practice where you write down things you are grateful for. It can be as simple as writing down three things you are grateful for each day. It can also be more in-depth, where you write down why you are grateful for those things.",
      link: "https://www.mayoclinic.org/tests-procedures/gratitude-journaling/about/pac-20384682",
    },
  ];

  return (
    <section className="min-h-screen h-auto flex flex-col justify-center items-center">
      <div className="py-auto px-4 mx-auto  text-center lg:py-16 lg:px-12">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl sm:my-4 my-5  text-black">
          Self-Counseling Resources
        </h1>
        <p>
          Welcome to the Self-Counseling section of MindMate. In this section,
          you will find resources and tools to help you develop skills to manage
          your mental health and wellbeing. We understand that seeking
          professional help can be challenging or may not be accessible to
          everyone, which is why we've created this space to provide self-help
          resources that you can use at your own pace and comfort. Our aim is to
          empower you with the tools and information you need to support your
          mental health.
        </p>
        <div className="flex flex-wrap justify-center mt-8">
          {exercises.map((exercise) => {
            return (
              <div
                key={exercise.id}
                className="w-auto h-auto m-4 p-8 border border-gray-300 rounded-lg flex flex-col items-start"
              >
                <h2 className="text-xl mb-2 font-bold tracking-tight text-black">
                  {exercise.title}
                </h2>

                <p className="text-gray-700 text-base tracking-tight mb-8 text-justify">
                  {exercise.description}
                </p>

                <a
                  href={exercise.link}
                  target="_blank"
                  rel="noreferrer"
                  className=" bg-blue-500 hover:bg-blue-700 text-white rounded font-medium tracking-tight py-2 px-4"
                >
                  Learn More
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CounselingScreen;
