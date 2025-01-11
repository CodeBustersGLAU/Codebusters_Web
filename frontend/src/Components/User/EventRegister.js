import React from "react";
import { useParams } from "react-router-dom";
import events from "./DummyUpComing";

function EventRegister() {
  const {id}=useParams();
  const event = events.find((e)=>e[id]===id);
  if (!event) {
    return <div className="text-center text-red-500">Event not found</div>;
  }

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-gray-900 text-white">
      <div className="lg:w-1/2 p-8 mt-24">
        <h2 className="text-2xl font-semibold mb-2">{event.title}</h2>
        <p className="text-gray-400 mb-4">{event.description}</p>
        <p className="text-gray-400 mb-4">{event.details}</p>
        
        {/* Event Poster Image */}
        {event.posterImg && (
          <img
            src={event.posterImg}
            alt="Event Poster"
            className="w-full h-auto rounded-md mb-6"
          />
        )}

        {/* Subevents List */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold mb-2">Subevents:</h3>
          <ul className="space-y-4">
            {event.subevents.map((subevent, index) => (
              <li key={index} className="bg-gray-700 p-4 rounded-md">
                <h4 className="text-lg font-semibold text-blue-400">{subevent.title}</h4>
                <p className="text-sm text-gray-300">{subevent.description}</p>
                <p className="text-sm text-gray-500">{subevent.time}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Event Images */}
        <div className="grid grid-cols-3 gap-4 mt-4">
          {event.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Event Image ${index + 1}`}
              className="rounded-md"
            />
          ))}
        </div>
      </div>

      {/* Left Side - Registration Form (Below Right Side on Small Screens) */}
      <div className="lg:w-1/2 p-8 bg-gray-800 ">
        <h1 className="text-3xl font-bold mb-4 mt-24">Register for {event.title}</h1>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-2 rounded-md bg-gray-700 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 rounded-md bg-gray-700 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-blue-600 py-2 px-4 rounded-md font-semibold hover:bg-blue-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default EventRegister;