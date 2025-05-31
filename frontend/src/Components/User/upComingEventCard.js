import React, { useState } from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { useNavigate } from "react-router-dom";
import LoadingAnimation from "./LoadingAnimation";

function UpcomingEventCard({ event }) {
  const navigate = useNavigate();
  const displayedImages = event.eventImages.filter((image) => image.length > 0);
  const img1 = displayedImages.slice(0, 6);
  const [loadingImages, setLoadingImages] = useState(
    displayedImages.map(() => false)
  );
  const [showModal, setShowModal] = useState(false);

  const handleImageLoad = (index) => {
    setLoadingImages((prevState) => {
      const newState = [...prevState];
      newState[index] = false;
      return newState;
    });
  };

  const handleRegisterClick = () => {
    window.open(event.registrationLink, "_blank");
  };

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <>
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
            boxShadow: "0 0 5px rgba(116, 225, 240, 0.5)",
            minHeight: "30px",
          }}
          onClick={openModal}
        >
          <motion.h3
            className="text-3xl sm:text-2xl font-semibold text-gray-300 text-center mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {event.eventName}
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
            {img1.map((image, index) => (
              <motion.div
                key={index}
                className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-md overflow-hidden"
              >
                {loadingImages[index] ? (
                  <div className="absolute inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50">
                    <LoadingAnimation />
                  </div>
                ) : (
                  <motion.img
                    src={image}
                    alt={`Event Image ${index + 1}`}
                    className="w-full h-full object-cover"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.6 }}
                    onLoad={() => handleImageLoad(index)}
                  />
                )}
              </motion.div>
            ))}
          </div>
          <motion.button
            className=" mt-4 bg-indigo-500 text-white px-6 py-3 rounded-lg text-lg shadow-lg hover:scale-105 hover:shadow-xl focus:outline-none disabled:bg-gray-400 transition-all duration-300"
         
                  onClick={handleRegisterClick}
                  whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
                  Register Now</motion.button>
        </motion.div>
      </Tilt>

      {showModal && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-[100]">
          <div className="bg-slate-800 p-6 rounded-lg w-3/4 max-w-4xl overflow-hidden relative z-[100]">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white text-lg font-semibold bg-red-600 px-4 py-2 rounded-full shadow-lg transition duration-300 transform hover:bg-red-700 hover:scale-105 focus:outline-none"
            >
              Close
            </button>
            <motion.h2
              className="text-4xl font-bold text-white mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {event.eventName}
            </motion.h2>
            <motion.p
              className="text-slate-200 text-sm mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              {event.description}
            </motion.p>
            <div className="flex justify-between mt-6 mb-4">
              <motion.button
                className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-3 rounded-lg text-lg shadow-lg hover:scale-105 hover:shadow-xl focus:outline-none disabled:bg-gray-400 transition-all duration-300"
                onClick={handleRegisterClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Register Now
              </motion.button>

            </div>
            <div className="overflow-y-auto max-h-80 mb-4">
              <div className="grid grid-cols-3 gap-4">
                {displayedImages.map((image, index) => (
                  <div key={index} className="relative w-full h-40">
                    <motion.img
                      src={image}
                      alt={`Event Image ${index + 1}`}
                      className="w-full h-full object-cover rounded-md"
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.6 }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default UpcomingEventCard;
