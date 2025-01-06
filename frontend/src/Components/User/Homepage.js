import React from "react";
import ParticlesComponent from "./Particles";
import CB from "./../../Assets/Logo/nobgCB.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import { motion } from "framer-motion";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Tilt } from "react-tilt";
function Homepage() {
  return (
    <div className="relative">
      {/* Particles Background */}
      <ParticlesComponent />

      {/* Content Area */}
      <div className="relative z-10">
        {/* Introduction Section */}
        <section className="mt-[7rem] flex flex-col lg:flex-row justify-between items-center p-10 lg:p-20 space-y-10 lg:space-y-0">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-3xl lg:text-5xl font-extrabold text-gray-300 mb-6 leading-tight font-playfair bg-opacity-30 bg-black p-2 rounded-lg selection:bg-black selection:text-white">
              Welcome to Codebusters Club!
            </h1>
            <p className="text-base lg:text-lg text-gray-300 leading-relaxed mx-6 mb-6 font-dosis bg-black p-2 bg-opacity-20 rounded-lg md:w-2/3 selection:bg-black selection:text-white">
              Codebusters is a community where coders, dreamers, and innovators
              come together to build, learn, and inspire. We believe in the
              power of collaboration and are dedicated to providing a platform
              for everyone—from beginners to pros—to explore their potential.
            </p>
            <div className="flex gap-6  md:ml-8 justify-center md:justify-start">
              <a
                href="https://www.instagram.com/codebusters_glau/profilecard/?igsh=aWduNzQ0OTAydnpv"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl text-gray-400 hover:text-white p-1 bg-black rounded-lg bg-opacity-40"
              >
                <InstagramIcon
                  fontSize="inherit"
                  style={{
                    fontSize: 40,
                  }}
                />
              </a>
              <a
                href="https://www.linkedin.com/company/codebusters-glau/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl text-gray-400 hover:text-white p-1 bg-black rounded-lg bg-opacity-40"
              >
                <LinkedInIcon fontSize="inherit" style={{ fontSize: 40 }} />
              </a>
            </div>
          </div>
          {/* Circular Image */}
          <div className="w-full lg:w-1/2 flex items-center justify-center ">
            <img
              src={CB}
              alt="Codebusters Logo"
              className="md:w-96 md:h-96 lg:w-[400px] lg:h-[400px] rounded-full border-4 border-gray-300 shadow-lg object-cover animate-flip bg-black bg-opacity-50"
            />
          </div>
        </section>
        <Tilt
                options={{ max: 10, scale: 1.02, speed: 400 }}
                className="tilt-box transition-transform duration-300 hover:scale-105"
              >
        <motion.section
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="py-16 px-6 lg:px-20 text-center backdrop-blur-md bg-gradient-to-r from-blue-500 via-blue-100 to-blue-500 rounded-xl shadow-xl"
        >
          
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl lg:text-5xl font-extrabold text-blue-700 mb-6 tracking-tight"
            >
              About Codebusters Club
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-blue-800 text-lg lg:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
            >
              Empowering future tech leaders at GLA University through
              innovation, collaboration, and hands-on coding experiences.
            </motion.p>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, scale: 0.95 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: { staggerChildren: 0.3 },
                },
              }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16"
            >
              <Tilt
                options={{ max: 10, scale: 1.02, speed: 400 }}
                className="tilt-box transition-transform duration-300 hover:scale-105"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="bg-white p-8 rounded-lg shadow-lg relative overflow-hidden"
                  style={{
                    borderTop: "4px solid transparent",
                    borderImageSource:
                      "linear-gradient(to right, #1e3a8a, #7dd3fc)",
                    borderImageSlice: 1,
                  }}
                >
                  <motion.div
                    className="absolute inset-0 rounded-lg blur-xl opacity-40" // Reduced opacity to make the background lighter
                    style={{
                      background:
                        "linear-gradient(90deg, rgba(30, 58, 138, 0.2), rgba(125, 211, 252, 0.2))", // Make gradient colors lighter and more transparent
                      filter: "blur(8px)",
                    }}
                    animate={{
                      opacity: [0.2, 0.4, 0.2], // Slow, subtle opacity changes
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  />
                  <h3 className="text-2xl font-semibold text-blue-900 mb-4">
                    Our Mission
                  </h3>
                  <p className="text-blue-700 text-base leading-relaxed">
                    At Codebusters Club, we aim to create a nurturing
                    environment for students passionate about coding and
                    technology. Our mission is to bridge the gap between
                    theoretical knowledge and practical skills by providing
                    members with opportunities to participate in real-world
                    hackathons and competitions.
                  </p>
                </motion.div>
              </Tilt>
              <Tilt
                options={{ max: 10, scale: 1.02, speed: 400 }}
                className="tilt-box transition-transform duration-300 hover:scale-105"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="bg-white p-8 rounded-lg shadow-lg relative overflow-hidden"
                  style={{
                    borderTop: "4px solid transparent",
                    borderImageSource:
                      "linear-gradient(to right, #1e3a8a, #7dd3fc)",
                    borderImageSlice: 1,
                  }}
                >
                  <motion.div
                    className="absolute inset-0 rounded-lg blur-xl opacity-40"
                    style={{
                      background:
                        "linear-gradient(90deg, rgba(30, 58, 138, 0.2), rgba(125, 211, 252, 0.2))", // Lighter gradient
                      filter: "blur(8px)",
                    }}
                    animate={{
                      opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  />
                  <h3 className="text-2xl font-semibold text-blue-900 mb-4">
                    Our Core Values
                  </h3>
                  <ul className="text-blue-700 space-y-3 text-xs lg:text-sm">
                    {[
                      {
                        imgSrc:
                          "https://img.icons8.com/?size=100&id=aMa5RfFHeMJg&format=png&color=000000",
                        text: "Innovation - Encouraging creative problem-solving and fresh ideas.",
                      },
                      {
                        imgSrc:
                          "https://img.icons8.com/?size=100&id=4l0HjwFFbVRJ&format=png&color=000000",
                        text: "Collaboration - Building a strong community through teamwork.",
                      },
                      {
                        imgSrc:
                          "https://img.icons8.com/?size=100&id=16Ne6ZK7nvPI&format=png&color=000000",
                        text: "Growth - Supporting personal and professional development.",
                      },
                    ].map((value, index) => (
                      <motion.li
                        key={index}
                        variants={{
                          hidden: { opacity: 0, x: -30 },
                          visible: { opacity: 1, x: 0 },
                        }}
                        className="flex items-center justify-start hover:scale-105 transition-transform duration-300"
                      >
                        <img
                          src={value.imgSrc}
                          alt="Icon"
                          className="h-8 w-8 mr-3"
                        />
                        <span className="text-sm lg:text-base">
                          {value.text}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </Tilt>
            </motion.div>
          </div>
          <style jsx>{`
            .tilt-box:hover {
              box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.2);
            }
          `}</style>
        </motion.section>
        </Tilt>
      </div>
    </div>
  );
}

export default Homepage;
