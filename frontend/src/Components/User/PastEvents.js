import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import EventCard from "./EventCard";
import EventDetails from "./EventDetails";

function PastEvents() {
  const [events] = useState([
    {
      title: "Codebusters Annual Hackathon 2023",
      description:
        "A 48-hour hackathon where teams compete to build innovative projects.",
      images: [
        "https://via.placeholder.com/400",
        "https://via.placeholder.com/400",
        "https://via.placeholder.com/400",
      ],
      timing: "March 10-12, 2023",
      coordinators: ["John Doe", "Jane Smith"],
    },
    {
      title: "Tech Talk: Future of AI",
      description:
        "An insightful discussion on the future trends in artificial intelligence.",
      images: [
        "https://via.placeholder.com/400",
        "https://via.placeholder.com/400",
      ],
      timing: "February 20, 2023",
      coordinators: ["Alice Johnson", "Bob Brown"],
    },
    // Add more events here...
  ]);

  return (
    <section className="py-10 bg-gray-100">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Our Past Events
      </h2>
      <div className="max-w-4xl mx-auto">
        {events.map((event, index) => (
          <Link to={`/past-events/${index}`} key={index}>
            <EventCard event={event} /> {/* Use Link to wrap EventCard */}
          </Link>
        ))}
      </div>
    </section>
  );
}

export default PastEvents;
