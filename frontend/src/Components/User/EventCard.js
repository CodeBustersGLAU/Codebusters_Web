import React, { useState } from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
function EventCard({ event, onClick }) {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const handleImageLoad = () => {
    setImagesLoaded(true);
  };

  return (
    <Tilt
      options={{ max: 25, scale: 1.05, speed: 400 }}
      className="tilt-card mx-auto transition-transform duration-500 ease-out"
    >
      <motion.div
        className="flex flex-col items-center bg-slate-800 bg-opacity-30 rounded-lg shadow-md p-8 w-full max-w-sm mx-auto cursor-pointer transition-all duration-300 relative"
        onClick={onClick}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)",
          minHeight: "250px",
        }}
      >
        <motion.h3
          className="text-3xl sm:text-2xl font-semibold text-gray-900"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {event.title}
        </motion.h3>

        <motion.p
          className="text-gray-500 text-xs sm:text-sm text-center mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {event.description}
        </motion.p>

        {/* Lottie loader animation while images are loading */}
        {!imagesLoaded && (
          <div className="absolute inset-0 flex justify-center items-center bg-slate-800 bg-opacity-50 rounded-lg z-10">
            <DotLottieReact
              src="https://lottie.host/fafe3273-ccc7-4a0e-a027-80ad253344c5/8nQjFoScrB.lottie"
              loop
              autoplay
              style={{ width: "60px", height: "60px" }}
            />
          </div>
        )}

        <div className="grid grid-cols-2 gap-3 mt-6 sm:mt-8">
          {event.images.slice(0, 4).map((image, index) => (
            <motion.img
              key={index}
              src={image}
              alt={`Event Image ${index + 1}`}
              className="w-40 h-36 sm:w-40 sm:h-36 rounded-md object-cover"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6 }}
              onLoad={handleImageLoad}
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

export default EventCard;
