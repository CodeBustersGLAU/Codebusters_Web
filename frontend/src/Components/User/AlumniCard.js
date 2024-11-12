import React from "react";

function AlumniCard({ name, batch, email, profilePicture, bio }) {
  return (
    <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6 w-64 mx-auto">
      {/* Profile Picture */}
      <img
        src={profilePicture}
        alt={`${name}'s Profile`}
        className="w-24 h-24 rounded-full object-cover mb-4"
      />

      {/* Name and Batch */}
      <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
      <p className="text-gray-500 text-sm">Batch of {batch}</p>

      {/* Email */}
      <a href={`mailto:${email}`} className="text-blue-500 text-sm mt-2">
        {email}
      </a>

      {/* Bio or Achievements */}
      <p className="text-gray-600 text-sm mt-4 text-center">{bio}</p>
    </div>
  );
}

export default AlumniCard;
