import React from "react";

function EventCard({ event, onClick }) {
  return (
    <div
      className="bg-gradient-to-br from-blue-700 via-gray-300 to-gray-600 shadow-2xl rounded-xl p-6 mb-6 cursor-pointer transition-transform transform hover:scale-105 duration-300 hover:shadow-lg"
      onClick={onClick}
    >
      <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 text-center">{event.title}</h3>
      <p className="text-gray-600 mb-4 text-center">{event.description}</p>

      {/* Flex Container for Images */}
      <div className="flex flex-wrap gap-4 justify-center">
        {event.images.slice(0, 3).map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Event ${event.title} - Image ${index + 1}`}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 max-w-full rounded-lg shadow-md transition-all duration-300 transform hover:scale-105"
          />
        ))}
      </div>
    </div>
  );
}

export default EventCard;
