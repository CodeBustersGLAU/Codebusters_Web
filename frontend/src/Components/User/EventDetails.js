import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const EventDetails = ({ event }) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/past-events");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <div className="bg-white rounded-lg p-6 shadow-lg w-full max-w-3xl">
        <motion.h2
          className="text-3xl font-bold text-gray-800 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {event.title}
        </motion.h2>
        <p className="text-gray-600 mb-4">{event.description}</p>
        <h3 className="text-xl font-semibold mb-2">Details</h3>
        <p className="text-gray-500 mb-2">Timing: {event.timing}</p>
        <p className="text-gray-500 mb-4">
          Coordinators: {event.coordinators.join(", ")}
        </p>
        <h3 className="text-xl font-semibold mb-2">Images</h3>
        <div className="flex flex-wrap gap-4 mb-4">
          {event.images.map((image, index) => (
            <motion.img
              key={index}
              src={image}
              alt={`Event ${event.title} - Image ${index + 1}`}
              className="w-full md:w-1/2 lg:w-1/3 rounded-md shadow-sm"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + index * 0.2, duration: 0.6 }}
            />
          ))}
        </div>
        <motion.button
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
          onClick={handleBackClick}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          Back to Events
        </motion.button>
      </div>
    </div>
  );
};

export default EventDetails;
