import React from "react";
import ParticlesComponent from "./ParticlesTwo";
import { motion } from "framer-motion";
import LoadingAnimation from "./LoadingAnimation";
import { useUserContext } from "../../context";
import AlumniCard from "./AlumniCard";
import GlowingCursor from "./GlowingCursor";

const AlumniList = () => {
  const { club } = useUserContext();
  if (!club || !club.alumnies) {
    return (
      <div className="relative mt">
        <ParticlesComponent />
        <section className="relative text-gray-200 flex items-center justify-center h-screen w-screen">
          <LoadingAnimation />
        </section>
      </div>
    );
  }
  return (
    <div className="relative">
      <ParticlesComponent />
      <GlowingCursor/>
      <section className="relative text-gray-200 py-20 px-6 md:px-20">
        <div className="flex items-center justify-center mt-2">
          <motion.h2
            className="text-5xl md:text-6xl font-bold font-angrybirds hover:text-blue-300 text-center mb-16 p-2 rounded-md transition-all duration-500 ease-in-out transform hover:scale-105 cursor-pointer"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Alumni
          </motion.h2>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {club.alumnies.map((alumni, idx) => (
            <AlumniCard
              key={idx}
              name={alumni.name}
              batch={alumni.graduationYear}
              email={alumni.email}
              profilePicture={alumni.photo}
              bio={alumni.about}
              company={alumni.company}
              profession={alumni.profession}
            />
          ))}
        </div>
      </section>
    </div>
  );
};
export default AlumniList;
