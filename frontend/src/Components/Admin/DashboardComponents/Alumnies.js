import React, { useState, useEffect, useRef } from "react";
import { useUserContext } from "./../../../context";
import { updateAlumnies } from "../../../APIs/admin";
import LoadingAnimation from "./../../User/LoadingAnimation";
import axios from "axios";
import {
  Edit,
  Delete,
  Save,
  Add,
  CloudUpload,
  CheckCircle,
  Error,
  School,
  Person,
  Email,
  Work,
  Business,
  Description
} from "@mui/icons-material";
import { CircularProgress } from "@mui/material";

function Alumnies() {
  const { club, user } = useUserContext();
  const [alumnies, setAlumnies] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    graduationYear: "",
    email: "",
    about: "",
    profession: "",
    company: "",
    photo: "",
  });
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState("");
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (club && club.alumnies) {
      setAlumnies(club.alumnies);
    }
  }, [club]);

  if (!club || !club.alumnies) {
    return <LoadingAnimation />;
  }

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

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
      
      setFormData(prev => ({
        ...prev,
        photo: response.data.secure_url
      }));
    } catch (err) {
      setUploadError("Failed to upload image");
      console.error(err);
    } finally {
      setIsUploading(false);
    }
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setFormData(alumnies[index]);
  };

  const handleDelete = (index) => {
    if (window.confirm("Are you sure you want to delete this alumni?")) {
      const updatedAlumnies = alumnies.filter((_, i) => i !== index);
      setAlumnies(updatedAlumnies);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    if (!formData.name || !formData.email || !formData.graduationYear) {
      alert("Please fill in all required fields");
      return;
    }

    const updatedAlumnies = [...alumnies];
    if (editIndex !== null) {
      updatedAlumnies[editIndex] = formData;
    } else {
      updatedAlumnies.push({ ...formData, id: alumnies.length + 1 });
    }
    setAlumnies(updatedAlumnies);
    setEditIndex(null);
    setFormData({
      name: "",
      email: "",
      graduationYear: "",
      about: "",
      profession: "",
      company: "",
      photo: "",
    });
  };

  const cancelEdit = () => {
    setEditIndex(null);
    setFormData({
      name: "",
      email: "",
      graduationYear: "",
      about: "",
      profession: "",
      company: "",
      photo: "",
    });
  };

  const update = async () => {
    try {
      const res = await updateAlumnies({
        name: user.name,
        password: user.password,
        alumnies: alumnies,
      });
      alert(res.message || "Alumni data updated successfully!");
    } catch (error) {
      console.error("Failed to update alumni:", error);
      alert("Failed to update alumni data.");
    }
  };

  return (
    <div className="p-4 sm:p-8 min-h-[calc(100vh-100px)] bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div className="flex items-center mb-4 md:mb-0">
            <School className="text-white mr-3" fontSize="large" />
            <h2 className="text-3xl font-bold text-white">
              Alumni Management Dashboard
            </h2>
          </div>
          <button
            onClick={update}
            className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-bold py-2 px-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out flex items-center"
          >
            <Save className="mr-2" />
            Update Data
          </button>
        </div>

        {/* Add/Edit Form */}
        <div className="bg-gray-800 rounded-xl p-6 mb-8 shadow-lg">
          <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
            {editIndex !== null ? (
              <>
                <Edit className="mr-2" />
                Edit Alumni Details
              </>
            ) : (
              <>
                <Add className="mr-2" />
                Add New Alumni
              </>
            )}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="block text-gray-300 mb-2 flex items-center">
                  <Person className="mr-2" fontSize="small" />
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-600 bg-gray-700 text-white rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2 flex items-center">
                  <School className="mr-2" fontSize="small" />
                  Graduation Year
                </label>
                <input
                  type="number"
                  name="graduationYear"
                  placeholder="Graduation Year"
                  value={formData.graduationYear}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-600 bg-gray-700 text-white rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  required
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2 flex items-center">
                  <Email className="mr-2" fontSize="small" />
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-600 bg-gray-700 text-white rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-gray-300 mb-2 flex items-center">
                  <Work className="mr-2" fontSize="small" />
                  Profession
                </label>
                <input
                  type="text"
                  name="profession"
                  placeholder="Current Profession"
                  value={formData.profession}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-600 bg-gray-700 text-white rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2 flex items-center">
                  <Business className="mr-2" fontSize="small" />
                  Company
                </label>
                <input
                  type="text"
                  name="company"
                  placeholder="Current Company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-600 bg-gray-700 text-white rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>
              
              <div>
                <label className="block text-gray-300 mb-2 flex items-center">
                  <Description className="mr-2" fontSize="small" />
                  About
                </label>
                <textarea
                  name="about"
                  placeholder="Short Description"
                  value={formData.about}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-600 bg-gray-700 text-white rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  rows="3"
                />
              </div>
            </div>
          </div>
          
          <div className="mt-6">
            <label className="block text-gray-300 mb-2">Profile Photo</label>
            <div className="flex items-center space-x-4">
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageUpload}
                accept="image/*"
                className="hidden"
              />
              <button
                onClick={() => fileInputRef.current.click()}
                className="p-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition duration-200 flex items-center"
              >
                <CloudUpload className="mr-2" />
                {formData.photo ? "Change Photo" : "Upload Photo"}
              </button>
              {isUploading && <CircularProgress size={24} />}
              {formData.photo && !isUploading && (
                <CheckCircle className="text-green-500" />
              )}
              {uploadError && <Error className="text-red-500" />}
              {formData.photo && (
                <img
                  src={formData.photo}
                  alt="Preview"
                  className="h-12 w-12 rounded-full object-cover"
                />
              )}
            </div>
          </div>
          
          <div className="flex space-x-4 mt-6">
            <button
              onClick={handleSave}
              className="flex-1 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition duration-200 flex items-center justify-center"
            >
              <Save className="mr-2" />
              {editIndex !== null ? "Save Changes" : "Add Alumni"}
            </button>
            {editIndex !== null && (
              <button
                onClick={cancelEdit}
                className="flex-1 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-md transition duration-200 flex items-center justify-center"
              >
                <Delete className="mr-2" />
                Cancel
              </button>
            )}
          </div>
        </div>

        {/* Alumni Table */}
        <div className="bg-gray-800 rounded-xl p-6 shadow-lg overflow-x-auto">
          <h3 className="text-xl font-semibold text-white mb-4">Alumni Records</h3>
          {alumnies.length === 0 ? (
            <p className="text-gray-400 text-center py-6">No alumni records found</p>
          ) : (
            <table className="w-full text-left border-collapse">
              <thead className="bg-gray-700">
                <tr>
                  <th className="p-3 text-sm font-semibold text-gray-300">Photo</th>
                  <th className="p-3 text-sm font-semibold text-gray-300">Name</th>
                  <th className="p-3 text-sm font-semibold text-gray-300">Year</th>
                  <th className="p-3 text-sm font-semibold text-gray-300">Profession</th>
                  <th className="p-3 text-sm font-semibold text-gray-300">Actions</th>
                </tr>
              </thead>
              <tbody>
                {alumnies.map((alumni, index) => (
                  <tr
                    key={index}
                    className="border-t border-gray-700 hover:bg-gray-700 transition duration-200"
                  >
                    <td className="p-3">
                      <img
                        src={alumni.photo || "https://via.placeholder.com/150"}
                        alt={alumni.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                    </td>
                    <td className="p-3 text-white">
                      <div className="font-medium">{alumni.name}</div>
                      <div className="text-gray-400 text-sm">{alumni.email}</div>
                    </td>
                    <td className="p-3 text-white">{alumni.graduationYear}</td>
                    <td className="p-3 text-white">
                      <div>{alumni.profession}</div>
                      <div className="text-gray-400 text-sm">{alumni.company}</div>
                    </td>
                    <td className="p-3">
                      <div className="flex space-x-3">
                        <button
                          onClick={() => handleEdit(index)}
                          className="text-blue-400 hover:text-blue-300"
                          title="Edit"
                        >
                          <Edit fontSize="small" />
                        </button>
                        <button
                          onClick={() => handleDelete(index)}
                          className="text-red-400 hover:text-red-300"
                          title="Delete"
                        >
                          <Delete fontSize="small" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

export default Alumnies;