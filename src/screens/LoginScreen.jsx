import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  loginWithEmailAndPassword,
  loginWithGoogle,
} from "../redux/actions/userActions";

import Message from "../components/Message";
import Loader from "../components/Loader";
import Meta from "../components/Meta";

const LoginScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [userInfo, navigate, redirect]);

  const handleGoogleSignIn = () => {
    dispatch(loginWithGoogle());
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(loginWithEmailAndPassword(email, password));
  };

  return (
    <>
      <Meta
        title="Login - MindMate"
        description="Login to your MindMate account to access all the features."
        keywords="login, account"
      />
      <section className="min-h-screen flex justify-center items-center">
        {loading ? (
          <Loader />
        ) : (
          <div className="mx-auto max-w-screen-xl w-3/4 px-4 py-20 sm:px-6 lg:px-8">
            <h1 className="text-center text-3xl font-bold tracking-tight mb-2 text-teal-600 sm:text-4xl">
              Welcome to MindMate!
            </h1>
            {error && <Message type="error">{error}</Message>}
            <div className="mx-auto max-w-lg">
              <form
                className="mt-6 mb-0 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
                onSubmit={handleLogin}
              >
                <p className="text-center text-xl font-bold leading-relaxed">
                  Sign in to your Account
                </p>

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
                  <div className="text-right">
                    <Link
                      to="/forgot-password"
                      className="text-sm text-teal-600 hover:text-teal-900 hover:underline"
                    >
                      Forgot Password?
                    </Link>
                  </div>
                </div>

                <button
                  type="submit"
                  className="block w-full rounded-lg bg-teal-600  hover:bg-teal-700 px-5 py-3 text-sm font-medium text-white"
                >
                  Sign in
                </button>
                <button
                  onClick={handleGoogleSignIn}
                  className="block w-full rounded-lg bg-teal-600  hover:bg-teal-700 px-5 py-3 text-sm font-medium text-white"
                >
                  Sign in with Google
                </button>
                <p className="text-center text-sm text-gray-500">
                  No account?{" "}
                  <Link className="underline" to="/register">
                    Sign up
                  </Link>
                </p>
              </form>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

export default LoginScreen;
