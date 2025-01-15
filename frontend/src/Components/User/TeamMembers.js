import React, { useState } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import ParticlesComponent from "./ParticlesTwo";
import LoadingAnimation from "./LoadingAnimation";
import { useUserContext } from "../../context";
const TeamMember = ({ title, name, imgSrc }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    style={{
      cursor: "pointer",
    }}
  >
    <Tilt
      options={{ max: 16, scale: 1.1, speed: 400 }}
      className="tilt-card mx-auto transition-transform duration-500 ease-out text-center"
    >
      <div
        className="bg-slate-800 bg-opacity-30 rounded-lg p-5 rounded-xl shadow-lg w-64 mx-auto mb-20 transition-all duration-300 relative hover:border-2 hover:border-white"
        style={{
          boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)",
        }}
      >
        <h3 className="text-2xl font-semibold mb-4 text-white">{title}</h3>
        <img
          src={imgSrc}
          alt={name}
          className="w-52 h-52 rounded-full mb-4 mx-auto"
          draggable="false"
          onContextMenu={(e) => e.preventDefault()}
        />
        <p className="text-xl font-medium text-white mb-4">{name}</p>
      </div>
    </Tilt>
  </motion.div>
);
const TeamMembers = () => {
  const { club } = useUserContext();
  if (!club || !club.members) {
    return <LoadingAnimation />;
  }
else{
  return (
    <div className="relative">
      <ParticlesComponent />
      <section className="relative z-10 text-gray-200 py-20 px-6 md:px-20">
        <div className="flex items-center justify-center mt-16">
          <motion.h2
            className="text-6xl font-bold text-center mb-16 p-2 border-2 border-transparent rounded-md transition-all duration-500 ease-in-out transform hover:border-white hover:shadow-lg hover:scale-105 cursor-pointer"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)",
            }}
          >
            Our Team
          </motion.h2>
        </div>
        {club.map((team, idx) => (
          <div key={idx} className="mb-8">
            <div className="flex justify-center items-center">
              <motion.h3
                className="text-4xl font-semibold text-center mb-20 p-2 border-2 border-transparent rounded-md transition-all duration-500 ease-in-out transform hover:border-white hover:shadow-lg hover:scale-105 cursor-pointer"
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                style={{
                  boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)",
                }}
              >
                {team.team}
              </motion.h3>
            </div>
            <div className="flex flex-wrap justify-around gap-8">
              {team.members.map((member, idx) => (
                <TeamMember
                  key={idx}
                  title={member.post}
                  name={member.name}
                  imgSrc={member.photo}
                />
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};
}

export default TeamMembers;
