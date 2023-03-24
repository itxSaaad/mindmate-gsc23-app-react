import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div class="w-16 h-16 flex items-center justify-center rounded-full bg-teal-500 animate-pulse">
        <div class="w-8 h-8 rounded-full bg-white"></div>
      </div>
    </div>
  );
};

export default Loader;
