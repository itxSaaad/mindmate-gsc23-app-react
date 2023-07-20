import React from 'react';
import { Link } from 'react-router-dom';

import img from '/img/kelly-sikkema-XX2WTbLr3r8-unsplash.jpg';

const HeroHome = () => {
  return (
    <section
      className="min-h-screen flex justify-center items-center"
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#444',
        backgroundBlendMode: 'overlay',
        backgroundOpacity: '0.9',
      }}
    >
      <div className="py-auto px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <h1 className="text-6xl font-bold tracking-tight sm:text-6xl mb-4 text-white pt-20">
          Mental Health Matters!
        </h1>
        <p className="mb-8 text-xl font-normal text-gray-300 lg:text-2xl sm:px-16 xl:px-48">
          Are you Feeling Depressed, Lonely or getting Wrong temptations like
          suicidal thoughts then youre at a good place. Here you can Find
          Articles regarding your Mental State or you could book an Appointment
          with a Specialist
        </p>
        <p className="mb-8 text-xl font-normal text-gray-300 lg:text-2xl sm:px-16 xl:px-48">
          Get the help you need for a healthy mind and body.
        </p>
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <Link to="/appointments">
            <button
              type="button"
              className="rounded-lg border border-white bg-white px-5 py-2.5 text-center text-sm font-bold text-gray-500 shadow-none transition-all hover:bg-gray-100 hover:text-gray-500"
            >
              Get in Touch
            </button>
          </Link>
          <Link to="/articles">
            <button
              type="button"
              className="rounded-lg border border-white bg-transparent px-5 py-2.5 text-center text-sm font-bold text-white shadow-none transition-all hover:bg-gray-100 hover:text-gray-500"
            >
              Read Articles
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroHome;
