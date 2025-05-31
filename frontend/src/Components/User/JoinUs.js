import React, { useState } from "react";
import ParticlesComponent from "./ParticlesTwo";
import { motion } from "framer-motion";
import { useUserContext } from "../../context";

const JoinUs = () => {
  const { club } = useUserContext();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData.entries());

  try {
    const response = await fetch("https://script.google.com/macros/s/AKfycbxuo8CCq-Z6DdiF0FrWkmZE1G1jekJ7dp7KB9c7boYCNhSWinKf-WiaGEvlCtDWin23gA/exec", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    });

    const result = await response.json();
    if (result.result === "success") {
      alert("Submitted successfully!");
    } else {
      alert("Something went wrong.");
    }
  } catch (error) {
    alert("Error submitting form: " + error.message);
  }
};

  return (
    <div className="relative">
      <ParticlesComponent />
      <section className="relative text-gray-200 py-20 px-6 md:px-20">
        <div className="flex items-center justify-center mt-16">
          <motion.h2
            className="text-4xl font-bold text-center font-angrybirds mb-8 p-2 rounded-md transition-all duration-500 ease-in-out transform hover:text-purple-300 hover:scale-105 cursor-pointer"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Want to join <span className="text-blue-300">Codebusters</span>?
          </motion.h2>
        </div>
        {club?.hire === "true" ? (
          <>
            <div className="flex items-center justify-center text-center">
              <motion.p
                className="text-lg w-2/3 sm:w-11/12 mb-6 text-violet-200/80 text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                Be part of Codebusters, the ultimate hub for coders, innovators, and tech enthusiasts!
                Dive into a world where creativity meets problem-solving, and find your place among
                like-minded visionaries!
              </motion.p>
            </div>
            <div className="max-w-2xl mx-auto flex-col items-center justify-center">
              <div className="flex items-center justify-center">
                <motion.h3
                  className="text-3xl font-bold font-angrybirds text-orange-200 text-center mb-4 mt-2 p-2 rounded-md transition-all duration-500 ease-in-out transform hover:scale-105 cursor-pointer"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  How to Join
                </motion.h3>
              </div>
              <motion.p
                className="text-center mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                Fill out the form below to express your interest, and we'll get
                in touch with you about upcoming events, workshops, and
                opportunities.
              </motion.p>

              <form onSubmit={handleSubmit} className="p-6 rounded-lg shadow-lg bg-[#201f3e]">
                <div className="mb-4">
                  <label htmlFor="name" className="block text-white font-semibold mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full p-3 border border-gray-600 rounded-lg bg-blue-100 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="block text-white font-semibold mb-2">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full p-3 border border-gray-600 rounded-lg bg-blue-100 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your email address"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="rollNumber" className="block text-white font-semibold mb-2">
                    University Roll Number *
                  </label>
                  <input
                    type="text"
                    id="rollNumber"
                    name="rollNumber"
                    required
                    className="w-full p-3 border border-gray-600 rounded-lg bg-blue-100 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your university roll number"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="courseBranch" className="block text-white font-semibold mb-2">
                    Course & Branch *
                  </label>
                  <input
                    type="text"
                    id="courseBranch"
                    name="courseBranch"
                    required
                    className="w-full p-3 border border-gray-600 rounded-lg bg-blue-100 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your course and branch"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="section" className="block text-white font-semibold mb-2">
                    Section *
                  </label>
                  <input
                    type="text"
                    id="section"
                    name="section"
                    required
                    className="w-full p-3 border border-gray-600 rounded-lg bg-blue-100 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your section"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="interest" className="block text-white font-semibold mb-2">
                    Why are you interested in joining our club? *
                  </label>
                  <textarea
                    id="interest"
                    name="interest"
                    required
                    className="w-full p-3 border border-gray-600 rounded-lg bg-blue-100 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    rows="4"
                    placeholder="Tell us why you're interested"
                  ></textarea>
                </div>

                <div className="mb-4">
                  <label htmlFor="skills" className="block text-white font-semibold mb-2">
                    What skills do you have that could benefit our club? *
                  </label>
                  <textarea
                    id="skills"
                    name="skills"
                    required
                    className="w-full p-3 border border-gray-600 rounded-lg bg-blue-100 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    rows="4"
                    placeholder="List your relevant skills"
                  ></textarea>
                </div>

                <div className="mb-4">
                  <label htmlFor="expectation" className="block text-white font-semibold mb-2">
                    What do you expect to gain from this club experience? *
                  </label>
                  <textarea
                    id="expectation"
                    name="expectation"
                    required
                    className="w-full p-3 border border-gray-600 rounded-lg bg-blue-100 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    rows="4"
                    placeholder="Tell us what you hope to gain"
                  ></textarea>
                </div>

                <div className="mb-4">
                  <label htmlFor="uniqueContribution" className="block text-white font-semibold mb-2">
                    What is something unique you would bring to the club? *
                  </label>
                  <textarea
                    id="uniqueContribution"
                    name="uniqueContribution"
                    required
                    className="w-full p-3 border border-gray-600 rounded-lg bg-blue-100 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    rows="4"
                    placeholder="What makes you unique?"
                  ></textarea>
                </div>

                <div className="mb-4">
                  <label htmlFor="otherClubs" className="block text-white font-semibold mb-2">
                    Are you currently a member of any other clubs? *
                  </label>
                  <input
                    type="text"
                    id="otherClubs"
                    name="otherClubs"
                    required
                    className="w-full p-3 border border-gray-600 rounded-lg bg-blue-100 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="List any other clubs you're a member of"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="hosteller" className="block text-white font-semibold mb-2">
                    Are you a hosteller or a day scholar? *
                  </label>
                  <select
                    id="hosteller"
                    name="hosteller"
                    required
                    className="w-full p-3 border border-gray-600 rounded-lg bg-blue-100 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select an option</option>
                    <option value="hosteller">Hosteller</option>
                    <option value="dayScholars">Day Scholar</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label htmlFor="whatsapp" className="block text-white font-semibold mb-2">
                    WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    id="whatsapp"
                    name="whatsapp"
                    className="w-full p-3 border border-gray-600 rounded-lg bg-blue-100 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your WhatsApp number"
                  />
                </div>

                <div className="mb-6">
                  <p className="text-sm text-gray-400">* Required fields</p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full p-3 text-white font-semibold rounded-lg transition-all duration-300 ${
                    isSubmitting
                      ? "bg-indigo-600 cursor-not-allowed"
                      : "bg-indigo-800 hover:bg-indigo-700"
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    "Submit Application"
                  )}
                </button>

                {submitStatus && (
                  <div
                    className={`mt-4 p-3 rounded-lg text-center ${
                      submitStatus.success
                        ? "bg-green-900/50 text-green-200"
                        : "bg-red-900/50 text-red-200"
                    }`}
                  >
                    {submitStatus.message}
                  </div>
                )}
              </form>
            </div>
          </>
        ) : (
          <motion.p
            className="text-center text-xl mt-4 text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            We're not currently hiring. Stay tuned for updates!
          </motion.p>
        )}
      </section>
    </div>
  );
};

export default JoinUs;