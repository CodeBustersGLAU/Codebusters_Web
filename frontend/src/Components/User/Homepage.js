import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Animation from "./../../Assets/Animations/Coding-amico.svg";
import TeamMembers from "./TeamMembers";
import AlumniList from "./Alumni";
import { Password } from "@mui/icons-material";
import PastEvents from "./PastEvents";
function Homepage() {
  return (
    <div>
      <section className="flex flex-row justify-between items-center bg-backgroundImage p-10 bg-blue-100">
        <div className="w-1/2">
          <h1 className="text-4xl mb-10 font-bold text-blue-900 mb-4">
            Welcome to Codebusters Club!
          </h1>
          <p className="text-sm ml-10 mr-20  text-blue-800 leading-relaxed mb-4">
            Codebusters is a community where coders, dreamers, and innovators
            come together to build, learn, and inspire. We believe in the power
            of collaboration and are dedicated to providing a platform for
            everyone—from beginners to pros—to explore their potential.
          </p>
          <p className="text-sm ml-10 mr-20  text-blue-800 leading-relaxed">
            Join us for engaging events, hands-on projects, and a supportive
            network that will help you sharpen your skills, unlock new
            opportunities, and drive change. Let’s push boundaries and create
            impact, one line of code at a time!
          </p>
        </div>

        <div className="w-1/2 flex flex-row items-center justify-center">
          <img src={Animation} className="w-2/3 "></img>
        </div>
      </section>
      <section class="bg-blue-950 text-white py-16 px-6 lg:px-20">
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-12">
            <h2 class="text-4xl font-bold text-blue-200">
              About Codebusters Club
            </h2>
            <p class="text-gray-300 mt-4 max-w-2xl mx-auto">
              Empowering future tech leaders at GLA University through
              innovation, collaboration, and hands-on coding experiences.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h3 class="text-2xl font-semibold text-blue-200 mb-4">
                Our Mission
              </h3>
              <p class="text-gray-300">
                At Codebusters Club, we aim to create a nurturing environment
                for students passionate about coding and technology. Our mission
                is to bridge the gap between theoretical knowledge and practical
                skills by providing members with opportunities to participate in
                real-world projects, hackathons, and competitions.
              </p>
            </div>

            <div>
              <h3 class="text-2xl font-semibold text-blue-200 mb-4">
                Our Core Values
              </h3>
              <ul class="text-gray-300 space-y-4">
                <li class="flex items-center">
                  <img
                    src="https://img.icons8.com/ios-filled/50/4e92f9/innovation.png"
                    alt="Innovation Icon"
                    class="h-6 mr-3"
                  />
                  <span>
                    Innovation - Encouraging creative problem-solving and fresh
                    ideas.
                  </span>
                </li>
                <li class="flex items-center">
                  <img
                    src="https://img.icons8.com/ios-filled/50/4e92f9/collaboration.png"
                    alt="Collaboration Icon"
                    class="h-6 mr-3"
                  />
                  <span>
                    Collaboration - Building a strong community through
                    teamwork.
                  </span>
                </li>
                <li class="flex items-center">
                  <img
                    src="https://img.icons8.com/ios-filled/50/4e92f9/growth.png"
                    alt="Growth Icon"
                    class="h-6 mr-3"
                  />
                  <span>
                    Growth - Supporting personal and professional development.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section>Join our club section</section>
    </div>
  );
}

export default Homepage;
