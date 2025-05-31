import React, { useState,useEffect } from "react";
import ParticlesComponent from "./Particles";
import Laptop from "./../../Assets/Logo/laptop.png";
import Show from "./../../Assets/Logo/show.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import { motion } from "framer-motion";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Tilt } from "react-tilt";

// highlight images
import image1 from "./../../Assets/highlight_photos/01.jpg"
import image2 from "./../../Assets/highlight_photos/02.jpg"
import image3 from "./../../Assets/highlight_photos/03.jpg"
import image4 from "./../../Assets/highlight_photos/04.jpg"
import image5 from "./../../Assets/highlight_photos/05.jpg"
import image6 from "./../../Assets/highlight_photos/06.jpg"
import image7 from "./../../Assets/highlight_photos/07.jpg"
import image8 from "./../../Assets/highlight_photos/08.jpg"
import image9 from "./../../Assets/highlight_photos/09.jpg"
import image10 from "./../../Assets/highlight_photos/10.jpg"
import image11 from "./../../Assets/highlight_photos/12.jpg"
import image12 from "./../../Assets/highlight_photos/11.jpg"

function Homepage() {
  const [logoLoading, setLogoLoading] = useState(true);
  const [featureLoading, setFeatureLoading] = useState([true, true, true]);
  const [selectedImage, setSelectedImage] = useState(null);
  const images = [
    image1,image2,image3,image4,image5,image6,image7,image8,image9,image10,image11,image12
  ]

  useEffect(() => {
  }, [selectedImage]);

  const handleFeatureLoad = (index) => {
    setFeatureLoading((prev) => {
      const newState = [...prev];
      newState[index] = false;
      return newState;
    });
  };
  return (
    <div className="relative">
      {/* Particles Background */}
      <ParticlesComponent />
      {/* Content Area */}
      <div className="relative">
        {/* Introduction Section */}
        <section className="mt-[4rem] md:mt-[2rem] pb-40 flex flex-col lg:flex-row justify-between items-center p-10 lg:p-20 space-y-10 lg:space-y-0">
          <div className="w-full lg:w-1/2 text-center md:text-left lg:text-left">
            <h1 className="text-4xl md:text-6xl lg:text-8xl mt-0 md:mt-36 lg:mt-0 font-extrabold mx-6 text-gray-300 mb-6 leading-tight font-angrybirds cursor-pointer p-2 rounded-lg selection:bg-blue-700 selection:text-white">
              Welcome to <span className="text-blue-400">Codebusters</span> Club!
            </h1>
            <p className="text-base md:text-lg lg:text-lg text-indigo-300 leading-relaxed mx-6 mb-0 font-dosis cursor-pointer p-2 rounded-lg md:w-2/3 selection:bg-blue-500 selection:text-white">
              <i>“The crossroad where code meets creativity"</i>
            </p>
            <p className="text-base md:text-lg lg:text-lg text-gray-300 leading-relaxed mx-6 mb-2 font-dosis cursor-pointer p-2 rounded-lg md:w-2/3 selection:bg-blue-500 selection:text-white">
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
          <div className="w-1/2 flex items-center mt-4 md:mt-60 lg:mt-0 pb-10 justify-center relative">
            <img
              src={Laptop}
              alt="Coding Logo"
              className={`absolute pb-10 mt-40 md:mt-72 lg:mt-20 md:pb-32 w-[150px] h-[150px] sm:w-[100px] sm:h-[100px] md:w-[200px] md:h-[250px] lg:w-[300px] lg:h-[350px] shadow-lg object-cover ${
                logoLoading ? "hidden" : "animate-flip"
              }`}
              onLoad={() => setLogoLoading(false)}
            >
            </img>
            <img
              src={Show}
              alt="Coding Logo"
              className={`absolute mt-52 sm:mt-40 md:mt-72 lg:mt-20 mb-0 md:mb-10 lg:mb-10 w-[220px] h-[150px] sm:w-[200px] sm:h-[100px] md:w-[400px] md:h-[250px] lg:w-[500px] lg:h-[300px] shadow-lg object-cover ${
                logoLoading ? "hidden" : "animate-flip"
              }`}
              onLoad={() => setLogoLoading(false)}
            >
            </img>
          </div>
        </section>
        <motion.section
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="py-16 md:pt-40 px-6 lg:px-20 text-center shadow-md rounded-lg"
        >
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-5xl lg:text-6xl font-extrabold font-angrybirds text-purple-300 my-6 tracking-tight"
            >
              About Codebusters Club
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-slate-300 md:text-lg text-lg pt-4 lg:text-xl max-w-2xl mx-auto mb-20 leading-relaxed"
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
              className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32 lg:gap-16"
            >
              {/* Mission Card */}
              <Tilt
                options={{ max: 10, scale: 1.02, speed: 400 }}
                className="tilt-box transition-transform duration-300 hover:scale-105"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="bg-blue-200 p-8 rounded-lg shadow-lg relative overflow-hidden"
                  style={{
                    borderTop: "4px solid transparent",
                    borderImageSource:
                      "linear-gradient(to right,rgb(205, 217, 95),rgb(36, 159, 204))",
                    borderImageSlice: 1,
                  }}
                >
                  <motion.div
                    className="absolute inset-0 rounded-lg blur-xl opacity-30"
                    style={{
                      background:
                        "linear-gradient(90deg, rgba(30, 58, 138, 0.2), rgba(125, 211, 252, 0.2))",
                    }}
                  />
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">
                    Our Mission
                  </h3>
                  <p className="text-slate-700 text-base leading-relaxed">
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
                  className="bg-yellow-100 p-8 rounded-lg shadow-lg relative overflow-hidden"
                  style={{
                    borderTop: "4px solid transparent",
                    borderImageSource:
                      "linear-gradient(to right,rgb(205, 217, 95),rgb(36, 159, 204))",
                    borderImageSlice: 1,
                  }}
                >
                  <motion.div
                    className="absolute inset-0 rounded-lg blur-xl opacity-30"
                    style={{
                      background:
                        "linear-gradient(90deg, rgba(30, 58, 138, 0.2), rgba(125, 211, 252, 0.2))",
                    }}
                  />
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">
                    Our Core Values
                  </h3>
                  <ul className="text-slate-700 space-y-1 text-sm lg:text-base">
                    {[
                      {
                        imgSrc:
                          "https://img.icons8.com/?size=80&id=aMa5RfFHeMJg&format=png&color=000000",
                        text: "Innovation - Encouraging creative problem-solving and fresh ideas.",
                      },
                      {
                        imgSrc:
                          "https://img.icons8.com/?size=80&id=4l0HjwFFbVRJ&format=png&color=000000",
                        text: "Collaboration - Building a strong community through teamwork.",
                      },
                      {
                        imgSrc:
                          "https://img.icons8.com/?size=80&id=16Ne6ZK7nvPI&format=png&color=000000",
                        text: "Growth - Supporting personal and professional development.",
                      },
                    ].map((value, index) => (
                      <motion.li
                        key={index}
                        variants={{
                          hidden: { opacity: 0, x: -30 },
                          visible: { opacity: 1, x: 0 },
                        }}
                        className="flex items-center hover:scale-105 transition-transform duration-300"
                      >
                        <img
                          src={value.imgSrc}
                          alt="Icon"
                          className={`h-8 w-8 mr-3 ${
                            featureLoading[index] ? "hidden" : "block"
                          }`}
                          onLoad={() => handleFeatureLoad(index)}
                        />
                        <span>{value.text}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </Tilt>
            </motion.div>
          </div>
        </motion.section>
        <motion.section
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="py-16 md:py-16 lg:py-16 px-6 lg:px-20 text-center shadow-md rounded-lg"
        >
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-5xl lg:text-6xl font-extrabold font-angrybirds text-orange-300 my-6 tracking-tight"
            >
              Our Highlights
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-slate-300 text-lg pt-4 lg:text-xl max-w-2xl mx-auto mb-8 md:mb-20 lg:mb-20 leading-relaxed"
            >
              Empowering innovation at GLA University, our club drives transformative events,
              hands-on workshops, and thrilling coding challenges. From hackathons to cutting-edge projects,
              we inspire students to collaborate, innovate, and lead the tech future!
            </motion.p>
          </div>
          <div className="relative mt-4 md:mt-36 lg:mt-36 w-full h-[500px] mx-auto">
            <div className="w-full h-full px-8 mx-6 flex py-8 md:px-8 lg:px-8 items-center justify-center">
              {
              images.map((image, i) => (
                <motion.img
                  key={i}
                  src={image}
                  alt={`Highlight ${i + 1}`}
                  className="absolute object-contain w-60 h-40 md:w-72 md:h-48 rounded-md lg:w-96 lg:h-64"
                  initial={{
                    x: (window.innerWidth > 768 ? -50 : 0),
                    y: (window.innerWidth > 768 ? -50 : 0),
                    rotate: Math.random() * 30 - 15,
                    zIndex: i,
                  }}
                  animate={{
                    x: window.innerWidth > 768
                    ? (i % 2 === 0 ? Math.random() * -400 : Math.random() * 400) 
                    : Math.random() * 150 - 100,
                    y: window.innerWidth > 768
                    ? Math.random() * 200 - 150 : Math.random() * 150 - 100,
                    rotate: Math.random() * 30 - 15,
                    zIndex: selectedImage === i ? 12 : i,
                  }}
                  transition={{
                    duration: selectedImage === i ? 5 : 10,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  whileHover={{
                    scale: 1.4,
                    zIndex: 13,
                    boxShadow: "0px 10px 30px rgba(0,0,0,0.5)",
                  }}
                  whileTap={{
                    scale: 1.4, 
                    rotate: 0,
                    zIndex: 13,
                    duration:10,
                  }}
                  onTap={() => {
                    setSelectedImage(i);
                  }}
                />
              ))}
            </div>
          </div>
          <div className="max-w-7xl mx-auto">
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
              className="grid grid-cols-1 md:grid-cols-2 gap-8 mb:4 md:mb-32 lg:mb-32 lg:gap-16"
            >
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}

export default Homepage;
