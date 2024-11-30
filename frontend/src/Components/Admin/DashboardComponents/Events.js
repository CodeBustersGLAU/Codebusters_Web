import React, { useState } from "react";

function Events() {
  const [eventDetails, setEventDetails] = useState({
    eventName: "",
    startDate: "",
    endDate: "",
    eventDescription: "",
    eventImage: null,
    previewImage: null,
    formFields: [],
    subEvents: [],
  });

  const [newFormField, setNewFormField] = useState({
    label: "",
    type: "text",
  });

  const [newSubEvent, setNewSubEvent] = useState({
    name: "",
    date: "",
    time: "",
    description: "",
  });

  const [events, setEvents] = useState([]);
  const [editingEvent, setEditingEvent] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setEventDetails((prev) => ({
          ...prev,
          eventImage: file,
          previewImage: event.target.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const addFormField = () => {
    if (!newFormField.label.trim()) {
      alert("Please provide a label for the field.");
      return;
    }

    setEventDetails((prev) => ({
      ...prev,
      formFields: [...prev.formFields, { ...newFormField }],
    }));

    setNewFormField({ label: "", type: "text" });
  };

  const addSubEvent = () => {
    if (!newSubEvent.name.trim() || !newSubEvent.date || !newSubEvent.time) {
      alert("Please provide all details for the sub-event.");
      return;
    }

    setEventDetails((prev) => ({
      ...prev,
      subEvents: [...prev.subEvents, { ...newSubEvent }],
    }));

    setNewSubEvent({ name: "", date: "", time: "", description: "" });
  };

  const removeSubEvent = (index) => {
    setEventDetails((prev) => ({
      ...prev,
      subEvents: prev.subEvents.filter((_, i) => i !== index),
    }));
  };

  const addEvent = () => {
    const { eventName, startDate, endDate, eventDescription, eventImage, subEvents } = eventDetails;
    if (!eventName || !startDate || !endDate || !eventDescription || !eventImage) {
      alert("Please fill out all fields and choose an image.");
      return;
    }

    if (editingEvent) {
      const updatedEvents = events.map((event) =>
        event.id === editingEvent.id
          ? { ...editingEvent, ...eventDetails, eventImage }
          : event
      );
      setEvents(updatedEvents);
      setEditingEvent(null);
    } else {
      const newEvent = { ...eventDetails, id: Date.now() };
      setEvents([...events, newEvent]);
    }

    setEventDetails({
      eventName: "",
      startDate: "",
      endDate: "",
      eventDescription: "",
      eventImage: null,
      previewImage: null,
      formFields: [],
      subEvents: [],
    });
  };

  const editEvent = (event) => {
    setEditingEvent(event);
    setEventDetails({
      eventName: event.eventName,
      startDate: event.startDate,
      endDate: event.endDate,
      eventDescription: event.eventDescription,
      eventImage: event.eventImage,
      previewImage: event.previewImage,
      formFields: event.formFields,
      subEvents: event.subEvents,
    });
  };

  const deleteEvent = (id) => {
    setEvents(events.filter((event) => event.id !== id));
  };

  return (
    <div className="p-10 pl-4 pr-4 md:pl-32 md:pr-32 min-h-[calc(100vh-100px)] bg-slate-800 bg-opacity-50">
      {/* Header */}
      <h2 className="text-3xl font-bold text-white mb-6 text-center">
        {editingEvent ? "Edit Event" : "Event Management"}
      </h2>

      <div className="bg-slate-200 rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          {editingEvent ? "Edit Event Details" : "Create New Event"}
        </h2>

        {/* Event Form */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Form Fields */}
          <input
            type="text"
            placeholder="Event Name"
            value={eventDetails.eventName}
            onChange={(e) =>
              setEventDetails((prev) => ({ ...prev, eventName: e.target.value }))
            }
            className="p-3 border border-gray-300 rounded-lg w-full"
          />

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Start Date</label>
            <input
              type="date"
              value={eventDetails.startDate}
              onChange={(e) =>
                setEventDetails((prev) => ({ ...prev, startDate: e.target.value }))
              }
              className="p-3 border border-gray-300 rounded-lg w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">End Date</label>
            <input
              type="date"
              value={eventDetails.endDate}
              onChange={(e) =>
                setEventDetails((prev) => ({ ...prev, endDate: e.target.value }))
              }
              className="p-3 border border-gray-300 rounded-lg w-full"
            />
          </div>

          <textarea
            placeholder="Event Description"
            value={eventDetails.eventDescription}
            onChange={(e) =>
              setEventDetails((prev) => ({ ...prev, eventDescription: e.target.value }))
            }
            className="p-3 border border-gray-300 rounded-lg w-full col-span-full"
          />

          <div className="col-span-full">
            <label
              htmlFor="event-image-upload"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Event Image
            </label>
            <div className="flex items-center space-x-4">
              <input
                type="file"
                id="event-image-upload"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
              <label
                htmlFor="event-image-upload"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg cursor-pointer hover:bg-blue-700"
              >
                Choose Image
              </label>
              {eventDetails.previewImage && (
                <img
                  src={eventDetails.previewImage}
                  alt="Event Preview"
                  className="w-20 h-20 rounded-lg object-cover border border-gray-300"
                />
              )}
            </div>
          </div>
        </div>

        {/* Sub-Events Section */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-gray-700">Sub-Events</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <input
              type="text"
              placeholder="Sub-Event Name"
              value={newSubEvent.name}
              onChange={(e) =>
                setNewSubEvent((prev) => ({ ...prev, name: e.target.value }))
              }
              className="p-3 border border-gray-300 rounded-lg w-full"
            />
            <input
              type="date"
              value={newSubEvent.date}
              onChange={(e) =>
                setNewSubEvent((prev) => ({ ...prev, date: e.target.value }))
              }
              className="p-3 border border-gray-300 rounded-lg w-full"
            />
            <input
              type="time"
              value={newSubEvent.time}
              onChange={(e) =>
                setNewSubEvent((prev) => ({ ...prev, time: e.target.value }))
              }
              className="p-3 border border-gray-300 rounded-lg w-full"
            />
            <textarea
              placeholder="Sub-Event Description"
              value={newSubEvent.description}
              onChange={(e) =>
                setNewSubEvent((prev) => ({ ...prev, description: e.target.value }))
              }
              className="p-3 border border-gray-300 rounded-lg w-full col-span-full"
            />
          </div>
          <button
            onClick={addSubEvent}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Add Sub-Event
          </button>

          <ul className="mt-4 space-y-2">
            {eventDetails.subEvents.map((subEvent, index) => (
              <li
                key={index}
                className="flex items-center justify-between bg-gray-100 p-3 rounded-lg"
              >
                <span className="text-gray-700">
                  {subEvent.name} - {subEvent.date} at {subEvent.time}
                </span>
                <button
                  onClick={() => removeSubEvent(index)}
                  className="text-red-500 hover:underline"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>

        <button
          onClick={addEvent}
          className="mt-8 px-6 py-3 bg-green-500 text-white rounded-lg w-full hover:bg-green-600 text-lg font-semibold"
        >
          {editingEvent ? "Update Event" : "Add Event"}
        </button>
      </div>

      {/* Event List */}
      <div>
        <h2 className="text-3xl font-semibold text-gray-200 mb-6">Event List</h2>
        {events.length === 0 ? (
          <p className="text-gray-100">No events added yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300"
              >
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  {event.eventName}
                </h3>
                <p className="text-gray-500 text-sm mb-4">
                  {event.startDate} - {event.endDate}
                </p>
                <p className="text-gray-700 mb-4">{event.eventDescription}</p>
                {event.previewImage && (
                  <img
                    src={event.previewImage}
                    alt="Event"
                    className="w-full h-40 object-cover rounded-lg mb-4"
                  />
                )}
                <h4 className="font-medium text-gray-700 mb-2">Sub-Events:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  {event.subEvents.map((subEvent, index) => (
                    <li key={index} className="text-gray-600 text-sm">
                      {subEvent.name} - {subEvent.date} at {subEvent.time}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex space-x-2">
                  <button
                    onClick={() => editEvent(event)}
                    className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteEvent(event.id)}
                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Events;
