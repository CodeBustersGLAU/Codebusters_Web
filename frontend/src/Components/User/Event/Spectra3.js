import React from "react";
import DSC_3510 from "../../../Assets/Spectra3.0/DSC_3510.jpg";
import DSC_3512 from "../../../Assets/Spectra3.0/DSC_3512.jpg";
import DSC_6640_5 from "../../../Assets/Spectra3.0/DSC_6640 (5).jpg";
import DSC_6640_6 from "../../../Assets/Spectra3.0/DSC_6640 (6).jpg";
import DSC_6640_7 from "../../../Assets/Spectra3.0/DSC_6640 (7).jpg";
import DSC_6640_13 from "../../../Assets/Spectra3.0/DSC_6640 (13).jpg";
import Screenshot from "../../../Assets/Spectra3.0/Screenshot 2024-10-28 230327.png";
import IMG_20241124_WA0013 from "../../../Assets/Spectra3.0/IMG-20241124-WA0013.jpg";
import IMG_20241124_WA0012 from "../../../Assets/Spectra3.0/IMG-20241124-WA0012.jpg";
import IMG_20241124_WA0010 from "../../../Assets/Spectra3.0/IMG-20241124-WA0010.jpg";
import IMG_20241124_WA0008 from "../../../Assets/Spectra3.0/IMG-20241124-WA0008.jpg";
import IMG_20241124_WA0009 from "../../../Assets/Spectra3.0/IMG-20241124-WA0009.jpg";
import IMG_20241124_WA0004 from "../../../Assets/Spectra3.0/IMG-20241124-WA0004.jpg";
import IMG_20241015_WA0018 from "../../../Assets/Spectra3.0/IMG-20241015-WA0018.jpg";
import IMG_20241018_224707 from "../../../Assets/Spectra3.0/IMG_20241018_224707.jpg";
import DSC_6640_15 from "../../../Assets/Spectra3.0/DSC_6640 (15).jpg";

import ParticlesComponent from "../ParticlesTwo";

function Spectra3() {
  return (
    <div className="relative">
      {/* Particles Background */}
      <ParticlesComponent />

      <section className="relative z-10 text-gray-200 py-20 px-6 md:px-20">
        <div className="container mx-auto">
          {/* Title */}
          <h2 className="text-5xl font-bold text-center text-gray-300  mb-12 ">
            Spectra 3.0: The Ultimate Tech Event
          </h2>

          {/* Event Description */}
          <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Spectra 3.0 was a major event organized by CodeBusters at GLA University, bringing together aspiring coders and tech enthusiasts to enhance their skills in competitive programming and web development.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              The event included workshops, hackathons, and an alumni panel discussion, which made it an exciting and insightful experience for all attendees.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              It attracted over 1050 registrations and featured over 150 participants in the workshop and hackathon challenges, as well as a grand finale with the Alumni Panel.
            </p>

            <div className="mt-6">
              <a
                href="https://www.instagram.com/p/DBtPh6NyH2f/?igsh=OWxsNTY1aHRxNnhs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 text-lg font-semibold"
              >
                #spectra3.0 #codebustersclub #codechefchapters #glau
              </a>
            </div>
          </div>

          {/* Event Images Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[DSC_3510, DSC_3512, DSC_6640_5, DSC_6640_6, DSC_6640_7, DSC_6640_13, Screenshot, IMG_20241124_WA0013, IMG_20241124_WA0012, IMG_20241124_WA0010, IMG_20241124_WA0008, IMG_20241124_WA0009, IMG_20241124_WA0004, IMG_20241015_WA0018, IMG_20241018_224707, DSC_6640_15].map((image, index) => (
              <img
                key={index}
                src={image}
                alt="hello"
                className="w-full h-64 object-cover rounded-lg shadow-lg hover:scale-105 transition-all duration-300 ease-in-out"
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Spectra3;
