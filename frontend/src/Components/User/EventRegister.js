import React, { useState } from "react";
import { useParams } from "react-router-dom";
import events from "./DummyUpComing";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import LoadingAnimation from "./LoadingAnimation";

function EventRegister() {
  const { id } = useParams();
  const event = events.find((e) => e[id] === id);
  const [loadingImages, setLoadingImages] = useState(
    event?.images.map(() => true)
  );

  const handleImageLoad = (index) => {
    setLoadingImages((prevState) => {
      const newState = [...prevState];
      newState[index] = false;
      return newState;
    });
  };

  if (!event) {
    return <div className="text-center text-red-500">Event not found</div>;
  }

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-900 text-white">
      <div className="lg:w-1/2 p-8 mt-8 sm:mt-16 md:mt-24">
        <motion.h2
          className="text-3xl font-semibold mb-2 text-blue-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {event.title}
        </motion.h2>
        <motion.p
          className="text-gray-400 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {event.description}
        </motion.p>
        <motion.p
          className="text-gray-400 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {event.details}
        </motion.p>

        {event.posterImg && (
          <div className="relative mb-6">
            {loadingImages[0] && (
              <div className="absolute inset-0 flex justify-center items-center">
                <LoadingAnimation />
              </div>
            )}
            <motion.img
              src={event.posterImg}
              alt="Event Poster"
              className="w-full h-auto rounded-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onLoad={() => handleImageLoad(0)}
              transition={{ duration: 0.6 }}
            />
          </div>
        )}

        <div className="mt-6">
          <motion.h3
            className="text-xl font-semibold mb-2 text-blue-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Subevents:
          </motion.h3>
          <ul className="space-y-4">
            {event.subevents.map((subevent, index) => (
              <motion.li
                key={index}
                className="bg-gray-700 p-4 rounded-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 + index * 0.1 }}
              >
                <h4 className="text-lg font-semibold text-blue-400">{subevent.title}</h4>
                <p className="text-sm text-gray-300">{subevent.description}</p>
                <p className="text-sm text-gray-500">{subevent.time}</p>
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
          {event.images.map((img, index) => (
            <Tilt
              key={index}
              options={{ max: 25, scale: 1.05, speed: 400 }}
              className="tilt-card relative w-full h-full"
            >
              <div className="relative">
                {loadingImages[index + 1] && (
                  <div className="absolute inset-0 flex justify-center items-center">
                    <LoadingAnimation />
                  </div>
                )}
                <motion.img
                  src={img}
                  alt={`Event Image ${index + 1}`}
                  className="rounded-md w-full h-full object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  onLoad={() => handleImageLoad(index + 1)}
                />
              </div>
            </Tilt>
          ))}
        </div>
      </div>

      <div className="lg:w-1/2 p-8 bg-gray-800">
        <motion.h1
          className="text-3xl font-bold mb-4 mt-8 sm:mt-24 text-blue-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Register for {event.title}
        </motion.h1>
        <form className="space-y-4">
          <motion.input
            type="text"
            placeholder="Name"
            className="w-full p-2 rounded-md bg-gray-700 focus:outline-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          />
          <motion.input
            type="email"
            placeholder="Email"
            className="w-full p-2 rounded-md bg-gray-700 focus:outline-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          />
          <motion.button
            type="submit"
            className="bg-blue-600 py-2 px-4 rounded-md font-semibold hover:bg-blue-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Submit
          </motion.button>
        </form>
      </div>
    </div>
  );
}

export default EventRegister;
