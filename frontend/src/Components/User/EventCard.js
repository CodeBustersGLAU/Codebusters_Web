import React from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

function EventCard({ event, onClick }) {
  return (
    <Tilt options={{ max: 15, scale: 1.05, speed: 400 }} className="tilt-card mb-6">
      <motion.div
        className="bg-white shadow-2xl rounded-xl p-6 cursor-pointer transition-transform transform hover:scale-105 duration-300 hover:shadow-lg relative overflow-hidden"
        onClick={onClick}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          background:
            "url('https://www.transparenttextures.com/patterns/45-degree-fabric-light.png'), linear-gradient(135deg, #1e3a8a, #93c5fd)", // Lighter gradient with soft blue tones
          backgroundSize: "cover",
          boxShadow: "0 0 10px rgba(29, 78, 216, 0.7)", 
        }}
      >
        <motion.div
          className="absolute inset-0 bg-white opacity-40 rounded-xl" // Lighter white overlay
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
        ></motion.div>

        <motion.h3
          className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 text-center relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {event.title}
        </motion.h3>

        <motion.p
          className="text-gray-700 mb-4 text-center relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {event.description}
        </motion.p>

        <div className="flex flex-wrap gap-4 justify-center relative z-10">
          {event.images.slice(0, 3).map((image, index) => (
            <motion.img
              key={index}
              src={image}
              alt={`Event ${event.title} - Image ${index + 1}`}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 max-w-full rounded-lg shadow-md transition-all duration-300 transform hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.2 }}
            />
          ))}
        </div>
<motion.div
          className="absolute inset-0 border-4 border-transparent rounded-lg hover:border-blue-300 transition-all duration-300 ease-in-out"
        ></motion.div>
      </motion.div>
    </Tilt>
  );
}

export default EventCard;
