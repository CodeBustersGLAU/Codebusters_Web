import React from "react";
import { Link } from "react-router-dom";
import EventCard from "./EventCard";
import ParticlesComponent from "./ParticlesTwo";
import { motion } from 'framer-motion';
import PastEventsData from './DummyPastEvents';

function PastEvents() {
  return (
    <div className="relative">
      <ParticlesComponent />
      <section className="relative z-10 text-gray-200 py-20 px-6 md:px-12 lg:px-20">
        <div className="flex justify-center items-center">
          <motion.h2
            className="text-6xl sm:text-5xl font-bold text-center mb-10 p-4 border-2 border-transparent rounded-md  mt-8 transition-all duration-500 ease-in-out transform hover:border-white hover:shadow-lg hover:scale-105 cursor-pointer"
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
        <div className="flex items-center justify-center max-w-full mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16 md:gap-20 lg:gap-36">
            {PastEventsData.map((event, index) => (
              <Link to={`/past-events/${event.id}`} key={event.id}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 * index }}
                >
                  <EventCard event={event} />
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default PastEvents;
