import React, { useEffect, useState } from "react";
import ParticlesComponent from "./ParticlesTwo";
import UpcomingEventCard from "./upComingEventCard";
import { motion } from "framer-motion";
import { useUserContext } from "./../../context";
import GlowingCursor from "./GlowingCursor";

const UpcomingEvents = () => {
  const { club } = useUserContext();
  const [events, setEvents] = useState([]);

  useEffect(() => {
    if (club && club.events) {
      setEvents(club.events);
    }
  }, [club]);

  return (
    <div className="relative">
      <ParticlesComponent />
      <GlowingCursor/>
      <section className="relative text-gray-200 py-10 px-6 sm:px-8 md:px-16 lg:px-20 mb-28">
        <div className="flex items-center justify-center mt-28 mb-6 sm:mt-28 md:mt-8 sm:mb-10">
          <motion.h2
            className="text-5xl sm:text-5xl md:text-6xl font-bold font-angrybirds hover:text-blue-300 text-center mb-7 p-2 rounded-md transition-all duration-500 ease-in-out transform hover:scale-105 cursor-pointer"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Upcoming Events
          </motion.h2>
        </div>
        <div className="flex items-center justify-center">
          <div
            className={`grid ${
              events.length === 1
                ? "grid-cols-1"
                : "grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            } gap-6 sm:gap-8`}
          >
            {events.length > 0 ? (
              events.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 * index }}
                >
                  <UpcomingEventCard event={event} />
                </motion.div>
              ))
            ) : (
              <p>No upcoming events at the moment.</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default UpcomingEvents;
