import React from 'react';

const Loader = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-teal-500 animate-pulse">
        <div className="w-8 h-8 rounded-full bg-white"></div>
      </div>
    </div>
  );
};

export default Loader;
