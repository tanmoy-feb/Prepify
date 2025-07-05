import React from "react";
import { Link } from "react-router-dom";
import BrainImage from "../assets/brain-laptop.png";

const Home = () => {
  return (
    <div className="bg-black text-white min-h-screen px-6 py-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        
        {/* LEFT: TEXT */}
        <div className="md:w-1/2 space-y-6 text-left">
          <h1 className="text-5xl font-extrabold leading-tight">
            Learn from the best,<br /> be your best.
          </h1>
          <p className="text-lg text-gray-300">
            Start your journey with curated MCQs, handpicked LeetCode problems,
            and AI-generated resumes to level up your placement prep.
          </p>
          <Link to="/dashboard">
            <button className="bg-pink-600 hover:bg-pink-700 text-white font-semibold px-6 py-3 rounded-xl transition-all">
              Start Practicing
            </button>
          </Link>
        </div>

        {/* RIGHT: IMAGE */}
        <div className="md:w-1/2 mt-12 md:mt-0 flex justify-end pr-4">
          <img
            src={BrainImage}
            alt="Brain with laptop"
            className="w-[280px] md:w-[400px] animate-fade-in ml-4"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;


