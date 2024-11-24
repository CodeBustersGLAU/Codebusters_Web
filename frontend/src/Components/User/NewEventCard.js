import React from "react";

function NewEventCard({ event }) {
  return (
    <div className="bg-gradient-to-br from-blue-700 via-gray-300 to-gray-600 shadow-2xl rounded-xl p-6 mb-6 cursor-pointer transition-transform transform hover:scale-105 hover:shadow-xl">
      <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">{event.title}</h3>
      <p className="text-gray-600 mb-6 text-center">{event.description}</p>

      <div className="flex flex-wrap gap-4 justify-center">
        {event.images.slice(0, 3).map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Event ${event.title} - Image ${index + 1}`}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105"
          />
        ))}
      </div>
    </div>
  );
}

export default NewEventCard;
