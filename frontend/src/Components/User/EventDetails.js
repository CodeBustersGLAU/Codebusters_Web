import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import PastEventsData from "./DummyPastEvents";
import LoadingAnimation from "./LoadingAnimation";
const EventDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const event = PastEventsData.find((e) => e.id === id);
  const [loading, setLoading] = useState(true);

  if (!event) {
    return <p className="text-center text-red-600 text-xl font-semibold">Event not found!</p>;
  }

  const handleImageLoad = () => {
    setLoading(false);
  };
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-indigo-200 flex flex-col items-center p-6 sm:p-12">
      <div className="bg-white rounded-xl p-8 shadow-2xl w-full max-w-5xl">
        <motion.h2
          className="text-4xl font-extrabold text-gray-900 mb-4 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {event.title}
        </motion.h2>

        <motion.p
          className="text-lg text-gray-700 mb-6 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {event.description}
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Event Details</h3>
            <p className="text-gray-600 mb-2"><strong>Timing:</strong> {event.timing}</p>
            <p className="text-gray-600"><strong>Coordinators:</strong> {event.coordinators.join(", ")}</p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Event Images</h3>
            <div className="flex flex-wrap gap-6">
              {loading && <LoadingAnimation />} {/* Show loading animation */}
              {event.images.map((image, index) => (
                <motion.img
                  key={index}
                  src={image}
                  alt={`Event ${event.title} - Image ${index + 1}`}
                  className="w-full sm:w-1/2 lg:w-1/3 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + index * 0.2, duration: 0.6 }}
                  onLoad={handleImageLoad} // Set the image load event
                />
              ))}
            </div>
          </div>
        </div>

        <motion.button
          className="mt-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-4 rounded-lg shadow-xl hover:bg-gradient-to-l transition duration-300 w-full sm:w-auto"
          onClick={() => navigate("/past-events")}
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
