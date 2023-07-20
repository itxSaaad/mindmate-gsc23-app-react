import React from 'react';

import img from '/img/brooke-cagle--uHVRvDr7pg-unsplash.jpg';

const CommunicateSection = () => {
  return (
    <section
      className="h-screen flex items-center"
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
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
            <img
              alt="Party"
              src={img}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          <div className="lg:py-24  text-white">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Communicate your way
            </h2>

            <p className="mt-4">
              Talk to your therapist however you feel comfortable — text, chat,
              phone, or video.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunicateSection;
