import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Loader from "../components/Loader";
import Message from "../components/Message";
import Meta from "../components/Meta";

import { listExercises } from "../redux/actions/exerciseActions";

const CounselingScreen = () => {
  const dispatch = useDispatch();

  const exercisesList = useSelector((state) => state.exercisesList);
  const { loading, error, exercises } = exercisesList;

  useEffect(() => {
    dispatch(listExercises());
  }, [dispatch]);

  return (
    <>
      <Meta
        title="Self-Counseling - MindMate"
        description="Access self-counseling resources to help you manage your mental health."
        keywords="mental health, self-counseling, resources, tools"
      />
      <section className="min-h-screen h-auto flex flex-col justify-center items-center">
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <div className="py-auto px-4 mx-auto py-16 text-center lg:py-20 lg:px-12">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl sm:my-4 my-5  text-black">
              Self-Counseling Resources
            </h1>
            <p>
              Welcome to the Self-Counseling section of MindMate. In this
              section, you will find resources and tools to help you develop
              skills to manage your mental health and wellbeing. We understand
              that seeking professional help can be challenging or may not be
              accessible to everyone, which is why we've created this space to
              provide self-help resources that you can use at your own pace and
              comfort. Our aim is to empower you with the tools and information
              you need to support your mental health.
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
        )}
      </section>
    </>
  );
};

export default CounselingScreen;
