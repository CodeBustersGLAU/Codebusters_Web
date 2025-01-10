import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import Profile1 from "./../../Assets/Profile pictures/1formal.JPG";
import Akshat from "./../../Assets/Profile pictures/Akshat.jpg";
import Madushudan from "./../../Assets/Profile pictures/Madushudan.jpg";
import Saumya from "./../../Assets/Profile pictures/Saumya.jpg";
import Vikas from "./../../Assets/Profile pictures/Vikas.jpg";
import Shubhneet from "./../../Assets/Profile pictures/Shubhneet.jpg";
import Pranjal from "./../../Assets/Profile pictures/Pranjal.jpg";
import Prahsant from "./../../Assets/Profile pictures/Prahsant.jpg";
import Raunank from "./../../Assets/Profile pictures/Raunank.jpg";
import Palash from "./../../Assets/Profile pictures/Palash.jpg";
import Bhavana from "./../../Assets/Profile pictures/Bhavana.jpg";
import Sauhard from "./../../Assets/Profile pictures/Sauhard.jpg";
import Sneha from "./../../Assets/Profile pictures/Sneha.jpg";
import Mohit from "./../../Assets/Profile pictures/Mohit.jpg";
import SpectraImage2 from "./../../Assets/Spectra3.0/DSC_6640 (13).jpg";
import Jatin from "./../../Assets/Profile pictures/jatin-profile-picture-crop1.ccabd51028d488edc02f.png";
import ParticlesComponent from "./ParticlesTwo";
const TeamMember = ({ title, name, imgSrc }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
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
const AssociatesSection = ({ title, members }) => (
  <div className="mb-16">
    <h3 className="text-xl font-semibold mb-8 text-center text-white">
      {title}
    </h3>
    <div className="flex flex-wrap justify-around gap-8">
      {members.map(({ name, imgSrc }, idx) => (
        <TeamMember key={idx} name={name} imgSrc={imgSrc} />
      ))}
    </div>
  </div>
);
const TeamMembers = () => {
  return (
    <div className="relative">
      <ParticlesComponent />
      <section className="relative z-10 text-gray-200 py-20 px-6 md:px-20">
        <h2 className="text-6xl font-bold text-center mb-12 mt-6 font-dosis text-white">
          Our Team
        </h2>
        <div className="team-member-wrapper">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Tilt
              options={{ max: 20, scale: 1.2, speed: 400 }}
              className="tilt-card mx-auto transition-transform duration-500 ease-out text-center"
            >
              <div
                className="bg-slate-800 bg-opacity-30 rounded-lg p-5 rounded-xl shadow-lg w-64 mx-auto mb-10 transition-all duration-300 relative hover:border-2 hover:border-white"
                style={{
                  boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)",
                }}
              >
                <h1 className="text-center mb-6 text-xl font-semibold text-white">
                  Faculty Mentor
                </h1>
                <img
                  src={SpectraImage2}
                  alt="Vinay Sir"
                  className="w-52 h-52 rounded-full mb-4 mx-auto"
                  draggable="false"
                  onContextMenu={(e) => e.preventDefault()}
                />
              </div>
            </Tilt>
          </motion.div>

          <h2 className="text-center text-2xl font-semibold text-white">
            Mr Mridul Dixit
          </h2>
          <h3 className="text-center mb-8 text-xl font-medium text-white">
            Assistant Professor GLA University, Mathura
          </h3>
        </div>

        <TeamMember title="President" name="Jatin Sharma" imgSrc={Jatin} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center mb-10">
          <TeamMember
            title="Vice President"
            name="Shiva Gaur"
            imgSrc={Profile1}
          />
          <TeamMember
            title="Treasurer"
            name="Akshat Srivastava"
            imgSrc={Akshat}
          />
          <TeamMember
            title="General Secretary"
            name="Madushudan Singh"
            imgSrc={Madushudan}
          />
        </div>

        <div className="space-y-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative group"
            >
              <motion.div
                className="bg-slate-800 bg-opacity-30  p-3  shadow-md w-64 mx-auto mb-10 transition-all duration-300 relative group hover:shadow-[0_0_20px_4px_#ffffff] group-hover:border-2 group-hover:border-white"
                style={{
                  boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)",
                }}
                whileHover={{
                  backgroundColor: "rgba(59, 130, 246, 0.2)",
                  scale: 1.05,
                }}
              >
                <h3 className="text-3xl font-semibold text-center text-white group-hover:animate-glow">
                  Technical Team
                </h3>
              </motion.div>
            </motion.div>

            <div className="flex flex-col lg:flex-row items-center justify-around mb-16">
              <TeamMember
                title="Technical Team Head"
                name="Prashant Pathak"
                imgSrc={Prahsant}
              />
              <TeamMember
                title="Technical Team Deputy Head"
                name="Raunak Mishra"
                imgSrc={Raunank}
              />
            </div>
          </div>

          <div>
          <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative group"
            >
              <motion.div
                className="bg-slate-800 bg-opacity-30 p-3 shadow-md w-64 mx-auto mb-10 transition-all duration-300 relative group hover:shadow-[0_0_20px_4px_#ffffff] group-hover:border-2 group-hover:border-white"
                style={{
                  boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)",
                }}
                whileHover={{
                  backgroundColor: "rgba(59, 130, 246, 0.2)",
                  scale: 1.05,
                }}
              >
                <h3 className="text-3xl font-semibold text-center text-white group-hover:animate-glow">
                  Design Team
                </h3>
              </motion.div>
            </motion.div>

            <TeamMember
              title="Design Team Head"
              name="Sneha Agarwal"
              imgSrc={Sneha}
            />
          </div>

          <div>
          <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative group"
            >
              <motion.div
                className="bg-slate-800 bg-opacity-30 p-3 shadow-md w-64 mx-auto mb-10 transition-all duration-300 relative group hover:shadow-[0_0_20px_4px_#ffffff] group-hover:border-2 group-hover:border-white"
                style={{
                  boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)",
                }}
                whileHover={{
                  backgroundColor: "rgba(59, 130, 246, 0.2)",
                  scale: 1.05,
                }}
              >
                <h3 className="text-3xl font-semibold text-center text-white group-hover:animate-glow">
                  Public Relation Team
                </h3>
              </motion.div>
            </motion.div>

            <div className="flex flex-col lg:flex-row items-center items-center justify-around mb-16">
              <TeamMember
                title="Public Relation Team Head"
                name="Saumya Bansal"
                imgSrc={Saumya}
              />
              <TeamMember
                title="Public Relation Team Deputy Head"
                name="Vikas Singh"
                imgSrc={Vikas}
              />
            </div>
          </div>

          <div>
          <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative group"
            >
              <motion.div
                className="bg-slate-800 bg-opacity-30 p-3 shadow-md w-64 mx-auto mb-10 transition-all duration-300 relative group hover:shadow-[0_0_20px_4px_#ffffff] group-hover:border-2 group-hover:border-white"
                style={{
                  boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)",
                }}
                whileHover={{
                  backgroundColor: "rgba(59, 130, 246, 0.2)",
                  scale: 1.05,
                }}
              >
                <h3 className="text-3xl font-semibold text-center text-white group-hover:animate-glow">
                  Event Team
                </h3>
              </motion.div>
            </motion.div>

            <div className="flex flex-col lg:flex-row items-center items-center justify-around mb-16">
              <TeamMember
                title="Event Management Team"
                name="Pranjal"
                imgSrc={Pranjal}
              />
              <TeamMember
                title="Event Management Team Deputy Head"
                name="Shubhneet"
                imgSrc={Shubhneet}
              />
            </div>
          </div>

          <div>
          <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative group"
            >
              <motion.div
                className="bg-slate-800 bg-opacity-30 p-3 shadow-md w-64 mx-auto mb-10 transition-all duration-300 relative group hover:shadow-[0_0_20px_4px_#ffffff] group-hover:border-2 group-hover:border-white"
                style={{
                  boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)",
                }}
                whileHover={{
                  backgroundColor: "rgba(59, 130, 246, 0.2)",
                  scale: 1.05,
                }}
              >
                <h3 className="text-3xl font-semibold text-center text-white group-hover:animate-glow">
                  Content Team
                </h3>
              </motion.div>
            </motion.div>

            <div className="flex flex-col lg:flex-row items-center items-center justify-around mb-16">
              <TeamMember
                title="Content Team Head"
                name="Mohit Kumar"
                imgSrc={Mohit}
              />
              <TeamMember
                title="Content Team Deputy Head"
                name="Bhavana Jadon"
                imgSrc={Bhavana}
              />
            </div>
          </div>

          <AssociatesSection
            title="Executive Heads"
            members={[
              { name: "Vidhi Khare", imgSrc: Saumya },
              { name: "Sauhard", imgSrc: Sauhard },
              { name: "Palash Agarwal", imgSrc: Palash },
            ]}
          />

          <AssociatesSection
            title="Technical Team Associates"
            members={[
              { name: "Kush Kumar", imgSrc: "/images/kush.jpg" },
              { name: "Anirudh", imgSrc: "/images/anirudh.jpg" },
              { name: "Deeksha", imgSrc: "/images/deeksha.jpg" },
              { name: "Teena", imgSrc: "/images/teena.jpg" },
            ]}
          />

          <AssociatesSection
            title="Design Team Associates"
            members={[
              { name: "Tanshka", imgSrc: "/images/tanshka.jpg" },
              { name: "Ankita", imgSrc: "/images/ankita.jpg" },
            ]}
          />

          <AssociatesSection
            title="Public Relation Team Associates Head"
            members={[
              { name: "Divyanshi", imgSrc: "/images/divyanshi.jpg" },
              { name: "Krishna", imgSrc: "/images/krishna.jpg" },
            ]}
          />

          <AssociatesSection
            title="Content Team Associates Head"
            members={[
              { name: "Divyanshu", imgSrc: "/images/divyanshu.jpg" },
              { name: "Devanshi Bansal", imgSrc: "/images/devanshi.jpg" },
            ]}
          />

          <AssociatesSection
            title="Event Management Team Associates Head"
            members={[
              { name: "Rishi Srivastava", imgSrc: "/images/rishi.jpg" },
              { name: "Ashutosh Divedi", imgSrc: "/images/ashutosh.jpg" },
              { name: "Hardik", imgSrc: "/images/hardik.jpg" },
              { name: "Astha", imgSrc: "/images/astha.jpg" },
              { name: "Kirti", imgSrc: "/images/kirti.jpg" },
              { name: "Priya", imgSrc: "/images/priya.jpg" },
            ]}
          />
        </div>
      </section>
    </div>
  );
};

export default TeamMembers;
