import React, { useState } from "react";
import { Link } from "react-router-dom";
import EventCard from "./EventCard"; // assuming EventCard component exists
import ParticlesComponent from "./ParticlesTwo";
import { motion } from 'framer-motion';

import SpectraImage1 from './../../Assets/Spectra3.0/DSC_6640 (6).jpg';
import SpectraImage2 from './../../Assets/Spectra3.0/DSC_6640 (13).jpg';
import SpectraImage3 from './../../Assets/Spectra3.0/DSC_6640 (15).jpg';
import Sp1 from "./../../Assets/Spectra3.0/2.jpg";
import Sp2 from "./../../Assets/Spectra3.0/1.jpg";
import Sp3 from "./../../Assets/Spectra3.0/IMG-20241124-WA0020.jpg";
import BB1 from "./../../Assets/ByteBattle/BYTE BATTLE 2.0.jpg";
import BB2 from "./../../Assets/ByteBattle/IMG-20241124-WA0017.jpg";
import BB3 from "./../../Assets/ByteBattle/IMG-20241124-WA0018.jpg";
import BB4 from "./../../Assets/ByteBattle/IMG-20241124-WA0019.jpg";

import SpectraImage4 from './../../Assets/Spectra3.0/IMG-20241124-WA0008.jpg';
import SpectraImage5 from './../../Assets/Spectra3.0/IMG-20241124-WA0010.jpg';
import SpectraImage6 from './../../Assets/Spectra3.0/DSC_6640 (17).jpg';

function PastEvents() {
  const [events] = useState([
    {
      title: "Spectra 3.0",
      description: "A major tech event organized by CodeBusters, featuring workshops, hackathons, and alumni panel.",
      images: [
        Sp1, Sp2, Sp3, SpectraImage3, SpectraImage4, SpectraImage5, SpectraImage6,
      ],
      timing: "October 2024",
      coordinators: ["CodeBusters GLAU"],
    },
    {
      title: "ByteBattle 3.0",
      description: "A Free Coding Contest Series (Weekly And BiWeekly) For 1st and 2nd Year Students",
      images: [BB1, BB2, BB3, BB4],
      timing: "October 2024",
      coordinators: ["CodeBusters GLAU"],
    },
    {
      title: "Spectra 3.0",
      description: "A major tech event organized by CodeBusters, featuring workshops, hackathons, and alumni panel.",
      images: [
        SpectraImage1, SpectraImage2, SpectraImage3, SpectraImage4, SpectraImage5, SpectraImage6,
      ],
      timing: "October 2024",
      coordinators: ["CodeBusters GLAU"],
    },
  ]);

  return (
    <div className="relative">
      <ParticlesComponent />
      <section className="relative z-10 text-gray-200 py-20 px-6 md:px-12 lg:px-20">
        <div className="flex justify-center items-center">
        <motion.h2
          className="text-6xl sm:text-5xl font-bold text-center mb-10 p-4 border-2 border-transparent rounded-md transition-all duration-500 ease-in-out transform hover:border-white hover:shadow-lg hover:scale-105 cursor-pointer"
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
            {events.map((event, index) => (
              <Link to={`/past-events/${index}`} key={index}>
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
