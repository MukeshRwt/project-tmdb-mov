import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 bg-opacity-90 text-neutral-300 py-4 px-4 text-center mb-20 md:mb-0 ">
      {/* Navigation Links */}
      <div className="flex items-center justify-center gap-6 text-lg mb-3">
        <Link to="/about" className="hover:text-white transition duration-300">
          About
        </Link>
        <Link to="/contact" className="hover:text-white transition duration-300">
          Contact
        </Link>
      </div>

      {/* Social Media Links (Optional) */}
      {/* <div className="flex items-center justify-center gap-4 mb-3">
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition duration-300"
        >
          <i className="fab fa-twitter text-xl"></i>
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition duration-300"
        >
          <i className="fab fa-facebook text-xl"></i>
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400 transition duration-300"
        >
          <i className="fab fa-github text-xl"></i>
        </a>
      </div> */}

      {/* Copyright */}
      <p className="text-sm opacity-75">
        &copy; {new Date().getFullYear()} Created by{" "}
        <span className="font-semibold text-white">MS</span>
      </p>
    </footer>
  );
};

export default Footer;
