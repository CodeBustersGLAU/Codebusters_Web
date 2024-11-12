import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import Logo from "./../../Assets/Logo/Codebusters02.png";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10 px-4 md:px-20">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-10 md:space-y-0">
        {/* Logo and Description */}
        <div className="md:w-1/3">
          <img src={Logo} alt="Codebusters Logo" className="w-32 mb-4" />
          <p className="text-sm">
            Codebusters Club is a community-driven group focused on empowering
            coders with a collaborative environment, exciting challenges, and
            continuous learning. Join us and be a part of the future of
            technology.
          </p>
        </div>

        {/* Quick Links */}
        <div className="md:w-1/3 flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#our-team" className="hover:text-white">
                Our Team
              </a>
            </li>
            <li>
              <a href="#join-us" className="hover:text-white">
                Join Us
              </a>
            </li>
            <li>
              <a href="#events" className="hover:text-white">
                Future Events
              </a>
            </li>
            <li>
              <a href="#highlights" className="hover:text-white">
                Highlights
              </a>
            </li>
            <li>
              <a href="#alumni" className="hover:text-white">
                Alumni
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="md:w-1/3 flex flex-col items-center md:items-start">
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p className="text-sm mb-2">
            Email:{" "}
            <a
              href="mailto:contact@codebusters.com"
              className="hover:text-white"
            >
              contact@codebusters.com
            </a>
          </p>
          <p className="text-sm mb-2">
            Phone:{" "}
            <a href="tel:+1234567890" className="hover:text-white">
              +1 (234) 567-890
            </a>
          </p>
          <p className="text-sm">Address: 123 Code Street, Tech City, CA</p>
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
