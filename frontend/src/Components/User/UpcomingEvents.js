import React from 'react'
import ParticlesComponent from "./ParticlesTwo";
import UpcomingEventCard from './upComingEventCard';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import events from './DummyUpComing';
const UpcomingEvents = () => {
    return (
    <div className="relative">
      <ParticlesComponent />
      <section className="relative z-10 text-gray-200 py-10 px-6 sm:px-8 md:px-16 lg:px-20 mb-28">
        <div className="flex items-center justify-center mt-28 mb-6 sm:mt-28 sm:mb-10">
          <motion.h2
            className="text-3xl sm:text-5xl font-bold text-center mb-16 p-2 border-2 border-transparent rounded-md transition-all duration-500 ease-in-out transform hover:border-white hover:shadow-lg hover:scale-105 cursor-pointer"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)",
            }}
          >
            Upcoming Events
          </motion.h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 * index }}
            >
              <UpcomingEventCard event={event} />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
export default UpcomingEvents;
