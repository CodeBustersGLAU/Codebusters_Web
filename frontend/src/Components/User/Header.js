import React, { useState } from "react";
import Logo from "./../../Assets/Logo/codebuster_base_logo.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex justify-between bg-opacity-70 backdrop-blur-sm items-center p-4 md:z-10 z-40 fixed w-full top-0 left-0">
      <Link to="/home">
        <motion.img
          src={Logo}
          className="h-8 px-4 cursor-pointer md:px-20"
          alt="Codebusters Logo"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
      </Link>

      <div className="hidden md:flex space-x-6 text-white font-semibold mr-20">
        <Link to="/joinUs">
          <motion.button
            className="px-4 py-2 rounded-md border-2 border-transparent transition-all duration-300 hover:bg-slate-800/75 hover:border-indigo-200"
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{ scale: 0.95 }}
          >
            Join Us
          </motion.button>
        </Link>
        <div className="border-s my-4 border-indigo-300 h-4 justify-center"></div>
        <Link to="/team-members">
          <motion.button
            className="px-4 py-2 rounded-md border-2 border-transparent transition-all duration-300 hover:bg-slate-800/75 hover:border-indigo-200"
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{ scale: 0.95 }}
          >
            Our Team
          </motion.button>
        </Link>
        <div className="border-s my-4 border-indigo-300 h-4 justify-center"></div>
        <Link to="/UpcomingEvents">
          <motion.button
            className="px-4 py-2 rounded-md border-2 border-transparent transition-all duration-300 hover:bg-slate-800/75 hover:border-indigo-200"
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{ scale: 0.95 }}
          >
            Upcoming Events
          </motion.button>
        </Link>
        <div className="border-s my-4 border-indigo-300 h-4 justify-center"></div>
        <Link to="/past-events">
          <motion.button
            className="px-4 py-2 rounded-md border-2 border-transparent transition-all duration-300 hover:bg-slate-800/75 hover:border-indigo-200"
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{ scale: 0.95 }}
          >
            Highlights
          </motion.button>
        </Link>
        <div className="border-s my-4 border-indigo-300 h-4 justify-center"></div>
        <Link to="/Alumni">
          <motion.button
            className="px-4 py-2 rounded-md border-2 border-transparent transition-all duration-300 hover:bg-slate-800/75 hover:border-indigo-200"
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{ scale: 0.95 }}
          >
            Alumni
          </motion.button>
        </Link>
      </div>

      <button className="md:hidden text-slate-300" onClick={toggleMenu}>
        <motion.span
          className="text-4xl"
          initial={{ rotate: 0 }}
          animate={{ rotate: isMenuOpen ? 180 : 0 }}
          transition={{ duration: 0.5 }}
        >
          ☰
        </motion.span>
      </button>

      <motion.div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } absolute top-16 left-0 w-full bg-slate-900 text-slate-300 text-center space-y-4 py-4 md:hidden transition-all duration-300 ease-in-out transform`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <Link to="/team-members">
          <motion.button
            className="w-full py-2 rounded-md border-transparent transition-all duration-300 hover:border-blue-400"
            onClick={() => setIsMenuOpen(false)}
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{ scale: 0.95 }}
          >
            Our Team
          </motion.button>
        </Link>
        <Link to="/joinUs">
          <motion.button
            className="w-full py-2 rounded-md border-transparent transition-all duration-300 hover:border-blue-400"
            onClick={() => setIsMenuOpen(false)}
            whileHover={{
              scale: 1.3,
            }}
            whileTap={{ scale: 0.95 }}
          >
            Join Us
          </motion.button>
        </Link>
        <Link to="/UpcomingEvents">
          <motion.button
            className="w-full py-2 rounded-md  border-transparent transition-all duration-300 hover:border-blue-400"
            onClick={() => setIsMenuOpen(false)}
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{ scale: 0.95 }}
          >
            Upcoming Events
          </motion.button>
        </Link>
        <Link to="/past-events">
          <motion.button
            className="w-full py-2 rounded-md border-transparent transition-all duration-300 hover:border-blue-400"
            onClick={() => setIsMenuOpen(false)}
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{ scale: 0.95 }}
          >
            Highlights
          </motion.button>
        </Link>
        <Link to="/Alumni">
          <motion.button
            className="w-full py-2 rounded-md border-transparent transition-all duration-300 hover:border-blue-400"
            onClick={() => setIsMenuOpen(false)}
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{ scale: 0.95 }}
          >
            Alumni
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
}

export default Header;
