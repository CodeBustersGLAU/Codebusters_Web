import React, { useState, useEffect } from "react";
import { useUserContext } from "./../../../context";
import { updateHighlights } from "../../../APIs/admin";
import LoadingAnimation from "./../../User/LoadingAnimation";

function Highlights() {
  const { club, user } = useUserContext();
  const [events, setEvents] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    endDate: "",
    description: "",
    images: Array(10).fill(""),
  });

  useEffect(() => {
    if (club && club.highlights) {
      setEvents(club.highlights);
    }
  }, [club]);

  if (!club || !club.highlights) {
    return <LoadingAnimation />;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name.startsWith("image")) {
      const index = parseInt(name.split("-")[1], 10);
      const updatedImages = [...formData.images];
      updatedImages[index] = value;
      setFormData({
        ...formData,
        images: updatedImages,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setFormData(events[index]);
  };

  const handleDelete = (index) => {
    setEvents(events.filter((_, i) => i !== index));
  };

  const handleSave = () => {
    if (!formData.title || !formData.date || !formData.description) {
      alert("Please fill out all fields.");
      return;
    }

    const updatedEvents = [...events];
    if (editIndex !== null) {
      updatedEvents[editIndex] = {
        ...formData,
        id: events[editIndex].id,
      };
    } else {
      updatedEvents.push({ ...formData, id: events.length + 1 });
    }
    setEvents(updatedEvents);
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      title: "",
      date: "",
      endDate: "",
      description: "",
      images: Array(10).fill(""),
    });
    setEditIndex(null);
  };

  const update = async () => {
    const res = await updateHighlights({
      name: user.name,
      password: user.password,
      highlights: events,
    });
    alert(res.message || "Some error occurred");
  };

  return (
    <div className="p-10 pl-4 pr-4 sm:pl-8 sm:pr-8 md:pl-16 md:pr-16 min-h-[calc(100vh-100px)] bg-slate-800 bg-opacity-50">
      <h2 className="text-3xl font-bold text-white mb-6 text-center">
        Club Highlights Dashboard
      </h2>
      <div className="bg-slate-200 rounded-lg shadow-lg p-6 mb-8">
        <h3 className="text-2xl font-semibold text-gray-700 mb-4 text-center">
          {editIndex !== null ? "Edit Event" : "Add New Event"}
        </h3>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="title"
              className="text-sm font-semibold text-gray-700"
            >
              Event Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Event Title"
              value={formData.title}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>

          <div>
            <label
              htmlFor="date"
              className="text-sm font-semibold text-gray-700"
            >
              Event Start Date
            </label>
            <input
              type="date"
              name="date"
              id="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>

          <div>
            <label
              htmlFor="endDate"
              className="text-sm font-semibold text-gray-700"
            >
              Event End Date
            </label>
            <input
              type="date"
              name="endDate"
              id="endDate"
              value={formData.endDate}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>

          <div>
            <label
              htmlFor="description"
              className="text-sm font-semibold text-gray-700"
            >
              Event Description
            </label>
            <textarea
              name="description"
              id="description"
              placeholder="Event Description"
              value={formData.description}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>

          <div>
            <label
              htmlFor="image-urls"
              className="text-sm font-semibold text-gray-700"
            >
              Enter Image URLs (max 10 images)
            </label>
            <div>
              {formData.images.map((image, index) => (
                <div key={index} className="mb-2">
                  <label
                    htmlFor={`image-${index}`}
                    className="text-sm font-semibold text-gray-700"
                  >
                    Image URL #{index + 1}
                  </label>
                  <input
                    type="text"
                    name={`image-${index}`}
                    id={`image-${index}`}
                    value={image}
                    onChange={handleChange}
                    placeholder={`Enter Image URL #${index + 1}`}
                    className="block w-full text-sm p-3 border border-gray-300 rounded-md"
                  />
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={handleSave}
            className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            {editIndex !== null ? "Save Changes" : "Add Event"}
          </button>
        </form>
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-gray-200 mb-6">
          Highlighted Events
        </h3>
        {events.length === 0 ? (
          <p className="text-gray-100">No events added yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {events.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300"
              >
                <h4 className="text-xl font-semibold text-gray-700 mb-2">
                  {event.title}
                </h4>
                <p className="text-gray-500 text-sm mb-4">
                  {event.date} - {event.endDate}
                </p>
                <p className="text-gray-700 mb-4">{event.description}</p>
                {event.images.length > 0 && (
                  <div className="flex space-x-2 overflow-hidden">
                    {event.images.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`Event preview`}
                        className="w-20 h-20 object-contain rounded-md"
                      />
                    ))}
                  </div>
                )}
                <div className="mt-4 flex space-x-2">
                  <button
                    onClick={() => handleEdit(events.indexOf(event))}
                    className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(events.indexOf(event))}
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

      <button
        onClick={update}
        className="bg-gradient-to-r mt-4 from-red-500 via-red-600 to-red-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 focus:ring-4 focus:ring-red-300 focus:outline-none transition duration-300 ease-in-out"
      >
        Update Data
      </button>
    </div>
  );
}

export default Highlights;
