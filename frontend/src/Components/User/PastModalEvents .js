import React, { useState } from "react";
import { motion } from "framer-motion";
import LoadingAnimation from "./LoadingAnimation";

function PastModalEvents({ event, onClose }) {
  // State to track loading status of images
  const [loading, setLoading] = useState(true);

  if (!event) return null; // Return early if no event data

  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <motion.div
      className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="bg-slate-800 p-6 rounded-lg w-11/12 max-w-4xl sm:max-w-3xl lg:max-w-3xl relative max-h-[90vh] overflow-y-auto"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.9 }}
        transition={{ duration: 0.3 }}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white text-sm sm:text-base font-semibold bg-red-600 px-4 py-2 rounded-full shadow-lg transition duration-300 transform hover:bg-red-700 hover:scale-105 focus:outline-none"
        >
          Close
        </button>

        <h2 className="text-3xl sm:text-2xl font-semibold text-white mb-4 mt-3">
          {event.title}
        </h2>

        <p className="text-slate-200 mb-6 text-sm sm:text-base">
          {event.description}
        </p>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {event.images.slice(0, 10).map((image, index) => (
            <>
              {image != "" && (
                <div key={index} className="relative">
                  {loading && (
                    <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-50 rounded-md">
                      <LoadingAnimation />
                    </div>
                  )}
                  <img
                    src={image}
                    alt={`Event Image ${index + 1}`}
                    className="w-full h-40 sm:h-48 md:h-56 lg:h-64 rounded-md object-cover shadow-lg"
                    onLoad={handleImageLoad}
                  />
                </div>
              )}
            </>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default PastModalEvents;
