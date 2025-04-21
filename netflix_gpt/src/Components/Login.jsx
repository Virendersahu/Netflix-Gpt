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
    <div className="relative w-full min-h-screen bg-black">
      {/* Background Image */}
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/fa4630b1-ca1e-4788-94a9-eccef9f7af86/web/IN-en-20250407-TRIFECTA-perspective_43f6a235-9f3d-47ef-87e0-46185ab6a7e0_large.jpg"
        alt="background"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Black overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Header */}
        <Header />

        {/* Form section (centered vertically and horizontally) */}
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-2xl  bg-black/75 text-white px-14 py-24 rounded-md shadow-lg flex flex-col justify-center min-h-[900px]">
            <h1 className="text-5xl font-bold mb-10">
              {isSignedIn ? "Sign In" : "Sign Up"}
            </h1>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              {!isSignedIn && (
                <>
                  <input
                    className="w-full p-6 rounded bg-zinc-800 text-md placeholder-gray-400"
                    type="text"
                    placeholder="Enter your Name"
                    {...register("name")}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm">
                      {errors.name.message}
                    </p>
                  )}
                </>
              )}

              <input
                className="w-full p-6 rounded bg-zinc-800 text-md placeholder-gray-400"
                type="text"
                placeholder="Email or mobile number"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}

              <input
                className="w-full p-6 rounded bg-zinc-800 text-md placeholder-gray-400"
                type="password"
                placeholder="Password"
                {...register("password")}
              />
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}

              <button className="w-full bg-red-600 hover:bg-red-700 transition p-6 rounded font-semibold text-xl">
                {isSignedIn ? "Sign In" : "Sign Up"}
              </button>
            </form>

            <p className="mt-6 text-md text-gray-400">
              {isSignedIn ? "New to Netflix? " : "Already have an account? "}
              <span
                onClick={handleSignUp}
                className="text-white hover:underline cursor-pointer"
              >
                {isSignedIn ? "Sign up now" : "Sign in"}
              </span>
            </p>

            <p className="mt-6 text-md text-gray-500">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.{" "}
              <a href="#" className="text-blue-500 hover:underline">
                Learn more.
              </a>
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="w-full bg-black/75 text-gray-400 px-6 sm:px-16 py-10 text-sm">
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
