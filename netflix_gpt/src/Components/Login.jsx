import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Header from "./Header";

const signUpSchema = z.object({
  name: z.string().min(2, "Name is too short"),
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const signInSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});
const Login = () => {
  // State to toggle between Sign In and Sign Up forms
  const [isSignedIn, setIsSignedIn] = useState(true);
  // Function to handle the toggle between Sign In and Sign Up
  // It will change the state of isSignedIn to true or false

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(isSignedIn ? signInSchema : signUpSchema),
  });

  const handleSignUp = () => {
    setIsSignedIn(!isSignedIn);
  };

  const onSubmit = (data) => {
    console.log("Form submitted", data);
  };

  // UI Part for Login Form
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

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
              {!isSignedIn && (
                <>
                  <input
                    className="mb-2 p-4 rounded bg-gray-700 placeholder-gray-400 text-white"
                    type="text"
                    placeholder="Enter your Name"
                    {...register("name")}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mb-4">
                      {errors.name.message}
                    </p>
                  )}
                </>
              )}
              <input
                className="mb-2 p-4 rounded bg-gray-700 placeholder-gray-400 text-white"
                type="text"
                placeholder="Email or mobile number"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mb-4">
                  {errors.email.message}
                </p>
              )}

              <input
                className="mb-2 p-4 rounded bg-gray-700 placeholder-gray-400 text-white"
                type="password"
                placeholder="Password"
                {...register("password")}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mb-4">
                  {errors.password.message}
                </p>
              )}

              <button className="bg-red-600 hover:bg-red-700 transition text-white py-4 rounded font-semibold text-lg mt-4">
                {isSignedIn ? "Sign In" : "Sign Up"}
              </button>
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
