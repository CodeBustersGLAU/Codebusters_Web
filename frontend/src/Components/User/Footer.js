import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import Logo from "./../../Assets/Logo/Codebusters02.png";
import LogoCodechef from "./../../Assets/Logo/codechef_logo.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-opacity-50 backdrop-blur-md bg-gray-900 text-gray-200 py-10 px-4 sm:px-8 md:px-16 lg:px-20">
      <div className="flex flex-col md:flex-row justify-around items-center">
        {/* Logo and Description */}
        <div className="md:w-1/3 text-center md:text-left">
          <div className="flex items-center justify-around mb-10">
            <img
              src={Logo}
              alt="Codebusters Logo"
              className="w-44 mb-4 mx-auto md:mx-0 cursor-pointer"
            />
            <img
              src={LogoCodechef}
              alt="Codebusters Logo"
              className="w-40 mb-4 mx-auto md:mx-0 cursor-pointer"
            />
          </div>
          <p className="text-sm md:text-base px-6 mb-6 selection:bg-blue-200 selection:text-blue-950">
            Codebusters Club is a community-driven group focused on empowering
            coders with a collaborative environment, exciting challenges, and
            continuous learning. Join us and be a part of the future of
            technology.
          </p>
          <p className="text-sm md:text-base px-6 selection:bg-blue-200 selection:text-blue-950">
            Be a part of a vibrant community, where collaboration and innovation
            meet to shape the future of technology. Together, we can push the
            boundaries of what’s possible and make a lasting impact on the tech
            world.
          </p>
        </div>

        {/* Quick Links */}
        <div className="md:w-1/3 w-full flex flex-col items-center justify-center m-10 md:m-0 selection:bg-blue-200 selection:text-blue-950">
          <h3 className="text-lg font-semibold mb-4 bg-blue-950 pl-6 pr-6 pt-2 pb-2 rounded-lg bg-opacity-30">
            Quick Links
          </h3>
          <ul className="space-y-2 text-slate-300 bg-blue-950 bg-opacity-10 p-4 text-center ml-2 rounded-md">
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

        {/* Contact Form */}
        <div className="md:w-1/3 w-full flex flex-col items-center">
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <form
            action="https://formspree.io/f/myzydpyr"
            method="POST"
            className="bg-slate-700 p-4 rounded-lg shadow-md w-full sm:w-80 md:w-72 lg:w-80"
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
      <div className="flex flex-row justify-center space-x-6 mt-8 items-center h-10">
        <a
          href="https://www.instagram.com/codebusters_glau/profilecard/?igsh=aWduNzQ0OTAydnpv"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl text-gray-400 hover:text-white hover:scale-150 transition-transform"
        >
          <FacebookIcon />
        </a>
        <a
          href="https://www.instagram.com/codebusters_glau/profilecard/?igsh=aWduNzQ0OTAydnpv"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl text-gray-400 hover:text-white hover:scale-150 transition-transform"
        >
          <InstagramIcon />
        </a>
        <a
          href="https://www.linkedin.com/company/codebusters-glau/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl text-gray-400 hover:text-white hover:scale-150 transition-transform"
        >
          <LinkedInIcon />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl text-gray-400 hover:text-white hover:scale-150 transition-transform"
        >
          <TwitterIcon />
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl text-gray-400 hover:text-white hover:scale-150 transition-transform"
        >
          <GitHubIcon />
        </a>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-gray-500 text-sm selection:text-blue-100 relative">
        <p>
          &copy; {new Date().getFullYear()} Codebusters Club. All rights
          reserved.
        </p>
        <Link to="/login">
          <button className="absolute right-0 hover:bg-blue-950 h-6 w-10 p-2 rounded-lg"></button>
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
