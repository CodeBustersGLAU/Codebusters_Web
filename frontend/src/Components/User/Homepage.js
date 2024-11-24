import React from "react";
import ParticlesComponent from "./Particles";
import CB from "./../../Assets/Logo/nobgCB.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
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

        {/* About Section */}
        <section className="py-16 px-6 lg:px-20 text-center backdrop-blur-lg bg-opacity-50 bg-blue-100 text-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl lg:text-4xl font-bold text-blue-950 mb-6">
              About Codebusters Club
            </h2>
            <p className="text-blue-950 text-xl max-w-2xl mx-auto mb-12">
              Empowering future tech leaders at GLA University through
              innovation, collaboration, and hands-on coding experiences.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
              <div>
                <h3 className="text-2xl font-bold text-blue-950 mb-4">
                  Our Mission
                </h3>
                <p className="text-blue-800 text-lg leading-relaxed">
                  At Codebusters Club, we aim to create a nurturing environment
                  for students passionate about coding and technology. Our
                  mission is to bridge the gap between theoretical knowledge and
                  practical skills by providing members with opportunities to
                  participate in real-world projects, hackathons, and
                  competitions.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-blue-950 mb-4">
                  Our Core Values
                </h3>
                <ul className="text-blue-800 space-y-6">
                  <li className="flex items-center justify-start">
                    <img
                      src="https://img.icons8.com/?size=100&id=aMa5RfFHeMJg&format=png&color=000000"
                      alt="Innovation Icon"
                      className="h-8 mr-4"
                    />
                    <span className="text-lg">
                      Innovation - Encouraging creative problem-solving and
                      fresh ideas.
                    </span>
                  </li>
                  <li className="flex items-center justify-start">
                    <img
                      src="https://img.icons8.com/?size=100&id=4l0HjwFFbVRJ&format=png&color=000000"
                      alt="Collaboration Icon"
                      className="h-8 mr-4"
                    />
                    <span className="text-lg">
                      Collaboration - Building a strong community through
                      teamwork.
                    </span>
                  </li>
                  <li className="flex items-center justify-start">
                    <img
                      src="https://img.icons8.com/?size=100&id=16Ne6ZK7nvPI&format=png&color=000000"
                      alt="Growth Icon"
                      className="h-8 mr-4"
                    />
                    <span className="text-lg">
                      Growth - Supporting personal and professional development.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Homepage;
