import React, { useState } from 'react';
import ParticlesComponent from './ParticlesTwo';
import { motion } from 'framer-motion';

const JoinUs = () => {
  const [hiring, setHiring] = useState(true);

  return (
    <div className="relative">
      <ParticlesComponent />
      <section className="relative z-10 text-gray-200 py-20 px-6 md:px-20">
        <motion.h2
          className="text-3xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Join Codebusters Club
        </motion.h2>

        {hiring ? (
          <>
            <motion.p
              className="text-lg mb-6 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              Want to be a part of a vibrant coding community? Join Codebusters, a place where creativity and innovation collide. Whether you’re passionate about coding, technology, or problem-solving, there’s a place for you here!
            </motion.p>
            <div className="max-w-2xl mx-auto">
              <motion.h3
                className="text-2xl font-semibold text-center mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                How to Join
              </motion.h3>
              <motion.p
                className="text-center mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                Fill out the form below to express your interest, and we’ll get in touch with you about upcoming events, workshops, and opportunities.
              </motion.p>

              <form
                action="https://formspree.io/f/myzydpyr"
                method="POST"
                className="bg-slate-700 p-6 rounded-lg shadow-lg"
              >
                <div className="mb-4">
                  <label htmlFor="name" className="block text-white font-semibold mb-2">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full p-3 border border-gray-600 rounded-lg bg-blue-100 text-gray-900"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="block text-white font-semibold mb-2">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full p-3 border border-gray-600 rounded-lg bg-blue-100 text-gray-900"
                    placeholder="Enter your email address"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="rollNumber" className="block text-white font-semibold mb-2">University Roll Number</label>
                  <input
                    type="text"
                    id="rollNumber"
                    name="rollNumber"
                    required
                    className="w-full p-3 border border-gray-600 rounded-lg bg-blue-100 text-gray-900"
                    placeholder="Enter your university roll number"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="courseBranch" className="block text-white font-semibold mb-2">Course & Branch</label>
                  <input
                    type="text"
                    id="courseBranch"
                    name="courseBranch"
                    required
                    className="w-full p-3 border border-gray-600 rounded-lg bg-blue-100 text-gray-900"
                    placeholder="Enter your course and branch"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="section" className="block text-white font-semibold mb-2">Section</label>
                  <input
                    type="text"
                    id="section"
                    name="section"
                    required
                    className="w-full p-3 border border-gray-600 rounded-lg bg-blue-100 text-gray-900"
                    placeholder="Enter your section"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="interest" className="block text-white font-semibold mb-2">Why are you interested in joining our club?</label>
                  <textarea
                    id="interest"
                    name="interest"
                    required
                    className="w-full p-3 border border-gray-600 rounded-lg bg-blue-100 text-gray-900"
                    rows="4"
                    placeholder="Tell us why you're interested"
                  ></textarea>
                </div>

                <div className="mb-4">
                  <label htmlFor="skills" className="block text-white font-semibold mb-2">What skills do you have that could benefit our club?</label>
                  <textarea
                    id="skills"
                    name="skills"
                    required
                    className="w-full p-3 border border-gray-600 rounded-lg bg-blue-100 text-gray-900"
                    rows="4"
                    placeholder="List your relevant skills"
                  ></textarea>
                </div>

                <div className="mb-4">
                  <label htmlFor="workUpload" className="block text-white font-semibold mb-2">Upload Your Work (Optional)</label>
                  <input
                    type="file"
                    id="workUpload"
                    name="workUpload"
                    className="w-full p-3 border border-gray-600 rounded-lg bg-blue-100 text-gray-900"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="expectation" className="block text-white font-semibold mb-2">What do you expect to gain from this club experience?</label>
                  <textarea
                    id="expectation"
                    name="expectation"
                    required
                    className="w-full p-3 border border-gray-600 rounded-lg bg-blue-100 text-gray-900"
                    rows="4"
                    placeholder="Tell us what you hope to gain"
                  ></textarea>
                </div>

                <div className="mb-4">
                  <label htmlFor="uniqueContribution" className="block text-white font-semibold mb-2">What is something unique you would bring to the club?</label>
                  <textarea
                    id="uniqueContribution"
                    name="uniqueContribution"
                    required
                    className="w-full p-3 border border-gray-600 rounded-lg bg-blue-100 text-gray-900"
                    rows="4"
                    placeholder="What makes you unique?"
                  ></textarea>
                </div>

                <div className="mb-4">
                  <label htmlFor="otherClubs" className="block text-white font-semibold mb-2">Are you currently a member of any other clubs?</label>
                  <input
                    type="text"
                    id="otherClubs"
                    name="otherClubs"
                    required
                    className="w-full p-3 border border-gray-600 rounded-lg bg-blue-100 text-gray-900"
                    placeholder="List any other clubs you're a member of"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="hosteller" className="block text-white font-semibold mb-2">Are you a hosteller or a day scholar?</label>
                  <select
                    id="hosteller"
                    name="hosteller"
                    required
                    className="w-full p-3 border border-gray-600 rounded-lg bg-blue-100 text-gray-900"
                  >
                    <option value="hosteller">Hosteller</option>
                    <option value="dayScholars">Day Scholar</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label htmlFor="whatsapp" className="block text-white font-semibold mb-2">WhatsApp Number</label>
                  <input
                    type="text"
                    id="whatsapp"
                    name="whatsapp"
                    required
                    className="w-full p-3 border border-gray-600 rounded-lg bg-blue-100 text-gray-900"
                    placeholder="Enter your WhatsApp number"
                  />
                </div>

                <motion.button
                  type="submit"
                  className="bg-gray-900 hover:bg-gray-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-colors duration-300 w-full"
                  whileHover={{ scale: 1.05 }}
                >
                  Submit
                </motion.button>
              </form>
            </div>
          </>
        ) : (
          <>
            <motion.p
              className="text-lg mb-6 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              We are not currently hiring. However, you can still become a part of our community by participating in our events and workshops. We’ll let you know when we are hiring again!
            </motion.p>

            <motion.h3
              className="text-2xl font-semibold text-center mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              Why Join Codebusters?
            </motion.h3>
            <motion.ul
              className="list-disc list-inside text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <li className="text-lg mb-2">Learn new technologies and coding techniques.</li>
              <li className="text-lg mb-2">Collaborate with like-minded peers on exciting projects.</li>
              <li className="text-lg mb-2">Participate in coding competitions and workshops.</li>
              <li className="text-lg mb-2">Get the chance to lead projects and grow your skills.</li>
            </motion.ul>
          </>
        )}
      </section>
    </div>
  );
};

export default JoinUs;
