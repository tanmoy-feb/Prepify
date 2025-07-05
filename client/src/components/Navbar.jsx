import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-black text-white px-8 py-4 flex justify-between items-center border-b border-gray-700">
      <h1 className="text-xl font-bold text-pink-600">Prepify</h1>
      <div className="flex items-center gap-6">
        <Link to="/" className="hover:text-pink-500">Home</Link>
        <Link to="/dashboard" className="hover:text-pink-500">Practice</Link>
        <Link to="/resume-builder" className="hover:text-pink-500">Resume Builder</Link>
        <Link
          to="/login"
          className="ml-6 px-4 py-2 rounded-md border border-white text-white hover:bg-white hover:text-black transition-all"
        >
          Login
        </Link>
        <Link
          to="/register"
          className="bg-pink-600 text-white px-4 py-2 rounded-md hover:bg-pink-700 transition-all"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
