import React from "react";

const AppointmentScreen = () => {
  return (
    <section className="min-h-screen h-auto flex flex-col justify-center items-center">
      <div className="py-auto px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl sm:my-4 my-5  text-black">
          Make your Appoinment Now!
        </h1>
        <div className="flex-1 overflow-y-auto p-4 border border-gray-300 rounded-lg">
          <div className="flex flex-col space-y-4">
            <div className="flex items-end">
              <img
                className="w-10 h-10 rounded-full ml-2"
                src="https://i.pravatar.cc/150?img=1"
                alt="Avatar"
              />
              <div className="rounded-lg bg-white p-4 max-w-xs mx-2 shadow">
                <div className="text-gray-600">
                  Hi there! How can I help you today?
                </div>
              </div>
            </div>
            <div className="flex items-end justify-end">
              <div className="rounded-lg bg-blue-600 text-white p-4 max-w-xs mx-2 shadow">
                <div className="text-white">
                  I'm looking to buy a new phone. Can you help me?
                </div>
              </div>
              <img
                className="w-10 h-10 rounded-full mr-2"
                src="https://i.pravatar.cc/150?img=2"
                alt="Avatar"
              />
            </div>
          </div>
        </div>
        {/* <div className="flex items-center p-4 bg-gray-100 mt-2 rounded-xl">
          <input
            className="flex-1 appearance-none rounded-full py-2 px-4  text-gray-700 leading-tight focus:outline-none focus:bg-white focus:shadow-outline"
            type="text"
            placeholder="Type your message..."
          />
          <button className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline">
            Send
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default AppointmentScreen;
