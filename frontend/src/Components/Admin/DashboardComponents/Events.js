import React, { useState, useEffect } from "react";
import { useUserContext } from "./../../../context";
import { updateEvents } from "../../../APIs/admin";
import LoadingAnimation from "./../../User/LoadingAnimation";

function Events() {
  const { club, setClub } = useUserContext();
  
  const [eventDetails, setEventDetails] = useState({
    eventName: "",
    startDate: "",
    endDate: "",
    description: "",
    eventImages: Array(10).fill(""),
    registrationLink: "",
  });

  const [events, setEvents] = useState(club?.events || []);
  const [editingEvent, setEditingEvent] = useState(null);

  useEffect(() => {
    if (club && club.events) {
      setEvents(club.events);
    }
  }, [club]);

  if (!club || !club.events) {
    return <LoadingAnimation />;
  }

  const handleImageLinksChange = (e, index) => {
    const updatedImages = [...eventDetails.eventImages];
    updatedImages[index] = e.target.value.trim();
    setEventDetails((prev) => ({
      ...prev,
      eventImages: updatedImages,
    }));
  };

  const addEvent = () => {
    const { eventName, startDate, endDate, description, eventImages, registrationLink } = eventDetails;
    const filledImages = eventImages.filter((link) => link);
    
    if (
      !eventName ||
      !startDate ||
      !endDate ||
      !description ||
      filledImages.length < 4 ||
      !registrationLink
    ) {
      alert("Please fill out all fields and provide at least 4 image URLs and registration link.");
      return;
    }

    const newEvent = {
      ...eventDetails,
      id: Date.now(),
    };

    const updatedEvents = [...events, newEvent];
    setEvents(updatedEvents);

    setClub({
      ...club,
      events: updatedEvents,
    });

    setEventDetails({
      eventName: "",
      startDate: "",
      endDate: "",
      description: "",
      eventImages: Array(10).fill(""),
      registrationLink: "",
    });
  };

  const editEvent = (event) => {
    setEditingEvent(event);
    setEventDetails({
      eventName: event.eventName,
      startDate: event.startDate,
      endDate: event.endDate,
      description: event.description,
      eventImages: event.eventImages,
      registrationLink: event.registrationLink,
    });
  };

  const deleteEvent = (id) => {
    const updatedEvents = events.filter((event) => event.id !== id);
    setEvents(updatedEvents);
    setClub({
      ...club,
      events: updatedEvents,
    });
  };

  const update = async () => {
    const res = await updateEvents(events);
    alert(res.message || "Some error occurred");
  };

  return (
    <div className="p-10 pl-4 pr-4 md:pl-32 md:pr-32 min-h-[calc(100vh-100px)] bg-slate-800 bg-opacity-50">
      <h2 className="text-3xl font-bold text-white mb-6 text-center">
        {editingEvent ? "Edit Event" : "Event Management"}
      </h2>

      <div className="bg-slate-200 rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          {editingEvent ? "Edit Event Details" : "Create New Event"}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Event Name"
            value={eventDetails.eventName}
            onChange={(e) =>
              setEventDetails((prev) => ({
                ...prev,
                eventName: e.target.value,
              }))
            }
            className="p-3 border border-gray-300 rounded-lg w-full"
          />

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Start Date
            </label>
            <input
              type="date"
              value={eventDetails.startDate}
              onChange={(e) =>
                setEventDetails((prev) => ({
                  ...prev,
                  startDate: e.target.value,
                }))
              }
              className="p-3 border border-gray-300 rounded-lg w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              End Date
            </label>
            <input
              type="date"
              value={eventDetails.endDate}
              onChange={(e) =>
                setEventDetails((prev) => ({
                  ...prev,
                  endDate: e.target.value,
                }))
              }
              className="p-3 border border-gray-300 rounded-lg w-full"
            />
          </div>

          <input
            type="text"
            placeholder="Event Description"
            value={eventDetails.description}
            onChange={(e) =>
              setEventDetails((prev) => ({
                ...prev,
                description: e.target.value,
              }))
            }
            className="p-3 border border-gray-300 rounded-lg w-full"
          />

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Event Images (4 URLs)
            </label>
            {eventDetails.eventImages.map((imageLink, index) => (
              <input
                key={index}
                type="text"
                value={imageLink}
                onChange={(e) => handleImageLinksChange(e, index)}
                placeholder={`Image URL ${index + 1}`}
                className="p-3 border border-gray-300 rounded-lg w-full mb-3"
              />
            ))}
          </div>
        </div>
        <label> Registration Link</label>
        <input
            type="text"
            placeholder="Registration Link"
            value={eventDetails.registrationLink}
            onChange={(e) =>
              setEventDetails((prev) => ({
                ...prev,
                registrationLink: e.target.value,
              }))
            }
            className="p-3 border border-gray-300 rounded-lg w-full"
          />
        <div className="mt-6 flex justify-between">
          <button
            onClick={addEvent}
            className="bg-green-500 text-white px-6 py-2 rounded-lg"
          >
            {editingEvent ? "Save Changes" : "Add Event"}
          </button>
          {editingEvent && (
            <button
              onClick={() => setEditingEvent(null)}
              className="bg-red-500 text-white px-6 py-2 rounded-lg"
            >
              Cancel
            </button>
          )}
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">
          Event List
        </h3>

        <div>
          {events.map((event) => (
            <div key={event.id} className="bg-white rounded-lg shadow-lg p-4 mb-4">
              <h4 className="text-xl font-semibold">{event.eventName}</h4>
              <p>{event.description}</p>
              <div className="flex mt-4 justify-between">
                <button
                  onClick={() => editEvent(event)}
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteEvent(event.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={update}
          className="bg-blue-500 text-white px-6 py-2 rounded-lg mt-4"
        >
          Update All Events
        </button>
      </div>
    </div>
  );
}

export default Events;
