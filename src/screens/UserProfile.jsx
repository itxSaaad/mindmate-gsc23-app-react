import React, { useState, useEffect } from "react";

const UserProfile = () => {
  // Create a userProfile screen to Display and Edit Details of the User
  // 1. Create a state variable to store the user details
  // 2. Create a useEffect to fetch the user details from the API
  // 3. Create a form to display the user details
  // 4. Create a form to edit the user details
  // 5. Create a function to handle the form submission
  // 6. Create a function to handle the form submission
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState({
    displayName: "Jane Doe",
    email: "jane@example.com",
    image: "https://source.unsplash.com/random",
    password: "123456",
    appointments: {
      1: {
        id: "1",
        date: "2021-08-01",
        time: "10:00",
        doctor: "Dr. John Doe",
        doctorId: "1",
        patient: "Jane Doe",
        patientId: "1",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nunc nisl ultricies nisl, eget ultricies nisl nunc eget nisl. Donec auctor, nisl eget ultricies lacinia, nunc nisl ultricies nisl, eget ultricies nisl nunc eget nisl.",
        status: "pending",
      },
      2: {
        id: "2",
        date: "2021-08-01",
        time: "10:00",
        doctor: "Dr. John Doe",
        doctorId: "1",
        patient: "Jane Doe",
        patientId: "1",

        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies lacinia, nunc nisl ultricies nisl, eget ultricies nisl nunc eget nisl. Donec auctor, nisl eget ultricies lacinia, nunc nisl ultricies nisl, eget ultricies nisl nunc eget nisl.",
        status: "SuccessFull",
      },
    },
  });

  const handleUpdateProfile = (event) => {
    // TODO: Implement update profile functionality
    event.preventDefault();
    setIsEditing(false);
  };

  return (
    <section className="min-h-screen flex justify-center items-center">
      <div className="py-auto px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <h1 className="text-6xl font-bold tracking-tight sm:text-6xl mb-4 text-black">
          User Profile
        </h1>
        {isLoading && <p>Loading...</p>}
        <div className="min-w-75 mx-auto max-w-lg">
          {isEditing ? (
            <form
              className="mt-6 mb-0 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
              onSubmit={handleUpdateProfile}
            >
              <input
                type="file"
                id="photo"
                name="photo"
                accept="image/*"
                className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm "
              />
              <div className="mb-4">
                <label htmlFor="displayName" className="sr-only">
                  Display Name
                </label>

                <input
                  placeholder="Enter Name"
                  type="text"
                  id="displayName"
                  value={user.displayName}
                  onChange={(event) => setDisplayName(event.target.value)}
                  required
                  className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                />
              </div>
              <div className="mb-4">
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>

                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      value={user.email}
                      placeholder="Enter Email Address"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      required
                      className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                    />

                    <span className="absolute inset-y-0 right-0 grid place-content-center px-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>

                  <div className="relative">
                    <input
                      type="password"
                      placeholder="Enter Password"
                      id="password"
                      value={user.password}
                      required
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                    />

                    <span className="absolute inset-y-0 right-0 grid place-content-center px-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? "Saving..." : "Save"}
              </button>
            </form>
          ) : (
            <div className="mt-6 mb-0 space-y-4 rounded-lg p-4 flex flex-col items-center shadow-lg sm:p-6 lg:p-8">
              <img
                className="rounded-lg w-32 h-32 bg-contain"
                src={user.image}
                alt="avatar"
              />
              <div className="mb-4">
                <label htmlFor="displayName" className="sr-only">
                  Display Name
                </label>
                <input
                  id="displayName"
                  value={user.displayName}
                  disabled
                  className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                />
              </div>
              <div className="mb-4">
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <div className="relative">
                    <input
                      id="email"
                      value={user.email}
                      disabled
                      className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                    />
                  </div>
                </div>
              </div>
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded"
                onClick={() => setIsEditing(true)}
              >
                Edit
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
