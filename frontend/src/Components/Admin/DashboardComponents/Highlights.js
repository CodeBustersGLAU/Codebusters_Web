import React, { useState, useEffect, useRef } from "react";
import { useUserContext } from "./../../../context";
import { updateHighlights } from "../../../APIs/admin";
import LoadingAnimation from "./../../User/LoadingAnimation";
import axios from "axios";
import { 
  Edit, 
  Delete, 
  Save, 
  Add, 
  Cancel, 
  CloudUpload, 
  CheckCircle,
  Error,
  Image as ImageIcon, 
  Event, 
  CalendarToday, 
  Description 
} from "@mui/icons-material";
import { CircularProgress } from "@mui/material";

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
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState("");
  const fileInputRefs = useRef([]);

  useEffect(() => {
    if (club && club.highlights) {
      setEvents(club.highlights);
    }
  }, [club]);

  if (!club || !club.highlights) {
    return <LoadingAnimation />;
  }

  const handleCloudinaryUpload = async (file, index) => {
    try {
      setIsUploading(true);
      setUploadError("");
      const cloudinaryFormData = new FormData();
      cloudinaryFormData.append("file", file);
      cloudinaryFormData.append("upload_preset", "ml_default");
      
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dthriaot4/image/upload",
        cloudinaryFormData
      );
      
      const updatedImages = [...formData.images];
      updatedImages[index] = response.data.secure_url;
      setFormData(prev => ({
        ...prev,
        images: updatedImages
      }));
    } catch (err) {
      setUploadError("Failed to upload image");
      console.error(err);
    } finally {
      setIsUploading(false);
    }
  };

  const handleImageChange = (e, index) => {
    const file = e.target.files[0];
    if (file) {
      handleCloudinaryUpload(file, index);
    }
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setFormData(events[index]);
  };

  const handleDelete = (index) => {
    if (window.confirm("Are you sure you want to delete this highlight?")) {
      const updatedEvents = events.filter((_, i) => i !== index);
      setEvents(updatedEvents);
    }
  };

  const handleSave = () => {
    if (!formData.title || !formData.date || !formData.description) {
      alert("Please fill out all required fields.");
      return;
    }

    const updatedEvents = [...events];
    if (editIndex !== null) {
      updatedEvents[editIndex] = {
        ...formData,
        id: events[editIndex].id,
      };
    } else {
      updatedEvents.push({ ...formData, id: Date.now() });
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
    try {
      const res = await updateHighlights({
        name: user.name,
        password: user.password,
        highlights: events,
      });
      alert(res.message || "Highlights updated successfully!");
    } catch (error) {
      console.error("Failed to update highlights:", error);
      alert("Failed to update highlights.");
    }
  };

  return (
    <div className="p-4 md:p-8 min-h-[calc(100vh-100px)] bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center mb-8">
          <Event className="text-white mr-3" fontSize="large" />
          <h2 className="text-3xl font-bold text-white">
            Club Highlights Dashboard
          </h2>
        </div>

        {/* Highlight Form */}
        <div className="bg-gray-800 rounded-xl p-6 mb-8 shadow-lg">
          <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
            {editIndex !== null ? (
              <>
                <Edit className="mr-2" />
                Edit Highlight
              </>
            ) : (
              <>
                <Add className="mr-2" />
                Add New Highlight
              </>
            )}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-300 mb-2 flex items-center">
                <Event className="mr-2" fontSize="small" />
                Event Title
              </label>
              <input
                type="text"
                placeholder="Event Title"
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
                className="w-full p-3 border border-gray-600 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2 flex items-center">
                <CalendarToday className="mr-2" fontSize="small" />
                Start Date
              </label>
              <input
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({...formData, date: e.target.value})}
                className="w-full p-3 border border-gray-600 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2 flex items-center">
                <CalendarToday className="mr-2" fontSize="small" />
                End Date
              </label>
              <input
                type="date"
                value={formData.endDate}
                onChange={(e) => setFormData({...formData, endDate: e.target.value})}
                className="w-full p-3 border border-gray-600 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-gray-300 mb-2 flex items-center">
                <Description className="mr-2" fontSize="small" />
                Description
              </label>
              <textarea
                placeholder="Event Description"
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                className="w-full p-3 border border-gray-600 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                rows="4"
                required
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-gray-300 mb-2 flex items-center">
                <ImageIcon className="mr-2" fontSize="small" />
                Event Images (Max 10)
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {formData.images.map((image, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <input
                        type="file"
                        ref={el => fileInputRefs.current[index] = el}
                        onChange={(e) => handleImageChange(e, index)}
                        accept="image/*"
                        className="hidden"
                      />
                      <button
                        onClick={() => fileInputRefs.current[index].click()}
                        className="p-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition duration-200 flex items-center"
                      >
                        <CloudUpload className="mr-2" />
                        Image {index + 1}
                      </button>
                      {isUploading && <CircularProgress size={20} />}
                      {image && !isUploading && (
                        <CheckCircle className="text-green-500" fontSize="small" />
                      )}
                    </div>
                    {image && (
                      <div className="flex items-center space-x-2">
                        <img
                          src={image}
                          alt={`Preview ${index + 1}`}
                          className="h-12 w-12 rounded object-cover"
                        />
                        <input
                          type="text"
                          value={image}
                          onChange={(e) => {
                            const updatedImages = [...formData.images];
                            updatedImages[index] = e.target.value;
                            setFormData({...formData, images: updatedImages});
                          }}
                          className="flex-1 p-2 border border-gray-600 bg-gray-700 text-white rounded text-xs"
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
              {uploadError && (
                <p className="text-red-500 text-sm mt-2 flex items-center">
                  <Error className="mr-1" fontSize="small" />
                  {uploadError}
                </p>
              )}
            </div>
          </div>

          <div className="flex space-x-4 mt-6">
            <button
              onClick={handleSave}
              className="flex-1 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition duration-200 flex items-center justify-center"
            >
              <Save className="mr-2" />
              {editIndex !== null ? "Save Changes" : "Add Highlight"}
            </button>
            {editIndex !== null && (
              <button
                onClick={resetForm}
                className="flex-1 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition duration-200 flex items-center justify-center"
              >
                <Cancel className="mr-2" />
                Cancel
              </button>
            )}
          </div>
        </div>

        {/* Highlights List */}
        <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
            <Event className="mr-2" />
            Highlighted Events
          </h3>

          {events.length === 0 ? (
            <p className="text-gray-400 text-center py-6">No highlights added yet</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event, index) => (
                <div
                  key={event.id}
                  className="bg-gray-700 rounded-lg p-4 hover:bg-gray-600 transition duration-200"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-lg font-semibold text-white">
                      {event.title}
                    </h4>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleEdit(index)}
                        className="text-blue-400 hover:text-blue-300 p-1"
                        title="Edit"
                      >
                        <Edit fontSize="small" />
                      </button>
                      <button
                        onClick={() => handleDelete(index)}
                        className="text-red-400 hover:text-red-300 p-1"
                        title="Delete"
                      >
                        <Delete fontSize="small" />
                      </button>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-2">
                    {new Date(event.date).toLocaleDateString()} - {event.endDate && new Date(event.endDate).toLocaleDateString()}
                  </p>
                  
                  <p className="text-gray-300 mb-3 line-clamp-3">
                    {event.description}
                  </p>
                  
                  {event.images.filter(img => img).length > 0 && (
                    <div className="flex space-x-2 overflow-x-auto pb-2">
                      {event.images.filter(img => img).map((img, idx) => (
                        <img
                          key={idx}
                          src={img}
                          alt={`Event ${idx + 1}`}
                          className="h-16 w-16 rounded object-cover flex-shrink-0"
                        />
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {events.length > 0 && (
            <button
              onClick={update}
              className="mt-6 w-full py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition duration-200 flex items-center justify-center"
            >
              <Save className="mr-2" />
              Update Highlights
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Highlights;