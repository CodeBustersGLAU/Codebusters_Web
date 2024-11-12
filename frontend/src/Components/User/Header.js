import React from "react";
import Logo from "./../../Assets/Logo/Codebusters.png";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="flex flex-row justify-between p-4 bg-blue-100">
      <Link to="/">
        <img src={Logo} className="h-10 cursor-pointer ml-10 "></img>
      </Link>
      <section className="text-blue-950 font-semibold mr-20">
        <Link to="/team-members">
          <button className="px-6 py-2 hover:bg-blue-200 ml-2 mr-2 rounded-md transition-all duration-300">
            Our Team
          </button>
        </Link>
        <Link to="/Join-us">
          <button className="px-6 py-2 hover:bg-blue-200 ml-2 mr-2 rounded-md transition-all duration-300">
            Join Us
          </button>
        </Link>
        <Link to="/Future-events">
          <button className="px-6 py-2 hover:bg-blue-200 ml-2 mr-2 rounded-md transition-all duration-300">
            Future Events
          </button>
        </Link>
        <Link to="/past-events">
          <button className="px-6 py-2 hover:bg-blue-200 ml-2 mr-2 rounded-md transition-all duration-300">
            Highlights
          </button>
        </Link>
        <Link to="/Alumni">
          <button className="px-6 py-2 hover:bg-blue-200 ml-2 mr-2 rounded-md transition-all duration-300">
            Alumnies
          </button>
        </Link>
      </section>
    </div>
  );
}

export default Header;
