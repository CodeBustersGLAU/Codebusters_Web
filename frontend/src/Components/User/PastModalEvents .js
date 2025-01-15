import React from "react";
import { motion } from "framer-motion";

function PastModalEvents({ event, onClose }) {
  if (!event) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="bg-slate-800 p-4 rounded-lg w-3/4 max-w-lg sm:max-w-md lg:max-w-xl relative max-h-[80vh] overflow-y-auto"
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

        <h2 className="text-2xl sm:text-xl font-semibold text-white mb-3">{event.title}</h2>

        <p className="text-slate-200 mb-4 text-sm sm:text-base">{event.description}</p>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {event.images.slice(0, 10).map((image, index) => (
            <div key={index} className="relative">
              <img
                src={image}
                alt={`Event Image ${index + 1}`}
                className="w-full h-24 sm:h-32 rounded-md object-cover shadow-lg"
              />
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default PastModalEvents;
