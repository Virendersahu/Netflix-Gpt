import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  // State to toggle between Sign In and Sign Up forms
  const [isSignedIn, setIsSignedIn] = useState(true);
  // Function to handle the toggle between Sign In and Sign Up
  // It will change the state of isSignedIn to true or false
  const handleSignUp = () => {
    setIsSignedIn(!isSignedIn);
  };
  return (
    <div className="relative w-full h-screen bg-black overflow-auto">
      {/* Background Image */}
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/fa4630b1-ca1e-4788-94a9-eccef9f7af86/web/IN-en-20250407-TRIFECTA-perspective_43f6a235-9f3d-47ef-87e0-46185ab6a7e0_large.jpg"
        alt="background"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      {/* Overlay Content */}
      <div className="absolute top-0 left-0 w-full h-full z-10">
        <Header />
        {/* You can add login form here */}
        <div className="flex flex-col items-center justify-center h-full py-80">
          <div className="w-3/12 h-5/6 min-w-[600px] bg-black bg-opacity-70 p-12 rounded text-white">
            <h1 className="text-5xl font-bold mb-8">
              {isSignedIn === true ? "Sign In" : "Sign Up"}
            </h1>

            <form className="flex flex-col">
              {/* It is visible only in sign Up form */}
              {!isSignedIn && (
                <input
                  className="mb-6 p-8 rounded bg-gray-700 placeholder-gray-400 text-white"
                  type="text"
                  placeholder="Enter your Name"
                />
              )}
              <input
                className="mb-6 p-8 rounded bg-gray-700 placeholder-gray-400 text-white"
                type="text"
                placeholder="Email or mobile number"
              />
              <input
                className="mb-6 p-8 rounded bg-gray-700 placeholder-gray-400 text-white"
                type="password"
                placeholder="Password"
              />
              <button className="bg-red-600 hover:bg-red-700 transition text-white py-4 rounded font-semibold text-lg">
                {isSignedIn ? "Sign In" : "Sign Up"}
              </button>
              {/* It is visible only in sign In form */}
              {isSignedIn && (
                <>
                  <div className="text-center my-6 text-gray-500 text-lg">
                    OR
                  </div>
                  <button className="bg-gray-700 hover:bg-gray-600 transition text-white py-2 rounded font-semibold text-lg mb-6">
                    Use a sign-in code
                  </button>
                  <div className="flex justify-between items-center mt-6 text-lg text-gray-400">
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      Remember me
                    </label>
                    <a href="#" className="hover:underline">
                      Forgot password?
                    </a>
                  </div>
                </>
              )}
            </form>

            <p className="mt-8 text-lg text-gray-400">
              {isSignedIn ? "New to Netflix? " : "Already have an account? "}
              <span
                onClick={handleSignUp}
                className="text-white hover:underline cursor-pointer"
              >
                {isSignedIn ? "Sign up now" : "Sign in"}
              </span>
            </p>
            <p className="mt-5 text-sm text-gray-500">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.{" "}
              <a href="#" className="text-blue-500 hover:underline">
                Learn more.
              </a>
            </p>
          </div>
        </div>
        {/* Footer Section */}
        <div className="w-full bg-black bg-opacity-75 text-gray-400 px-16 py-10 text-lg mt-4 absolute bottom-0">
          <div className="max-w-6xl mx-auto">
            <p className="mb-6">
              Questions? Call{" "}
              <a href="#" className="underline">
                000-800-919-1743
              </a>{" "}
              (Toll-Free)
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <a href="#" className="hover:underline">
                FAQ
              </a>
              <a href="#" className="hover:underline">
                Help Centre
              </a>
              <a href="#" className="hover:underline">
                Terms of Use
              </a>
              <a href="#" className="hover:underline">
                Privacy
              </a>
              <a href="#" className="hover:underline">
                Cookie Preferences
              </a>
              <a href="#" className="hover:underline">
                Corporate Information
              </a>
            </div>

            <div className="inline-block border border-gray-500 px-3 py-1 rounded">
              <span className="mr-2">🌐</span> English
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
