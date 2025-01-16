import React, { useState } from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import LoadingAnimation from "./LoadingAnimation";

function AlumniCard({ name, batch, email, profilePicture, bio, company, profession }) {
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };

  return (
    <Tilt
      options={{ max: 20, scale: 1.1, speed: 400 }}
      className="tilt-card mx-auto transition-transform duration-500 ease-out"
    >
      <motion.div
        className="flex flex-col items-center bg-slate-800 bg-opacity-30 rounded-lg shadow-md p-6 w-64 cursor-pointer transition-all duration-300 relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)",
        }}
      >
        {loading && <LoadingAnimation />}
        <motion.img
          src={profilePicture}
          alt={`${name}'s Profile`}
          className="w-32 h-32 rounded-full object-cover mb-4"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
          onLoad={handleImageLoad}
          style={{ display: loading ? "none" : "block" }}
        />
        <motion.h3
          className="text-xl mb-2 font-semibold text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {name}
        </motion.h3>
        <motion.p
          className="text-gray-400 text-[12px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Batch of {batch}
        </motion.p>
        <motion.p
          className="text-gray-200 text-[12px] mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <span className="font-semibold">Profession:</span> {profession}
        </motion.p>
        <motion.p
          className="text-gray-200 text-[12px] mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <span className="font-semibold">Company:</span> {company}
        </motion.p>
        <motion.a
          href={`mailto:${email}`}
          className="text-blue-300 text-[10px] mt-2 p-2 rounded-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          style={{
            boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)",
          }}
        >
          {email}
        </motion.a>
        <motion.p
          className="text-gray-200 text-sm mt-4 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          {bio}
        </motion.p>
        <motion.div
          className="absolute inset-0 border-2 border-transparent rounded-lg hover:border-blue-200 transition-all duration-300 ease-in-out"
        ></motion.div>
      </motion.div>
    </Tilt>
  );
}

export default AlumniCard;