import React, { useState } from "react";
import { updateHighlights } from "./../../../APIs/admin";
function Highlights() {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: "Tech Conference 2023",
      date: "2023-10-01",
      description: "An exciting conference on emerging tech.",
      images: ["https://via.placeholder.com/200"], // Placeholder for initial image
    },
    {
      id: 2,
      title: "Hackathon 2022",
      date: "2022-12-15",
      description: "A 48-hour hackathon to build innovative apps.",
      images: ["https://via.placeholder.com/200"], // Placeholder for initial image
    },
  ]);

  const [editIndex, setEditIndex] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    description: "",
    images: [],
  });

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const fileURLs = files.map((file) => URL.createObjectURL(file));
    setFormData({
      ...formData,
      images: fileURLs,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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
      updatedEvents[editIndex] = formData;
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
      description: "",
      images: [],
    });
    setEditIndex(null);
  };

  const update = async () => {
    console.log(events);
    const res = await updateHighlights(events);
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
          <input
            type="text"
            name="title"
            placeholder="Event Title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm"
            required
          />
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm"
            required
          />
          <textarea
            name="description"
            placeholder="Event Description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm"
            required
          />
          <div>
            <label
              htmlFor="image-upload"
              className="text-sm font-semibold text-gray-700"
            >
              Upload Images (You can select multiple)
            </label>
            <input
              type="file"
              id="image-upload"
              accept="image/*"
              multiple
              onChange={handleFileChange}
              className="block w-full text-sm"
            />
            <div className="mt-4 flex space-x-2 overflow-x-auto">
              {formData.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Preview ${index + 1}`}
                  className="w-20 h-20 object-cover rounded-md"
                />
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
                <p className="text-gray-500 text-sm mb-4">{event.date}</p>
                <p className="text-gray-700 mb-4">{event.description}</p>
                {event.images.length > 0 && (
                  <div className="flex space-x-2">
                    {event.images.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={`Event Image ${index + 1}`}
                        className="w-20 h-20 object-cover rounded-md"
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
      <button onClick={() => update()} className="bg-red-300 p-4">
        Update Data
      </button>
    </div>
  );
}

export default Highlights;
