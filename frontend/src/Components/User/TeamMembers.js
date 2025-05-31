import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import ParticlesComponent from "./ParticlesTwo";
import LoadingAnimation from "./LoadingAnimation";
import { useUserContext } from "../../context";
import GlowingCursor from "./GlowingCursor";

const TeamMember = ({ name, imgSrc, position, email }) => (
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
        className="bg-slate-800 scale-75 bg-opacity-30 rounded-lg p-5 shadow-lg w-64 mx-auto transition-all duration-300 relative hover:border-2 hover:border-white"
        style={{
          boxShadow: "0 0 5px rgba(103, 195, 232, 0.5)",
        }}
      >
        <h3 className="text-2xl font-semibold font-angrybirds mb-4 text-white ">
          {position}
        </h3>
        <img
          src={imgSrc}
          alt={name}
          className="w-44 h-44 rounded-full mb-4 mx-auto"
          draggable="false"
          onContextMenu={(e) => e.preventDefault()}
        />
        <p className="text-xl font-medium text-white mb-4">{name}</p>
        <motion.a
          href={`mailto:${email}`}
          className="text-red-300 text-[10px] mt-2 p-2 rounded-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          style={{
            boxShadow: "0 0 5px rgba(187, 73, 81, 0.5)",
          }}
        >
          {email}
        </motion.a>
      </div>
    </Tilt>
  </motion.div>
);
const TeamMembers = () => {
  const { club } = useUserContext();
  if (!club || !club.members) {
    return (
      <div className="relative mt">
        <ParticlesComponent />
        <section className="relative text-gray-200 flex items-center justify-center h-screen w-screen">
          <LoadingAnimation />
        </section>
      </div>
    );
  } else {
    return (
      <div className="relative">
        <ParticlesComponent />
        <GlowingCursor/>
        <section className="relative text-gray-200 py-0 px-6 md:px-20">
          <div className="flex items-center justify-center mt-20">
            <motion.h2
              className="text-6xl font-bold font-angrybirds text-center mb-16 p-2 rounded-md transition-all duration-500 ease-in-out transform hover:text-blue-300 hover:scale-105 cursor-pointer"
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{
                // boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)",
              }}
            >
              Our Team
            </motion.h2>
          </div>
          {club.members.map((team, idx) => (
            <div key={idx} className="mb-2">
              <div className="flex justify-center items-center">
                <motion.h3
                  className="text-4xl font-bold uppercase bg-slate-600 p-2 font-dosis mt-4 text-center text-indigo-300 p-2 bg-opacity-20 rounded-md transition-all duration-500 ease-in-out transform hover:scale-105 cursor-pointer"
                  initial={{ opacity: 0, y: -40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  {team.name}
                </motion.h3>
              </div>
              <div className="flex flex-wrap justify-around">
                {team.members.map((member, idx) => (
                  <TeamMember
                    key={idx}
                    name={member.name}
                    imgSrc={member.photo}
                    position={member.position}
                    email={member.email}
                  />
                ))}
              </div>
            </div>
          ))}
        </section>
      </div>
    );
  }
};

export default TeamMembers;
