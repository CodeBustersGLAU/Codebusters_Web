import React from 'react'
import ParticlesComponent from "./ParticlesTwo";
import NewEventCard from './NewEventCard';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';

const UpcomingEvents = () => {
  const events = [
    {
      title: "Tech Workshop",
      description: "A hands-on workshop on cutting-edge tech trends.",
      images: ["https://via.placeholder.com/150", "https://via.placeholder.com/150", "https://via.placeholder.com/150"]
    },
    {
      title: "Hackathon",
      description: "24-hour hackathon with exciting prizes.",
      images: ["https://via.placeholder.com/150", "https://via.placeholder.com/150", "https://via.placeholder.com/150"]
    },
    {
      title: "Web Development Bootcamp",
      description: "Learn full-stack web development in a week.",
      images: ["https://via.placeholder.com/150", "https://via.placeholder.com/150", "https://via.placeholder.com/150"]
    }
  ];

  return (
    <div className="relative">
      <ParticlesComponent />
      <section className="relative z-10 text-gray-200 py-10 px-6 sm:px-8 md:px-16 lg:px-20">
        <h2 className="text-5xl font-bold text-center mb-6 mt-20 font-dosis">Upcoming Events</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 * index }}
            >
              <Tilt
                options={{
                  max: 25,
                  scale: 1.05,
                  speed: 400,
                }}
              >
                <NewEventCard event={event} />
              </Tilt>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default UpcomingEvents;
