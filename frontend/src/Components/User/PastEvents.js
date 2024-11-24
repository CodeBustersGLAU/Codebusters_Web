import React, { useState } from "react";
import { Link } from "react-router-dom";
import EventCard from "./EventCard"; // assuming EventCard component exists
import SpectraImage1 from './../../Assets/Spectra3.0/DSC_6640 (6).jpg';
import SpectraImage2 from './../../Assets/Spectra3.0/DSC_6640 (13).jpg';
import SpectraImage3 from './../../Assets/Spectra3.0/DSC_6640 (15).jpg';
import SpectraImage4 from './../../Assets/Spectra3.0/IMG-20241124-WA0008.jpg';
import SpectraImage5 from './../../Assets/Spectra3.0/IMG-20241124-WA0010.jpg';
import SpectraImage6 from './../../Assets/Spectra3.0/DSC_6640 (17).jpg';

import ParticlesComponent from "./ParticlesTwo";
function PastEvents() {
  const [events] = useState([
    {
      title: "Spectra 3.0",
      description: "A major tech event organized by CodeBusters, featuring workshops, hackathons, and alumni panel.",
      images: [
        SpectraImage1,
        SpectraImage2,
        SpectraImage3,
        SpectraImage4,
        SpectraImage5,
        SpectraImage6,
      ],
      timing: "October 2024",
      coordinators: ["CodeBusters GLAU"],
    },
    {
      title: "Spectra 3.0",
      description: "A major tech event organized by CodeBusters, featuring workshops, hackathons, and alumni panel.",
      images: [
        SpectraImage1,
        SpectraImage2,
        SpectraImage3,
        SpectraImage4,
        SpectraImage5,
        SpectraImage6,
      ],
      timing: "October 2024",
      coordinators: ["CodeBusters GLAU"],
    },
    {
      title: "Spectra 3.0",
      description: "A major tech event organized by CodeBusters, featuring workshops, hackathons, and alumni panel.",
      images: [
        SpectraImage1,
        SpectraImage2,
        SpectraImage3,
        SpectraImage4,
        SpectraImage5,
        SpectraImage6,
      ],
      timing: "October 2024",
      coordinators: ["CodeBusters GLAU"],
    },
  ]);

  return (
    <div className="relative">
    {/* Particles Background */}
    <ParticlesComponent />
    <ParticlesComponent />
    <section className="relative z-10 text-gray-200 py-20 px-6 md:px-20">
      <h2 className="text-5xl font-bold text-center text-white mb-12 mt-24 font-serif">
        Our Past Events
      </h2>
      <div className="flex items-center justify-center max-w-9xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <Link to={`/past-events/${index}`} key={index}>
              <div className="w-full h-96">
                <EventCard event={event} />
              </div>
            </Link>
          ))}
        </div>
      </div>
      
    </section>
    </div>
  );
}

export default PastEvents;
