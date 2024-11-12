import React from "react";

function EventCard({ event, onClick }) {
  return (
    <div
      className="bg-white shadow-lg rounded-lg p-6 mb-4 cursor-pointer"
      onClick={onClick}
    >
      <h3 className="text-2xl font-bold text-gray-800 mb-2">{event.title}</h3>
      <p className="text-gray-600 mb-4">{event.description}</p>
      <div className="flex flex-wrap gap-4">
        {event.images.slice(0, 2).map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Event ${event.title} - Image ${index + 1}`}
            className="w-1/2 rounded-md shadow-sm"
          />
        ))}
      </div>
    </div>
  );
}

export default EventCard;
