import React, { useState } from "react";
import Logo from "./../../Assets/Logo/Codebusters02.png";
import { Link } from "react-router-dom";
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex justify-between items-center p-4 bg-opacity-70 backdrop-blur-sm bg-slate-950 z-50 fixed w-full top-0 left-0 shadow-md">
      {/* Logo */}
      <Link to="/">
        <img src={Logo} className="h-12 cursor-pointe " alt="Codebusters Logo" />
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6 text-white font-semibold mr-20">
        
        <Link to="/joinUs">
          <button className="px-6 py-2 hover:bg-blue-400 rounded-md transition-all duration-300">
            Join Us
          </button>
        </Link>
        <Link to="/team-members">
          <button className="px-6 py-2 hover:bg-blue-400 rounded-md transition-all duration-300">
            Our Team
          </button>
        </Link>
        <Link to="/UpcomingEvents">
          <button className="px-6 py-2 hover:bg-blue-400 rounded-md transition-all duration-300">
            UpcomingEvents
          </button>
        </Link>
        <Link to="/past-events">
          <button className="px-6 py-2 hover:bg-blue-400 rounded-md transition-all duration-300">
            Highlights
          </button>
        </Link>
        <Link to="/Alumni">
          <button className="px-6 py-2 hover:bg-blue-400 rounded-md transition-all duration-300">
            Alumnies
          </button>
        </Link>
      </div>

      {/* Mobile Menu Button (Hamburger) */}
      <button
        className="md:hidden text-slate-300"
        onClick={toggleMenu}
      >
        {isMenuOpen ? (
          <span className="text-3xl">X</span>
        ) : (
          <span className="text-3xl">☰</span>
        )}
      </button>

      {/* Mobile Menu (When Menu is Open) */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } absolute top-16 left-0 w-full bg-gray-900 text-slate-300 text-center space-y-4 py-4 md:hidden transition-all duration-300 ease-in-out transform`}
      >
        <Link to="/team-members">
          <button className="w-full py-2 hover:bg-blue-300 rounded-md transition-all duration-300">
            Our Team
          </button>
        </Link>
        <Link to="/Join-us">
          <button className="w-full py-2 hover:bg-blue-300 rounded-md transition-all duration-300">
            Join Us
          </button>
        </Link>
        
        <Link to="/Future-events">
          <button className="w-full py-2 hover:bg-blue-300 rounded-md transition-all duration-300">
            Future Events
          </button>
        </Link>
        <Link to="/past-events">
          <button className="w-full py-2 hover:bg-blue-300 rounded-md transition-all duration-300">
            Highlights
          </button>
        </Link>
        <Link to="/Alumni">
          <button className="w-full py-2 hover:bg-blue-300 rounded-md transition-all duration-300">
            Alumnies
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
