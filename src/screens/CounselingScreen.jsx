import React from "react";

const CounselingScreen = () => {
  const exercises = [
    {
      id: 1,
      title: "Mindfulness Meditation",
      image:
        "https://post.healthline.com/wp-content/uploads/2021/09/eyes-closed-meditation-male-poc-1296x728-header.jpg",
      description:
        "Mindfulness meditation involves paying attention to your thoughts and feelings without judgment. This exercise has been shown to improve mental health and decrease symptoms of anxiety and depression.",
      link: "https://www.youtube.com/watch?v=inpok4MKVLM",
    },
    {
      id: 2,
      title: "Cognitive Behavioral Therapy (CBT) Worksheets",
      image:
        "https://post.healthline.com/wp-content/uploads/2019/12/Male_Adults_Therapy_1296x728-header-1296x728.jpg",
      description:
        "Cognitive behavioral therapy (CBT) is a type of psychotherapy that can help you manage your problems by changing the way you think and behave. CBT focuses on the here and now, rather than the past, and on how your thoughts, beliefs, and attitudes affect your feelings and behaviors.",
      link: "https://www.healthline.com/health/cbt-techniques",
    },
    {
      id: 3,
      title: "Breathing Exercises",
      image:
        "https://post.healthline.com/wp-content/uploads/2019/04/Female_Sitting_Breathing_1296x728-header-1024x575.jpg",
      description:
        "Breathing exercises can help you relax and reduce stress. They can also help you manage anxiety and depression. There are many different breathing exercises, but they all involve breathing in a certain way to help you relax.",
      link: "https://www.healthline.com/health/breathing-exercise",
    },
    {
      id: 4,
      title: "Gratitude Journaling",
      image:
        "https://images.pexels.com/photos/4144928/pexels-photo-4144928.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      description:
        "Gratitude journaling is a practice where you write down things you are grateful for. It can be as simple as writing down three things you are grateful for each day. It can also be more in-depth, where you write down why you are grateful for those things.",
      link: "https://positivepsychology.com/gratitude-journal/",
    },
    {
      id: 5,
      title: "Progressive Muscle Relaxation",
      image:
        "https://post.healthline.com/wp-content/uploads/2020/03/Mature-woman-sitting-in-the-lotus-pose-on-her-deck-1296x728-header.jpg",
      description:
        "Progressive muscle relaxation is a technique that involves tensing and relaxing different muscle groups in your body  to help you become more aware of physical sensations and to reduce tension. It can help you relax and reduce stress.",
      link: "https://www.youtube.com/watch?v=ihO02wUzgkc",
    },
    {
      id: 6,
      title: "Guided Imagery",
      image:
        "https://post.healthline.com/wp-content/uploads/2020/08/female-headphones-meditation-1296x728-header.jpg",
      description:
        "Guided imagery is a technique that uses your imagination to help you relax and reduce stress. It can also help you manage anxiety and depression. It involves imagining a peaceful place or situation to help you relax.",
      link: "https://www.healthline.com/health/guided-imagery",
    },
  ];

  return (
    <section className="min-h-screen h-auto flex flex-col justify-center items-center">
      <div className="py-auto px-4 mx-auto py-16 text-center lg:py-20 lg:px-12">
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
                className="flex flex-col justify-center items-center rounded-lg border border-gray-300 my-2 mx-2 p-4 md:mx-4 md:my-4 md:flex-row"
              >
                <img
                  src={exercise.image}
                  alt={exercise.title}
                  className="object-cover rounded-lg mb-4 md:m-0 md:mr-4 md:w-60 md:h-60"
                />
                <div className="flex flex-col justify-center items-center md:items-end">
                  <div className="flex flex-col justify-center items-center md:items-start">
                    <h2 className="text-xl mb-2 font-bold tracking-tight text-black">
                      {exercise.title}
                    </h2>

                    <p className="text-gray-700 text-base tracking-tight mb-8 text-justify">
                      {exercise.description}
                    </p>
                  </div>
                  <a
                    href={exercise.link}
                    target="_blank"
                    rel="noreferrer"
                    className=" bg-blue-500 hover:bg-blue-700 text-white rounded font-medium tracking-tight py-2 px-4"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CounselingScreen;
