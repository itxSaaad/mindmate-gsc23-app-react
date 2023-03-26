import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  getUserDetails,
  updateUserProfile,
} from "../redux/actions/userActions";

import Loader from "../components/Loader";
import Message from "../components/Message";

const UserProfile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const { success, errorUpdate } = userUpdateProfile;

  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    } else {
      if (!user.name) {
        dispatch(getUserDetails("profile"));
      } else {
        setName(user.displayName);
        setEmail(user.email);
      }
    }
  }, [dispatch, navigate, userInfo, user]);

  const handleUpdateProfile = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
    } else {
      dispatch(updateUserProfile({ id: user._id, name, email, password }));
    }

    setIsEditing(false);
  };

  return (
    <section className="min-h-screen flex justify-center items-center">
      {loading ? (
        <Loader />
      ) : (
        <div className="mx-auto max-w-screen-xl w-3/4 px-4 py-20 sm:px-6 lg:px-8">
          <h1 className="text-6xl text-center font-bold tracking-tight sm:text-6xl mb-4 text-black">
            User Profile
          </h1>

          {message && <Message type="error">{message}</Message>}
          {success && (
            <Message type="success">Profile Updated Successfully</Message>
          )}
          {errorUpdate && <Message type="error">{errorUpdate}</Message>}
          {error && <Message type="error">{error}</Message>}
          <div className="mx-auto max-w-lg my-2">
            {isEditing ? (
              <form
                className="mt-6 mb-0 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
                onSubmit={handleUpdateProfile}
              >
                <div className="mb-4">
                  <label htmlFor="displayName" className="sr-only">
                    Display Name
                  </label>

                  <input
                    placeholder="Enter Name"
                    type="text"
                    id="displayName"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
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
                        value={email}
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
                        value={password}
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
                <div className="mv-4">
                  <div>
                    <label htmlFor="confirmPassword" className="sr-only">
                      Confirm Password
                    </label>

                    <div className="relative">
                      <input
                        type="password"
                        className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                        placeholder="Confirm Password"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
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
                <div className="flex justify-between items-center">
                  <button
                    className="bg-blue-500 text-white py-2 px-4 rounded"
                    type="submit"
                    disabled={loading}
                  >
                    {loading ? "Saving..." : "Save"}
                  </button>

                  <button
                    className="bg-red-500 text-white py-2 px-4 rounded"
                    type="button"
                    onClick={() => {
                      setIsEditing(false);
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            ) : (
              <div className="mt-6 mb-0 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8">
                <div className="flex flex-col">
                  <label htmlFor="displayName" className="text-slate-400">
                    Name:
                  </label>
                  <input
                    id="displayName"
                    value={user.displayName}
                    disabled
                    className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                  />
                </div>
                <div>
                  <div className="flex flex-col">
                    <label htmlFor="email" className="text-slate-400">
                      Email
                    </label>
                    <div className="relative">
                      <input
                        id="email"
                        value={user.email}
                        disabled
                        className="w-full rounded-lg  border-gray-200 p-4 pr-12 text-sm shadow-sm"
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
      )}
    </section>
  );
};

export default UserProfile;
