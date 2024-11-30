import React, { useState } from "react";

function Alumnies() {
  const [alumnies, setAlumnies] = useState([
    {
      id: 1,
      name: "John Doe",
      year: 2020,
      email: "john.doe@example.com",
      about: "A passionate coder and leader who co-founded Codebusters Club.",
      profession: "Software Engineer",
      company: "TechCorp",
      photo: "https://via.placeholder.com/100",
    },
    {
      id: 2,
      name: "Jane Smith",
      year: 2019,
      email: "jane.smith@example.com",
      about: "Expert in AI and data modeling, currently innovating at DataWorks.",
      profession: "Data Scientist",
      company: "DataWorks",
      photo: "https://via.placeholder.com/100",
    },
  ]);

  const [editIndex, setEditIndex] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    year: "",
    email: "",
    about: "",
    profession: "",
    company: "",
    photo: "",
  });

  const handleEdit = (index) => {
    setEditIndex(index);
    setFormData(alumnies[index]);
  };

  const handleDelete = (index) => {
    setAlumnies(alumnies.filter((_, i) => i !== index));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
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
      year: "",
      email: "",
      about: "",
      profession: "",
      company: "",
      photo: "",
    });
  };

  return (
    <div className="p-4 sm:p-8 lg:p-10 pl-10 pr-10 min-h-[calc(100vh-100px)] bg-slate-800 bg-opacity-50">
      <h2 className="text-3xl font-bold text-white mb-6 text-center">Alumni Management Dashboard</h2>
      <div className="bg-slate-300 shadow-lg rounded-lg p-6 mt-10">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
          {editIndex !== null ? "Edit Alumni Details" : "Add New Alumni"}
        </h3>
        <form className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm"
            required
          />
          <input
            type="number"
            name="year"
            placeholder="Graduation Year"
            value={formData.year}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm"
            required
          />
          <textarea
            name="about"
            placeholder="Short Description"
            value={formData.about}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm"
            required
          />
          <input
            type="text"
            name="profession"
            placeholder="Profession"
            value={formData.profession}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm"
            required
          />
          <input
            type="text"
            name="company"
            placeholder="Company"
            value={formData.company}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm"
            required
          />
          <input
            type="text"
            name="photo"
            placeholder="Photo URL"
            value={formData.photo}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm"
            required
          />
          <button
            type="button"
            onClick={handleSave}
            className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            {editIndex !== null ? "Save Changes" : "Add Alumni"}
          </button>
        </form>
      </div>

      <div className="overflow-x-auto bg-white shadow-lg rounded-lg mt-8">
        <table className="w-full text-left table-auto border-collapse">
          <thead className="bg-gray-300">
            <tr>
              <th className="border-b p-3 text-sm font-semibold text-gray-800">Photo</th>
              <th className="border-b p-3 text-sm font-semibold text-gray-800">Name</th>
              <th className="border-b p-3 text-sm font-semibold text-gray-800">Year</th>
              <th className="border-b p-3 text-sm font-semibold text-gray-800">Email</th>
              <th className="border-b p-3 text-sm font-semibold text-gray-800">About</th>
              <th className="border-b p-3 text-sm font-semibold text-gray-800">Profession</th>
              <th className="border-b p-3 text-sm font-semibold text-gray-800">Company</th>
              <th className="border-b p-3 text-sm font-semibold text-gray-800">Actions</th>
            </tr>
          </thead>
          <tbody>
            {alumnies.map((alumni, index) => (
              <tr key={alumni.id} className="hover:bg-gray-50 transition duration-300">
                <td className="border-b p-3">
                  <img
                    src={alumni.photo}
                    alt={alumni.name}
                    className="w-12 h-12 rounded-full mx-auto"
                  />
                </td>
                <td className="border-b p-3 text-sm">{alumni.name}</td>
                <td className="border-b p-3 text-sm">{alumni.year}</td>
                <td className="border-b p-3 text-sm">{alumni.email}</td>
                <td className="border-b p-3 text-sm">{alumni.about}</td>
                <td className="border-b p-3 text-sm">{alumni.profession}</td>
                <td className="border-b p-3 text-sm">{alumni.company}</td>
                <td className="border-b p-3 text-sm flex space-x-3">
                  <button
                    className="text-blue-500 hover:text-blue-700"
                    onClick={() => handleEdit(index)}
                  >
                    Edit
                  </button>
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Alumnies;
