import React from 'react';
import NFound from './../../Assets/Logo/notfound404.png';
import { Link } from 'react-router-dom';
import ParticlesComponent from './Particles';
import GlowingCursor from './GlowingCursor';

const NotFound = () => {
  return (
    <div className='relative'>
    <ParticlesComponent />
    <GlowingCursor/>
    <div className='relative'>
    <div 
      className="flex flex-col-reverse md:flex-row items-center justify-center min-h-screen text-white px-6 py-10 "
    >
      
      {/* Text Section */}
      <div className="md:w-1/2 text-center px-4 md:px-10 md:text-left animate__animated animate__fadeInLeft">
        <h1 className="text-6xl font-extrabold text-red-500 md:text-7xl">404</h1>
        <p className="mt-6 text-xl text-gray-300 md:text-2xl">
          Oops! The page you're looking for doesn't exist.
        </p>
        <p className="mt-2 text-gray-400">
          It seems you’ve ventured into uncharted territory. Don’t worry—we’ll help you find your way back!
        </p>
        <p className="mt-2 text-gray-400">
          Check the URL for typos, or head back to the homepage to continue exploring.
        </p>
        <Link
          to="/"
          className="mt-8 inline-block px-8 py-3 text-lg font-semibold bg-indigo-900 rounded-lg shadow-lg hover:bg-indigo-800 focus:outline-none focus:ring-4 focus:ring-blue-400 animate__animated animate__pulse animate__infinite"
        >
          Return to Home
        </Link>
      </div>

      {/* Image Section */}
      <div className="mb-10 md:mb-0 md:w-1/2 flex justify-center animate__animated animate__fadeInRight">
        <img
          src={NFound}
          alt="Not Found Illustration"
          className="w-full max-w-xs md:max-w-md lg:max-w-lg"
        />
      </div>
    </div>
    </div>
    </div>
  );
};

export default NotFound;
