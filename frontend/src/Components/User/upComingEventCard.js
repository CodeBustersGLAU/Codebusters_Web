import React from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

function UpcomingEventCard({ event }) {
  return (
    <Tilt
      options={{ max: 25, scale: 1.05, speed: 400 }}
      className="tilt-card mx-auto transition-transform duration-500 ease-out"
    >
      <motion.div
        className="flex flex-col items-center bg-slate-800 bg-opacity-30 rounded-lg shadow-md p-6 w-full max-w-xs mx-auto cursor-pointer transition-all duration-300 relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)",
          minHeight: "30px", 
        }}
      >
        <motion.h3
          className="text-3xl sm:text-2xl font-semibold text-gray-300 text-center mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {event.title}
        </motion.h3>
        <motion.p
          className="text-slate-300 text-xs sm:text-sm text-center mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {event.description}
        </motion.p>

        <div className="grid grid-cols-3 gap-2 mt-4 sm:mt-6">
          {event.images.map((image, index) => (
            <motion.img
              key={index}
              src={image}
              alt={`Event Image ${index + 1}`}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-md object-cover"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6 }}
            />
          ))}
        </div>

        <motion.div
          className="absolute inset-0 border-2 border-transparent rounded-lg hover:border-blue-200 transition-all duration-300 ease-in-out"
        ></motion.div>
      </motion.div>
    </Tilt>
  );
}

export default UpcomingEventCard;
