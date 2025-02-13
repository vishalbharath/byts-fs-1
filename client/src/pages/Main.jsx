import React from "react";
import Lottie from "lottie-react";
import bannerAnimation from "../assets/banner-animation.json";
import bannerAnimation2 from "../assets/banner-animation2.json";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Main = () => {
  const { isAuthenticated } = useAuth(); // Get authentication state

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center bg-white text-black">
      
      {/* Hero Section */}
      <div className="w-full min-h-[80vh] flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-16 lg:px-24 gap-12 pt-24">
        
        {/* Left Content */}
        <div className="flex flex-col gap-6 text-center md:text-left animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Unlock Your <span className="text-blue-600">Potential</span> with FitFusion
          </h1>
          <p className="text-lg text-gray-600">
            Transform your health with personalized fitness tracking, nutrition insights, and expert guidance.
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <Link
              to="/Features"
              className="px-6 py-3 text-lg font-semibold bg-blue-600 text-white rounded-lg shadow-lg transition-all hover:bg-blue-700"
            >
              Explore Features
            </Link>
            <Link
              to="/Register"
              className="px-6 py-3 text-lg font-semibold border border-blue-600 text-blue-600 rounded-lg shadow-lg transition-all hover:bg-blue-600 hover:text-white"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Right Content - Lottie Animation */}
        <div className="w-full md:w-[50%] animate-slideInFromRight">
          <Lottie animationData={bannerAnimation} className="w-full" />
        </div>
      </div>

      {/* Features Section */}
      <div className="w-full px-6 md:px-16 lg:px-24 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Why Choose FitFusion?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-blue-600">Personalized Progress Tracking</h3>
            <p className="text-gray-700 mt-2">
              Monitor your workouts, calories, and body transformation with detailed insights.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-green-600">Smart Meal & Nutrition Planning</h3>
            <p className="text-gray-700 mt-2">
              Get AI-driven meal recommendations based on your fitness goals.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-yellow-600">Expert Insights & Community</h3>
            <p className="text-gray-700 mt-2">
              Get guidance from certified fitness trainers and join our support group.
            </p>
          </div>
        </div>
      </div>

      {/* Goal-Setting Section */}
      <div className="w-full bg-gray-50 py-16 px-6 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          
          {/* Left Side - Lottie Animation */}
          <div className="w-full md:w-[50%] animate-slideInFromLeft">
            <Lottie animationData={bannerAnimation2} className="w-full" />
          </div>

          {/* Right Side */}
          <div className="flex flex-col gap-6 text-center md:text-left animate-fadeIn">
            <h3 className="text-3xl md:text-4xl font-bold">
              Set & Achieve Your <span className="text-green-600">Fitness Goals</span>
            </h3>
            <p className="text-lg text-gray-700">
              Define your target weight, muscle gain, or endurance level and track your improvement effortlessly.
            </p>
            {!isAuthenticated && (
              <div className="flex gap-4 justify-center md:justify-start">
                <Link
                  to="/Register"
                  className="px-6 py-3 text-lg font-semibold bg-green-600 text-white rounded-lg shadow-lg transition-all hover:bg-green-700"
                >
                  Sign Up Now
                </Link>
                <Link
                  to="/SignIn"
                  className="px-6 py-3 text-lg font-semibold border border-gray-700 text-gray-700 rounded-lg shadow-lg transition-all hover:bg-gray-700 hover:text-white"
                >
                  Login
                </Link>
              </div>
            )}
          </div>

        </div>
      </div>

      {/* Additional Features Section */}
      <div className="w-full px-6 md:px-16 lg:px-24 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          More Than Just a Fitness App
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Extra Feature 1 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-purple-600">AI-Driven Workout Plans</h3>
            <p className="text-gray-700 mt-2">
              Get customized workout plans tailored to your body type and goals.
            </p>
          </div>

          {/* Extra Feature 2 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-orange-600">Gamified Challenges</h3>
            <p className="text-gray-700 mt-2">
              Stay motivated with engaging challenges, leaderboards, and rewards.
            </p>
          </div>

          {/* Extra Feature 3 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-teal-600">24/7 Support & Guidance</h3>
            <p className="text-gray-700 mt-2">
              Get professional advice whenever you need it with our in-app support.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Main;
