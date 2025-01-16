import React, { useState } from "react";
import { motion } from "framer-motion";
import EventCard from "./EventCard";
import ParticlesComponent from "./ParticlesTwo";
import { useUserContext } from "../../context";
import LoadingAnimation from "./LoadingAnimation";
import PastModalEvents from "./PastModalEvents ";

function PastEvents() {
  const { club } = useUserContext();
  const [selectedEvent, setSelectedEvent] = useState(null); // State to track the selected event for the modal

  if (!club || !club.highlights) {
    return (
      <div className="relative mt">
        <ParticlesComponent />
        <section className="relative text-gray-200 flex items-center justify-center h-screen w-screen">
          <LoadingAnimation />
        </section>
      </div>
    );
  }
  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  const closeModal = () => {
    setSelectedEvent(null);
  };

  return (
    <div className="relative">
      <ParticlesComponent />
      <section className="relative text-gray-200 py-20 px-6 md:px-12 lg:px-20 ">
        <div className="flex justify-center items-center">
          <motion.h2
            className="text-6xl sm:text-5xl font-bold text-center mb-1 p-4 border-2 border-transparent rounded-md mt-8 transition-all duration-500 ease-in-out transform hover:border-white hover:shadow-lg hover:scale-105 cursor-pointer"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)",
            }}
          >
            Our Past Events
          </motion.h2>
        </div>
        <div className="flex justify-center items-center min-h-screen">
          <div
            className={`grid ${
              club.highlights.length === 1
                ? "grid-cols-1"
                : "grid-cols-1 md:grid-cols-2 lg:grid-cols-2"
            } gap-16 md:gap-20 lg:gap-36 justify-items-center mt-10 md:mt-0`}
          >
            {club.highlights.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 * index }}
                className="cursor-pointer"
                onClick={() => handleEventClick(event)}
              >
                <EventCard event={event} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {selectedEvent && (
        <PastModalEvents event={selectedEvent} onClose={closeModal} />
      )}
    </div>
  );
}

export default PastEvents;
