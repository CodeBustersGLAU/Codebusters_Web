import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import Logo from "./../../Assets/Logo/Codebusters02.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-opacity-50 backdrop-blur-md bg-gray-900 text-gray-200 py-10 px-4 md:px-20">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-10 md:space-y-0">
        {/* Logo and Description */}
        <div className="md:w-1/3">
          <img src={Logo} alt="Codebusters Logo" className="w-40 mb-4" />
          <p className="text-sm pr-6">
            Codebusters Club is a community-driven group focused on empowering
            coders with a collaborative environment, exciting challenges, and
            continuous learning. Join us and be a part of the future of
            technology.
          </p>
          <p className="text-sm pr-6">
            Be a part of a vibrant community, where collaboration and innovation
            meet to shape the future of technology. Together, we can push the
            boundaries of what’s possible and make a lasting impact on the tech
            world.
          </p>
        </div>

        {/* Quick Links */}
        <div className="md:w-1/3 flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/team-members" className="hover:text-white">
                Our Team
              </Link>
            </li>
            <li>
              <Link to="/team-members" className="hover:text-white">
                Join Us
              </Link>
            </li>
            <li>
              <Link to="/team-members" className="hover:text-white">
                Future Events
              </Link>
            </li>
            <li>
              <Link to="/team-members" className="hover:text-white">
                Highlights
              </Link>
            </li>
            <li>
              <Link to="/team-members" className="hover:text-white">
                Alumni
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Form (Replaced Contact Us Section) */}
        <div className="md:w-1/3 flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <form
            action="https://formspree.io/f/myzydpyr"
            method="POST"
            className="bg-slate-700 p-4 rounded-lg shadow-md w-72 h-auto"
          >
            <h2 className="text-xl font-semibold text-white mb-4">
              Send Us a Message
            </h2>
            <label className="block mb-4">
              <span className="block text-white font-semibold mb-2">
                Your Email:
              </span>
              <input
                type="email"
                name="email"
                required
                className="w-full p-3 border border-gray-600 rounded-lg focus:outline-none focus:ring focus:ring-gray-400 bg-blue-100 text-gray-900"
                placeholder="Enter your email"
              />
            </label>
            <label className="block mb-4">
              <span className="block text-white font-semibold mb-2">
                Your Message:
              </span>
              <textarea
                name="message"
                required
                className="w-full p-3 border border-gray-600 rounded-lg focus:outline-none focus:ring focus:ring-gray-400 bg-blue-100 text-gray-900"
                placeholder="Enter your message"
                rows="4"
              ></textarea>
            </label>
            <button
              type="submit"
              className="bg-gray-900 hover:bg-gray-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-colors duration-300 w-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="flex justify-center space-x-6 mt-8">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl text-gray-400 hover:text-white"
        >
          <FacebookIcon />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl text-gray-400 hover:text-white"
        >
          <InstagramIcon />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl text-gray-400 hover:text-white"
        >
          <LinkedInIcon />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl text-gray-400 hover:text-white"
        >
          <TwitterIcon />
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl text-gray-400 hover:text-white"
        >
          <GitHubIcon />
        </a>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-gray-500 text-sm">
        <p>
          &copy; {new Date().getFullYear()} Codebusters Club. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
